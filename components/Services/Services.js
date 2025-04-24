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
      <Image
        src="/Services/service_banner.png"
        height={400}
        width={1440}
        alt="banner"
        className="w-full"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}

export default Services;
