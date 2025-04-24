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
      <Image
        src="/Images/about_banner.png"
        height={400}
        width={1440}
        alt="banner"
        className="w-full"
      />
      <Section1 />
      <Section2 />
      <OurValues />
      <Section3 />
    </>
  );
}

export default AboutUs;
