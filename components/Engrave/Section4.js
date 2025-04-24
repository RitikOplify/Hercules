"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

const features = [
  {
    title: "Steel Mastery",
    text: "Engraving 904L steel demands skill, precision, and time—resulting in artwork that’s permanent, precise, and impossibly difficult to replicate.",
    image: "/Engraved/steel_mastery.png",
  },
  {
    title: "Personal Expression",
    text: "From symbolic icons to sacred motifs, each engraving is a personal story—etched by hand, preserved in steel, and made timeless.",
    image: "/Engraved/personal_expression.jpg",
  },
  {
    title: "Timeless Craft",
    text: "We use traditional hand-engraving techniques, refined for modern luxury watches—ensuring every detail endures through wear, time, and generations.",
    image: "/Engraved/timeless_craft.jpg",
  },
];

const Section4 = () => {
  const section4P1Ref = useRef([]);
  useGsap(section4P1Ref, {
    stagger: true,
  });

  const section4P2Ref = useRef([]);
  useGsap(section4P2Ref, {
    stagger: true,
  });
  return (
    <div className="bg-[#F0F0F0] px-5 sm:px-10">
      <div className="max-w-[1440px] mx-auto py-20 space-y-10 font-urbanist">
        <div className="text-center">
          <h2
            className="text-[32px] leading-[140%] font-semibold mb-2 text-[#292321]"
            ref={(el) => (section4P1Ref.current[0] = el)}
          >
            Create Your Legacy
          </h2>
          <p
            className="text-[16px] font-semibold leading-[140%] text-[#9B8959]"
            ref={(el) => (section4P1Ref.current[1] = el)}
          >
            Your vision. Our craftsmanship. One timeless creation.
          </p>
          <p
            className="text-[16px] mt-6 leading-[140%] text-[#292321] mx-auto max-w-5xl"
            ref={(el) => (section4P1Ref.current[2] = el)}
          >
            We offer full customization for your timepiece—whether you want
            meaningful imagery, intricate patterns, or something entirely your
            own. Our engravings can be done on the{" "}
            <span className="font-semibold">
              case, bracelet, clasp, and case back
            </span>
            .
          </p>
        </div>

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
