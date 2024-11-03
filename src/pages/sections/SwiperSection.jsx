import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles

// Array of posts
const posts = [
  {
    title: 'Deep Learning Courses',
    description: 'It was a privilege to work with Deep Learning Courses on the re-imagining and re-designing of their website...',
    imageSrc: '/images/hero1.png', // Update with your image paths
  },
  {
    title: 'Storytime',
    description: 'We’re grateful to have worked with storytime on revamping their website. Storytime is a brilliant platform that bridges the gap...',
    imageSrc: '/images/hero2.png', // Update with your image paths
  },
  {
    title: 'Mapme',
    description: 'We’re excited to see the logo and branding we developed for Mapme begin to be rolled out across their platform...',
    imageSrc: '/images/hero3.png', // Update with your image paths
  },
  {
    title: 'Patlytics',
    description: 'In our newest collaboration with Patlytics, we revamped their brand guide and created an app...',
    imageSrc: '/images/hero4.png', // Update with your image paths
  },
  // Add more posts as needed
];

const PostCarousel = () => {
  return (
    <section className="py-16 text-center">
      {/* Carousel Heading */}
      <h2 className="text-4xl font-bold text-white mb-8 p-3">
        Insights, Updates, and News from <span className="text-pink-500">Loading Logo</span>
      </h2>
      
      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="text-left p-7">
              <img src={post.imageSrc} alt={post.title} className="w-full h-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
              <p className="text-white">{post.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* "View more insights" Button */}
      <div className="mt-8">
        <button className="bg-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-pink-600 transition-colors">
          View more insights
        </button>
      </div>
    </section>
  );
};

export default PostCarousel;
