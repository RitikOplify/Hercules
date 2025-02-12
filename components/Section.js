"use client";
import useGsap from "@/useGsap";
import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";

const SectionBlock = ({ title, description, imgSrc, reverse, className }) => {
  const sectionRef = useRef([]);
  useGsap(sectionRef);
  return (
    <div
      className={`flex flex-col ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } sm:h-[600px]`}
    >
      <div className="w-full sm:w-1/2 bg-white flex flex-col gap-6 justify-center items-start px-5 py-10 sm:p-10">
        <h1
          ref={(el) => (sectionRef.current[0] = el)}
          className="text-2xl font-medium text-black"
        >
          {title}
        </h1>
        <p
          ref={(el) => (sectionRef.current[1] = el)}
          className="text-[#808080] text-base font-normal"
        >
          {description}
        </p>
        <button
          ref={(el) => (sectionRef.current[3] = el)}
          className="flex gap-2 items-center text-black text-[13px] font-normal hover:underline"
          aria-label={`Explore more about ${title}`}
        >
          <FaAngleRight /> EXPLORE MORE
        </button>
      </div>
      <div
       
        className={`${className} w-full sm:w-1/2 overflow-hidden bg-black flex justify-center items-center py-5`}
      >
        <img
          ref={(el) => (sectionRef.current[4] = el)}
          src={imgSrc}
          alt={`${title} Watch`}
          className="object-cover max-h-full"
        />
      </div>
    </div>
  );
};

const Section = () => {
  const sections = [
    {
      title: "CUSTOM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis.",
      imgSrc: "/Images/watch1.jpg",
      reverse: false,
    },
    {
      title: "PRESTIGE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis.",
      imgSrc: "/Images/watch2.jpg",
      reverse: true,
      className: "p-0",
    },
    {
      title: "CONCEPT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis.",
      imgSrc: "/Images/watch6.png",
      reverse: false,
    },
    {
      title: "ENGRAVED ART",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis.",
      imgSrc: "/Images/watch5.png",
      reverse: true,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      {sections.map((section, index) => (
        <SectionBlock key={index} {...section} className={section.className} />
      ))}
    </div>
  );
};

export default Section;
