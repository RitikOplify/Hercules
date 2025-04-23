import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="max-w-[1440px] bg-white mx-auto px-5 sm:px-10 py-20 space-y-20 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className=" max-w-sm mx-auto">
          <h2 className="text-[32px] leading-[140%] font-semibold text-[#292321]">
            Engraved Art
          </h2>
          <p className="text-[16px] font-semibold leading-[140%] mt-1 text-[#9B8959]">
            Bespoke engraving for those who value rarity
          </p>
          <p className="text-[16px] leading-[140%] mt-6 font-medium text-[#292321]">
            At Hercules Watch Co., the pursuit of individuality led us to a
            craft steeped in tradition—
            <span className=" font-bold">hand engraving</span>.
          </p>
          <p className="text-[16px] leading-[140%] mt-4 font-medium text-[#292321]">
            Our very first creation? A challenge few dare to take on:
          </p>
          <span className="font-bold">Rolex’s 904L steel.</span>
        </div>

        <div className="flex justify-center">
          <Image
            width={400}
            height={400}
            src="/Engraved/rolex_904L.png"
            alt="Rolex watch"
            className="w-full max-w-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            width={400}
            height={400}
            src="/Engraved/rolex_316L.png"
            alt="Rolex watch"
            className="w-full max-w-md"
          />
        </div>

        <div className="order-1 md:order-2  max-w-sm mx-auto">
          <h2 className="text-[32px] leading-[140%] font-semibold text-[#292321]">
            Engineering Meets Art
          </h2>
          <p className="text-[16px] mt-6 leading-[140%] text-[#292321]">
            Most luxury watches use 316L stainless steel—resilient,
            skin-friendly, and built to resist corrosion from moisture and
            sweat. But Rolex chose a different path:
            <span className="font-semibold"> 904L steel</span>—harder, denser,
            and significantly more challenging to work with. Even Rolex had to
            reengineer its production line to accommodate this unique material.
          </p>
          <p className="text-[16px] leading-[140%] text-[#292321] mt-4">
            So naturally, that’s where we began.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
