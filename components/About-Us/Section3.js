import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

function Section3() {
  const section3Ref = useRef([]);
  useGsap(section3Ref, {
    stagger: true,
  });

  return (
    <section className=" bg-white">
      <div
        className="mx-auto flex-col-reverse flex md:flex-row items-center md:h-[calc(100vh-56.67px)]
justify-center px-5 gap-10 sm:px-10 py-20"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="mt-10 md:mt-0 mx-auto">
            <h3
              className=" text-[32px] font-semibold mb-6 text-[#111]"
              ref={(el) => (section3Ref.current[1] = el)}
            >
              We Got Something For Everyone
            </h3>
            <p
              className="text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm"
              ref={(el) => (section3Ref.current[2] = el)}
            >
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
            ref={(el) => (section3Ref.current[0] = el)}
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;
