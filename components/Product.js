import React from "react";
import { FaAngleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const RolexProductCard = () => {
  const products = [
    {
      name: "ROLEX GMT-MASTER II, DLC COATED STEEL, 18 CT YELLOW GOLD 116713LN",
      price: "£18,499.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL, 18 CT EVEROSE GOLD 116621",
      price: "£18,499.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL AND STEEL WITH PLATINUM BEZEL 116622",
      price: "£13,995.00",
      image: "/Images/watch7.png",
    },
  ];
  return (
    <div>
      <div className="max-w-[1440px] bg-black mx-auto">
        <div className="w-full pt-[120px] pb-10 px-5 sm:px-10 grid md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-start">
            <div className="flex flex-col items-center">
              <img
                src="/Images/watch6.png"
                alt="Rolex GMT-Master II"
                className="w-full max-w-sm rounded-2xl shadow-lg"
              />
              <div className="grid grid-cols-4 gap-2 mt-10">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="w-16 h-16 bg-gray-300 rounded" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-[72px]">
            <div className=" space-y-9">
              <h1 className="text-base font-medium tracking-[8%] text-[#fff]">
                ROLEX GMT-MASTER II, DLC COATED STEEL, 18 CT YELLOW GOLD
                116713LN
              </h1>
              <p className="text-base font-medium text-[#808080]">£18,499.00</p>
              <p className=" text-[#fff] leading-6 text-base">
                Hercules Watch Co present a DLC and Yellow Gold Rolex GMT Master
                II created to the highest standards. The case and bracelet have
                been uniquely coated in scratch resistant DLC without
                interfering with the aesthetic beauty of the gold. The dial and
                date wheel have also been customised to blend beautifully with
                the watch.
              </p>
              <button className="bg-white w-fit text-black py-2 px-6 rounded-xl shadow hover:bg-gray-200 transition">
                🛒 BUY PRODUCT
              </button>
            </div>

            <div>
              <h2 className=" mb-5 text-xl font-medium text-[#fff]">
                ADDITIONAL INFORMATION
              </h2>
              <div className="flex gap-5 text-[13px] text-[#fff]">
                <div className=" flex flex-col gap-3 font-normal ">
                  <span>AGE:</span>
                  <span>GENDER:</span>
                  <span>BOX AND PAPERS:</span>
                  <span>CASE SIZE:</span>
                  <span>STRAP LENGTH:</span>
                </div>
                <div className=" flex flex-col gap-3 font-light">
                  <span>25th April 2018</span>
                  <span>Mens</span>
                  <span>Box, Manuals, Guarantee, Booklet, Swing Tag</span>
                  <span>40 mm</span>
                  <span>Adjustable up to 19 cm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col py-[120px] bg-white gap-6">
          <div className="w-full px-5 sm:px-10 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-[60px] bg-white">
            {products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>

          <div className=" w-full bg-white flex justify-center">
            <button className=" bg-black flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6">
              DISCOVER <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolexProductCard;
