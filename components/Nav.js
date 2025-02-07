import React from "react";
import { IoCallOutline } from "react-icons/io5";

function Nav() {
  return (
    <nav className="flex justify-between bg-black items-center p-6">
      <img
        src="/Images/Logo.jpg"
        alt="Logo"
        className="mb-4 h-6 object-center"
      />
      <ul className="flex space-x-6">
        <li className="border-b-2 border-white pb-1">HOME</li>
        <li>ABOUT US</li>
        <li>COLLECTION</li>
        <li>SERVICES</li>
        <li>CONTACT</li>
      </ul>
      <div className="text-sm flex items-center gap-1"><IoCallOutline className=" text-lg"/> +44-7969606568</div>
    </nav>
  );
}

export default Nav;
