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
        className="mx-auto flex-col flex md:flex-row items-center 
     justify-center px-5 gap-10 sm:px-10 py-20"
      >
        <div className="w-full md:w-2/5 h-full flex justify-center">
          <Image
            src="/Images/yatch_master_2.png"
            alt="Luxury Watch"
            width={800}
            height={600}
            priority
            className="object-contain md:h-[70vh]"
            ref={(el) => (section2Ref.current[0] = el)}
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col items-start">
          <div className="mt-10 md:mt-0 mx-auto">
            <h2
              className="font-urbanist text-[32px] font-semibold text-[#292321]"
              ref={(el) => (section2Ref.current[1] = el)}
            >
              Who We Create
            </h2>

            <p
              className="text-[16px] font-semibold leading-[140%] mt-2 text-[#9B8959]"
              ref={(el) => (section2Ref.current[2] = el)}
            >
              Timepieces Reimagined. Uniquely Yours.
            </p>

            <p
              className="font-urbanist text-[16px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-6"
              ref={(el) => (section2Ref.current[3] = el)}
            >
              At Hercules Watch Co., we are an independent company built on over
              a century of combined watchmaking expertise. Our team of expert
              technicians, skilled engravers, master dial artisans, and
              specialists in high-end retail bring together the best of
              horological tradition and contemporary creativity.
            </p>

            <p
              className="font-urbanist text-[16px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-6"
              ref={(el) => (section2Ref.current[4] = el)}
            >
              Every watch we create is more than a timekeeper — it’s a bespoke
              piece of art. Whether it’s a full custom build or a carefully
              restored classic, our in-house teams collaborate across
              disciplines to ensure no two Hercules timepieces are ever the
              same.
            </p>
            <p
              className="font-urbanist text-[16px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-6"
              ref={(el) => (section2Ref.current[5] = el)}
            >
              From textured dials hand-painted by artisans to precision
              engraving and personalised modifications, each detail is crafted
              to tell a story — yours.
            </p>
            <p
              ref={(el) => (section2Ref.current[6] = el)}
              className="text-[16px] font-semibold leading-[140%] mt-6 text-[#9B8959]"
            >
              One vision. One watch. One of a kind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
