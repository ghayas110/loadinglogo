import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const ImageSliderSection = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  // Function for continuous scroll
  const startScroll = (sliderRef, speed = 1) => {
    const slider = sliderRef.current;

    const continuousScroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += speed; // Adjust this value to change the speed
      }
      requestAnimationFrame(continuousScroll);
    };

    continuousScroll();
  };

  // Start scrolling for all sliders
  useEffect(() => {
    startScroll(sliderRef1, 1); // Adjust speed for each slider if needed
    startScroll(sliderRef2, 1);
    startScroll(sliderRef3, 1);
  }, []);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Image Sliders */}
        <div className="flex items-center justify-center flex-col gap-8">
          <div className="flex overflow-hidden w-full" ref={sliderRef1}>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image1.png" alt="Image 1" width={500} height={500} className="rounded-lg" />
            </div>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image2.png" alt="Image 2" width={500} height={500} className="rounded-lg" />
            </div>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image3.png" alt="Image 3" width={500} height={500} className="rounded-lg" />
            </div>
          </div>

          <div className="flex overflow-hidden w-full" ref={sliderRef2}>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image4.png" alt="Image 4" width={500} height={500} className="rounded-lg" />
            </div>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image5.png" alt="Image 5" width={500} height={500} className="rounded-lg" />
            </div>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image6.png" alt="Image 6" width={500} height={500} className="rounded-lg" />
            </div>
          </div>

          <div className="flex overflow-hidden w-full" ref={sliderRef3}>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image7.png" alt="Image 7" width={500} height={500} className="rounded-lg" />
            </div>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image8.png" alt="Image 8" width={500} height={500} className="rounded-lg" />
            </div>
            <div className="flex-shrink-0 w-1/2 pr-4">
              <Image src="/images/image9.png" alt="Image 9" width={500} height={500} className="rounded-lg" />
            </div>
          </div>
        </div>

        {/* Right: Static Image */}
        <div>
          <Image
            src="/images/hero2.png" // Replace with the correct path
            alt="Static Image"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSliderSection;
