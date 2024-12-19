import React from 'react';
import { FaInstagram, FaDribbble, FaLinkedin, FaRegCircle } from 'react-icons/fa'; // Example social icons
import { logo } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
          
          {/* Left Section: Logo and Tagline */}
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <Image
              src={logo}
              alt="logo"
              width={129}
              height={59}
              className="m-0 mx-auto lg:mx-0"
            />
            <p className="text-gray-400 mt-4">Creating everlasting impressions.</p>
          </div>

          {/* Center Sections: Links */}
          <div className="flex flex-col sm:flex-row justify-between w-full lg:w-auto space-y-8 sm:space-y-0 sm:space-x-12">
            {/* Company Links */}
            <div className="text-center sm:text-left">
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
            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold mb-4">Case Studies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Pillar</a></li>
                <li><a href="#" className="hover:text-white">Roboflow</a></li>
                <li><a href="#" className="hover:text-white">NFT.com</a></li>
                <li><a href="#" className="hover:text-white">Sola</a></li>
                <li><a href="#" className="hover:text-white">Summit</a></li>
                <li><a href="#" className="hover:text-white">[P]rehab</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold mb-4">Case Studies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Pillar</a></li>
                <li><a href="#" className="hover:text-white">Roboflow</a></li>
                <li><a href="#" className="hover:text-white">NFT.com</a></li>
                <li><a href="#" className="hover:text-white">Sola</a></li>
                <li><a href="#" className="hover:text-white">Summit</a></li>
                <li><a href="#" className="hover:text-white">[P]rehab</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section: Social Icons */}
          <div className="w-full lg:w-auto text-center">
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4 text-gray-400">
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
