import Image from 'next/image';
import React from 'react';

const clients = [
  {
    name: 'Spotify',
    description: 'Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.',
    logoSrc: '/images/image2.png', // Update with correct logo path
  },
  {
    name: 'Column Tax',
    description: 'Column tax utilizes a custom tax engine to re-imagine and democratize the average tax experience for everyday Americans.',
    logoSrc: '/images/image5.png', // Update with correct logo path
  },
  {
    name: 'Fortmatic',
    description: 'Fortmatic is an integrable, customizable, encrypted crypto wallet that allows users to obtain tokens and use decentralized apps from their Ethereum address.',
    logoSrc: '/images/image8.png', // Update with correct logo path
  },
  {
    name: 'Prehab',
    description: '[P]rehab is a state-of-the-art physical therapy mobile app, dedicated to helping you take control of your health with exercise & education from the palm of your hand.',
    logoSrc: '/images/image10.png', // Update with correct logo path
  },
  {
    name: 'Summit Interconnect',
    description: 'Summit Interconnect is the leading manufacturer of advanced technology printed circuit boards.',
    logoSrc: '/images/image11.png', // Update with correct logo path
  },
  {
    name: 'Cannify',
    description: 'Cannify provides unique wholesale products to the cannabis market. Cannify acts as a one-stop shop that filters out any unnecessary products.',
    logoSrc: '/images/image6.png', // Update with correct logo path
  },
  {
    name: 'Copy.ai',
    description: 'Powered by AI, Copy.ai uses innovative technology to revolutionize content generation and deliver premium writing in seconds.',
    logoSrc: '/images/image4.png', // Update with correct logo path
  },
  {
    name: 'DoNotPay',
    description: 'DoNotPay is the world’s first robot lawyer committed to making the law free for consumers through artificial intelligence.',
    logoSrc: '/images/image1.png', // Update with correct logo path
  },
  {
    name: 'Karat',
    description: 'Karat is the card designed for content creators. Karat provides creators with access to credit-building opportunities and brand-building tools.',
    logoSrc: '/images/image9.png', // Update with correct logo path
  },
  {
    name: 'NFT.com',
    description: 'NFT.com is a community-driven platform enabling creators to interact with their fans by issuing, trading, and displaying NFTs through a Web3 social network.',
    logoSrc: '/images/image7.png', // Update with correct logo path
  },
];

const ClientSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Our clients both small and large</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {clients.map((client, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div>
              <Image src={client.logoSrc} alt={client.name} className="w-20 h-12 object-contain" width={100} height={100} />
                <h3 className="text-xl font-semibold text-white">{client.name}</h3>
                <p className="text-gray-400">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
