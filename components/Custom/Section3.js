"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

const Section3 = () => {
  const section3Ref = useRef([]);
  useGsap(section3Ref, {
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
            ref={(el) => (section3Ref.current[1] = el)}
          >
            Watches, Reimagined
          </h2>
          <p
            className="text-[16px] leading-[140%] text-[#292321]"
            ref={(el) => (section3Ref.current[2] = el)}
          >
            We don’t just coat timepieces—we{" "}
            <span className=" font-bold">redefine their identity.</span> Our
            mission is to transform beautiful watches into striking, mysterious
            statements. Every piece becomes a mirror of its wearer: bold,
            timeless, and entirely one-of-a-kind.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Custom/watches_reimagined.png"
            alt="Rolex watch"
            ref={(el) => (section3Ref.current[0] = el)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Custom/assurance_in_craft.png"
            alt="Rolex watch"
            ref={(el) => (section3P2Ref.current[0] = el)}
          />
        </div>

        <div className="order-1 md:order-2 max-w-sm mx-auto ">
          <h2
            className="text-[32px] leading-[140%] font-semibold text-[#292321]"
            ref={(el) => (section3P2Ref.current[1] = el)}
          >
            Assurance in Craft
          </h2>
          <p
            className="text-[16px] mt-6 leading-[140%] text-[#292321]"
            ref={(el) => (section3P2Ref.current[2] = el)}
          >
            Your investment deserves protection. Our comprehensive warranty
            covers{" "}
            <span className=" font-bold">
              {" "}
              materials, workmanship, and coating durability
            </span>{" "}
            under normal use. As we operate our own in-house workshop, your
            custom piece comes with a{" "}
            <span className=" font-bold">
              guarantee that replaces the original manufacturer’s warranty
            </span>{" "}
            —with craftsmanship you can count on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
