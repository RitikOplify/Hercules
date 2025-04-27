"use client";
import Image from "next/image";
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import OurValues from "./OurValues";
import Button from "../Button";
import Link from "next/link";

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
        <div className="absolute left-5 md:left-10 lg:left-20 top-0 w-1/2 hidden md:flex flex-col justify-center items-start h-full">
          <h2 className="hidden md:inline text-2xl lg:text-4xl font-gelasio text-white font-normal max-w-xs lg:max-w-sm lg:leading-[140%]">
            A Legacy of Innovation, Crafting Timepieces Beyond Generations.
          </h2>

          <Button
            // ref={(el) => (landingPageRef.current[3] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={"mt-8 bg-[#9b8959]"}
          />
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
