import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-lightblack border-t-[2px] py-20 pb-10">
      <div className=" max-w-[1440px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center mb-10">
          <div className=" p-5 bg-black rounded-full">
            <img
              src="/Images/Logo.jpg"
              alt="Logo"
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
        <div className=" flex gap-10 justify-between flex-wrap">
          <div className=" flex flex-col gap-9">
            <p className="text-base text-gold font-medium">ADDRESS</p>
            <p className=" text-white text-sm font-normal">
              Hercules Watch Co Ltd, Hyde House,
              <br />
              The Hyde, Edgware Road, London,
              <br />
              NW9 6LH
            </p>
          </div>
          <div className=" flex flex-col gap-9">
            <p className="text-base text-gold font-medium">EMAIL</p>
            <p className="text-white text-sm font-normal">
              hello@herculeswatch.com
            </p>
          </div>

          <div className=" flex flex-col gap-9">
            <p className="text-base text-gold font-medium">CONTACT</p>
            <p className="text-white text-sm font-normal">+44-7969606568</p>
          </div>
          <div>
            <div className=" flex flex-col gap-9">
              <p className="text-base text-gold font-medium">FOLLOW US</p>
              <div className="flex justify-start space-x-4">
                <Link
                  aria-label="x"
                  href="#"
                  className="text-white hover:text-gold"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  aria-label="facebook"
                  href="#"
                  className="text-white hover:text-gold"
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-sm font-normal mt-[80px] text-start">
          <p>Copyright © 2025 Hercules Watch Co | Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
