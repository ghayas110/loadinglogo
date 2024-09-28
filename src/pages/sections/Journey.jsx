import React from 'react';

const HeroSection = () => {
  return (
    <section style={{height: '30vh'}} className="relative w-full ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/n3.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-pink-600 opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-8">Begin your journey</h1>
        <button className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-pink-600 transition-colors flex items-center space-x-2">
          <span>Get Started</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
