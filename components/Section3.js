"use client";
import useGsap from "@/useGsap";
import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

function Section3() {
  const sectionRef = useRef([]);
  useGsap(sectionRef);
  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full h-full flex-col-reverse flex md:flex-row">
        <div className=" w-full md:w-1/2 flex justify-start 2xl:justify-center bg-white text-black">
          <div className="bg-white flex flex-col gap-6 2xl:gap-[1vw] justify-center items-start px-5 py-10 2xl:py-[1vw] sm:p-10">
          <h1
              ref={(el) => (sectionRef.current[0] = el)}
              className="text-2xl font-medium text-black 2xl:text-[2vw]"
            >
              CONCEPT
            </h1>
            <p
              ref={(el) => (sectionRef.current[1] = el)}
              className="text-[#808080] text-base 2xl:leading-[1.7vw] 2xl:text-[1.2vw] font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Suspendisse a felis fermentum, congue mi ut, sodales turpis.
            </p>
            <button
              ref={(el) => (sectionRef.current[3] = el)}
              className="flex gap-2 items-center text-black text-[13px] 2xl:text-[1.3vw] font-normal hover:underline"
              aria-label={`Explore more about CUSTOM`}
            >
              <FaAngleRight /> EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center bg-black">
          <img
            ref={(el) => (sectionRef.current[4] = el)}
            src="/Watch/Concept.png"
            alt="Watch"
            className=" h-[70%] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
