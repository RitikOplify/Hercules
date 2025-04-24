import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

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
        <div
          className="w-full md:w-1/2 h-full flex justify-center"
          ref={(el) => (section2Ref.current[0] = el)}
        >
          <Image
            src="/Images/yatch_master_2.png"
            alt="Luxury Watch"
            width={800}
            height={600}
            priority
            className="object-contain h-full"
            ref={(el) => (section2Ref.current[1] = el)}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="mt-10 md:mt-0 mx-auto">
            <h3
              className=" text-[32px] font-semibold mb-1 text-[#111]"
              ref={(el) => (section2Ref.current[2] = el)}
            >
              Servicing & Full Restoration
            </h3>
            <p
              className="text-sm text-[#9B8959] font-medium mb-6"
              ref={(el) => (section2Ref.current[3] = el)}
            >
              Expert care from certified professionals.
            </p>
            <p
              className="mb-8 text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm"
              ref={(el) => (section2Ref.current[4] = el)}
            >
              At Hercules Watch Co, we take pride in having some of the finest
              watch technicians in the UK. We offer full servicing for nearly
              all major watch brands.
            </p>
            <div ref={(el) => (section2Ref.current[5] = el)}>
              <h2 className="text-md font-semibold text-gray-800 mb-2">
                What s Included in Our Watch Servicing:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Complete disassembly of the movemen</li>
                <li>Ultrasonic cleaning of all component</li>
                <li>Reassembly, lubrication, and regulatio</li>
                <li>Case and bracelet refurbishment (on request)</li>
                <li>Re-casing and water pressure testing (if applicable)</li>
                <li>Final 72-hour timekeeping test</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
