'use client';

/* =========================================================
   Homepage behaviour: header, menu, equipment selector and
   truck swap, offer demo, service tabs, onboarding scroll
   road, ?type= fallback, the lead form and measurement.

   The page markup is rendered on the server; this component
   renders nothing and wires up the same behaviour the Phase 2
   page script had. It only changes text with textContent and
   builds nodes with createElement / cloneNode, never innerHTML.
   ========================================================= */

import { useEffect } from 'react';
import { TYPES, ORDER, typeFromQuery, shadowScale } from '@/lib/hero-types';
import { ADS_ID, ADS_CONVERSIONS } from '@/lib/analytics';

export default function HomeController({ initialType, hasVariant }) {
  useEffect(() => {
    const ac = new AbortController();
    const on = (target, type, fn, opts) => target.addEventListener(type, fn, { ...opts, signal: ac.signal });
    const timers = new Set();
    const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
    const cancel = (id) => { clearTimeout(id); timers.delete(id); };
    const observers = [];

    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    /* ---------- Header ---------- */
    const header = $('#siteHeader');
    const callbar = $('#callbar');
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 30);
      callbar.classList.toggle('is-visible', y > 500 || window.innerWidth <= 700);
    };
    on(window, 'scroll', onScroll, { passive: true });
    onScroll();

    const menuBtn = $('.menu-btn');
    const setMenu = (open) => {
      header.classList.toggle('menu-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    on(menuBtn, 'click', () => setMenu(!header.classList.contains('menu-open')));
    $$('#mobileMenu a').forEach((a) => on(a, 'click', () => setMenu(false)));
    on(document, 'keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

    /* ---------- Keep the looping scene animations off the main thread ----------
       React listens for animation events on the page. While any listener exists,
       the browser must run every looping CSS animation on the main thread so it
       can fire animationiteration events, ~35 style + layout passes a second,
       even with nothing moving on screen. Phase 2 had no such listeners.
       So the looping CSS animations in the hero and the two animated cards are
       handed over to identical Web Animations (same keyframes, timing and
       position), which fire no CSS events and stay on the compositor. They are
       still paused off-screen (below) and never created under reduced motion. */
    const promoted = new Map(); // element -> Animation
    const canPromote = !reduceMotion && typeof window.CSSAnimation === 'function' && typeof Element.prototype.animate === 'function';
    function promote(root) {
      if (!canPromote || !root) return;
      root.getAnimations({ subtree: true }).forEach((css) => {
        if (!(css instanceof window.CSSAnimation) || !css.effect) return;
        const timing = css.effect.getTiming();
        if (timing.iterations !== Infinity) return;
        const el = css.effect.target;
        if (!el || promoted.has(el)) return;
        try {
          const copy = el.animate(css.effect.getKeyframes(), {
            duration: timing.duration, delay: timing.delay, easing: timing.easing,
            direction: timing.direction, fill: timing.fill, iterations: Infinity,
          });
          copy.currentTime = css.currentTime;
          if (css.playState === 'paused') copy.pause();
          el.style.animation = 'none'; // ends the CSS animation; the copy carries on from the same point
          promoted.set(el, copy);
        } catch { /* leave the CSS animation running */ }
      });
    }
    const setPlaying = (root, playing) => promoted.forEach((a, el) => {
      if (!root.contains(el)) return;
      if (playing && a.playState === 'paused') a.play();
      if (!playing && a.playState === 'running') a.pause();
    });
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    on(motionQuery, 'change', () => {
      if (!motionQuery.matches) return;
      promoted.forEach((a, el) => { a.cancel(); el.style.removeProperty('animation'); }); // CSS reduced-motion rules take over
      promoted.clear();
    });

    /* ---------- Trucks ---------- */
    // Every type is already drawn in the selector icons; clone from there.
    const cloneTruck = (type) => {
      const t = $(`[data-icon="${type}"] .truck`).cloneNode(true);
      t.classList.remove('is-still');
      return t;
    };

    const stage = $('#truckStage');
    const shadow = $('#truckShadow');
    const heroPanel = $('#heroPanel');
    let currentTruck = stage.querySelector('.truck');
    let currentType = initialType;
    const heroVisible = () => { const r = heroPanel.getBoundingClientRect(); return r.bottom > 0 && r.top < window.innerHeight; };

    function showHeroTruck(type, instant, initial) {
      if (type === currentType) return;
      currentType = type;
      const next = cloneTruck(type);
      shadow.style.transform = `scaleX(${shadowScale(TYPES[type].shadow)})`;
      const old = currentTruck;
      currentTruck = next;
      if (initial) {
        // ?type= fallback before any interaction: replace and drive in like on load.
        if (old) old.remove();
        next.classList.add('is-arriving');
        stage.appendChild(next);
        promote(next);
        return;
      }
      stage.appendChild(next);
      promote(next);
      if (instant || reduceMotion) {
        if (old) {
          if (reduceMotion && !instant) {
            next.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 250, easing: 'ease' });
            old.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, easing: 'ease', fill: 'forwards' }).finished.then(() => old.remove()).catch(() => {});
          } else old.remove();
        }
        return;
      }
      if (old) {
        const from = getComputedStyle(old).transform;
        old.getAnimations().forEach((a) => { if (a.effect && a.effect.target === old) a.cancel(); });
        old.classList.remove('is-arriving');
        old.animate([{ transform: from === 'none' ? 'translateX(0)' : from }, { transform: 'translateX(120vw)' }],
          { duration: 820, easing: 'cubic-bezier(.55,0,.8,.3)', fill: 'forwards' }).finished.then(() => old.remove()).catch(() => {});
      }
      next.animate([{ transform: 'translateX(-135vw)' }, { transform: 'translateX(0)' }],
        { duration: 1500, delay: old ? 220 : 120, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'backwards' });
    }

    /* hero copy + info card */
    const tiSwap = $('#tiSwap'), tiName = $('#tiName'), tiSpec = $('#tiSpec'), tiLoads = $('#tiLoads'), tiCta = $('#tiCta'), dockInfo = $('#dockInfo');
    const heroTitle = $('#heroTitle'), heroLede = $('#heroLede');
    const heroEyebrow = $('#heroEyebrow'), heroTrust = $('#heroTrust'), heroCta = $('#heroCta');
    let swapTimer;
    function setHeroCopy(copy) {
      const nodes = [];
      copy.h1.forEach((line, i) => { if (i) nodes.push(document.createElement('br')); nodes.push(document.createTextNode(line)); });
      heroTitle.replaceChildren(...nodes);
      heroLede.textContent = copy.lede;
      if (heroEyebrow) heroEyebrow.textContent = copy.eyebrow;
      if (heroCta && copy.cta) heroCta.textContent = copy.cta;
      if (heroTrust && copy.trust) {
        heroTrust.replaceChildren(...copy.trust.map((t) => {
          const li = document.createElement('li');
          li.textContent = t;
          return li;
        }));
      }
    }
    function updateInfo(type, instant, keepDefault) {
      const d = TYPES[type];
      tiCta.textContent = d.cta; tiCta.dataset.pick = type;
      dockInfo.textContent = d.spec;
      const apply = () => {
        tiName.textContent = d.name; tiSpec.textContent = d.spec; tiLoads.textContent = d.loads;
        if (!keepDefault) setHeroCopy(d);
      };
      const swaps = keepDefault ? [tiSwap] : [tiSwap, heroTitle, heroLede, heroEyebrow, heroTrust].filter(Boolean);
      if (instant || reduceMotion) { apply(); return; }
      swaps.forEach((el) => el.classList.add('is-swapping'));
      cancel(swapTimer);
      swapTimer = later(() => { apply(); swaps.forEach((el) => el.classList.remove('is-swapping')); }, 200);
    }

    /* onboarding truck */
    const obTruck = $('#obTruck');
    function setObTruck(type) {
      const t = cloneTruck(type);
      const beam = t.querySelector('.beam');
      if (beam) beam.remove();
      obTruck.replaceChildren(t);
      updateOb();
    }

    const pill = $('#selPill');
    /* The lead form offers "Car hauler" as its own choice; it is dispatched
       through the hotshot desk, so it drives the hotshot hero and truck
       while the driver's own answer stays selected in the form. */
    const heroTypeOf = (value) => (ORDER.includes(value) ? value : value === 'car-hauler' ? 'hotshot' : null);
    function select(type, opts = {}) {
      if (!ORDER.includes(type)) return;
      $(`#he-${type}`).checked = true;
      if (opts.syncForm !== false) { const r = $(`#fe-${type}`); if (r) r.checked = true; }
      pill.style.transform = `translateX(${ORDER.indexOf(type) * 100}%)`;
      showHeroTruck(type, opts.instant || (!opts.initial && !heroVisible()), opts.initial);
      updateInfo(type, opts.initial, opts.keepDefault);
      setObTruck(type);
    }
    $$('input[name="heroEquip"]').forEach((r) => on(r, 'change', () => select(r.value)));
    $$('input[name="equipment"]').forEach((r) => on(r, 'change', () => {
      const t = heroTypeOf(r.value);
      if (t) select(t, { syncForm: false });
    }));
    on(document, 'click', (e) => { const a = e.target.closest('[data-pick]'); if (a) select(a.dataset.pick); });

    /* ---------- Measurement ----------
       Every call link on the site carries data-call, so one listener
       covers the header, hero, equipment cards, contact card, footer
       and the sticky mobile bar. */
    on(document, 'click', (e) => {
      if (e.target.closest('[data-call]')) {
        track('contact', { method: 'phone' }, ADS_CONVERSIONS.call);
      }
    });

    /* mobile: road scene ends right under the equipment selector */
    const spacer = $('.scene-spacer');
    const setSceneH = () => heroPanel.style.setProperty('--scene-h', `${spacer.offsetTop + spacer.offsetHeight}px`);
    setSceneH();
    if ('ResizeObserver' in window) { const ro = new ResizeObserver(setSceneH); ro.observe(heroPanel); observers.push(ro); }
    else on(window, 'resize', setSceneH);

    /* pause decorative motion while it is off-screen */
    const animatedAreas = [heroPanel, $('#prebookCard'), $('.c-dedicated')];
    animatedAreas.forEach(promote);
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => entries.forEach((en) => {
        en.target.classList.toggle('is-offscreen', !en.isIntersecting);
        setPlaying(en.target, en.isIntersecting);
      }), { rootMargin: '50px' });
      animatedAreas.forEach((el) => io.observe(el));
      observers.push(io);
    }

    /* ---------- Offer demo (illustration) ---------- */
    const OFFERS = [
      { eq: 'Flatbed', from: 'Birmingham, AL', to: 'Charlotte, NC', rate: 1250, miles: 390 },
      { eq: 'Hotshot', from: 'Odessa, TX', to: 'Oklahoma City, OK', rate: 1180, miles: 420 },
      { eq: 'Box Truck', from: 'Columbus, OH', to: 'Indianapolis, IN', rate: 640, miles: 175 },
      { eq: 'Flatbed', from: 'Savannah, GA', to: 'Knoxville, TN', rate: 1420, miles: 450 },
    ];
    let oi = 0, busy = false, raf1 = 0, raf2 = 0;
    const offerBox = $('#offerBox'), offerNote = $('#offerNote');
    const fmt = (n) => `$${n.toLocaleString('en-US')}`;
    function renderOffer(o) {
      $('#ofEq').textContent = o.eq; $('#ofFrom').textContent = o.from; $('#ofTo').textContent = o.to;
      $('#ofRate').textContent = fmt(o.rate); $('#ofMiles').textContent = `${o.miles} mi`;
      $('#ofRpm').textContent = `$${(o.rate / o.miles).toFixed(2)}`;
    }
    $$('[data-offer]').forEach((b) => on(b, 'click', () => {
      if (busy) return; busy = true;
      const took = b.dataset.offer === 'take';
      offerNote.textContent = took ? 'Booked. For real loads, the rate con comes to you before you roll.' : 'Passed. No penalty, no pushback. Here is the next one.';
      const swap = () => { oi = (oi + 1) % OFFERS.length; renderOffer(OFFERS[oi]); };
      if (reduceMotion) { swap(); busy = false; return; }
      offerBox.classList.add('is-out');
      later(() => {
        swap();
        offerBox.classList.remove('is-out'); offerBox.classList.add('is-in');
        raf1 = requestAnimationFrame(() => { raf2 = requestAnimationFrame(() => { offerBox.classList.remove('is-in'); busy = false; }); });
      }, 200);
    }));

    /* ---------- Services tabs ---------- */
    const tabs = $$('.svc-tab');
    function activate(tab, focus) {
      tabs.forEach((t) => {
        const isOn = t === tab;
        t.setAttribute('aria-selected', String(isOn));
        t.tabIndex = isOn ? 0 : -1;
        const p = document.getElementById(t.getAttribute('aria-controls'));
        if (isOn) {
          if (p.hidden) { p.hidden = false; p.classList.remove('is-entering'); void p.offsetWidth; if (!reduceMotion) p.classList.add('is-entering'); }
        } else p.hidden = true;
      });
      if (focus) tab.focus();
      if (window.innerWidth <= 900) tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
    }
    tabs.forEach((t, i) => {
      on(t, 'click', () => activate(t));
      on(t, 'keydown', (e) => {
        let n = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); activate(n, true); }
      });
    });

    /* ---------- Onboarding scroll road ---------- */
    const obRoad = $('#obRoad');
    const markers = $$('.ob-marker');
    const steps = $$('.ob-step');
    let moveTimer, ticking = false, rafOb = 0;
    function updateOb() {
      const r = obRoad.getBoundingClientRect();
      const vh = window.innerHeight;
      let p = (vh - r.top) / (vh * 0.78);
      p = Math.max(0, Math.min(1, p));
      const tw = obTruck.offsetWidth || 120;
      const x = -tw * 0.2 + p * (r.width - tw * 0.8);
      obTruck.style.transform = `translateX(${x.toFixed(1)}px)`;
      const nose = x + tw;
      markers.forEach((m, i) => {
        const mr = m.getBoundingClientRect();
        const passed = nose >= (mr.left - r.left + mr.width / 2);
        m.classList.toggle('is-passed', passed);
        if (steps[i]) steps[i].classList.toggle('is-passed', passed);
      });
    }
    on(window, 'scroll', () => {
      if (!ticking) { ticking = true; rafOb = requestAnimationFrame(() => { updateOb(); ticking = false; }); }
      obTruck.classList.add('is-moving');
      cancel(moveTimer); moveTimer = later(() => obTruck.classList.remove('is-moving'), 140);
    }, { passive: true });
    on(window, 'resize', updateOb);

    /* ---------- ?type= (hotshot | flatbed | box-truck) ----------
       The server already sends the matching page for these values.
       This only covers anything the server did not match. */
    let fromQuery = null;
    try { fromQuery = typeFromQuery(new URLSearchParams(window.location.search).get('type')); } catch { /* ignore */ }
    if (fromQuery && (!hasVariant || fromQuery !== initialType)) {
      select(fromQuery, { initial: true, keepDefault: false });
    }
    updateOb();

    /* Sends one GA4 event and, once the Google Ads ids are filled in
       (lib/analytics.js), the matching Google Ads conversion. Safe to
       call before gtag has loaded: the calls queue on dataLayer and
       run when it does. Never throws, so a blocked tag or an ad
       blocker can't break the form or the call buttons. */
    function track(eventName, params, conversion) {
      try {
        if (typeof window.gtag !== 'function') return;
        window.gtag('event', eventName, params);
        if (ADS_ID && conversion?.label) {
          const payload = { send_to: `${ADS_ID}/${conversion.label}` };
          // Only sent where the conversion action takes its value from
          // the event; otherwise Google uses the value set on the action.
          if (typeof conversion.value === 'number') {
            payload.value = conversion.value;
            payload.currency = conversion.currency || 'USD';
          }
          window.gtag('event', 'conversion', payload);
        }
      } catch {
        /* measurement must never break the page */
      }
    }

    /* ---------- Lead form ---------- */
    /* One "@" with something before it, and a dotted domain after it.
       Deliberately permissive: the server checks too, and the real
       test is whether a dispatcher can reach the driver. */
    const looksLikeEmail = (value) => {
      const v = String(value || '').trim();
      if (!v || v.split(/\s/).length > 1) return false;
      const at = v.indexOf('@');
      if (at < 1 || at !== v.lastIndexOf('@')) return false;
      const domain = v.slice(at + 1);
      const dot = domain.lastIndexOf('.');
      return dot > 0 && domain.length - dot > 2;
    };

    const form = $('#leadForm');
    const rules = {
      name: (v) => v.trim().length >= 2 || 'Enter your full name.',
      phone: (v) => v.replace(/\D/g, '').length >= 10 || 'Enter a 10-digit phone number with area code.',
      email: (v) => looksLikeEmail(v) || 'Enter an email address we can reach you at.',
    };
    function check(name) {
      const input = form.elements[name];
      const res = rules[name](input.value);
      const field = input.closest('.field');
      const err = $(`#e-${name}`);
      if (res === true) { field.classList.remove('has-error'); err.textContent = ''; input.removeAttribute('aria-invalid'); input.removeAttribute('aria-describedby'); return true; }
      field.classList.add('has-error'); err.textContent = res; input.setAttribute('aria-invalid', 'true'); input.setAttribute('aria-describedby', `e-${name}`); return false;
    }
    Object.keys(rules).forEach((n) => on(form.elements[n], 'blur', () => { if (form.elements[n].value) check(n); }));
    Object.keys(rules).forEach((n) => on(form.elements[n], 'input', () => { if (form.elements[n].closest('.field').classList.contains('has-error')) check(n); }));
    const submitBtn = $('#leadSubmit');
    const formErr = $('#e-form');
    /* The exact consent wording shown to this visitor, stored with the lead
       so the consent record matches what was on screen. */
    const consentText = () => ($('.consent span', form)?.textContent || '').replace(/\s+/g, ' ').trim();
    let sending = false;

    on(form, 'submit', async (e) => {
      e.preventDefault();
      if (sending) return;
      formErr.textContent = '';
      let firstBad = null;
      Object.keys(rules).forEach((n) => { if (!check(n) && !firstBad) firstBad = form.elements[n]; });
      if (firstBad) { firstBad.focus(); return; }

      const body = new FormData(form);
      body.set('consent', form.elements.consent.checked ? 'yes' : 'no');
      body.set('consentText', consentText());
      body.set('pageUrl', window.location.href);

      sending = true;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      try {
        const res = await fetch('/api/lead', { method: 'POST', body });
        if (!res.ok) throw new Error(`status ${res.status}`);
        // Only counted once the lead has actually been delivered, so a
        // failed send is never reported to Google Ads as a lead.
        track('generate_lead', { equipment: body.get('equipment') || 'unknown' }, ADS_CONVERSIONS.lead);
        const first = form.elements.name.value.trim().split(/\s+/)[0];
        $('#doneTitle').textContent = `Thanks, ${first}`;
        form.classList.add('is-done');
        const done = $('.form-done', form);
        done.setAttribute('tabindex', '-1');
        done.focus();
      } catch {
        formErr.textContent = 'That didn’t send. Please try again, or call us and we’ll take your details over the phone.';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get dispatched';
        sending = false;
      }
    });

    return () => {
      ac.abort();
      timers.forEach((id) => clearTimeout(id));
      cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); cancelAnimationFrame(rafOb);
      observers.forEach((o) => o.disconnect());
      promoted.forEach((a, el) => { a.cancel(); el.style.removeProperty('animation'); });
    };
  }, [initialType, hasVariant]);

  return null;
}
