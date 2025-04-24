import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

function Section1() {
  const section1Ref = useRef([]);
  useGsap(section1Ref, {
    stagger: true,
  });
  return (
    <div className="bg-[#f4f4f4]">
      <section className=" py-20 px-5 sm:px-10 max-w-[1440px] mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center">
            <Image
              src="/Images/rolex_oyster.png"
              alt="Watch 2"
              height={400}
              width={500}
              className="w-full md:w-1/2 object-cover"
              ref={(el) => (section1Ref.current[0] = el)}
            />
            <Image
              src="/Images/phantom_title_2.png"
              alt="Watch 1"
              height={400}
              width={500}
              className="w-full md:w-1/2 object-cover"
              ref={(el) => (section1Ref.current[1] = el)}
            />
          </div>

          <div className="text-center max-w-lg md:text-left mt-[60px] mx-auto">
            <h2
              className="font-urbanist text-[32px] font-semibold text-[#292321]"
              ref={(el) => (section1Ref.current[2] = el)}
            >
              Some Heading
            </h2>

            <p
              className="font-urbanist text-[18px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-[24px]"
              ref={(el) => (section1Ref.current[3] = el)}
            >
              Hercules Watch Co are an independent company that bring together
              over 100 years in watch making expertise. Our teams of expert
              watch technicians, engravers, watch dial artisans coupled with
              unrivalled retail expertise, mean that every watch we make is
              totally unique.
            </p>

            <p
              className="font-urbanist text-[18px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-[24px]"
              ref={(el) => (section1Ref.current[4] = el)}
            >
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
  );
}

export default Section1;
