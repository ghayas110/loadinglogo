import Image from 'next/image';
import React from 'react';

const brands = [
  { name: 'Spotify', logoSrc: '/images/image1.png' }, // Update paths accordingly
  { name: 'Cannify', logoSrc: '/images/image2.png' },
  { name: 'Column Tax', logoSrc: '/images/image3.png' },
  { name: 'Copy.ai', logoSrc: '/images/image4.png' },
  { name: 'Fortmatic', logoSrc: '/images/image5.png' },
  { name: 'DoNotPay', logoSrc: '/images/image6.png' },
  { name: 'Prehab', logoSrc: '/images/image7.png' },
  { name: 'Teal', logoSrc: '/images/image8.png' },
  { name: 'Summit Interconnect', logoSrc: '/images/image9.png' },
];

const BrandingSection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold mb-6">Creating Everlasting Impressions</h2>
          <p className="text-lg text-gray-400">
            We'd love to hear from you, learn about your brand challenges, or brainstorm ideas and solutions together.
            We promise no sales – we're here to help!
          </p>
        </div>

        {/* Right Content (Logos) */}
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.logoSrc}
              alt={brand.name}
              className="h-8 object-contain"
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
