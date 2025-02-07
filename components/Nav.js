import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";

function Nav() {
  return (
    <nav className=" bg-black">
      <div className="flex justify-between max-w-[1440px] px-5 sm:px-10 mx-auto  bg-black items-center py-5">
        <img
          src="/Images/Logo.jpg"
          alt="Logo"
          className="mb-4 h-6 object-center"
        />
        <ul className="flex space-x-6">
          <Link href={"/"}>
            <li className="border-b-2 border-white pb-1">HOME</li>
          </Link>

          <li>ABOUT US</li>
          <Link href={"/collection"}>
            <li>COLLECTION</li>
          </Link>
          <Link href={"/services"}>
            <li>SERVICES</li>
          </Link>
          <li>CONTACT</li>
        </ul>
        <div className="text-sm flex items-center gap-1">
          <IoCallOutline className=" text-lg" /> +44-7969606568
        </div>
      </div>
    </nav>
  );
}

export default Nav;
