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
          src="/Prestige/banner_prestige.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full"
        />
        <div className="absolute bottom-0 h-24 sm:h-36 lg:h-64 w-full bg-gradient-to-t from-black to-transparent flex justify-center items-center">
          <h2 className=" text-white font-normal text-center text-base sm:text-xl">
            Bespoke timepieces to suit the individual. <br /> For those who
            prefer to be different.
          </h2>
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
