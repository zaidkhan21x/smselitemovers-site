import * as nodemailerNs from 'nodemailer';
import { SITE } from '@/lib/site';

/* Works whether the installed nodemailer ships CommonJS (its default
   for 9.x) or an ES module with a default export (10.x and later). */
const nodemailer = nodemailerNs.default ?? nodemailerNs;

/* =========================================================
   Lead endpoint.

   Takes the contact form, emails it to dispatch and keeps the
   consent record (checkbox state, the exact disclosure text the
   visitor saw, timestamp, page URL, IP and user agent) in the
   body of that email, so there is a dated record of what was
   agreed to.

   Credentials come from environment variables, never from the
   repository. Set on Hostinger under the website's Node.js >
   Environment variables:
     SMTP_HOST   smtp.hostinger.com
     SMTP_PORT   465
     SMTP_USER   the mailbox that sends (contact@smselitemover.com)
     SMTP_PASS   that mailbox's password
     LEAD_TO     where leads are delivered (defaults to SMTP_USER)
   ========================================================= */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EQUIPMENT = {
  hotshot: 'Hotshot',
  'car-hauler': 'Car hauler',
  flatbed: 'Flatbed',
  box: 'Box truck',
};

/* Simple per-IP throttle. The site runs as a single Node process, so an
   in-memory map is enough to blunt casual flooding; it is not a shared
   rate limiter and it resets when the app restarts. */
const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function tooMany(ip) {
  const now = Date.now();
  const seen = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  seen.push(now);
  hits.set(ip, seen);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  }
  return seen.length > MAX_PER_WINDOW;
}

const clean = (v, max = 300) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (tooMany(ip)) {
    return Response.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Spam trap: a bot fills every field it finds.
  if (clean(form.get('company'))) {
    return Response.json({ ok: true });
  }

  const name = clean(form.get('name'), 120);
  const phone = clean(form.get('phone'), 40);
  const email = clean(form.get('email'), 160);
  const mc = clean(form.get('mc'), 40);
  const equipKey = clean(form.get('equipment'), 40);
  const equipment = EQUIPMENT[equipKey] || equipKey || 'Not given';
  const consent = clean(form.get('consent'), 10) === 'yes';
  const consentText = clean(form.get('consentText'), 2000);
  const pageUrl = clean(form.get('pageUrl'), 500);

  if (name.length < 2 || phone.replace(/\D/g, '').length < 10 || !isEmail(email)) {
    return Response.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('[lead] SMTP is not configured; lead not delivered', { name, phone, email });
    return Response.json({ ok: false, error: 'not_configured' }, { status: 500 });
  }

  const received = new Date();
  const lines = [
    `Name:       ${name}`,
    `Phone:      ${phone}`,
    `Email:      ${email}`,
    `Equipment:  ${equipment}`,
    `MC number:  ${mc || 'Not given'}`,
    '',
    '--- Consent record ---',
    `Marketing consent checkbox: ${consent ? 'TICKED' : 'not ticked'}`,
    `Received (UTC):             ${received.toISOString()}`,
    `Page:                       ${pageUrl || 'unknown'}`,
    `IP address:                 ${ip}`,
    `User agent:                 ${clean(request.headers.get('user-agent'), 300) || 'unknown'}`,
    '',
    'Disclosure text shown on the page at the time of submission:',
    consentText || '(not captured)',
  ];

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: (Number(SMTP_PORT) || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      // The envelope sender must be the authenticated mailbox or the mail
      // server rejects it, so the driver's address goes in Reply-To.
      from: `"${SITE.brand} website" <${SMTP_USER}>`,
      to: LEAD_TO || SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New dispatch lead: ${name} — ${equipment}`,
      text: lines.join('\n'),
    });
  } catch (err) {
    // Write the whole lead to the application log, so a mail outage
    // costs a slower follow-up rather than the enquiry itself.
    console.error(`[lead] send failed: ${err?.message || err}\n${lines.join('\n')}`);
    return Response.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  return Response.json({ ok: true });
}

/* Anything other than POST. */
export function GET() {
  return Response.json({ ok: false, error: 'method_not_allowed' }, { status: 405 });
}
