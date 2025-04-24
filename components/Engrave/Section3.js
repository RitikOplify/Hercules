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
    <div className="max-w-5xl bg-white mx-auto px-5 sm:px-10 py-20 space-y-10 font-urbanist">
      <div className=" text-center">
        <h2
          className="text-[32px] leading-[140%] font-semibold mb-6 text-[#292321]"
          ref={(el) => (section3P1Ref.current[0] = el)}
        >
          Introducing: King of Kings
        </h2>
        <p
          className="text-[16px] leading-[140%] text-[#292321]"
          ref={(el) => (section3P1Ref.current[1] = el)}
        >
          Our debut engraving piece,{" "}
          <span className="italic">King of Kings</span>, took{" "}
          <span className="font-semibold">eight months</span> from concept to
          completion. The centerpiece? A striking, reverent image of{" "}
          <span className="font-semibold">Christ crowned with thorns</span>,
          gazing skyward — a symbol of sacrifice, divinity, and power. Engraved
          entirely on{" "}
          <span className="font-semibold">Rolex-hardened steel</span>, this
          watch embodies what Hercules Watch Co. stands for:{" "}
          <span className="font-semibold">artistry, meaning, and mastery</span>.
        </p>
      </div>

      {/* Image */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto">
        <Image
          width={580}
          height={580}
          className="w-full max-w-[580px]"
          src="/Engraved/king_of_kings.png"
          alt="Rolex watch"
          ref={(el) => (section3P2Ref.current[0] = el)}
        />

        <Image
          width={580}
          height={580}
          className="w-full max-w-[580px]"
          src="/Engraved/crown_of_thorns.png"
          alt="Rolex watch"
          ref={(el) => (section3P2Ref.current[1] = el)}
        />
      </div>
    </div>
  );
};

export default Section3;
