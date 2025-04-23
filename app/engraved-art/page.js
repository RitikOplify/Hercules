import Section1 from "@/components/Engrave/Section1";
import Section2 from "@/components/Engrave/Section2";
import Section3 from "@/components/Engrave/Section3";
import Section4 from "@/components/Engrave/Section4";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <Image
        src="/Engraved/banner_engraved_art.png"
        height={400}
        width={1440}
        alt="banner"
        className="w-full"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}

export default page;
