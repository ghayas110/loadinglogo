import React from 'react';

const posts = [
  {
    title: 'Patlytics',
    description: 'An AI-powered platform for patent creation, protection, enforcement, and defense.',
    imageSrc: '/images/hero1.png', // Replace with your image path
    isFullWidth: false,
  },
  {
    title: 'Pillar',
    description: 'Driven by immense interest in e-commerce and the creator economy, Pillar was founded to help creators build a stable business.',
    imageSrc: '/images/hero3.png', // Replace with your image path
    isFullWidth: false,
  },
  {
    title: 'Roboflow',
    description: 'A platform for creating, refining, and deploying customized computer vision models.',
    imageSrc: '/images/hero2.png', // Replace with your actual image path
    isFullWidth: true, // This will be the large post
  },
  {
    title: 'Case Study 4',
    description: 'Description for the fourth case study.',
    imageSrc: '/images/hero1.png', // Replace with your image path
    isFullWidth: false,
  },
  {
    title: 'Case Study 5',
    description: 'Description for the fifth case study.',
    imageSrc: '/images/hero3.png', // Replace with your image path
    isFullWidth: false,
  },
  {
    title: 'Case Study 6',
    description: 'Description for the sixth case study.',
    imageSrc: '/images/hero2.png', // Replace with your image path
    isFullWidth: true,
  },
];

const Work = () => {
  return (
    <section style={{ paddingTop: 200 }} className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center">Proof is in the pudding</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg ${
                post.isFullWidth ? 'md:col-span-2 grid md:grid-cols-2 items-center' : ''
              } bg-black text-black`}
            >
              {/* Full width post layout */}
              <img
                src={post.imageSrc}
                alt={post.title}
                className={`w-full object-contain rounded-md mb-6 ${
                  post.isFullWidth ? 'md:mb-0' : ''
                }`}
              />
              <div className={`${post.isFullWidth ? 'px-6' : ''}`}>
                <h3 className="text-2xl font-bold mb-4 text-white" >{post.title}</h3>
                <p className="text-white mb-6">{post.description}</p>
                <a
                  href="#"
                  className="inline-block bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
