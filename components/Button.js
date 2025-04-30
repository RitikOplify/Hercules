"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Button({ text, ref, className, type, bg }) {
  const router = useRouter();
  const onclickHandler = () => {
    router.push("/contact-us");
  };
  return (
    <button
      type={type}
      ref={ref}
      className={`${className} flex font-bold bg-[#292321]
       tracking-[2px] 2xl:leading-[1.4] 2xl:text-[1rem] text-white items-center gap-3 text-sm md:text-base py-4 px-8`}
      onClick={onclickHandler}
    >
      <span className="">{text}</span>{" "}
      <IoIosArrowForward size={24} className="-me-2" />
    </button>
  );
}

export default Button;
