import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Tactical Elegance",
    text: "Originally engineered for the military—now redefined for collectors. DLC is where performance meets luxury.",
    image: "/Custom/tactical_elegance.png",
  },
  {
    title: "Engineered Protection",
    text: "Stronger than steel, darker than night. Our DLC finish resists time, wear, and compromise.",
    image: "/Custom/engineered_protection.jpg",
  },
  {
    title: "Guaranteed Excellence",
    text: "Every HWC custom piece is backed by a comprehensive warranty— because excellence should never need disclaimers.",
    image: "/Custom/guaranteed_excellence.jpg",
  },
];

const Section4 = () => {
  return (
    <div className="bg-[#F0F0F0] px-5 sm:px-10">
      <div className="max-w-[1440px] mx-auto py-20 space-y-10 font-urbanist">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[32px] leading-[140%] font-semibold mb-1 text-[#292321]">
            Assurance in Craft
          </h2>

          <p className="text-[16px] mt-6 leading-[140%] text-[#292321] mx-auto max-w-5xl">
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
            —with craftsmanship you can count on
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
