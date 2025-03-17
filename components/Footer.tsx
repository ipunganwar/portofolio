import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

interface Props {
  isDarkMode: boolean;
}
const Footer = ({ isDarkMode }: Props) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-3xl font-bold mr-14">
          Syaiful <span className="text-red-600 text-6xl leading-1">.</span>
        </h3>
        {/* <Image
          alt="footer"
          src={isDarkMode ? assets?.logo_dark : assets?.logo}
          className="w-36 mx-auto mb-2"
        /> */}

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            alt="mail"
            src={isDarkMode ? assets?.mail_icon_dark : assets?.mail_icon}
            className="w-6"
          />
          ipung.anwar1@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Syaiful Anwar Mark. All right reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/ipunganwar" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/syaiful-anwar-06a5aba7/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
