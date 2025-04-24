import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

function Section5() {
  const section5Ref = useRef([]);
  useGsap(section5Ref, {
    stagger: true,
  });
  return (
    <section className=" bg-white">
      <div
        className="mx-auto flex-col flex md:flex-row items-center md:h-[calc(100vh-56.67px)]
justify-center px-5 gap-10 sm:px-10 py-20"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="mt-10 md:mt-0 mx-auto">
            <h3
              className=" text-[32px] font-semibold mb-1 text-[#111]"
              ref={(el) => (section5Ref.current[1] = el)}
            >
              Watch Customisation & DLC Coatings
            </h3>
            <p
              className="text-sm text-[#9B8959] font-medium mb-6"
              ref={(el) => (section5Ref.current[2] = el)}
            >
              Tailor your timepiece to your style.
            </p>
            <p
              className="mb-8 text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm"
              ref={(el) => (section5Ref.current[3] = el)}
            >
              Looking for a Hercules makeover? From minor changes to full
              transformations, we offer$
            </p>
            <div>
              <ul
                className="list-disc list-inside space-y-2 text-gray-700"
                ref={(el) => (section5Ref.current[4] = el)}
              >
                <li>
                  Partial customisation (name engraving on the dial or case
                  back)
                </li>
                <li>Complete watch makeover</li>
                <li>Dual-colour DLC coatings a Hercules Watch Co specialty</li>
              </ul>
            </div>
            <p
              className="mt-4 text-base italic underline cursor-pointer text-gray-700"
              ref={(el) => (section5Ref.current[5] = el)}
            >
              For quotes and consultations, reach out to us directly.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center">
          <Image
            src="/Images/yatch_master_2.png"
            alt="Luxury Watch"
            width={800}
            height={600}
            priority
            className="object-contain h-full"
            ref={(el) => (section5Ref.current[0] = el)}
          />
        </div>
      </div>
    </section>
  );
}

export default Section5;
