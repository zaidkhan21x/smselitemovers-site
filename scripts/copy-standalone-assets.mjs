// Runs after `next build`. Next.js writes a self-contained server to
// .next/standalone, but by design it does not copy the public/ folder
// or .next/static into it. This copies them so `npm start`
// (node .next/standalone/server.js) serves CSS, JS, fonts and images.
// Uses only Node's built-in fs module. Does nothing if there is no
// standalone build.
import { cpSync, existsSync } from 'node:fs';

const standalone = '.next/standalone';
if (!existsSync(standalone)) {
  console.log('[copy-standalone-assets] no .next/standalone folder, skipping');
} else {
  if (existsSync('public')) cpSync('public', `${standalone}/public`, { recursive: true });
  if (existsSync('.next/static')) cpSync('.next/static', `${standalone}/.next/static`, { recursive: true });
  console.log('[copy-standalone-assets] copied public/ and .next/static into .next/standalone');
}
