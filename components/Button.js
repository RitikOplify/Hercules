import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Button({ text, ref, className, type, bg }) {
  return (
    <button
      type={type}
      ref={ref}
      className={`${className} flex font-bold ${
        bg ? `bg-[${bg}]` : "bg-[#292321]"
      } tracking-[2px] 2xl:leading-[1.4] 2xl:text-[1rem] text-white items-center gap-3 text-base py-4 px-8`}
    >
      {text} <IoIosArrowForward size={24} />
    </button>
  );
}

export default Button;
