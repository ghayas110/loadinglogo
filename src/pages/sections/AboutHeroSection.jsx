import React from 'react';

const HeroSection = () => {
  return (
    <section style={{ backgroundColor: '#FFECF3' } } >
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        
        {/* Left Column: Text Content */}
        <div>
          <h4 className="text-black text-sm font-semibold mb-2">About Us</h4>
          <h2 className="text-5xl text-black font-bold mb-6 leading-tight">
            Empowering brands to grow through <span className="text-pink-500">design</span>
          </h2>
          <a
            href="#"
            className="inline-block bg-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-pink-600 transition-colors"
          >
            Get Started ➜
          </a>
        </div>
        
        {/* Right Column: Video */}
        <div>
          <video
            className="w-full h-auto rounded-lg "
            autoPlay
            loop
            muted
            playsInline
            src="/images/n4.mp4" // Replace with your actual video path
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
