"use client";
import useGsap from "@/useGsap";
import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

function Section1() {
  const sectionRef = useRef([]);
  useGsap(sectionRef);
  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full h-full flex-col-reverse flex sm:flex-row">
        <div className=" w-full sm:w-1/2 flex justify-start 2xl:justify-center bg-white text-black">
          <div className="bg-white flex flex-col gap-6 2xl:gap-[1vw] justify-center items-start px-5 py-10 2xl:py-[1vw] sm:p-10">
            <h1
              ref={(el) => (sectionRef.current[0] = el)}
              className="text-2xl font-medium text-black 2xl:text-[1.5vw]"
            >
              CUSTOM
            </h1>
            <p
              ref={(el) => (sectionRef.current[1] = el)}
              className="text-[#808080] text-base 2xl:leading-[1vw] 2xl:text-[0.8vw] font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Suspendisse a felis fermentum, congue mi ut, sodales turpis.
            </p>
            <button
              ref={(el) => (sectionRef.current[3] = el)}
              className="flex gap-2 items-center text-black text-[13px] 2xl:text-[1vw] font-normal hover:underline"
              aria-label={`Explore more about CUSTOM`}
            >
              <FaAngleRight /> EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/2 h-[50vh] sm:h-screen flex items-center bg-black">
          <img
            ref={(el) => (sectionRef.current[4] = el)}
            src="/Watch/i9.png"
            alt="Watch"
            className=" h-[70%] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
