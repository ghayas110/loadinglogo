import { useState } from "react";
import { logo } from "@/assets";
import { navLinks } from "@/constant";
import Image from "next/image";
import RotatingPlayIcon from "./RotatingPlayIcon";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image
            src={logo}
            alt="logo"
            width={500}
            height={500}
            className="m-0 w-[129px] h-[59px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <ul className="flex-1 flex justify-center items-center gap-16">
            {navLinks?.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`font-montserrat leading-normal text-lg ${
                    router.pathname === item.href ? "text-black" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Rotating Play Icon */}
          <RotatingPlayIcon />

          {/* Get Started Button */}
          <div style={{ marginLeft: 50 }}>
            <button
              className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => router.push("/contact")}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Hamburger Icon for smaller screens */}
        <div className="hidden max-lg:block">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 w-full h-full bg-black flex flex-col items-center justify-center text-white z-50">
          <ul className="text-center space-y-6">
            {navLinks?.map((item) => (
              <li key={item.label} onClick={() => setIsMobileMenuOpen(false)}>
                <a
                  href={item.href}
                  className="text-lg font-montserrat leading-normal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="mt-8 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              router.push("/contact");
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
