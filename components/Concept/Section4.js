import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Rendered Vision",
    text: "We provide custom CGI renders to help you visualise every detail before it’s made. No guesswork—just precision.",
    image: "/Prestige/material_alchemy.png",
  },
  {
    title: "Tough by Design",
    text: "Stronger than steel, richer than black. DLC delivers durability and drama like no other coating can.",
    image: "/Prestige/luxury_reimagined.png",
  },
  {
    title: "Concept to Creation",
    text: "From CGI to the final polish, every HWC timepiece starts with a story—and ends with a signature.",
    image: "/Prestige/flawless_execution.png",
  },
];

const Section4 = () => {
  return (
    <div className="bg-[#F0F0F0] px-5 sm:px-10">
      <div className="max-w-[1440px] mx-auto py-20 space-y-10 font-urbanist">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[32px] leading-[140%] font-semibold mb-1 text-[#292321]">
            Design Without Compromise
          </h2>

          <p className="text-[16px] text-center mt-6 leading-[140%] text-[#292321] mx-auto max-w-5xl">
            With Hercules Watch Co., your custom design starts with imagination
            and ends in precision. We blend{" "}
            <span className=" font-bold">cutting-edge materials</span>,
            personalised artistry, and visual prototyping to turn concept into
            reality—
            <span className=" font-bold">down to the last millimetre.</span>
          </p>
        </div>

        {/* Cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer"
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
