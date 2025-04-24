import Image from "next/image";
import React, { useRef } from "react";
import Button from "../Button";
import useGsap from "@/useGsap";

function Section2() {
  const section2Ref = useRef([]);
  useGsap(section2Ref, {
    stagger: true,
  });

  return (
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
            ref={(el) => (section2Ref.current[0] = el)}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="mt-10 md:mt-0 mx-auto">
            <h3
              className=" text-[32px] font-semibold mb-6 text-[#111]"
              ref={(el) => (section2Ref.current[1] = el)}
            >
              We Got Something For Everyone
            </h3>
            <p
              className="mb-8 text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm"
              ref={(el) => (section2Ref.current[2] = el)}
            >
              We are the first company to be able to offer a selection of 2
              colour combination watches, unique to the industry. Our closely
              guarded production techniques allow us to create watches as
              individual as you are.
            </p>

            <Button
              color={"white"}
              text={"DISCOVER"}
              className={"mt-8 bg-[#111]"}
              ref={(el) => (section2Ref.current[3] = el)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
