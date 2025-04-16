"use client";
import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import useGsap from "@/useGsap";

gsap.registerPlugin(ScrollTrigger);

const SectionCard = ({
  title,
  description,
  imageSrc,
  reverseLayout,
  description2,
}) => {
  const sectionRef = useRef([]);
  useGsap(sectionRef, { stagger: true });

  return (
    <div className="relative w-full flex justify-center">
      <div
        className={`w-full h-full flex flex-col md:flex-row ${
          reverseLayout ? "" : "md:flex-row-reverse"
        } ${reverseLayout === true ? "bg-black" : "bg-white"}`}
      >
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center">
          <Image
            ref={(el) => (sectionRef.current[0] = el)}
            src={imageSrc}
            alt={title}
            width={800}
            height={600}
            className="h-[70%] w-full object-contain"
          />
        </div>
        <div className={`w-full md:w-1/2 flex justify-start sm:justify-center`}>
          <div className="flex flex-col justify-center items-start px-5 py-10 sm:p-10">
            <h3
              ref={(el) => (sectionRef.current[1] = el)}
              className={`text-[32px] font-semibold mb-6 ${
                reverseLayout === true ? "text-[#fff]" : "text-[#292321]"
              }`}
            >
              {title}
            </h3>
            <div ref={(el) => (sectionRef.current[2] = el)}>
              <p
                className={`${
                  reverseLayout === true ? " text-[#ccc]" : "text-[#292321]"
                } text-base font-medium max-w-sm mb-4 leading-[140%] tracking-[0.6px]`}
              >
                {description}
              </p>
              <p
                className={`${
                  reverseLayout === true ? " text-[#ccc]" : "text-[#292321]"
                } text-base font-medium max-w-sm mb-8 leading-[140%] tracking-[0.6px]`}
              >
                {description2}
              </p>
            </div>
            <button
              ref={(el) => (sectionRef.current[3] = el)}
              className={`flex gap-2 items-center text-[#9B8959] text-xs tracking-[2px] font-semibold`}
              aria-label={`Explore more about ${title}`}
            >
              <IoIosArrowForward /> EXPLORE MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
