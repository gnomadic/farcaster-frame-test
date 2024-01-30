import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boost Eligibility Checker',
  description: 'BOOST',
  openGraph: {
    title: 'rabbithole.gg',
    description: 'BOOST',
    images: ['https://farcaster-frame-test-74o6.vercel.app/mint.png'],
  },
  other: {
    ...getFrameMetadata({
        buttons: ['Check Eligibility'],
        image: 'https://farcaster-frame-test-74o6.vercel.app/mint.png',
        post_url: 'https://farcaster-frame-test-74o6.vercel.app/frame',
        
    }),
  },
};


export default function Page() {
  return (
    <>
      <h1>Hello Frameworld</h1>
    </>
  );
}