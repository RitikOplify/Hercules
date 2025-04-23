import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="max-w-[1440px] bg-white mx-auto px-5 sm:px-10 py-20 space-y-20 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className=" max-w-sm mx-auto">
          <h2 className="text-[32px] leading-[140%] font-semibold mb-6 text-[#292321]">
            Introducing: King of Kings
          </h2>
          <p className="text-[16px] leading-[140%] text-[#292321]">
            Our debut engraving piece,{" "}
            <span className="italic">King of Kings</span>, took{" "}
            <span className="font-semibold">eight months</span> from concept to
            completion. The centerpiece? A striking, reverent image of{" "}
            <span className="font-semibold">Christ crowned with thorns</span>,
            gazing skyward — a symbol of sacrifice, divinity, and power.
            Engraved entirely on{" "}
            <span className="font-semibold">Rolex-hardened steel</span>, this
            watch embodies what Hercules Watch Co. stands for:{" "}
            <span className="font-semibold">
              artistry, meaning, and mastery
            </span>
            .
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            width={400}
            height={400}
            src="/Engraved/king_of_kings.png"
            alt="Rolex watch"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center order-2 md:order-1">
          <Image
            width={400}
            height={400}
            src="/Engraved/crown_of_thorns.png"
            alt="Rolex watch"
            className="w-full max-w-md"
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 max-w-sm mx-auto ">
          <h2 className="text-[32px] leading-[140%] font-semibold text-[#292321]">
            Create Your Legacy
          </h2>
          <p className="text-[16px] mt-6 leading-[140%] text-[#292321]">
            We offer full customization for your timepiece—whether you want
            meaningful imagery, intricate patterns, or something entirely your
            own. Our engravings can be done on the{" "}
            <span className="font-semibold">
              case, bracelet, clasp, and case back
            </span>
            .
          </p>
          <p className="text-[16px] font-semibold leading-[140%] mt-4 text-[#9B8959]">
            Your vision. Our craftsmanship. One timeless creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
