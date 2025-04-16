"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";
import Button from "../Button";

function Services() {
  const servicesRef = useRef([]);
  useGsap(servicesRef);
  const services = [
    {
      title: "Dial Restoration",
      subtitle: "Precision and craftsmanship, down to the dial.",
      description:
        "Our dial restoration service returns your watch to its original elegance. We can:",
      points: [
        "Restore dials to closely match the original",
        "Customize the dial, date wheel, and hands in the colour and style of your choice",
      ],
      footer: "Explore examples in our bespoke watch gallery.",
      image: "/ImageCarousel/IMG_1185.png",
    },
    {
      title: "Bracelet Repairs",
      subtitle: "Restore comfort and style.",
      description: "Our technicians and industry partners can:",
      points: [
        "Repair and restore bracelets",
        "Source and supply new links and complete bracelets",
      ],
      footer: "Contact us for a personalised quote.",
      image: "/ImageCarousel/IMG_1185.png",
    },
    {
      title: "Watch Movements",
      subtitle: "Reliable performance, powered by the best.",
      description:
        "If your watch movement is beyond repair, we can source high-quality replacements for many of the industry's top timepieces.",
      points: [],
      image: "/ImageCarousel/IMG_1185.png",
    },
  ];
  return (
    <div>
      <Image
        src="/Images/about_banner.png"
        height={400}
        width={1440}
        alt="banner"
        className="w-full"
      />
      <section className="bg-white py-20 px-5 sm:px-10">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1">
            DLC Watch De-Coating <br /> and Restoration
          </h1>
          <p className="text-sm text-[#9B8959] font-medium mb-6">
            Restore. Reimagine. Refinish.
          </p>

          <p className="text-gray-700 mb-4">
            Welcome to Hercules Watch Co – one of the UK’s leading DLC
            de-coating and restoration specialists. If your watch has a worn or
            damaged DLC (Diamond-Like Carbon) coating, we offer expert services
            to either restore it to its original finish or completely de-coat
            and re-coat it, based on your preferences.
          </p>
          <p className="text-gray-900 font-semibold mb-6">
            Our highly specialized process may take several months,
            <br className="hidden md:inline" /> depending on the coating and
            condition of the watch. Rest assured that our pricing remains highly
            competitive.
          </p>

          <div className="mb-8">
            <Image
              src="/Services/gtm_master2.webp"
              height={400}
              width={400}
              alt="Watch Restoration"
              className="w-full"
            />
          </div>

          <div>
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

      <section className=" bg-img">
        <div
          className="mx-auto flex-col flex md:flex-row items-center md:h-[calc(100vh-56.67px)]
 justify-center px-5 gap-10 sm:px-10 py-20"
        >
          <div className="w-full md:w-1/2 h-full flex justify-center">
            <Image
              src="/Images/yatch_master_2.png"
              alt="Luxury Watch"
              width={800}
              height={600}
              priority
              className="object-contain h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="mt-10 md:mt-0 mx-auto">
              <h3 className=" text-[32px] font-semibold mb-1 text-[#111]">
                Servicing & Full Restoration
              </h3>
              <p className="text-sm text-[#9B8959] font-medium mb-6">
                Expert care from certified professionals.
              </p>
              <p className="mb-8 text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm">
                At Hercules Watch Co, we take pride in having some of the finest
                watch technicians in the UK. We offer full servicing for nearly
                all major watch brands.
              </p>
              <div>
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

      <div className=" bg-white">
        <div className=" pt-20 pb-10 space-y-16">
          {services.map((service, index) => (
            <div
              className={`${index == services.length - 1 ? "" : "border-b"}`}
              key={index}
            >
              <div className="grid max-w-6xl  px-5 sm:px-10 mx-auto md:grid-cols-2 gap-10 items-center  pb-10">
                <div>
                  <h2 className="text-2xl text-black font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-yellow-800 mt-1 font-medium italic">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-gray-700">{service.description}</p>
                  <ul className="list-disc list-inside mt-3 text-gray-600 space-y-1">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  {service.footer && (
                    <p className="mt-4 text-sm italic underline cursor-pointer text-gray-700">
                      {service.footer}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    height={350}
                    width={350}
                    className=" w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" overflow-hidden">
        <div className="flex bg-black flex-col py-[60px] gap-10 md:gap-0 sm:py-[120px] md:flex-row max-w-[1440px] mx-auto">
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/Services/engrave_left.png"
              alt="Watch"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-5 sm:px-10">
            <h2 className="text-[32px] font-semibold mb-1 text-[#fff]">
              Engraving and Hand engraving
            </h2>
            <p className="text-sm text-[#9B8959] font-medium mb-6">
              Precision and craftsmanship, down to the dial.
            </p>
            <p className="mb-8 text-base text-[#ccc] leading-[140%] tracking-[0.6px] font-medium max-w-sm">
              Our engraving services blend traditional techniques with
              cutting-edge technology. We offer$
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#ccc]">
              <li>Hand engraving by skilled artisan</li>
              <li>High-precision machine engraving for intricate designs</li>
            </ul>
            <p className="mt-4 text-base max-w-lg underline cursor-pointer text-[#ccc]">
              Average turnaround: approx. 8 months for bespoke pieces. Share
              your vision – we’ll make it a reality.
            </p>
          </div>
        </div>
      </div>

      <section className=" bg-white">
        <div
          className="mx-auto flex-col flex md:flex-row items-center md:h-[calc(100vh-56.67px)]
 justify-center px-5 gap-10 sm:px-10 py-20"
        >
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="mt-10 md:mt-0 mx-auto">
              <h3 className=" text-[32px] font-semibold mb-1 text-[#111]">
                Watch Customisation & DLC Coatings
              </h3>
              <p className="text-sm text-[#9B8959] font-medium mb-6">
                Tailor your timepiece to your style.
              </p>
              <p className="mb-8 text-base text-[#292321] leading-[140%] tracking-[0.6px] font-medium max-w-sm">
                Looking for a Hercules makeover? From minor changes to full
                transformations, we offer$
              </p>
              <div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Partial customisation (name engraving on the dial or case
                    back)
                  </li>
                  <li>Complete watch makeover</li>
                  <li>
                    Dual-colour DLC coatings a Hercules Watch Co specialty
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-base italic underline cursor-pointer text-gray-700">
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
            />
          </div>
        </div>
      </section>

      {/* <div className=" bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-5 py-[120px] sm:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-0">
          
          <div className="flex justify-center">
            <Image
              ref={(el) => (servicesRef.current[9] = el)}
              src="/Services/grey-watch.png"
              width={800}
              height={600}
              alt="Watch Service"
              className="max-w-full h-auto"
            />
          </div>

          
          <div>
            <h2
              ref={(el) => (servicesRef.current[10] = el)}
              className="text-base leading-6 mb-4 text-white"
            >
              Hercules Watch Co have some of the finest watch technicians in the
              UK today. We are able to offer a complete service to almost all
              brands of watches by our qualified technicians.
            </h2>

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
        <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-0  py-[120px]">
          <div className="md:w-1/2 space-y-6 my-auto px-5 sm:px-10">
            <div>
              <h3
                ref={(el) => (servicesRef.current[18] = el)}
                className=" text-base tracking-[8%] font-normal text-gold"
              >
                Dial restoration:
              </h3>
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
              <h3
                ref={(el) => (servicesRef.current[20] = el)}
                className="text-base tracking-[8%] font-normal text-gold"
              >
                Bracelet repairs:
              </h3>
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
              <h3
                ref={(el) => (servicesRef.current[22] = el)}
                className="text-base tracking-[8%] font-normal text-gold"
              >
                Movements:
              </h3>
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
            <Image
              ref={(el) => (servicesRef.current[24] = el)}
              src="/Services/rollex-shades.webp"
              alt="Watch Dial Restoration"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className=" overflow-hidden">
        <div className="flex bg-black flex-col py-[60px] gap-10 md:gap-0 sm:py-[120px] md:flex-row max-w-[1440px] mx-auto">
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <Image
              ref={(el) => (servicesRef.current[25] = el)}
              src="/Services/engrave_left.png"
              alt="Watch"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 items-start px-5 sm:px-10 text-gold">
            <h2
              ref={(el) => (servicesRef.current[26] = el)}
              className="text-2xl font-medium"
            >
              Engraving and Hand engraving
            </h2>
            <p
              ref={(el) => (servicesRef.current[27] = el)}
              className="text-base font-normal text-white"
            >
              We have a passion for creating the unique. Our engravers are able
              to both engrave by hand and also we use the latest technology to
              create exceptionally detailed machine engraved images. The
              processes are complicated and time consuming, averaging about 4
              months for a unique time piece. But it is worth the wait. Bring us
              your thoughts and designs and let us make your dreams come true.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-0  py-[120px]">
          <div className="md:w-1/2 space-y-6 my-auto px-5 sm:px-10">
            <div className=" space-y-6">
              <h2
                ref={(el) => (servicesRef.current[28] = el)}
                className=" text-base tracking-[8%] font-normal text-gold"
              >
                Watch Customisation and DLC Coatings
              </h2>
              <p
                ref={(el) => (servicesRef.current[29] = el)}
                className="text-[#808080] font-normal"
              >
                If you have a watch that requires a Hercules makeover, please
                contact us for a quote. We are able to part customise your watch
                from just putting a name on the dial or case back to full
                customisation.
              </p>
              <p
                ref={(el) => (servicesRef.current[30] = el)}
                className="text-[#808080] font-normal"
              >
                Our specialities are complete restorations and two colour DLC
                creations the finest in the industry.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <Image
              ref={(el) => (servicesRef.current[31] = el)}
              src="/Services/gtm_master2.webp"
              alt="Watch Dial Restoration"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Services;
