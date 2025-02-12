"use client";
import useGsap from "@/useGsap";
import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
const WhoWeAre = () => {
  const whoWeAreRef = useRef([]);
  useGsap(whoWeAreRef);
  return (
    <div className="bg-[#121417] py-[120px]">
      <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row max-w-[1440px] mx-auto sm:h-[500px] text-white">
        <div className=" w-full sm:w-1/2 flex justify-center items-center">
          <img
            ref={(el) => (whoWeAreRef.current[0] = el)}
            src="/Watch/who-we-are.png"
            alt="Watch"
          
          />
        </div>

        <div className=" w-full sm:w-1/2 flex flex-col justify-center gap-6 items-start px-5 sm:pr-10 text-[#fff]">
          <h1
            ref={(el) => (whoWeAreRef.current[1] = el)}
            className="text-2xl font-medium"
          >
            WHO WE ARE
          </h1>
          <p
            ref={(el) => (whoWeAreRef.current[2] = el)}
            className="text-base font-normal"
          >
            HWC have brought together some of the finest visionaries in the
            watch industry. As a team we are able to create timepieces that we
            hope will define the wearer as extraordinary. The durability and
            reliability of our watches is second to none and yet every single
            timepiece we create is totally unique.
          </p>
          <p
            ref={(el) => (whoWeAreRef.current[3] = el)}
            className="text-base font-normal"
          >
            Let's make a piece of history together – a legacy for younger
            generations to admire and aspire to.
          </p>

          <button
            ref={(el) => (whoWeAreRef.current[4] = el)}
            className="mt-6 bg-white w-fit flex items-center gap-3 text-base text-black font-normal rounded-xl py-3 px-6"
          >
            DISCOVER <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
