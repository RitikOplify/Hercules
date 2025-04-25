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
    if (!video) return;

    video.pause();

    let isPlaying = false;
    let playTimeout, pauseTimeout;

    const safePlay = () => {
      clearTimeout(pauseTimeout);
      playTimeout = setTimeout(() => {
        if (!isPlaying) {
          video.play().catch((e) => console.warn("Play failed", e));
          isPlaying = true;
        }
      }, 100);
    };

    const safePause = () => {
      clearTimeout(playTimeout);
      pauseTimeout = setTimeout(() => {
        if (isPlaying) {
          video.pause();
          isPlaying = false;
        }
      }, 100);
    };

    const trigger = ScrollTrigger.create({
      trigger: video,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: safePlay,
      onLeave: safePause,
      onEnterBack: safePlay,
      onLeaveBack: safePause,
      markers: false,
    });

    return () => {
      clearTimeout(playTimeout);
      clearTimeout(pauseTimeout);
      video.pause();
      trigger.kill();
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
            className="text-[32px] font-semibold mb-6 text-start text-[#9B8959]"
          >
            History of Heritage
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
