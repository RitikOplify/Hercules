"use client";
import Image from "next/image";
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import OurValues from "./OurValues";

function AboutUs() {
  return (
    <>
      <div className=" relative">
        <Image
          src="/Images/about_banner.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full"
        />
        <div className="absolute left-5 md:left-10 lg:left-20 top-0 w-1/2 flex items-center h-full">
          <h2 className="hidden md:block text-2xl lg:text-4xl font-gelasio text-white font-normal max-w-xs lg:max-w-sm">
            A Legacy of Innovation, Crafting Timepieces Beyond Generations.
          </h2>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <OurValues />
      <Section3 />
    </>
  );
}

export default AboutUs;
