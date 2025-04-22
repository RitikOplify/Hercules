"use client";
import useGsap from "@/useGsap";
import React, { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";
gsap.registerPlugin(ScrollTrigger);
function History() {
  const historyRef = useRef([]);
  useGsap(historyRef, {
    stagger: true,
  });
  const videoRef = useRef(null);

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
    <section className="bg-black text-center  px-5 sm:px-10">
      <div className=" max-w-[1440px] mx-auto flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2 flex items-center justify-center py-[60px]">
          <video
            ref={videoRef}
            src="/video/Sample Black 0001-0270.mp4"
            muted={true}
            loop={true}
            playsInline
            className="h-[70%]"
          />
        </div>
        <div className=" w-full md:w-1/2 pb-[120px] pt-0 md:pt-[120px] my-auto">
          <h2
            ref={(el) => (historyRef.current[0] = el)}
            className="text-4xl text-start font-medium text-[#9B8959] mb-6"
          >
            HISTORY OF HERITAGE
          </h2>
          <p
            ref={(el) => (historyRef.current[1] = el)}
            className="mb-8 max-w-md text-start  font-medium text-base text-[#ccc] leading-[140%] tracking-[0.6px]"
          >
            Welcome to Hercules Watch Co., where time meets intention. We’re not
            in the business of mass production — we’re in the art of individual
            expression. Every watch we touch is built around your story, your
            vision, and your style.From design to finish, each timepiece is a
            unique creation, made with precision, patience, and purpose. We
            believe the most meaningful things in life are made, not bought —
            and your watch should be no exception.
          </p>

          <div
            ref={(el) => (historyRef.current[2] = el)}
            className=" w-full flex justify-start"
          >
            <Button text={"DISCOVER"} className={" bg-[#9B8959]"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
