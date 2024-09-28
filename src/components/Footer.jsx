import React from 'react';
import { FaInstagram, FaDribbble, FaLinkedin, FaRegCircle } from 'react-icons/fa'; // Example social icons
import { logo } from "@/assets";

import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0">
          
          {/* Left Section: Logo and Tagline */}
          <div className="lg:w-1/4">
            <div className="flex items-center space-x-2">
            <Image
            src={logo}
            alt='logo'
            width={500}
            height={500}
            className='m-0 w-[129px] h-[59px]'
          />
            </div>
            <p className="text-gray-400 mt-2">Creating everlasting impressions.</p>
          </div>

          {/* Center Sections: Links */}
          <div className="flex space-x-12 lg:space-x-16">
            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Work</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Insights</a></li>
                <li><a href="#" className="hover:text-white">Get Started</a></li>
              </ul>
            </div>

            {/* Case Studies */}
            <div>
              <h4 className="text-white font-semibold mb-4">Case Studies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Pillar</a></li>
                <li><a href="#" className="hover:text-white">Roboflow</a></li>
                <li><a href="#" className="hover:text-white">NFT.com</a></li>
                <li><a href="#" className="hover:text-white">Sola</a></li>
                <li><a href="#" className="hover:text-white">Summit</a></li>
                <li><a href="#" className="hover:text-white">[P]rehab</a></li>
                <li><a href="#" className="hover:text-white">Column Tax</a></li>
                <li><a href="#" className="hover:text-white">Copy.ai</a></li>
                <li><a href="#" className="hover:text-white">Nabis</a></li>
                <li><a href="#" className="hover:text-white">Relay</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section: Social Icons */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white"><FaInstagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><FaDribbble className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><FaRegCircle className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><FaLinkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-12">
          © 2024 Loading Logo All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
