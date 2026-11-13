import { SITE } from '@/lib/site';
import { displayFont, bodyFont } from '@/lib/fonts';

export const metadata = {
  metadataBase: new URL(SITE.url),
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
