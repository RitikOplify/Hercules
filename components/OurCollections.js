"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import collections from "@/collections";
import Button from "./Button";
import Link from "next/link";
import gsap from "gsap";
import useGsap from "@/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurCollection = () => {
  const collectionPageRef = useRef([]);
  useGsap(collectionPageRef, { stagger: true });

  return (
    <>
      <div className="relative min-h-[75vh] md:min-h-[90vh] bg-[url(../public/Images/collection_mob_banner.png)]  md:bg-[url(../public//Images/collection_banner.png)] bg-cover bg-center  flex pt-20 md:pt-0 items-end justify-start overflow-hidden">
        {/* <Image
          src="/Images/banner.png"
          height={400}
          width={1440}
          alt="banner"
          className="w-full h-auto"
        /> */}

        <div className="hidden md:flex flex-col w-full items-center justify-center bg-gradient-to-t from-black to-transparent  h-64 pb-4">
          <h2
            className="hidden md:flex text-2xl leading-[140%] md:text-4xl text-center font-gelasio text-white font-normal items-center justify-center w-full md:leading-[140%] px-5 md:px-0"
            ref={(el) => (collectionPageRef.current[0] = el)}
          >
            A Curated Legacy of Timeless Watches,
            <br />
            Crafted to Inspire.
          </h2>
          <Button
            ref={(el) => (collectionPageRef.current[1] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={"mt-8 bg-[#9b8959]"}
            // url={"#contact-us-form"}
          />
        </div>
        <div className="w-full md:w-1/2 flex md:hidden flex-col justify-center items-center md:items-start ps-0 md:ps-20">
          <h2
            className="text-2xl leading-[140%] md:text-4xl text-center md:text-left font-gelasio text-white font-normal w-full lg:max-w-sm md:leading-[140%] px-5 md:px-0"
            ref={(el) => (collectionPageRef.current[2] = el)}
          >
            A Curated Legacy of Timeless Watches, Crafted to Inspire.
          </h2>
          <Button
            ref={(el) => (collectionPageRef.current[3] = el)}
            color={"white"}
            text={"DISCOVER"}
            className={"mt-8 bg-[#9b8959]"}
            // url={"#contact-us-form"}
          />
          <Image
            ref={(el) => (collectionPageRef.current[4] = el)}
            src="/Images/collection_sec_watch.png"
            alt="Luxury Watch"
            width={491}
            height={623}
            priority
            className="object-contain h-full w-fit inline md:hidden mt-10"
          />
        </div>
      </div>
      <div className=" bg-white">
        <div className=" max-w-[1440px] mx-auto px-5 sm:px-10 bg-white py-[120px] text-black flex flex-col items-center">
          <h2
            ref={(el) => (collectionPageRef.current[5] = el)}
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
