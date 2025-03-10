"use client";
import React, { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const whoWeAreRef = useRef([]);

  useEffect(() => {
    if (!whoWeAreRef.current) return;

    let ctx = gsap.context(() => {
      const elements = whoWeAreRef.current;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elements[0], // Image triggers animation
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          elements[0], // Image
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "easeInOut" }
        )
        .fromTo(
          elements[1], // Heading
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, ease: "easeInOut" },
          "-=0.4"
        )
        .fromTo(
          elements[2], // First paragraph
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, ease: "easeInOut" },
          "-=0.3"
        )
        .fromTo(
          elements[3], // Second paragraph
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, ease: "easeInOut" },
          "-=0.3"
        )
        .fromTo(
          elements[4], // Discover Button
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "easeInOut" },
          "-=0.3"
        );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);
  // #121417
  // 
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row max-w-[1440px] mx-auto text-white">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            ref={(el) => (whoWeAreRef.current[0] = el)}
            src="/video/video1.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            className=" w-1/2"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 items-start px-5 md:pr-10 text-[#fff]">
          <h1
            ref={(el) => (whoWeAreRef.current[1] = el)}
            className="text-2xl font-medium"
          >
            WHO WE ARE
          </h1>
          <p
            ref={(el) => (whoWeAreRef.current[2] = el)}
            className="text-base font-normal"
          >
            HWC have brought together some of the finest visionaries in the
            watch industry. As a team we are able to create timepieces that we
            hope will define the wearer as extraordinary. The durability and
            reliability of our watches is second to none and yet every single
            timepiece we create is totally unique.
          </p>
          <p
            ref={(el) => (whoWeAreRef.current[3] = el)}
            className="text-base font-normal"
          >
            Let's make a piece of history together – a legacy for younger
            generations to admire and aspire to.
          </p>

          <button
            ref={(el) => (whoWeAreRef.current[4] = el)}
            className="mt-6 bg-white w-fit flex items-center gap-3 text-base text-black font-normal rounded-xl py-3 px-6 shadow-[0_5px_20px_rgba(255,255,255,0.6)]"
          >
            DISCOVER <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
