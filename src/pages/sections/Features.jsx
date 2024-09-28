import React, { useEffect, useRef } from 'react';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  const sliderRef = useRef(null);
  
  useEffect(() => {
    const slider = sliderRef.current;

    const continuousScroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1; // Adjust this value to change the speed
      }
      requestAnimationFrame(continuousScroll); // Continue the scroll
    };

    continuousScroll(); // Start the scroll

    return () => cancelAnimationFrame(continuousScroll); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.featureSection}>
      <div className={styles.iconSlider} styles={{ overflow: 'hidden' }} ref={sliderRef}>
        <div className={styles.iconSlide}><img src="/images/image1.png" alt="Icon 1" /></div>
        <div className={styles.iconSlide}><img src="/images/image2.png" alt="Icon 2" /></div>
        <div className={styles.iconSlide}><img src="/images/image3.png" alt="Icon 3" /></div>
        <div className={styles.iconSlide}><img src="/images/image4.png" alt="Icon 4" /></div>
        <div className={styles.iconSlide}><img src="/images/image5.png" alt="Icon 5" /></div>
        <div className={styles.iconSlide}><img src="/images/image6.png" alt="Icon 6" /></div>
        <div className={styles.iconSlide}><img src="/images/image7.png" alt="Icon 7" /></div>

        {/* Duplicate the slides to create the seamless effect */}
        <div className={styles.iconSlide}><img src="/images/image1.png" alt="Icon 1" /></div>
        <div className={styles.iconSlide}><img src="/images/image2.png" alt="Icon 2" /></div>
        <div className={styles.iconSlide}><img src="/images/image3.png" alt="Icon 3" /></div>
        <div className={styles.iconSlide}><img src="/images/image4.png" alt="Icon 4" /></div>
        <div className={styles.iconSlide}><img src="/images/image5.png" alt="Icon 5" /></div>
        <div className={styles.iconSlide}><img src="/images/image6.png" alt="Icon 6" /></div>
        <div className={styles.iconSlide}><img src="/images/image7.png" alt="Icon 7" /></div>
      </div>

      <div className={styles.videoContainer}>
        <video width="800" height="450" controls>
          <source src="/n2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FeatureSection;
