"use client";
import Image from "next/image";
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

function Services() {
  return (
    <>
      <div className=" relative">
        <Image
          src="/Services/service_banner.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full"
        />
        <div className="absolute left-5 md:left-10 lg:left-20 top-0 w-1/2 flex items-center h-full">
          <h2 className="hidden md:block text-2xl lg:text-4xl font-gelasio text-white font-normal max-w-xs lg:max-w-sm">
            Bespoke timepieces to suit the individual. For those who prefer to
            be different.
          </h2>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}

export default Services;
