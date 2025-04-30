"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import gsap from "gsap";

import Section4 from "./Section4";
import Section5 from "./Section5";
import Button from "../Button";
import Link from "next/link";
import useGsap from "@/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const servicePageRef = useRef([]);
  useGsap(servicePageRef, { stagger: true });
  return (
    <>
      <div className="relative min-h-[75vh] md:min-h-[90vh] bg-[url(../public/Services/service_mob_banner.png)]  md:bg-[url(../public/Services/service_banner.png)] bg-cover bg-center  flex items-end md:items-center justify-start pt-20 md:pt-0 px-5 md:px-0 overflow-hidden">
        {/* <Image
          src="/Services/service_banner.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full"
        /> */}
        <div className="w-full md:w-1/2  flex flex-col justify-center items-center md:items-start ps-0 md:ps-20">
          <h2
            className="text-2xl leading-[140%] md:text-4xl text-center md:text-left font-gelasio text-white font-normal w-full lg:max-w-sm md:leading-[140%] "
            ref={(el) => (servicePageRef.current[1] = el)}
          >
            Bespoke timepieces to suit the individual. For those who prefer to
            be different.
          </h2>
          <Button
            ref={(el) => (servicePageRef.current[2] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={"mt-8 bg-[#9b8959]"}
          />
          <Image
            ref={(el) => (servicePageRef.current[0] = el)}
            src="/Services/service_sec_watch.png"
            alt="Luxury Watch"
            width={638}
            height={550}
            priority
            className="object-contain h-full w-fit inline md:hidden mt-10 "
          />
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
