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
  return (
    <section className="bg-white text-center py-[120px] px-5 sm:px-10">
      <div className=" max-w-[1440px] mx-auto">
        <h2
          ref={(el) => (historyRef.current[0] = el)}
          className="text-2xl font-medium text-gold"
        >
          HISTORY OF HERITAGE
        </h2>
        <p
          ref={(el) => (historyRef.current[1] = el)}
          className="mt-4 max-w-2xl mx-auto text-start sm:text-center font-light text-base text-[#808080] 2xl:leading-[1.4] 2xl:text-[1rem]"
        >
          Welcome to Hercules Watch Co., where time meets intention. We’re not
          in the business of mass production — we’re in the art of individual
          expression. Every watch we touch is built around your story, your
          vision, and your style.From design to finish, each timepiece is a
          unique creation, made with precision, patience, and purpose. We
          believe the most meaningful things in life are made, not bought — and
          your watch should be no exception.
        </p>
       
        <div
          ref={(el) => (historyRef.current[2] = el)}
          className=" w-full flex justify-center"
        >
          <Button
            color={"black"}
            text={"DISCOVER"}
            className={"mt-6 bg-gold"}
          />
        </div>
      </div>
    </section>
  );
}

export default History;
