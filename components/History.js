"use client";
import useGsap from "@/useGsap";
import React, { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function History() {
  const historyRef = useRef([]);
  useEffect(() => {
    if (!historyRef.current.length) return;
    gsap.from(historyRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1.2,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: historyRef.current[0],
        start: "top 90%",
      },
    });
  }, []);
  return (
    <section className="bg-gray-50 text-black text-center py-[120px] px-5 sm:px-10">
      <div className=" max-w-[1440px] mx-auto">
        <h2
          ref={(el) => (historyRef.current[0] = el)}
          className="text-2xl font-medium text-black"
        >
          HISTORY OF HERITAGE
        </h2>
        <p
          ref={(el) => (historyRef.current[1] = el)}
          className="mt-4 max-w-2xl mx-auto text-start sm:text-center font-light text-base text-[#808080]"
        >
          At Hercules Watch Co, we aspire to make something legendary that would
          stand out not only in its unique form and design but also in its
          exceptional quality and durability. Our passion for quality timepieces
          leads us to push the industry's standards.
        </p>
        <p
          ref={(el) => (historyRef.current[2] = el)}
          className="mt-4 text-start sm:text-center font-light text-base text-[#808080]"
        >
          HWC believes that the endurance of a watch should be coupled with
          aesthetic beauty.
        </p>
        <div
          ref={(el) => (historyRef.current[3] = el)}
          className=" w-full flex justify-center"
        >
          <button className="mt-6 bg-black flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6">
            DISCOVER <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default History;
