import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="max-w-[1440px] bg-white mx-auto px-5 sm:px-10 py-20 space-y-20 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className=" max-w-sm sm:mx-auto">
          <h2 className="text-[32px] leading-[140%] font-semibold text-[#292321]">
            Concept Design
          </h2>
          <p className="text-[16px] font-semibold leading-[140%] mt-1 text-[#9B8959]">
            Visualise before we realise.
          </p>
          <p className="text-[16px] leading-[140%] mt-6 font-medium text-[#292321]">
            At Hercules Watch Co., our journey begins not just with
            craftsmanship—but with{" "}
            <span className=" font-bold">clarity of vision.</span> Using
            advanced CGI rendering, we work closely with you to create a visual
            preview of your custom timepiece—before the first engraving or
            coating even begins.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Concept/concept_01.jpg"
            alt="Rolex watch"
            width={580}
            height={580}
            className="w-full max-w-[580px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Concept/ym_II_wrist_black.jpg"
            alt="Rolex watch"
          />
        </div>

        <div className="order-1 md:order-2  max-w-sm mx-auto">
          <h2 className="text-[32px] leading-[140%] font-semibold text-[#292321]">
            Technology in Form
          </h2>
          <p className="text-[16px] mt-6 leading-[140%] text-[#292321]">
            Our watches are engineered with{" "}
            <span className=" font-bold">military-grade DLC coating</span>,
            originally developed for extreme durability. This molecular armor
            forms a sleek, black finish that’s{" "}
            <span className=" font-bold">
              7–8 times harder than steel and 10–12 times tougher than gold
            </span>
            —a fusion of toughness and design that defines our concept pieces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
