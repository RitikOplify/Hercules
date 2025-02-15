"use client";
import useGsap from "@/useGsap";
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

const WatchLandingPage = () => {
  const landingPageRef = useRef([]);
  useGsap(landingPageRef);

  return (
    <section className=" bg-black">
      <div className="max-w-[1440px] mx-auto flex-col-reverse flex md:flex-row items-center md:h-[650px]  justify-center px-5 sm:px-10 py-20 bg-black text-white">
        <div className=" w-full md:w-1/2 flex flex-col items-start md:items-center">
          <div className=" mt-10 md:mt-0">
            <h1
              ref={(el) => (landingPageRef.current[0] = el)}
              className=" text-4xl sm:text-5xl font-bold"
            >
              Custom DLC <br className=" hidden sm:visible" /> build to last
            </h1>
            <p
              ref={(el) => (landingPageRef.current[1] = el)}
              className="mt-4 text-gray-400"
            >
              Bespoke timepieces to suit the individual.
              <br className="hidden sm:visible" /> For those who prefer to be
              different.
            </p>
            <button
              ref={(el) => (landingPageRef.current[2] = el)}
              className="mt-6 flex font-medium items-center gap-3 text-base text-black bg-white text-blackfont-normal rounded-xl py-3 px-6 shadow-[0_5px_20px_rgba(255,255,255,0.6)]"
            >
              DISCOVER <FaAngleRight />
            </button>
          </div>
        </div>
        <img
          ref={(el) => (landingPageRef.current[3] = el)}
          src="/Images/watch7.png"
          alt="Luxury Watch"
          className=" w-full sm:w-1/2 h-full object-contain"
        />
      </div>
    </section>
  );
};

export default WatchLandingPage;
