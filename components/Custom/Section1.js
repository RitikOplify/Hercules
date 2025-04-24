"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

const Section1 = () => {
  const sectionP1Ref = useRef([]);
  useGsap(sectionP1Ref, {
    stagger: true,
  });

  const sectionP2Ref = useRef([]);
  useGsap(sectionP2Ref, {
    stagger: true,
  });

  return (
    <div className="max-w-[1440px] bg-white mx-auto px-5 sm:px-10 py-20 space-y-20 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className=" max-w-sm sm:mx-auto">
          <h2
            className="text-[32px] leading-[140%] font-semibold text-[#292321]"
            ref={(el) => (sectionP1Ref.current[1] = el)}
          >
            Custom Coating
          </h2>
          <p
            className="text-[16px] font-semibold leading-[140%] mt-1 text-[#9B8959]"
            ref={(el) => (sectionP1Ref.current[2] = el)}
          >
            Dark. Durable. Distinctive.
          </p>
          <p
            ref={(el) => (sectionP1Ref.current[3] = el)}
            className="text-[16px] leading-[140%] mt-6 font-medium text-[#292321]"
          >
            At Hercules Watch Co., we harness the power of cutting-edge{" "}
            <span className=" font-bold">DLC (Diamond-Like Carbon)</span>{" "}
            coating technology, originally developed for military-grade
            resilience. Today, we use it to transform luxury watches into sleek,
            scratch-resistant masterpieces designed for everyday endurance and
            timeless appeal
          </p>
          <p
            ref={(el) => (sectionP1Ref.current[4] = el)}
            className="text-[16px] leading-[140%] mt-4 font-medium text-[#292321]"
          >
            Our DLC coating forms a molecular armour—{" "}
            <span className="font-bold">
              7 to 8 times harder than steel and up to 12 times tougher than
              gold.
            </span>{" "}
            Engineered to withstand the elements and designed to elevate
            aesthetics, this is more than a coating—it’s a commitment to
            durability with an undeniably dark edge.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Custom/custom_coating.png"
            alt="Rolex watch"
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            ref={(el) => (sectionP1Ref.current[0] = el)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            width={580}
            height={580}
            className="w-full max-w-[580px]"
            src="/Custom/beyong_standard_finish.png"
            alt="Rolex watch"
            ref={(el) => (sectionP2Ref.current[0] = el)}
          />
        </div>

        <div className="order-1 md:order-2  max-w-sm mx-auto">
          <h2
            className="text-[32px] leading-[140%] font-semibold text-[#292321]"
            ref={(el) => (sectionP2Ref.current[1] = el)}
          >
            Beyond Standard Finishes
          </h2>
          <p
            className="text-[16px] mt-6 leading-[140%] text-[#292321]"
            ref={(el) => (sectionP2Ref.current[2] = el)}
          >
            Where traditional finishes like PVD fall short,{" "}
            <span className="font-bold">our DLC coatings excel.</span> They’re
            entirely reversible, residue-free, and far more resilient. The
            result? A bold, exotic black finish with exceptional longevity and
            zero compromise on material integrity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
