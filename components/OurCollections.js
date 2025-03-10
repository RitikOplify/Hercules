"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import useGsap from "@/useGsap";
import collections from "@/collections";

const OurCollection = () => {
  const headingRef = useRef(null);
  useGsap(headingRef);

  return (
    <>
      <Image
        src="/Images/banner.png"
        height={400}
        width={1440}
        alt="banner"
        layout="responsive"
      />
      <div className=" bg-white">
        <div className=" max-w-[1440px] mx-auto px-5 sm:px-10 bg-white py-[120px] text-black flex flex-col items-center">
          <h1
            ref={headingRef}
            className="text-2xl tracking-[8%] text-[#000] font-medium mb-[60px]"
          >
            OUR FULL COLLECTION
          </h1>
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
