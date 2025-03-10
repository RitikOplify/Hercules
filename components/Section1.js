"use client";
import React, { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const sectionRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      const elements = sectionRef.current;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elements[4], // Image triggers the animation sequence
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          elements[4], // Image
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "easeInOut" }
        )
        .fromTo(
          elements[0], // Heading
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "easeInOut" },
          "-=0.4"
        )
        .fromTo(
          elements[1], // Paragraph
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, ease: "easeInOut" },
          "-=0.3"
        )
        .fromTo(
          elements[3], // Explore More Button
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "easeInOut" },
          "-=0.3"
        );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full h-full flex-col-reverse flex md:flex-row">
        <div className=" w-full md:w-1/2 flex justify-start 2xl:justify-center bg-white text-black">
          <div className="bg-white flex flex-col gap-6 justify-center items-start px-5 py-10 sm:p-10">
            <h1
              ref={(el) => (sectionRef.current[0] = el)}
              className="text-2xl font-medium text-black"
            >
              CUSTOM
            </h1>
            <p
              ref={(el) => (sectionRef.current[1] = el)}
              className="text-[#808080] text-base font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Suspendisse a felis fermentum, congue mi ut, sodales turpis.
            </p>
            <button
              ref={(el) => (sectionRef.current[3] = el)}
              className="flex gap-2 items-center text-black text-[13px] font-semibold hover:underline"
              aria-label={`Explore more about CUSTOM`}
            >
              <FaAngleRight /> EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center bg-black">
          <img
            ref={(el) => (sectionRef.current[4] = el)}
            src="/Watch/i9.png"
            alt="Watch"
            className=" h-[70%] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
