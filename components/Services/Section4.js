import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

function Section4() {
  const section4Ref = useRef([]);
  useGsap(section4Ref, {
    stagger: true,
  });
  return (
    <div className=" overflow-hidden bg-black">
      <div className="flex bg-black flex-col py-[60px] gap-10 md:gap-0 sm:py-[120px] md:flex-row max-w-[1440px] mx-auto">
        <div className=" w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/Services/engrave_left.png"
            alt="Watch"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            ref={(el) => (section4Ref.current[0] = el)}
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-5 sm:px-10">
          <h2
            className="text-[32px] font-semibold mb-1 text-[#fff]"
            ref={(el) => (section4Ref.current[1] = el)}
          >
            Engraving and Hand engraving
          </h2>
          <p
            className="text-sm text-[#9B8959] font-medium mb-6"
            ref={(el) => (section4Ref.current[2] = el)}
          >
            Precision and craftsmanship, down to the dial.
          </p>
          <p
            className="mb-8 text-base text-[#ccc] leading-[140%] tracking-[0.6px] font-medium max-w-sm"
            ref={(el) => (section4Ref.current[3] = el)}
          >
            Our engraving services blend traditional techniques with
            cutting-edge technology. We offer$
          </p>
          <ul
            className="list-disc list-inside space-y-2 text-[#ccc]"
            ref={(el) => (section4Ref.current[4] = el)}
          >
            <li>Hand engraving by skilled artisan</li>
            <li>High-precision machine engraving for intricate designs</li>
          </ul>
          <p
            className="mt-4 text-base max-w-lg underline cursor-pointer text-[#ccc]"
            ref={(el) => (section4Ref.current[5] = el)}
          >
            Average turnaround: approx. 8 months for bespoke pieces. Share your
            vision – we’ll make it a reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section4;
