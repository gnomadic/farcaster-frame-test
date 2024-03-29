import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mint Eligibility Checker',
  description: 'MINT',
  openGraph: {
    title: 'mintit.gg',
    description: 'MINT',
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