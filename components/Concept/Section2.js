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
        src="/Concept/concept_perfection.jpg"
        alt="Engraved Watch"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute bg-gradient-to-t from-black/55 to-transparent inset-0 flex flex-col items-center justify-end pb-20 text-center px-5 sm:px-10">
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
          Designing a one-of-a-kind watch is a journey. That’s why we offer
          <span className=" font-bold">bespoke CGI renders</span> to help you
          see your concept come to life. Every curve, texture, and contrast is
          digitally sculpted with you—ensuring the final result reflects your
          exact vision.
        </p>
      </div>
    </div>
  );
};

export default Section2;
