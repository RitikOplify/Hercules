import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className=" max-w-[1440px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center mb-6">
          <img src="/Images/Logo.jpg" alt="Logo" className="mb-4 h-20 w-auto" />
        </div>
        <div className=" flex gap-10 justify-between flex-wrap">
          <div>
            <h4 className="text-lg font-semibold mb-2">ADDRESS</h4>
            <p className="text-gray-400">
              Hercules Watch Co Ltd, Hyde House,
              <br />
              The Hyde, Edgware Road, London,
              <br />
              NW9 6LH
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">EMAIL</h4>
            <p className="text-gray-400">hello@herculeswatch.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">CONTACT</h4>
            <p className="text-gray-400">+44-7969606568</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">FOLLOW US</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-white hover:text-gray-400">
                <FaXTwitter />
              </Link>
              <Link href="#" className="text-white hover:text-gray-400">
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-gray-500 mt-6 text-start">
          <p>Copyright © 2025 Hercules Watch Co | Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
