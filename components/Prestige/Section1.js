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
        <div className=" max-w-sm sm:mx-auto">
          <h2
            className="text-[32px] leading-[140%] font-semibold text-[#292321]"
            ref={(el) => (section1P1Ref.current[1] = el)}
          >
            Prestige Collection
          </h2>
          <p
            className="text-[16px] font-semibold leading-[140%] mt-1 text-[#9B8959]"
            ref={(el) => (section1P1Ref.current[2] = el)}
          >
            Crafted for connoisseurs of contrast and refinement.
          </p>
          <p
            className="text-[16px] leading-[140%] mt-6 font-medium text-[#292321]"
            ref={(el) => (section1P1Ref.current[3] = el)}
          >
            The Hercules Watch Co. Prestige Collection features a curated range
            of{" "}
            <span className=" font-bold">
              DLC-coated and metal-finished masterpieces
            </span>{" "}
            in Steel, Yellow Gold, and Everose Gold. Designed for those who seek
            <span className=" font-bold">
              {" "}
              bold distinction and understated opulence
            </span>
            , every watch in this line embodies duality, depth, and deliberate
            detail.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Prestige/prestige_collection.png"
            alt="Rolex watch"
            width={580}
            height={580}
            className="w-full max-w-[580px]"
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
            src="/Prestige/signature_fusion.png"
            alt="Rolex watch"
            ref={(el) => (section1P2Ref.current[0] = el)}
          />
        </div>

        <div className="order-1 md:order-2  max-w-sm mx-auto">
          <h2
            className="text-[32px] leading-[140%] font-semibold text-[#292321]"
            ref={(el) => (section1P2Ref.current[1] = el)}
          >
            A Signature Fusion
          </h2>
          <p
            className="text-[16px] mt-6 leading-[140%] text-[#292321]"
            ref={(el) => (section1P2Ref.current[2] = el)}
          >
            Our proprietary DLC (Diamond-Like Carbon) coating techniques are
            <span className=" font-bold">closely guarded</span>, developed
            in-house through years of research and experimentation. No other
            atelier offers{" "}
            <span className="font-bold">
              dual-tone DLC and precious metal combinations
            </span>{" "}
            like we do—each one flawlessly executed for both visual harmony and
            technical endurance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
