/* Self-hosted fonts. next/font downloads Barlow and Barlow Condensed
   from Google Fonts once, at build time, and serves them from this
   site. Visitors' browsers never contact Google. */
import { Barlow, Barlow_Condensed } from 'next/font/google';

export const displayFont = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
});

export const bodyFont = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});
