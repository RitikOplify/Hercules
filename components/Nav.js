"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCallOutline } from "react-icons/io5";

function Nav() {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "COLLECTION", href: "/collection" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact-us" },
  ];

  return (
    <nav className="bg-black">
      <div className="sm:flex hidden justify-between max-w-[1440px] px-5 sm:px-10 mx-auto items-center py-5">
        <img
          src="/Images/Logo.jpg"
          alt="Logo"
          className="mb-4 h-6 object-center"
        />
        <ul className="flex space-x-6 text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <span
                  className={`${
                    pathname === item.href ? "border-b-2 border-white pb-1" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-sm flex items-center gap-1 text-white">
          <IoCallOutline className="text-lg" /> +44-7969606568
        </div>
      </div>
    </nav>
  );
}

export default Nav;
