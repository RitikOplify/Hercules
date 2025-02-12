import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

function AboutUs() {
  return (
    <>
      <Image
        src="/Images/banner.png"
        height={400}
        width={1440}
        alt="banner"
        layout="responsive"
      />

      <div className=" bg-white text-black max-w-[1440px] mx-auto">
        <div className=" py-[120px] flex justify-center px-5 sm:px-10">
          <p className=" max-w-[590px] text-base leading-8 font-normal text-[#808080] text-start sm:text-center">
            Hercules Watch Co are an independent company that bring together
            over 100 years in watch making expertise. Our teams of expert watch
            technicians, engravers, watch dial artisans coupled with unrivalled
            retail expertise, mean that every watch we make is totally unique.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:h-[600px]">
          <div className="w-full sm:w-[55%] py-5 bg-black flex justify-center items-center">
            <img src="/Images/watch5.png" alt="Rolex Watch" />
          </div>

          <div className="w-full sm:w-[45%] bg-white flex flex-col justify-center items-start px-5 py-10 sm:p-10">
            <h1 className="text-2xl tracking-[8%] font-medium mb-6 text-black">
              WE GOT SOMETHING FOR EVERYONE
            </h1>
            <p className="text-base text-[#808080] font-normal">
              We are the first company to be able to offer a selection of 2
              colour combination watches, unique to the industry. Our closely
              guarded production techniques allow us to create watches as
              individual as you are.
            </p>

            <button className="mt-10 bg-black flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6">
              Contact us <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:h-[600px] mt-20">
          <div className="w-full sm:w-[45%] bg-white flex flex-col justify-center items-start px-5 py-10 sm:p-10">
            <h1 className="text-2xl tracking-[8%] font-medium mb-6 text-black">
              WE GOT SOMETHING FOR EVERYONE
            </h1>
            <p className="text-base text-[#808080] font-normal">
              We are the first company to be able to offer a selection of 2
              colour combination watches, unique to the industry. Our closely
              guarded production techniques allow us to create watches as
              individual as you are.
            </p>

            <button className="mt-10 bg-black flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6">
              Contact us <FaAngleRight />
            </button>
          </div>

          <div className="w-full sm:w-[55%] py-5 bg-black flex justify-center items-center">
            <img src="/Images/watch5.png" alt="Rolex Watch" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
