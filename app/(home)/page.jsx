import { HomePage } from '@/components/home/HomePage';
import { homeMetadata, homeViewport } from '@/lib/home-metadata';

export const metadata = homeMetadata;
export const viewport = homeViewport;

export default function Page() {
  return <HomePage />;
}
