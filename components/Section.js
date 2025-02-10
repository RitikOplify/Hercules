import React from "react";

const SectionBlock = ({ title, description, imgSrc, reverse, className }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } sm:h-[600px]`}
    >
      <div className="w-full sm:w-1/2 bg-white flex flex-col justify-center items-start px-5 py-10 sm:p-10">
        <h1 className="text-3xl font-bold mb-4 text-black">{title}</h1>
        <p className="text-gray-500 mb-6">{description}</p>
        <button
          className="flex items-center text-black font-semibold hover:underline"
          aria-label={`Explore more about ${title}`}
        >
          <span className="mr-1">&#8250;</span> EXPLORE MORE
        </button>
      </div>
      <div
        className={`${className} w-full sm:w-1/2 bg-black flex justify-center items-center py-5`}
      >
        <img
          src={imgSrc}
          alt={`${title} Watch`}
          className="object-cover max-h-full"
        />
      </div>
    </div>
  );
};

const Section = () => {
  const sections = [
    {
      title: "CUSTOM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis.",
      imgSrc: "/Images/watch1.jpg",
      reverse: false,
    },
    {
      title: "PRESTIGE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis.",
      imgSrc: "/Images/watch2.jpg",
      reverse: true,
      className: "p-0",
    },
    {
      title: "CONCEPT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis.",
      imgSrc: "/Images/watch6.png",
      reverse: false,
    },
    {
      title: "ENGRAVED ART",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis fermentum, congue mi ut, sodales turpis.",
      imgSrc: "/Images/watch5.png",
      reverse: true,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      {sections.map((section, index) => (
        <SectionBlock key={index} {...section} className={section.className} />
      ))}
    </div>
  );
};

export default Section;
