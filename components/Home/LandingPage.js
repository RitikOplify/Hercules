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
    <section className="bg-[url(../public/Images/home-banner-mobile-bg.png)] md:bg-[url(../public/Images/background.jpg)] bg-cover bg-center">
      <div
        className="mx-auto flex-col flex md:flex-row items-center min-h-[75vh] md:min-h-[100vh]
 justify-center px-5 gap-10 sm:px-10 pt-20 pb-0 md:pb-20"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start ">
          <div className="mt-0 md:mt-0 md:mx-auto flex flex-col items-center md:items-start ">
            <h1
              ref={(el) => (landingPageRef.current[2] = el)}
              className="text-3xl text-center md:text-left md:text-[54px] md:leading-[140%] font-gelasio text-[#111] font-normal"
            >
              Time, Reimagined. <br /> Just for You.
            </h1>
            <p
              ref={(el) => (landingPageRef.current[3] = el)}
              className="mt-6 text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm text-center md:text-left"
            >
              Where Precision Engineering and Timeless Craftsmanship Come to
              Life.
            </p>
            <Button
              ref={(el) => (landingPageRef.current[4] = el)}
              color={"white"}
              text={"DISCOVER"}
              className={"mt-8 bg-[#111]"}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full hidden md:flex justify-center md:justify-start">
          <Image
            ref={(el) => (landingPageRef.current[0] = el)}
            src="/Images/Omega Skull face.png"
            alt="Luxury Watch"
            width={800}
            height={600}
            priority
            className="object-contain h-full w-fit"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex md:hidden justify-center">
          <Image
            ref={(el) => (landingPageRef.current[1] = el)}
            src="/Images/hero-sec-watch-mobile.png"
            alt="Luxury Watch"
            width={800}
            height={600}
            priority
            className="object-contain h-full w-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default WatchLandingPage;
