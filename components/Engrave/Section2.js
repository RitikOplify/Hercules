"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import { useRef } from "react";

const Section2 = () => {
  const section2Ref = useRef([]);
  useGsap(section2Ref, {
    stagger: true,
  });
  return (
    <div className="relative w-full h-[600px] overflow-hidden text-white">
      <Image
        src="/Engraved/banner_904L.png"
        alt="Engraved Watch"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute bg-gradient-to-t from-black/30 to-transparent inset-0 flex flex-col items-center justify-end pb-20 text-center px-5 sm:px-10">
        <h2
          className="text-[32px] leading-[140%] mb-6 font-semibold text-white"
          ref={(el) => (section2Ref.current[0] = el)}
        >
          Dedicated to Perfection
        </h2>
        <p
          className="max-w-3xl text-[16px] leading-[140%] text-gray-100"
          ref={(el) => (section2Ref.current[1] = el)}
        >
          Engraving on 904L steel is no small feat. The metal's strength demands
          <span className="font-semibold text-white">
            {" "}
            specialized tools, refined techniques, and immense patience
          </span>
          . But its hardness also means that every etched line lasts—
          <span className="font-semibold text-white">
            a permanent expression of identity
          </span>
          , faith, or legacy. That’s why we chose it for our first fully
          hand-engraved timepiece.
        </p>
      </div>
    </div>
  );
};

export default Section2;
