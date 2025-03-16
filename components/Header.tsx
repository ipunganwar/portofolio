import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image alt="" src={assets?.profile_img} className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 !font-ovo">
        Hi! I&apos;m William Mark{" "}
        <Image alt="" src={assets?.hand_icon} className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] !font-ovo">
        frontend web developer based in London.
      </h1>
      <p className="max-w-2xl mx-auto !font-ovo">
        I am a frontend web developer from California, USA with 10 years of
        experiencein multiple companies like Microsoft, Apple, Tesla.
      </p>
      <div className="flex flex-col sm:flex-row itens-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white"
        >
          contact me
          <Image alt="" src={assets?.right_arrow_white} className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image alt="" src={assets?.download_icon} className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
