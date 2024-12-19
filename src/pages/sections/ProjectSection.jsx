import Image from 'next/image';
import React from 'react';

const projects = [
  {
    title: 'Pillar',
    description: 'Turn followers into customers & brands into partners with just one platform',
    imageSrc: '/images/hero1.png', // Update with your image paths
  },
  {
    title: 'Roboflow',
    description: 'Scalable, high-performance edge and cloud deployment',
    imageSrc: '/images/hero2.png', // Update with your image paths
  },
  {
    title: 'Column Tax',
    description: 'Embed Tax Calculator in your App',
    imageSrc: '/images/hero4.png', // Update with your image paths
  },
  {
    title: 'Patlytics',
    description: 'Priemium AI Powered Patent Platform',
    imageSrc: '/images/hero3.png', // Update with your image paths
  },
];

const ProjectSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-black text-center">
    <h2 className="text-5xl font-bold mb-12 text-center text-black dark:text-white">Projects</h2>
      <div className="flex align-middle justify-center pt-10">

  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`relative text-left transform transition-transform duration-500 max-sm:translate-y-0 p-7 ${
              index % 2 === 0 ? 'md:translate-y-0' : 'md:-translate-y-16' 
            }`}
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              className=" h-auto rounded-lg mb-6 cursor-index"
              width={500}
              height={500}
            />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    
      </div>
      <div className="mt-12">

<button className="bg-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-pink-600 transition-colors">
  View all work
</button>
</div>

    </section>
  );
};

export default ProjectSection;
