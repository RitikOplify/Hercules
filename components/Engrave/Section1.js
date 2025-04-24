"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useGsap from "@/useGsap";

const Section1 = () => {
  const section1P1Ref = useRef([]);
  useGsap(section1P1Ref, {
    stagger: true,
  });

  const section1P2Ref = useRef([]);
  useGsap(section1P2Ref, {
    stagger: true,
  });
  return (
    <div className="max-w-[1440px] bg-white mx-auto px-5 sm:px-10 py-20 space-y-20 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className=" max-w-sm mx-auto">
          <h2
            className="text-[32px] leading-[140%] font-semibold text-[#292321]"
            ref={(el) => (section1P1Ref.current[1] = el)}
          >
            Engraved Art
          </h2>
          <p
            className="text-[16px] font-semibold leading-[140%] mt-1 text-[#9B8959]"
            ref={(el) => (section1P1Ref.current[2] = el)}
          >
            Bespoke engraving for those who value rarity
          </p>
          <p
            className="text-[16px] leading-[140%] mt-6 font-medium text-[#292321]"
            ref={(el) => (section1P1Ref.current[3] = el)}
          >
            At Hercules Watch Co., the pursuit of individuality led us to a
            craft steeped in tradition—
            <span className=" font-bold">hand engraving</span>.
          </p>
          <p
            className="text-[16px] leading-[140%] mt-4 font-medium text-[#292321]"
            ref={(el) => (section1P1Ref.current[4] = el)}
          >
            Our very first creation? A challenge few dare to take on:
            <span className="font-bold"> Rolex’s 904L steel.</span>
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Engraved/rolex_904L.png"
            alt="Rolex watch"
            ref={(el) => (section1P1Ref.current[0] = el)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Engraved/rolex_316L.png"
            alt="Rolex watch"
            ref={(el) => (section1P2Ref.current[0] = el)}
          />
        </div>

        <div className="order-1 md:order-2  max-w-sm mx-auto">
          <h2
            className="text-[32px] leading-[140%] font-semibold text-[#292321]"
            ref={(el) => (section1P2Ref.current[1] = el)}
          >
            Engineering Meets Art
          </h2>
          <p
            className="text-[16px] mt-6 leading-[140%] text-[#292321]"
            ref={(el) => (section1P2Ref.current[2] = el)}
          >
            Most luxury watches use 316L stainless steel—resilient,
            skin-friendly, and built to resist corrosion from moisture and
            sweat. But Rolex chose a different path:
            <span className="font-semibold"> 904L steel</span>—harder, denser,
            and significantly more challenging to work with. Even Rolex had to
            reengineer its production line to accommodate this unique material.
          </p>
          <p
            className="text-[16px] leading-[140%] text-[#292321] mt-4"
            ref={(el) => (section1P2Ref.current[3] = el)}
          >
            So naturally, that’s where we began.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
