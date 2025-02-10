import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-[#fff] py-20 pb-10">
      <div className=" max-w-[1440px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/Images/Logo.jpg"
            alt="Logo"
            className="mb-10 h-20 w-auto"
          />
        </div>
        <div className=" flex gap-10 justify-between flex-wrap">
          <div className=" flex flex-col gap-9">
            <h4 className="text-base font-medium">ADDRESS</h4>
            <p className=" text-[#808080] text-sm font-normal">
              Hercules Watch Co Ltd, Hyde House,
              <br />
              The Hyde, Edgware Road, London,
              <br />
              NW9 6LH
            </p>
          </div>
          <div className=" flex flex-col gap-9">
            <h4 className="text-base font-medium">EMAIL</h4>
            <p className="text-[#808080] text-sm font-normal">
              hello@herculeswatch.com
            </p>
          </div>

          <div className=" flex flex-col gap-9">
            <h4 className="text-base font-medium">CONTACT</h4>
            <p className="text-[#808080] text-sm font-normal">+44-7969606568</p>
          </div>
          <div>
            <div className=" flex flex-col gap-9">
              <h4 className="text-base font-medium">FOLLOW US</h4>
              <div className="flex justify-start space-x-4">
                <Link href="#" className="text-white hover:text-[#808080]">
                  <FaXTwitter />
                </Link>
                <Link href="#" className="text-white hover:text-[#808080]">
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#808080] text-sm font-normal mt-[80px] text-start">
          <p>Copyright © 2025 Hercules Watch Co | Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
