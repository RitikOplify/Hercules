"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

const Section3 = () => {
  const section3P1Ref = useRef([]);
  useGsap(section3P1Ref, {
    stagger: true,
  });

  const section3P2Ref = useRef([]);
  useGsap(section3P2Ref, {
    stagger: true,
  });
  return (
    <div className="max-w-[1440px] bg-white mx-auto px-5 sm:px-10 py-20 space-y-20 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className=" max-w-sm mx-auto">
          <h2
            className="text-[32px] leading-[140%] font-semibold mb-6 text-[#292321]"
            ref={(el) => (section3P1Ref.current[1] = el)}
          >
            Rolex Submariner 116613LN
          </h2>
          <p
            className="text-[16px] leading-[140%] text-[#292321]"
            ref={(el) => (section3P1Ref.current[2] = el)}
          >
            Our first dual-finish piece:{" "}
            <span className=" font-bold">DLC and Yellow Gold</span>, reimagined
            with a <span className=" font-bold">custom date wheel</span> to
            match. Every detail, redefined. A bold new interpretation of a
            legendary model, made singular through finishing touches only HWC
            can deliver.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Prestige/rolex_submariner_116613LN.png"
            alt="Rolex watch"
            ref={(el) => (section3P1Ref.current[0] = el)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Prestige/rolex_Yacht-Master_116621.png"
            alt="Rolex watch"
            ref={(el) => (section3P2Ref.current[0] = el)}
          />
        </div>
        {/* Text */}
        <div className="order-1 md:order-2 max-w-sm mx-auto ">
          <h2
            className="text-[32px] leading-[140%] font-semibold text-[#292321]"
            ref={(el) => (section3P2Ref.current[1] = el)}
          >
            Rolex Yacht-Master 116621
          </h2>
          <p
            className="text-[16px] mt-6 leading-[140%] text-[#292321]"
            ref={(el) => (section3P2Ref.current[2] = el)}
          >
            A showstopper in{" "}
            <span className=" font-bold">Everose Gold and DLC</span>, featuring
            the iconic “Chocolate” dial and a matching date wheel. Deep, warm
            tones meet sleek black resilience—{" "}
            <span className=" font-bold">
              an exotic creation made undeniably exclusive.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
