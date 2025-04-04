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
        src="/Images/banner.png"
        height={400}
        width={1440}
        alt="banner"
        className="w-full h-auto"
      />

      <div className=" py-[120px] bg-white flex justify-center px-5 sm:px-10">
        <h1
          ref={(el) => (aboutUsRef.current[0] = el)}
          className=" max-w-[590px] text-base leading-8 font-normal text-[#808080] text-start sm:text-center "
        >
          Hercules Watch Co are an independent company that bring together over
          100 years in watch making expertise. Our teams of expert watch
          technicians, engravers, watch dial artisans coupled with unrivalled
          retail expertise, mean that every watch we make is totally unique.
        </h1>
      </div>
      <div className="flex flex-col  md:flex-row bg-white">
        <div
          ref={(el) => (aboutUsRef.current[1] = el)}
          className="w-full md:w-[55%] relative bg-white"
        >
          <Image
            src="/Watch/man-watch.jpg"
            alt="Rolex Watch"
            width={1440}
            height={900}
            className=" object-cover 2xl:h-screen w-full md:w-[90%]"
          />
          <Image
            src="/Watch/watch-close-look.jpg"
            width={720}
            height={480}
            className="absolute w-2/4 2xl:w-2/3 top-1/2 left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2"
            alt="Watch close up"
          />
        </div>

        <div className="w-full md:w-[45%] bg-white flex flex-col justify-center gap-6 items-center px-5 py-10 sm:p-10">
          <div>
            <h2
              ref={(el) => (aboutUsRef.current[2] = el)}
              className="text-2xl tracking-[8%] font-medium mb-6 text-gold 2xl:text-[1.6rem] 2xl:leading-[1.5rem] 2xl:tracking-[1px]"
            >
              WE GOT SOMETHING FOR EVERYONE
            </h2>
            <h2
              ref={(el) => (aboutUsRef.current[3] = el)}
              className="text-base text-[#808080] max-w-sm font-normal 2xl:leading-[1.4] 2xl:text-[1.2rem]"
            >
              We are the first company to be able to offer a selection of 2
              colour combination watches, unique to the industry. Our closely
              guarded production techniques allow us to create watches as
              individual as you are.
            </h2>

            <Button
              ref={(el) => (aboutUsRef.current[4] = el)}
              color={"black"}
              text={"Contact us"}
              className={"mt-6"}
            />
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="w-full h-full flex-col-reverse flex md:flex-row">
          <div className="w-full md:w-[50%] bg-white flex flex-col justify-center gap-6 items-center px-5 py-10 sm:p-10">
            <div>
              <h2
                ref={(el) => (aboutUsRef.current[5] = el)}
                className="text-2xl tracking-[8%] text-start font-medium mb-6 text-gold 2xl:text-[1.6rem] 2xl:leading-[1.5] 2xl:tracking-[1px]"
              >
                WE GOT SOMETHING FOR EVERYONE
              </h2>
              <h2
                ref={(el) => (aboutUsRef.current[6] = el)}
                className="text-base text-[#808080] font-normal 2xl:leading-[1.4] 2xl:text-[1.2rem] max-w-sm"
              >
                We are the first company to be able to offer a selection of 2
                colour combination watches, unique to the industry. Our closely
                guarded production techniques allow us to create watches as
                individual as you are.
              </h2>

              <Button
                ref={(el) => (aboutUsRef.current[7] = el)}
                color={"black"}
                text={"Contact us"}
                className={"mt-6"}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center bg-black">
            <Image
              ref={(el) => (aboutUsRef.current[8] = el)}
              src="/Watch/i9.png"
              width={1440}
              height={900}
              alt="Watch"
              className="h-[70%] w-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
