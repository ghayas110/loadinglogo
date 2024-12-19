import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Testimonial Card */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/images/image3.png" // Replace with the actual logo path
              alt="NFT Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-white text-2xl font-light italic mb-6">
            "Caviar is extremely professional and diligent when it comes to project management,
            capture the requirements, and creating beautiful functional user interfaces and designs.
            I’d highly recommend Caviar to anyone looking to create beautiful online brands and
            experiences."
          </blockquote>

          {/* Author and Title */}
          <p className="text-white font-bold text-lg mb-2">
            Jordan Fried — CEO, ImmutableHold and <span className="text-pink-500">NFT.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
