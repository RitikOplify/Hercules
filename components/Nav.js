"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "COLLECTION", href: "/collection" },
    { name: "SERVICES", href: "/services" },
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
  // if (!menuOpen) return null;

  return (
    <>
      <nav
        ref={navRef}
        className="bg-black z-20 fixed w-full border-b-[2px] text-white "
      >
        <div className="flex bg-black relative justify-between mx-auto items-center py-[18px]">
          <Link href={"/"}>
            <img
              src="/Images/Logo.jpg"
              alt="Logo"
              className="mb-4 h-6 pl-5 sm:pl-10 object-center"
            />
          </Link>
          {/* <div></div> */}
          {/* <div className=" flex items-center justify-center h-[100px] w-[100px] absolute top-[18px] left-5 sm:left-10 z-20 rounded-full bg-black">
            <img
              src="/Images/Logo.jpg"
              alt="logo"
              className=" h-20 w-20 object-contain"
            />
          </div> */}
          <ul className="hidden md:flex space-x-6 text-[#fff]">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href ? "border-b-2 border-white pb-1" : ""
                  } text-xs py-4`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-sm hidden pr-5 sm:pr-10 md:flex items-center gap-1 text-white">
            <IoCallOutline className="text-lg" /> +44-7969606568
          </div>

          {menuOpen && (
            <div
              className="  md:hidden absolute flex justify-end w-screen bg-black bg-opacity-15 top-[76px]"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <div
                className="flex flex-col gap-4 w-4/5 h-screen p-5 sm:p-10 bg-white text-black"
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
                            ? "border-b-2 border-white pb-1"
                            : ""
                        } text-xs`}
                      >
                        {item.name}
                      </Link>
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
            className="md:hidden focus:outline-none pr-5 sm:pr-10 text-white"
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
      <div className=" h-[76px] w-full bg-black -z-10"></div>
    </>
  );
}

export default Nav;
