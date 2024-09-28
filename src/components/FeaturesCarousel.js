import React from 'react';

const FeaturesCarousel = () => {
  return (
    <div className="features-carousel">
      <div className="carousel-item">Feature 1</div>
      <div className="carousel-item">Feature 2</div>
      <div className="carousel-item">Feature 3</div>

      <style jsx>{`
        .features-carousel {
          display: flex;
          overflow-x: scroll;
          gap: 16px;
          padding: 20px;
          background: white;
        }
        .carousel-item {
          min-width: 200px;
          height: 200px;
          background-color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default FeaturesCarousel;
