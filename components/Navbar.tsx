import Image from "next/image";
import React, { useRef } from "react";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image alt="" src={assets?.header_bg_color} className="w-full" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between">
        <a href="#top">
          <Image
            alt="navbar"
            src={assets?.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top" className="!font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="!font-ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="!font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="!font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="!font-ovo">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image alt="nightmode" src={assets?.moon_icon} className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 !font-ovo"
          >
            Contact
            <Image alt="contact me" src={assets?.arrow_icon} className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image alt="nightmode" src={assets?.menu_black} className="w-6" />
          </button>
        </div>
        {/* --------- mobile menu here ------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              alt=""
              src={assets?.close_black}
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" className="!font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="!font-ovo" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="!font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="!font-ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="!font-ovo" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
