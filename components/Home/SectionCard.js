"use client";
import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import useGsap from "@/useGsap";

gsap.registerPlugin(ScrollTrigger);

const SectionCard = ({ title, description, imageSrc, reverseLayout }) => {
  const sectionRef = useRef([]);
  useGsap(sectionRef, { stagger: true });

  return (
    <div className="relative w-full flex justify-center">
      <div
        className={`w-full h-full flex flex-col md:flex-row ${
          reverseLayout ? "md:flex-row-reverse" : ""
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
          <div className="flex flex-col gap-6 2xl:gap-[1vw] justify-center items-start px-5 py-10 2xl:py-[1vw] sm:p-10">
            <p
              ref={(el) => (sectionRef.current[1] = el)}
              className={`text-2xl font-medium text-gold 2xl:text-[1.6rem] 2xl:leading-[1.5] 2xl:tracking-[1px]`}
            >
              {title}
            </p>
            <p
              ref={(el) => (sectionRef.current[2] = el)}
              className="text-[#808080] text-base font-normal max-w-sm 2xl:leading-[1.4] 2xl:text-[1.2rem]"
            >
              {description}
            </p>
            <button
              ref={(el) => (sectionRef.current[3] = el)}
              className={`flex gap-2 items-center text-gold text-[13px] font-semibold 2xl:leading-[1.4] 2xl:text-[1rem]`}
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
