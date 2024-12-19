import React from 'react';

const posts = [
  {
    title: 'Patlytics',
    description: 'It’s an incredible sight to see when we spot a logo we created in Time Square!',
    date: 'July 24, 2024',
    imageSrc: '/images/hero1.png', // Replace with your actual image path
    link: '#',
  },
  {
    title: 'Cashmere AI',
    description: 'We’re wrapping up version one of the product we’re creating for Cashmere AI.',
    date: 'July 08, 2024',
    imageSrc: '/images/hero2.png', // Replace with your actual image path
    link: '#',
  },
  {
    title: 'Cashmere Collaboration',
    description: 'We’re grateful to collaborate with Cashmere AI, making wealth management easier to search.',
    date: 'June 13, 2024',
    imageSrc: '/images/hero3.png', // Replace with your actual image path
    link: '#',
  },
  {
    title: 'Karat',
    description: 'Our collaboration with Karat is one that we’re proud of.',
    date: 'June 10, 2024',
    imageSrc: '/images/hero4.png', // Replace with your actual image path
    link: '#',
  },
  {
    title: 'Deep Learning Courses',
    description: 'It was a privilege to work with Deep Learning Courses on the re-imagining of their website.',
    date: 'May 30, 2024',
    imageSrc: '/images/hero2.png', // Replace with your actual image path
    link: '#',
  },
  {
    title: 'Storytime',
    description: 'We’re grateful to have worked with Storytime on revamping their website.',
    date: 'May 22, 2024',
    imageSrc: '/images/hero4.png', // Replace with your actual image path
    link: '#',
  },
];

const InsightsSection = () => {
  return (
    <section style={{ paddingTop: 200 }}  className="bg-white dark:bg-black text-black dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center text-black dark:text-white">Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-black p-6 rounded-lg shadow-lg">
              <img
                src={post.imageSrc}
                alt={post.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <div className="text-black dark:text-white text-sm mb-2">{post.date}</div>
              <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
              <p className="text-black dark:text-white mb-6">{post.description}</p>
           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
