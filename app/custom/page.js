"use client";
import Button from "@/components/Button";
import Section1 from "@/components/Custom/Section1";
import Section2 from "@/components/Custom/Section2";
import Section3 from "@/components/Custom/Section3";
import Section4 from "@/components/Custom/Section4";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useGsap from "@/useGsap";

import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function page() {
  const customServiceRef = useRef([]);
  useGsap(customServiceRef, {
    stagger: true,
  });
  return (
    <>
      <div className="relative min-h-[75vh] md:min-h-[90vh] bg-[url(../public/Custom/custom_mob_banner.png)]  md:bg-[url(../public/Custom/banner_custom.png)] bg-cover bg-center  flex pt-20 md:pt-0 items-end justify-start overflow-hidden">
        {/* <Image
          src="/Custom/banner_custom.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full"
        /> */}
        <div className="hidden md:flex flex-col w-full items-center justify-center bg-gradient-to-t from-black to-transparent  h-64 ">
          <h2
            className="hidden md:flex text-2xl leading-[140%] md:text-4xl text-center font-gelasio text-white font-normal items-center justify-center w-full md:leading-[140%] px-5 md:px-0"
            ref={(el) => (customServiceRef.current[0] = el)}
          >
            Design a Watch That Reflects Your Legacy, Your Story, Your Vision.
          </h2>
          <Button
            ref={(el) => (customServiceRef.current[1] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={"mt-8 bg-[#9b8959]"}
            // url={"#contact-us-form"}
          />
        </div>
        <div className="w-full md:w-1/2 flex md:hidden flex-col justify-center items-center md:items-start ps-0 md:ps-20">
          <h2
            className="text-2xl leading-[140%] md:text-4xl text-center md:text-left font-gelasio text-white font-normal w-full lg:max-w-sm md:leading-[140%] px-5 md:px-0"
            ref={(el) => (customServiceRef.current[2] = el)}
          >
            Design a Watch That Reflects Your Legacy, Your Story, Your Vision.
          </h2>
          <Button
            ref={(el) => (customServiceRef.current[3] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={"mt-8 bg-[#9b8959]"}
            // url={"#contact-us-form"}
          />
          <Image
            ref={(el) => (customServiceRef.current[4] = el)}
            src="/Custom/custom_sec_watch.png"
            alt="Luxury Watch"
            width={491}
            height={623}
            priority
            className="object-contain h-full w-fit inline md:hidden mt-10"
          />
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}

export default page;
