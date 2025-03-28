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
    <section className=" bg-black">
      <div
        className="mx-auto flex-col-reverse flex lg:flex-row items-center 2xl:h-[calc(100vh-60px)]
 justify-center px-5 gap-10 sm:px-10 py-20 bg-black"
      >
        <div className="w-full lg:w-1/2 flex flex-col items-start md:items-center">
          <div className="mt-10 md:mt-0 mx-auto">
            <h1
              ref={(el) => (landingPageRef.current[1] = el)}
              className="text-4xl sm:text-5xl text-gold font-bold"
            >
              Time, Reimagined. Just for You.
            </h1>
            <p
              ref={(el) => (landingPageRef.current[2] = el)}
              className="mt-4 text-gray-400 opacity-0 max-w-2xl"
            >
              crafted by hand, built with soul, and made to reflect you. No
              replicas. No repeats. Just handcrafted, custom watches as unique
              as their wearer. We take iconic timepieces and turn them into
              bold, custom expressions of who you are.
            </p>

            <Button
              ref={(el) => (landingPageRef.current[3] = el)}
              color={"white"}
              text={"DISCOVER"}
              className={"mt-6"}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
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
