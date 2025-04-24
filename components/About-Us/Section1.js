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
              Who We Are
            </h2>

            <p
              className="text-[16px] font-semibold leading-[140%] mt-2 text-[#9B8959]"
              ref={(el) => (section1Ref.current[3] = el)}
            >
              Masters of Time, Craftsmanship & Restoration
            </p>

            <p
              className="font-urbanist text-[18px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-6"
              ref={(el) => (section1Ref.current[4] = el)}
            >
              At <span className=" font-bold">Hercules Watch Co.</span>, we
              believe a timepiece is more than a way to tell time — it's a
              statement of craftsmanship, heritage, and personal style. Whether
              it’s restoring a vintage classic or customising a modern icon, our
              mission is to breathe new life into every watch that passes
              through our hands.
            </p>

            <p
              className="font-urbanist text-[18px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-6"
              ref={(el) => (section1Ref.current[5] = el)}
            >
              With a legacy of precision and passion, we specialise in high-end
              watch restoration, DLC de-coating and re-coating, bespoke
              modifications, and intricate dial and casework. Our technicians
              are trained to the highest standards, blending traditional
              watchmaking artistry with cutting-edge technology.
            </p>
            <p
              className="font-urbanist text-[18px] font-medium text-[#292321] leading-[140%] tracking-[0.6px] mt-6"
              ref={(el) => (section1Ref.current[6] = el)}
            >
              From full overhauls to custom engravings, each service is carried
              out with uncompromising attention to detail. We treat every
              timepiece as if it were our own — ensuring excellence, longevity,
              and timeless style.
            </p>
            <p
              ref={(el) => (section1Ref.current[7] = el)}
              className="text-[16px] font-semibold leading-[140%] mt-6 text-[#9B8959]"
            >
              Hercules Watch Co. where tradition meets transformation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
