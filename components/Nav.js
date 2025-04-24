"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "COLLECTION", href: "/collection" },
    {
      name: "SERVICES",
      href: "/services",
      subNavs: [
        { name: "CUSTOM", href: "/custom" },
        { name: "PRESTIGE", href: "/prestige" },
        { name: "ENGRAVED", href: "/engraved-art" },
        { name: "CONCEPT", href: "/concept" },
      ],
    },
    { name: "CONTACT", href: "/contact-us" },
  ];

  useEffect(() => {
    const nav = navRef.current;
    let lastDirection = -1; // Track last scroll direction

    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (!menuOpen && lastDirection !== self.direction) {
          lastDirection = self.direction;
          gsap.to(nav, {
            y: self.direction === 1 ? -100 : 0,
            duration: 0.3,
            ease: "power2.out",
          });
        } else if (menuOpen) {
          gsap.to(nav, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  return (
    <>
      <nav ref={navRef} className="bg-white z-20 fixed w-full border-b-[1px]">
        <div className="flex px-5 sm:px-10 bg-white relative justify-between mx-auto items-center py-4 ">
          <div className=" hidden md:flex"></div>
          <Link
            href={"/"}
            className="static md:absolute h-6 overflow-hidden top-5 sm:left-10 md:h-20 md:w-20 sm:bg-black md:rounded-full flex items-center justify-center"
          >
            <Image
              src="/Images/Logo.jpg"
              alt="Logo"
              height={50}
              width={50}
              className="object-contain h-6 md:h-[50px]"
            />
          </Link>
          {/* <ul className="hidden md:flex space-x-6 tracking-[1px] text-[#111]">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "border-b-2 border-gold text-gold pb-1"
                      : ""
                  } text-xs font-medium`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul> */}
          <ul className="hidden md:flex space-x-6 tracking-[1px] text-[#111] relative z-50">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "border-b-2 border-gold text-gold pb-1"
                      : ""
                  } text-xs font-medium tracking-[1px]`}
                >
                  {item.name}
                </Link>

                {item.subNavs && (
                  <ul className="absolute left-0 top-full pt-4 -z-10 bg-white opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                    <div className="pb-5 pt-1 pl-5 pr-10 shadow-md">
                      {item.subNavs.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className={`text-xs block ${
                              pathname === subItem.href
                                ? "border-b-2 border-gold text-gold"
                                : ""
                            } py-2 text-xs font-medium tracking-[1px]`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="text-sm hidden md:flex items-center gap-1 text-[#111]">
            <IoCallOutline className="text-lg" /> +44-7969606568
          </div>

          {menuOpen && (
            <div
              className="md:hidden absolute left-0 flex justify-end w-screen bg-black bg-opacity-15 top-[56.67px]"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <div
                className="flex flex-col gap-4 w-4/5 h-screen p-5 sm:p-10 bg-white text-[#111]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ul className=" space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name} onClick={() => setMenuOpen(!menuOpen)}>
                      <Link
                        href={item.href}
                        className={`${
                          pathname === item.href
                            ? "border-b-2 border-gold text-gold pb-1"
                            : ""
                        } text-xs font-medium tracking-[1px]`}
                      >
                        {item.name}
                      </Link>
                      {item.subNavs && (
                        <ul className=" pl-4">
                          {item.subNavs.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className={`text-xs block w-fit ${
                                  pathname === subItem.href
                                    ? "border-b-2 border-gold text-gold"
                                    : ""
                                } text-xs mt-4 font-medium tracking-[1px]`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="text-sm flex items-center gap-1 py-[2px]">
                  <IoCallOutline className="text-xs" /> +44-7969606568
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none text-lightblack"
            aria-label="Toggle Navigation Menu"
          >
            <div
              className={`w-6 h-0.5 bg-current mb-1 transition-transform ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-current mt-1 transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </nav>
      <div className=" h-[56.67px] w-full bg-white -z-10"></div>
    </>
  );
}

export default Nav;
