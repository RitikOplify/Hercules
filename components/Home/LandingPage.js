"use client";
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
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
      <div className="mx-auto flex-col-reverse flex md:flex-row items-center md:h-[650px] 2xl:h-screen justify-center px-5 sm:px-10 py-20 bg-black text-white">
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-center">
          <div className="mt-10 md:mt-0">
            <h1
              ref={(el) => (landingPageRef.current[1] = el)}
              className="text-4xl sm:text-5xl font-bold"
            >
              Custom DLC <br className="hidden sm:visible" /> build to last
            </h1>
            <p
              ref={(el) => (landingPageRef.current[2] = el)}
              className="mt-4 text-gray-400 opacity-0"
            >
              Bespoke timepieces to suit the individual.
              <br className="hidden sm:visible" /> For those who prefer to be
              different.
            </p>

            <Button
              ref={(el) => (landingPageRef.current[3] = el)}
              color={"white"}
              text={"DISCOVER"}
              className={'mt-6'}
            />
          </div>
        </div>
        <Image
          ref={(el) => (landingPageRef.current[0] = el)}
          src="/Images/prestige.png"
          alt="Luxury Watch"
          width={800}
          height={600}
          priority
          className="w-full sm:w-1/2 object-contain scale-75"
        />
      </div>
    </section>
  );
};

export default WatchLandingPage;
