"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import OurValues from "./OurValues";
import Button from "../Button";
import Link from "next/link";
import useGsap from "@/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const aboutPageRef = useRef([]);
  useGsap(aboutPageRef, { stagger: true });
  return (
    <>
      <div className="relative md:h-[90vh] bg-[url(../public/Images/about_mob_banner.png)]  md:bg-[url(../public/Images/about_banner.png)] bg-cover bg-center  flex items-center justify-start pt-20 md:pt-0 px-5 md:px-0 overflow-hidden">
        {/* <Image
          src="/Images/about_banner.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full hidden md:inline"
        /> */}
        <div className="w-full md:w-1/2  flex flex-col justify-center items-center md:items-start ps-0 md:ps-20">
          <h2
            className="text-2xl leading-[140%] md:text-4xl text-center md:text-left font-gelasio text-white font-normal w-full lg:max-w-sm md:leading-[140%] "
            ref={(el) => (aboutPageRef.current[1] = el)}
          >
            A Legacy of Innovation, Crafting Timepieces Beyond Generations.
          </h2>
          <Button
            ref={(el) => (aboutPageRef.current[2] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={"mt-8 bg-[#9b8959]"}
          />
          <Image
            ref={(el) => (aboutPageRef.current[0] = el)}
            src="/Images/about_sec_watch.png"
            alt="Luxury Watch"
            width={553}
            height={530}
            priority
            className="object-contain h-full w-fit inline md:hidden mt-10 "
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
