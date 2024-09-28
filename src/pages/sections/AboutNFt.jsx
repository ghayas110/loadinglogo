import Image from 'next/image';

const EmpowerSection = () => {
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
     
      ];
  return (
    <section className="bg-black py-16">
       <div className="flex align-middle justify-center pt-10">

  
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

  {projects.map((project, index) => (
    <div 
      key={index} 
      className={`relative text-left transform transition-transform duration-500 ${
        index % 2 === 0 ? 'md:translate-y-0' : 'md:-translate-y-16'
      }`}
    >
      <Image
        src={project.imageSrc}
        alt={project.title}
        className=" h-auto rounded-lg mb-6"
        width={500}
        height={500}
      />
    
    </div>
  ))}
</div>

</div>

      {/* Text Section */}
      <div className="text-center mt-12">
        <h2 className="text-white text-2xl font-medium">
          We empower companies to overcome brand limitations
          <br />
          and create life-enhancing products.
          <br />
          Our creativity fuels important work.
        </h2>
      </div>
    </section>
  );
};

export default EmpowerSection;
