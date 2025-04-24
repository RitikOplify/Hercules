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
              className="font-urbanist text-[32px] font-semibold text-[#292321]"
              ref={(el) => (section3Ref.current[1] = el)}
            >
              What a Watch Means to Us
            </h3>

            <p
              className="text-[16px] font-semibold leading-[140%] mt-2 text-[#9B8959]"
              ref={(el) => (section3Ref.current[2] = el)}
            >
              More Than Minutes. A Lifetime in Every Tick.
            </p>

            <div className=" mt-6 max-w-lg" ref={(el) => (section3Ref.current[3] = el)}>
              <h4 className="text-md font-semibold text-gray-800 mb-2">
                To us, a watch is:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <span className=" font-bold">A Vessel of Memory</span> – A
                  grandfather’s gift. A graduation milestone. A partner’s
                  present.
                </li>
                <li>
                  <span className=" font-bold">A Canvas of Self</span> –
                  Modified, personalised, and engraved to reflect who you are or
                  aspire to be.
                </li>
                <li>
                  <span className=" font-bold">A Legacy in Motion</span> – Not
                  just worn, but carried forward, refined, and redefined with
                  time.
                </li>
              </ul>
            </div>
            <p
              className="font-urbanist text-[18px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-6"
              ref={(el) => (section3Ref.current[4] = el)}
            >
              Every timepiece tells a story. We’re here to preserve it, enhance
              it, and help it keep ticking into the future.
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
