import Image from "next/image";
import React from "react";

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
        <div className=" py-14 flex justify-center px-5 sm:px-10">
          <p className=" max-w-[590px] text-start sm:text-center">
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
            <h1 className="text-3xl font-bold mb-4 text-black">
              WE GOT SOMETHING FOR EVERYONE
            </h1>
            <p className="text-gray-500 mb-6">
              We are the first company to be able to offer a selection of 2
              colour combination watches, unique to the industry. Our closely
              guarded production techniques allow us to create watches as
              individual as you are.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition duration-300 tracking-wider">
              Contact us &rarr;
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:h-[600px] mt-20">
          <div className="w-full sm:w-[45%] bg-white flex flex-col justify-center items-start px-5 py-10 sm:p-10">
            <h1 className="text-3xl font-bold mb-4 text-black">
              WE GOT SOMETHING FOR EVERYONE
            </h1>
            <p className="text-gray-500 mb-6">
              We are the first company to be able to offer a selection of 2
              colour combination watches, unique to the industry. Our closely
              guarded production techniques allow us to create watches as
              individual as you are.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition duration-300 tracking-wider">
              Contact us &rarr;
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
