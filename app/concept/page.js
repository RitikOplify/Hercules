import Button from "@/components/Button";
import Section1 from "@/components/Concept/Section1";
import Section2 from "@/components/Concept/Section2";
import Section3 from "@/components/Concept/Section3";
import Section4 from "@/components/Concept/Section4";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className=" relative">
        <Image
          src="/Concept/concept_banner.jpg"
          height={400}
          width={1440}
          alt="banner"
          className="w-full"
        />
        <div className="absolute bottom-0 h-24 sm:h-36 lg:h-64 w-full bg-gradient-to-t from-black to-transparent hidden md:flex flex-col justify-center items-center">
          <h2 className="hidden md:inline text-2xl lg:text-4xl font-gelasio text-white font-normal lg:leading-[140%] text-center">
            Pushing Boundaries to Forge Tomorrow’s Icons in Watchmaking.
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
      <Section3 />
      <Section4 />
    </>
  );
}

export default page;
