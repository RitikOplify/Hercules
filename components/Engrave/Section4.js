import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Steel Mastery",
    text: "Engraving 904L steel demands skill, precision, and time—resulting in artwork that’s permanent, precise, and impossibly difficult to replicate.",
    image: "/Engraved/steel_mastery.png",
  },
  {
    title: "Personal Expression",
    text: "From symbolic icons to sacred motifs, each engraving is a personal story—etched by hand, preserved in steel, and made timeless.",
    image: "/Engraved/personal_expression.png",
  },
  {
    title: "Timeless Craft",
    text: "We use traditional hand-engraving techniques, refined for modern luxury watches—ensuring every detail endures through wear, time, and generations.",
    image: "/Engraved/timeless_craft.png",
  },
];

const Section4 = () => {
  return (
    <div className="bg-[#F0F0F0] px-5 sm:px-10">
      <div className="max-w-[1440px] mx-auto py-20 space-y-10 font-urbanist">
        {/* Header */}
        <div className="text-start">
          <h2 className="text-[32px] leading-[140%] font-semibold mb-1 text-[#292321]">
            Create Your Legacy
          </h2>
          <p className="text-[16px] font-semibold leading-[140%] text-[#9B8959]">
            Your vision. Our craftsmanship. One timeless creation.
          </p>
          <p className="text-[16px] mt-6 leading-[140%] text-[#292321] max-w-3xl">
            We offer full customization for your timepiece—whether you want
            meaningful imagery, intricate patterns, or something entirely your
            own. Our engravings can be done on the{" "}
            <span className="font-semibold">
              case, bracelet, clasp, and case back
            </span>
            .
          </p>
        </div>

        {/* Cards */}
        <div className=" flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
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
                className="w-full max-w-md h-96 object-contain"
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
