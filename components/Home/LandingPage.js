"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import useGsap from "@/useGsap";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const WatchLandingPage = () => {
  const landingPageRef = useRef([]);
  useGsap(landingPageRef, { stagger: true });

  return (
    <section className=" bg-img">
      <div
        className="mx-auto flex-col-reverse flex md:flex-row items-center 2xl:h-[calc(100vh-60px)]
 justify-center px-5 gap-10 sm:px-10 py-20"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start :items-center">
          <div className="mt-10 md:mt-0 mx-auto">
            <h1
              ref={(el) => (landingPageRef.current[1] = el)}
              className=" text-[54px] font-gelasio text-[#111] font-normal"
            >
              Time, Reimagined. <br /> Just for You.
            </h1>
            <p
              ref={(el) => (landingPageRef.current[2] = el)}
              className="mt-6 text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium opacity-0 max-w-sm"
            >
              We take iconic timepieces and turn them into bold, custom
              expressions of who you are
            </p>

            <Button
              ref={(el) => (landingPageRef.current[3] = el)}
              color={"white"}
              text={"DISCOVER"}
              className={"mt-8 bg-[#111]"}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-start justify-start">
          <Image
            ref={(el) => (landingPageRef.current[0] = el)}
            src="/Images/prestige.png"
            alt="Luxury Watch"
            width={800}
            height={600}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WatchLandingPage;
