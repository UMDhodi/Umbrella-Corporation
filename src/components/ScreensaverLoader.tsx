'use client';

import dynamic from 'next/dynamic';

const UmbrellaScreensaver = dynamic(
  () => import('@/components/UmbrellaScreensaver'),
  { ssr: false }
);

export default function ScreensaverLoader() {
  return <UmbrellaScreensaver />;
}
