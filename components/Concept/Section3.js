import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="max-w-5xl bg-white mx-auto px-5 sm:px-10 py-20 space-y-10 font-urbanist">
      <div className=" text-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto">
        <Image
          width={580}
          height={580}
          className="w-full max-w-[580px]"
          src="/Concept/concept_03.jpg"
          alt="Rolex watch"
        />

        <Image
          width={580}
          height={580}
          className="w-full max-w-[580px]"
          src="/Concept/concept_04.png"
          alt="Rolex watch"
        />
      </div>
    </div>
  );
};

export default Section3;
