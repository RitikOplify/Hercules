import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="max-w-[1440px] bg-white mx-auto px-5 sm:px-10 py-20 space-y-20 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className=" max-w-sm mx-auto">
          <h2 className="text-[32px] leading-[140%] font-semibold mb-6 text-[#292321]">
            The DLC Difference
          </h2>
          <p className="text-[16px] leading-[140%] text-[#292321]">
            Unlike conventional finishes like PVD, our DLC coatings are{" "}
            <span className=" font-bold">fully reversible, residue-free</span>,
            and made to last. The result? A flawless dark black finish that is
            <span className=" font-bold">tactile, exotic, and enduring</span>
            —built to resist both time and trend.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Prestige/rolex_submariner_116613LN.png"
            alt="Rolex watch"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center order-2 md:order-1">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Prestige/rolex_Yacht-Master_116621.png"
            alt="Rolex watch"
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 max-w-sm mx-auto ">
          <h2 className="text-[32px] leading-[140%] font-semibold text-[#292321]">
            Design Without Compromise
          </h2>
          <p className="text-[16px] mt-6 leading-[140%] text-[#292321]">
            With Hercules Watch Co., your custom design starts with imagination
            and ends in precision. We blend{" "}
            <span className=" font-bold">cutting-edge materials</span>,
            personalised artistry, and visual prototyping to turn concept into
            reality—
            <span className=" font-bold">down to the last millimetre.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
