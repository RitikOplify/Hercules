import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";

const OurCollection = () => {
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
    <>
      <Image
        src="/Images/banner.png"
        height={400}
        width={1440}
        alt="banner"
        layout="responsive"
      />
      <div className=" max-w-[1440px] mx-auto px-5 sm:px-10 bg-white py-[120px] text-black flex flex-col items-center">
        <h1 className="text-2xl tracking-[8%] text-[#000] font-medium mb-[60px]">
          OUR FULL COLLECTION
        </h1>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-[60px]">
          {Array(3)
            .fill(products)
            .flat()
            .map((product,_) => (
              <ProductCard product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default OurCollection;
