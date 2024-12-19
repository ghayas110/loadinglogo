import Image from 'next/image';

const ValuesSection = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black dark:text-white">Values</h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Value */}
          <div className="flex items-center justify-center">
          <video
            className="w-full h-auto rounded-lg "
            autoPlay
            loop
            muted
            playsInline
            src="/images/n4.mp4" // Replace with your actual video path
          >
                Your browser does not support the video tag.
                </video>
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="text-pink-500 dark:text-white text-2xl font-bold mb-4">Be as water</h3>
              <p className="text-black dark:text-white">
                At Caviar, embodying the essence of water means seamlessly adapting to our clients' diverse needs.
                Whether it’s crafting a captivating website, defining a unique brand identity, or producing an
                engaging business slide deck, we flow with the fluidity of water, ensuring unparalleled versatility and
                tailored solutions.
              </p>
            </div>
          </div>

          {/* Second Value */}
          <div className="flex items-center">
            <div>
              <h3 className="text-pink-500 text-2xl font-bold mb-4">Sink into relationships</h3>
              <p className="text-black dark:text-white">
                At the heart of Caviar is the firm belief that relationships are our cornerstone. We don’t just complete
                projects; we build enduring connections. Opening ourselves up to the depth of meaningful connections
                goes beyond the mere act of a design project – it’s about truly being there for our clients.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
          <video
            className="w-full h-auto rounded-lg "
            autoPlay
            loop
            muted
            playsInline
            src="/images/n4.mp4" // Replace with your actual video path
          >
                Your browser does not support the video tag.
                </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
