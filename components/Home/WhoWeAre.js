"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGsap from "@/useGsap";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const whoWeAreRef = useRef([]);
  const videoRef = useRef(null);

  useGsap(whoWeAreRef, { stagger: true });

  useEffect(() => {
    const video = videoRef.current;

    // Make sure video is paused initially
    if (video) {
      video.pause();
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: video,
      start: "top 80%", // start when top of video is 80% from viewport top
      end: "bottom 20%", // end when bottom of video is 20% from viewport top
      onEnter: () => {
        video.play();
      },
      onLeave: () => {
        video.pause();
      },
      onEnterBack: () => {
        video.play();
      },
      onLeaveBack: () => {
        video.pause();
      },
      markers: false, // set to true for debugging
    });

    return () => {
      if (video) {
        video.pause();
      }
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10 py-[100px] lg:py-0 md:gap-0 md:flex-row max-w-[1440px] mx-auto text-white">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            ref={videoRef}
            src="/video/Sample Black 0001-0270.mp4"
            muted={true}
            loop={true}
            playsInline
            className="w-full h-4/5 md:w-3/4 lg:w-4/5"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 items-start px-5 md:pr-10 text-[#fff]">
          <p
            ref={(el) => (whoWeAreRef.current[1] = el)}
            className="text-2xl font-medium"
          >
            WHO WE ARE
          </p>
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

          <Button
            ref={(el) => (whoWeAreRef.current[4] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={
              "mt-6 shadow-[0_5px_20px_rgba(191,141,103,0.6)] text-white"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
