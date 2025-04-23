import Image from "next/image";

const Section2 = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden text-white">
      <Image
        src="/Custom/custom_perfection.png"
        alt="Engraved Watch"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute bg-gradient-to-t from-black/55 to-transparent inset-0 flex flex-col items-center justify-end pb-20 text-center px-5 sm:px-10">
        <h2 className="text-[32px] leading-[140%] mb-6 font-semibold text-white">
          Dedicated to Perfection
        </h2>
        <p className="max-w-3xl text-[16px] leading-[140%] text-gray-100">
          Not all DLC is created equal. At HWC, we’ve spent years refining our
          approach to achieve what we believe is{" "}
          <span className=" font-bold">
            the highest grade of DLC coating available.
          </span>{" "}
          Each watch we treat merges{" "}
          <span className=" font-bold">endurance and elegance</span>, engineered
          to last and designed to turn heads.
        </p>
      </div>
    </div>
  );
};

export default Section2;
