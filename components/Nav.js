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

    gsap.to(nav, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (!menuOpen) {
            gsap.to(nav, {
              y: self.direction === 1 ? -100 : 0,
              duration: 0.2,
              ease: "easeInOut",
            });
          }
        },
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="bg-black z-20 fixed w-full border-b-[2px] text-white "
      >
        <div className="flex bg-black relative justify-between mx-auto items-center py-[18px]">
          {/* <Link href={"/"}>
            <img
              src="/Images/Logo.jpg"
              alt="Logo"
              className="mb-4 h-6 pl-5 sm:pl-10 object-center"
            />
          </Link> */}
          <div></div>
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
            <div className=" py-5 pl-5 sm:pl-10  md:hidden border-t-[2px] absolute w-screen bg-black top-[76px]">
              <div className="flex flex-col gap-4">
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

                <div className="text-sm flex items-center gap-1 py-[2px] text-white">
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
