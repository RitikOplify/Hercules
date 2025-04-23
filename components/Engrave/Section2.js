import Image from "next/image";

const Section2 = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden text-white">
      <Image
        src="/Engraved/banner_904L.png"
        alt="Engraved Watch"
        layout="fill"
        objectFit="cover"
        className="brightness-[0.7]"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-5 sm:px-10">
        <h2 className="text-[32px] leading-[140%] mb-6 font-semibold text-white">
          Dedicated to Perfection
        </h2>
        <p className="max-w-3xl text-[16px] leading-[140%] text-gray-100">
          Engraving on 904L steel is no small feat. The metal's strength demands
          <span className="font-semibold text-white">
            {" "}
            specialized tools, refined techniques, and immense patience
          </span>
          . But its hardness also means that every etched line lasts—
          <span className="font-semibold text-white">
            a permanent expression of identity
          </span>
          , faith, or legacy. That’s why we chose it for our first fully
          hand-engraved timepiece.
        </p>
      </div>
    </div>
  );
};

export default Section2;
