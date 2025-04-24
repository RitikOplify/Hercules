"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

const features = [
  {
    title: "Material Alchemy",
    text: "Exclusive two-tone DLC and metal combinations—precision engineered, artistically finished, and impossible to replicate.",
    image: "/Prestige/material_alchemy.png",
  },
  {
    title: "Luxury Reimagined",
    text: "We elevate iconic timepieces with subtle power, rich tones, and custom enhancements that speak louder than logos.",
    image: "/Prestige/luxury_reimagined.png",
  },
  {
    title: "Flawless Execution",
    text: "Every detail—date wheel to dial—is perfected to achieve balance, sophistication, and a deeply personal form of luxury.",
    image: "/Prestige/flawless_execution.png",
  },
];

const Section4 = () => {
  const section4Ref = useRef([]);
  useGsap(section4Ref, {
    stagger: true,
  });

  const section4P2Ref = useRef([]);
  useGsap(section4P2Ref, {
    stagger: true,
  });
  return (
    <div className="bg-[#F0F0F0] px-5 sm:px-10">
      <div className="max-w-[1440px] mx-auto py-20 space-y-10 font-urbanist">
        {/* Header */}
        <div className="text-center">
          <h2
            className="text-[32px] leading-[140%] font-semibold mb-1 text-[#292321]"
            ref={(el) => (section4Ref.current[0] = el)}
          >
            Craft Your Contrast
          </h2>

          <p
            className="text-[16px] text-center mt-6 leading-[140%] text-[#292321] mx-auto max-w-5xl"
            ref={(el) => (section4Ref.current[1] = el)}
          >
            The Prestige Collection is not just about finishing—it’s about
            <span className=" font-bold">visionary customisation.</span> Whether
            you desire timeless elegance or striking modernity, we blend
            materials, coatings, and craftsmanship to create watches that are
            unmistakably yours.
          </p>
        </div>

        {/* Cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer"
              ref={(el) => (section4P2Ref.current[index] = el)}
            >
              <Image
                width={400}
                height={400}
                src={feature.image}
                alt={feature.title}
                className="w-full max-w-md object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-6 transition-all duration-500 group-hover:py-8">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-white text-sm max-h-6 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:overflow-visible group-hover:translate-y-0 translate-y-2">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
