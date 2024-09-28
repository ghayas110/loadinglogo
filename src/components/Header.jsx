import { hamburger } from "@/assets";
import { logo } from "@/assets";
import { navLinks } from "@/constant";
import Image from "next/image";
import RotatingPlayIcon from "./RotatingPlayIcon";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

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

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          {/* Navigation Links */}
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks?.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`font-montserrat leading-normal text-lg ${
                    router.pathname === "/about"
                      
                        ? "text-black"
                        : "text-white"
                     
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
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
