"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

const OurValues = () => {
  const OurValues = useRef([]);
  useGsap(OurValues, {
    stagger: true,
  });

  const OurValues2 = useRef([]);
  useGsap(OurValues2, {
    stagger: true,
  });
  return (
    <section className="bg-black text-white px-5 font-urbanist sm:px-10 py-20 relative">
      <div className="absolute inset-0">
        <Image
          src="/Images/home-slider-1.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          className="font-urbanist text-[32px] font-semibold text-[#9B8959] mb-4"
          ref={(el) => (OurValues.current[0] = el)}
        >
          Our Values
        </h2>
        <p
          className="text-base font-semibold leading-[140%] mb-6 text-[#9B8959]"
          ref={(el) => (OurValues.current[1] = el)}
        >
          Crafted with Conviction. Restored with Respect. Delivered with
          Distinction.
        </p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 text-start gap-10 mx-auto">
          <div
            className=" flex flex-col space-y-4"
            ref={(el) => (OurValues2.current[0] = el)}
          >
            <h6 className=" font-bold text-lg">Authenticity</h6>
            <p>
              We honour the story each timepiece carries, treating every
              restoration with reverence.
            </p>
          </div>

          <div
            className=" flex flex-col  space-y-4"
            ref={(el) => (OurValues2.current[1] = el)}
          >
            <h6 className=" font-bold text-lg">Precision</h6>
            <p>
              Our work is guided by a relentless pursuit of accuracy — both in
              timekeeping and technique.
            </p>
          </div>
          <div
            className=" flex flex-col  space-y-4"
            ref={(el) => (OurValues2.current[2] = el)}
          >
            <h6 className=" font-bold text-lg">Individuality</h6>
            <p>
              Every client, every watch, every job is unique. No shortcuts. No
              templates. Just tailor-made craftsmanship.
            </p>
          </div>

          <div
            className=" flex flex-col  space-y-4"
            ref={(el) => (OurValues2.current[3] = el)}
          >
            <h6 className=" font-bold text-lg">Legacy</h6>
            <p>
              Whether it's a family heirloom or a modern collectible, we
              understand the emotional and historical value behind each piece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
