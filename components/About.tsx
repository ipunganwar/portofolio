import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg !font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl !font-ovo">About Me</h2>

      <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            alt="user"
            src={assets?.user_image}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I am experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my carrer, I had the
            privillege of collaborating with prestigious organzations,
            contributing to their success and growth.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList?.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-regal-blue hover:translate-y-1 duration-500 hover:shadow-black"
              >
                <Image alt={title} src={icon} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
