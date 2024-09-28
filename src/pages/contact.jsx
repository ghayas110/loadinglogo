import React from 'react';

const ContactSection = () => {
  return (
    <section  style={{ paddingTop: 200 }}  className="bg-black text-white ">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
        
        {/* Left Column: Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-6">Contact our team</h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether it be for a web, personal, or mobile project, use this form to reach out to our team so that we can discuss your design needs.
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <span className="text-2xl">🔒</span>
              <p>Ensured brand security and distinction through various custom design paths.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-2xl">📍</span>
              <p>Consistent communication and task-based goals within various workspaces to guarantee on-time delivery.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-2xl">✔️</span>
              <p>Access to a high-end design team designated to answering questions and actualizing your visions to the highest caliber.</p>
            </li>
          </ul>

          <h3 className="text-lg font-bold mt-8 mb-4">The world’s most innovative companies use Caviar</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Add logos of the companies here */}
            <img src="/images/image1.png" alt="Column Tax" className="h-10 object-contain" />
            <img src="/images/image2.png" alt="Copy.ai" className="h-10 object-contain" />
            <img src="/images/image3.png" alt="Fion" className="h-10 object-contain" />
            <img src="/images/image4.png" alt="Fortmatic" className="h-10 object-contain" />
            <img src="/images/image5.png" alt="DoNotPay" className="h-10 object-contain" />
            <img src="/images/image6.png" alt="Relay" className="h-10 object-contain" />
            <img src="/images/image7.png" alt="[P]rehab" className="h-10 object-contain" />
            <img src="/images/image8.png" alt="Teal" className="h-10 object-contain" />
            <img src="/images/image9.png" alt="Summit" className="h-10 object-contain" />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                YOUR NAME
              </label>
              <input
                className="w-full text-black p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                YOUR EMAIL
              </label>
              <input
                className="w-full p-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                PHONE NUMBER
              </label>
              <input
                className="w-full p-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="phone"
                type="text"
                placeholder="Your phone number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                WHAT CAN WE HELP YOU WITH?
              </label>
              <textarea
                className="w-full p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="message"
                placeholder="Landing page, branding, logo...etc"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">
                WHAT HAVE YOU BUDGETED FOR THIS PROJECT?
              </label>
              <select
                className="w-full text-black p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="budget"
              >
                <option>$30,000 and under</option>
                <option>$30,000 - $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000 and above</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-bold py-3 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Send it ➜
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
