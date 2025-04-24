import useGsap from "@/useGsap";
import Image from "next/image";
import React, { useRef } from "react";

function Section3() {
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

  const section3Ref = useRef([]);
  useGsap(section3Ref, {
    stagger: true,
  });
  return (
    <div className=" bg-white">
      <div className=" pt-20 pb-10 space-y-16">
        {services.map((service, index) => (
          <div
            className={`${index == services.length - 1 ? "" : "border-b"}`}
            key={index}
          >
            <div
              className="grid max-w-6xl  px-5 sm:px-10 mx-auto md:grid-cols-2 gap-10 items-center  pb-10"
              ref={(el) => (section3Ref.current[index] = el)}
            >
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
  );
}

export default Section3;
