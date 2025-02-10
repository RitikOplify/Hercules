import React from "react";
import { FaAngleRight } from "react-icons/fa6";

function History() {
  return (
    <section className="bg-gray-50 text-black text-center py-[120px] px-5 sm:px-10">
      <div className=" max-w-[1440px] mx-auto">
        <h2 className="text-2xl font-medium text-black">HISTORY OF HERITAGE</h2>
        <p className="mt-4 max-w-2xl mx-auto text-start sm:text-center font-light text-base text-[#808080]">
          At Hercules Watch Co, we aspire to make something legendary that would
          stand out not only in its unique form and design but also in its
          exceptional quality and durability. Our passion for quality timepieces
          leads us to push the industry's standards.
        </p>
        <p className="mt-4 text-start sm:text-center font-light text-base text-[#808080]">
          HWC believes that the endurance of a watch should be coupled with
          aesthetic beauty.
        </p>
        <div className=" w-full flex justify-center">
          <button className="mt-6 bg-black flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6">
            DISCOVER <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default History;
