import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

function Section1() {
  const section1Ref = useRef([]);
  useGsap(section1Ref, {
    stagger: true,
  });

  return (
    <section className="bg-white py-20 px-5 sm:px-10">
      <div className="max-w-xl mx-auto">
        <h1
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1"
          ref={(el) => (section1Ref.current[0] = el)}
        >
          DLC Watch De-Coating <br /> and Restoration
        </h1>
        <p
          className="text-sm text-[#9B8959] font-medium mb-6"
          ref={(el) => (section1Ref.current[1] = el)}
        >
          Restore. Reimagine. Refinish.
        </p>

        <p
          className="text-gray-700 mb-4"
          ref={(el) => (section1Ref.current[2] = el)}
        >
          Welcome to Hercules Watch Co – one of the UK’s leading DLC de-coating
          and restoration specialists. If your watch has a worn or damaged DLC
          (Diamond-Like Carbon) coating, we offer expert services to either
          restore it to its original finish or completely de-coat and re-coat
          it, based on your preferences.
        </p>
        <p
          className="text-gray-900 font-semibold mb-6"
          ref={(el) => (section1Ref.current[3] = el)}
        >
          Our highly specialized process may take several months,
          <br className="hidden md:inline" /> depending on the coating and
          condition of the watch. Rest assured that our pricing remains highly
          competitive.
        </p>

        <div className="mb-8" ref={(el) => (section1Ref.current[4] = el)}>
          <Image
            src="/Services/gtm_master2.webp"
            height={400}
            width={400}
            alt="Watch Restoration"
            className="w-full"
          />
        </div>

        <div ref={(el) => (section1Ref.current[5] = el)}>
          <h2 className="text-md font-semibold text-gray-800 mb-2">
            Our DLC De-Coating & Restoration Process:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Watch is fully stripped down</li>
            <li>
              All links, case parts, bracelet parts, and pins are de-coated
            </li>
            <li>Knocks, dents, and damage are carefully repaired</li>
            <li>
              Bezels restored (we specialise in Rolex Daytona bezel
              restorations)
            </li>
            <li>Watch case and bracelet reassembled with precision</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section1;
