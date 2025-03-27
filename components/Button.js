import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Button({ color, text, ref, className, type }) {
  return (
    <button
      type={type}
      ref={ref}
      className={`${className} flex font-medium bg-gold shadow-[0_5px_20px_rgba(191,141,103,0.6)] 2xl:leading-[1.4] 2xl:text-[1rem] text-white items-center gap-3 text-base  rounded-xl py-3 px-6`}
    >
      {text} <IoIosArrowForward size={20} />
    </button>
  );
}

export default Button;
