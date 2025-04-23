import Image from "next/image";

const Section2 = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden text-white">
      <Image
        src="/Prestige/prestige_perfection.png"
        alt="Engraved Watch"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute bg-gradient-to-t from-black/55 to-transparent inset-0 flex flex-col items-center justify-end pb-20 text-center px-5 sm:px-10">
        <h2 className="text-[32px] leading-[140%] mb-6 font-semibold text-white">
          Dedicated to Perfection
        </h2>
        <p className="max-w-3xl text-[16px] leading-[140%] text-gray-100">
          This collection is the result of{" "}
          <span className=" font-bold">
            relentless innovation and precision engineering.
          </span>{" "}
          After years of development and testing, we’ve achieved what others
          have not—{" "}
          <span className=" font-bold">
            a seamless fusion of DLC with dual-tone customisation
          </span>
          , setting a new benchmark in luxury watch aesthetics.
        </p>
      </div>
    </div>
  );
};

export default Section2;
