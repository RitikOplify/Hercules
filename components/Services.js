"use client";
import useGsap from "@/useGsap";
import React, { useRef } from "react";

function Services() {
  const servicesRef = useRef([]);
  useGsap(servicesRef);
  return (
    <div>
      <div className="bg-white text-black px-5 sm:px-10">
        {/* Text Section */}
        <div className=" max-w-[1440px] mx-auto flex flex-col-reverse sm:flex-row py-[120px] w-full">
          <div className=" w-full sm:w-1/2 my-auto">
            <h2
              ref={(el) => (servicesRef.current[0] = el)}
              className="text-2xl font-medium text-black tracking-[8%] mb-6"
            >
              DLC Watch De-Coating and Restoration
            </h2>
            <p
              ref={(el) => (servicesRef.current[1] = el)}
              className="text-[#808080] leading-6 text-base font-normal mb-4"
            >
              Welcome to one of the leading DLC de-coating specialists. If you
              have a worn and damaged DLC coated watch, Hercules Watch Co are
              able to both restore the watch to the original finish or, if
              required, de-coat the watch and then re-coat it.
            </p>
            <p
              ref={(el) => (servicesRef.current[2] = el)}
              className="text-[#808080] leading-6 text-base font-normal mb-4"
            >
              The process is very specialised and can take several months
              depending upon the original coating and damage to the watch. Our
              prices, however, are very competitive.
            </p>
            <ol className="list-decimal list-inside text-[#808080] leading-6 text-base font-normal space-y-2">
              <li ref={(el) => (servicesRef.current[3] = el)}>
                The watch is stripped
              </li>
              <li ref={(el) => (servicesRef.current[4] = el)}>
                All the individual links, case parts, bracelet parts and pins
                de-coated
              </li>
              <li ref={(el) => (servicesRef.current[5] = el)}>
                Knocks, dents and damaged parts of the watch can be restored to
                original finish
              </li>
              <li ref={(el) => (servicesRef.current[6] = el)}>
                Bezels can be restored (specialists in Rolex Daytona bezel
                restoration)
              </li>
              <li ref={(el) => (servicesRef.current[7] = el)}>
                The watch case and bracelet is then reassembled
              </li>
            </ol>
          </div>

          {/* Image Section */}
          <div className="flex w-full  sm:w-1/2 items-center justify-center">
            <img
              ref={(el) => (servicesRef.current[8] = el)}
              src="/Images/watch5.png"
              alt="DLC Watch Restoration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className=" bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-5 py-[120px] sm:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Section - Image */}
          <div className="flex justify-center">
            <img
              ref={(el) => (servicesRef.current[9] = el)}
              src="/Images/watch5.png"
              // Replace with actual image path
              alt="Watch Service"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Section - Text */}
          <div>
            <p
              ref={(el) => (servicesRef.current[10] = el)}
              className="text-base leading-6 mb-4 text-white"
            >
              Hercules Watch Co have some of the finest watch technicians in the
              UK today. We are able to offer a complete service to almost all
              brands of watches by our qualified technicians.
            </p>

            <p
              ref={(el) => (servicesRef.current[11] = el)}
              className="text-white leading-6 text-base font-normal mb-4"
            >
              As part of our watch service:
            </p>

            <ol className="list-decimal list-inside text-white leading-6 text-base font-normal  space-y-2">
              <li ref={(el) => (servicesRef.current[12] = el)}>
                We strip the watch movement completely.
              </li>
              <li ref={(el) => (servicesRef.current[13] = el)}>
                All the parts are then cleaned of oil and dirt using the latest
                technology.
              </li>
              <li ref={(el) => (servicesRef.current[14] = el)}>
                The movement is then reassembled, lubricated, and regulated.
              </li>
              <li ref={(el) => (servicesRef.current[15] = el)}>
                The case and bracelet are refurbished when requested.
              </li>

              <li ref={(el) => (servicesRef.current[16] = el)}>
                The movement is then re-cased, the watch reassembled, and water
                pressure tested (where necessary).
              </li>
              <li ref={(el) => (servicesRef.current[17] = el)}>
                Then final 72-hour timekeeping test.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className=" bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center md:items-start p-6 md:p-12 gap-8">
          <div className="md:w-1/2 space-y-6 my-auto">
            <div>
              <h2
                ref={(el) => (servicesRef.current[18] = el)}
                className=" text-base tracking-[8%] font-normal text-black"
              >
                Dial restoration:
              </h2>
              <p
                ref={(el) => (servicesRef.current[19] = el)}
                className="text-[#808080] mt-2 font-normal"
              >
                As custom watch specialists, HWC are able to offer a
                comprehensive dial restoration service. We are able to remove
                the dial and restore to as close to the original as possible. We
                are also able to customise the dial, the date wheel and the
                hands to the colour and design of your request – please see the
                dials on our watches.
              </p>
            </div>

            <div>
              <h2
                ref={(el) => (servicesRef.current[20] = el)}
                className="text-base tracking-[8%] font-normal text-black"
              >
                Bracelet repairs:
              </h2>
              <p
                ref={(el) => (servicesRef.current[21] = el)}
                className="text-[#808080] mt-2 font-normal"
              >
                Our technicians and industry partners are able to repair,
                restore and also supply new links/bracelets for many types of
                watches. Please contact us for a quote.
              </p>
            </div>

            <div>
              <h2
                ref={(el) => (servicesRef.current[22] = el)}
                className="text-base tracking-[8%] font-normal text-black"
              >
                Movements:
              </h2>
              <p
                ref={(el) => (servicesRef.current[23] = el)}
                className="text-[#808080] mt-2 font-normal"
              >
                We are able to source new movements for many of the industry's
                finest watches, if we find a watch is beyond repair.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              ref={(el) => (servicesRef.current[24] = el)}
              src="/Images/watch5.png"
              alt="Watch Dial Restoration"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className=" relative">
        <div className=" bg-white h-36 w-full absolute top-0 left-0"></div>
        <div className=" max-w-[1440px] mx-auto flex gap-10 sm:gap-0 flex-col-reverse relative md:flex-row bg-black text-white px-5 sm:px-10 py-12">
          <div className=" bg-white h-36 w-full absolute top-0 left-0"></div>
          <div className="md:w-1/2 my-auto ">
            <h2
              ref={(el) => (servicesRef.current[25] = el)}
              className="text-2xl font-medium text-white tracking-[8%] mb-6"
            >
              Engraving and Hand engraving
            </h2>
            <p
              ref={(el) => (servicesRef.current[26] = el)}
              className="text-white mt-2 font-normal"
            >
              We have a passion for creating the unique. Our engravers are able
              to both engrave by hand and also we use the latest technology to
              create exceptionally detailed machine engraved images. The
              processes are complicated and time consuming, averaging about 4
              months for a unique time piece. But it is worth the wait. Bring us
              your thoughts and designs and let us make your dreams come true.
            </p>
          </div>

          <div className="md:w-1/2 z-10">
            <img
              ref={(el) => (servicesRef.current[27] = el)}
              src="/Images/watch5.png"
              alt="Engraving and Hand Engraving"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
