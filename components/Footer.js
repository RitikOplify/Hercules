import Link from "next/link";
import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#292321] text-[#ccc]">
      <div className="font-urbanist text-[14px] leading-[1.4] tracking-[1px]">
        <div className="max-w-[1440px] mx-auto  py-[60px] px-5 sm:px-10 flex flex-col items-center text-center gap-[60px]">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12">
            <div className="flex-1 flex flex-col items-center">
              <h3 className="font-bold text-[#ccc] text-sm leading-[140%] tracking-[1px] mb-6">
                TALK TO US
              </h3>
              <p className="text-[18px] tracking-[2px] text-[#ccc] leading-[140%] font-medium">
                44–7969606568
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <img
                src="/Images/Hercules-Logo.png"
                alt="Statue"
                className="w-[100px] h-[100px] object-cover rounded-full mb-6"
              />
              <p className="text-base leading-[140%] tracking-[1px] font-medium">
                Our desire is to create your <br /> bespoke watch.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center">
              <h3 className="font-bold text-[#ccc] leading-[140%] text-sm tracking-[1px] mb-6">
                OPENING HOURS
              </h3>
              <p className="text-[18px] tracking-[2px] text-[#ccc] leading-[140%] font-medium">
                9:30AM – 5:30PM | MON – FRI
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-[0.4px] border-[#9B8959] py-[60px] ">
          <div className=" max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-5 sm:px-10">
            <div>
              <h4 className="text-[#9B8959] font-bold mb-[24px] leading-[140%] tracking-[1px]">
                LINKS
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href=""
                    className="text-[#ccc] font-medium leading-[140%] tracking-[1px]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#ccc] font-medium leading-[140%] tracking-[1px]"
                  >
                    Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#ccc] font-medium leading-[140%] tracking-[1px]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-[#ccc] font-medium leading-[140%] tracking-[1px]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#9B8959] font-bold mb-[24px] leading-[140%] tracking-[1px]">
                ADDRESS
              </h4>
              <p className="text-[#ccc] font-medium leading-[140%] tracking-[1px]">
                Hercules Watch Co Ltd, Hyde House,
                <br />
                The Hyde, Edgware Road, London,
                <br />
                NW9 6LH
              </p>
            </div>

            <div>
              <h4 className="text-[#9B8959] font-bold mb-[24px] leading-[140%] tracking-[1px]">
                EMAIL US
              </h4>
              <p className="text-[#ccc] font-medium leading-[140%] tracking-[1px]">
                hello@herculeswatch.com
              </p>
            </div>

            <div>
              <h4 className="text-[#9B8959] font-bold mb-[24px]">FOLLOW</h4>
              <div className="flex space-x-6 text-white text-[20px]">
                <Link href="">
                  <FaX />
                </Link>
                <Link href="">
                  <FaFacebook />
                </Link>
                <Link href="">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[0.4px] border-[#9B8959] py-6 text-center text-[#ccc] text-sm px-5 sm:px-10">
          Copyright © 2025 Hercules Watch Co | Terms & Condition
        </div>
      </div>
    </footer>
  );
};

export default Footer;
