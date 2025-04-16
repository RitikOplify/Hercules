"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";
import Button from "../Button";

function AboutUs() {
  const aboutUsRef = useRef([]);
  useGsap(aboutUsRef);
  return (
    <>
      <Image
        src="/Images/about_banner.png"
        height={400}
        width={1440}
        alt="banner"
        className="w-full"
      />

      <div className="bg-[#f4f4f4]">
        <section className=" py-20 px-5 sm:px-10 max-w-[1440px] mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Images Section */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center">
              <Image
                src="/Images/rolex_oyster.png"
                alt="Watch 2"
                height={400}
                width={500}
                className="w-full md:w-1/2 object-cover"
              />
              <Image
                src="/Images/phantom_title_2.png"
                alt="Watch 1"
                height={400}
                width={500}
                className="w-full md:w-1/2 object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="text-center max-w-lg md:text-left mt-[60px] mx-auto">
              <h2 className="font-urbanist text-[32px] font-semibold text-[#292321]">
                Some Heading
              </h2>

              <p className="font-urbanist text-[18px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-[24px]">
                Hercules Watch Co are an independent company that bring together
                over 100 years in watch making expertise. Our teams of expert
                watch technicians, engravers, watch dial artisans coupled with
                unrivalled retail expertise, mean that every watch we make is
                totally unique.
              </p>

              <p className="font-urbanist text-[18px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-[24px]">
                Hercules Watch Co are an independent company that bring together
                over 100 years in watch making expertise. Our teams of expert
                watch technicians, engravers, watch dial artisans coupled with
                unrivalled retail expertise, mean that every watch we make is
                totally unique.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className=" bg-img">
        <div
          className="mx-auto flex-col flex md:flex-row items-center md:h-[calc(100vh-56.67px)]
 justify-center px-5 gap-10 sm:px-10 py-20"
        >
          <div className="w-full md:w-1/2 h-full flex justify-center">
            <Image
              src="/Images/yatch_master_2.png"
              alt="Luxury Watch"
              width={800}
              height={600}
              priority
              className="object-contain h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="mt-10 md:mt-0 mx-auto">
              <h3 className=" text-[32px] font-semibold mb-6 text-[#111]">
                We Got Something For Everyone
              </h3>
              <p className="mb-8 text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm">
                We are the first company to be able to offer a selection of 2
                colour combination watches, unique to the industry. Our closely
                guarded production techniques allow us to create watches as
                individual as you are.
              </p>

              <Button
                color={"white"}
                text={"DISCOVER"}
                className={"mt-8 bg-[#111]"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white">
        <div
          className="mx-auto flex-col-reverse flex md:flex-row items-center md:h-[calc(100vh-56.67px)]
 justify-center px-5 gap-10 sm:px-10 py-20"
        >
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="mt-10 md:mt-0 mx-auto">
              <h3 className=" text-[32px] font-semibold mb-6 text-[#111]">
                We Got Something For Everyone
              </h3>
              <p className="text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm">
                Hercules Watch Co are an independent company that bring together
                over 100 years in watch making expertise. Our teams of expert
                watch technicians, engravers, watch dial artisans coupled with
                unrivalled retail expertise, mean that every watch we make is
                totally unique.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full flex justify-center">
            <Image
              src="/Images/Omega Skull face.png"
              alt="Luxury Watch"
              width={800}
              height={600}
              priority
              className="object-contain h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
