import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

function Button({ color, text, ref, className, type }) {
  return (
    <button
      type={type}
      ref={ref}
      className={`${className} flex font-medium items-center gap-3 text-base  rounded-xl py-3 px-6 ${
        color == "white"
          ? "text-black bg-white shadow-[0_5px_20px_rgba(255,255,255,0.6)]"
          : "text-white bg-black shadow-[0_5px_20px_rgba(134,134,134,0.6)]"
      } `}
    >
      {text} <FaAngleRight />
    </button>
  );
}

export default Button;
