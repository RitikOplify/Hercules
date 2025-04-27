"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import useGsap from "@/useGsap";
import collections from "@/collections";
import Button from "./Button";
import Link from "next/link";

const OurCollection = () => {
  const headingRef = useRef(null);
  useGsap(headingRef);

  return (
    <>
      <div className="relative">
        <Image
          src="/Images/banner.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 h-24 sm:h-36 lg:h-64 w-full bg-gradient-to-t from-black to-transparent hidden md:flex justify-center flex-col items-center">
          <h2 className="hidden md:inline text-2xl lg:text-4xl font-gelasio text-white font-normal lg:leading-[140%]">
            A Curated Legacy of Timeless Watches, Crafted to Inspire.
          </h2>

          <Button
            // ref={(el) => (landingPageRef.current[3] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={"mt-8 bg-[#9b8959]"}
          />
        </div>
      </div>
      <div className=" bg-white">
        <div className=" max-w-[1440px] mx-auto px-5 sm:px-10 bg-white py-[120px] text-black flex flex-col items-center">
          <h2
            ref={headingRef}
            className="text-[32px] font-semibold text-center text-gold mb-[60px]"
          >
            Our Full Collection
          </h2>
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-y-[60px]">
            {collections.map((product, i) => (
              <ProductCard product={product} key={i} ref={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCollection;
