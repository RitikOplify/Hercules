"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import useGsap from "@/useGsap";

const OurCollection = () => {
  const headingRef = useRef(null);
  useGsap(headingRef);

  const products = [
    {
      name: "ROLEX GMT-MASTER II, DLC COATED STEEL, 18 CT YELLOW GOLD 116713LN",
      price: "£18,499.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL, 18 CT EVEROSE GOLD 116621",
      price: "£18,499.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL AND STEEL WITH PLATINUM BEZEL 116622",
      price: "£13,995.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX GMT-MASTER II, DLC COATED STEEL, 18 CT YELLOW GOLD 116713LN",
      price: "£18,499.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL, 18 CT EVEROSE GOLD 116621",
      price: "£18,499.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL AND STEEL WITH PLATINUM BEZEL 116622",
      price: "£13,995.00",
      image: "/Images/watch7.png",
    },
  ];

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
          <ProductCard products={products} />
        </div>
      </div>
    </>
  );
};

export default OurCollection;
