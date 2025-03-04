"use client";
import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import useGsap from "@/useGsap";
import Link from "next/link";

const RolexProductCard = ({ product, collections }) => {
  const productRef = useRef([]);

  const sCardRef = useRef([]);
  useGsap(sCardRef, { stagger: true });
  useGsap(productRef);

  return (
    <div>
      <div className=" bg-white">
        <div className="max-w-[1440px] mx-auto py-[120px] px-5 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-start">
            <div className="flex w-full flex-col items-center">
              <img
                ref={(el) => (productRef.current[0] = el)}
                src={product.image}
                alt={product.name}
                className="w-full max-w-sm"
              />
              <div className="grid grid-cols-4 gap-2 mt-10">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    ref={(el) => (sCardRef.current[index] = el)}
                    className="w-16 h-16 bg-gray-300 rounded"
                  >
                    <img
                      src={img}
                      alt={`Product image ${index}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-[72px]">
            <div className=" space-y-9">
              <h1
                ref={(el) => (productRef.current[1] = el)}
                className="text-base font-medium tracking-[8%] text-black"
              >
                {product.name}
              </h1>
              <p
                ref={(el) => (productRef.current[2] = el)}
                className="text-base font-medium text-[#808080]"
              >
                {product.price}
              </p>
              <p
                ref={(el) => (productRef.current[3] = el)}
                className=" text-black leading-6 text-base"
              >
                {product.desc}
              </p>
              <div ref={(el) => (productRef.current[4] = el)}>
                <Link
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black w-fit text-white py-2 px-6 rounded-xl shadow hover:bg-gray-200 transition"
                >
                  🛒 BUY PRODUCT
                </Link>
              </div>
            </div>

            <div>
              <h2
                ref={(el) => (productRef.current[5] = el)}
                className="mb-5 text-xl font-medium text-black"
              >
                ADDITIONAL INFORMATION
              </h2>
              <div
                ref={(el) => (productRef.current[6] = el)}
                className="flex gap-5 text-[13px] text-black"
              >
                {/* Left Column (Keys) */}
                <div className="flex flex-col gap-3 font-normal">
                  {product.additional.map((item, index) => (
                    <span key={index}>{Object.keys(item)[0]}:</span>
                  ))}
                </div>

                {/* Right Column (Values) */}
                <div className="flex flex-col gap-3 font-light">
                  {product.additional.map((item, index) => (
                    <span key={index}>{Object.values(item)[0]}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white">
        <div className=" max-w-[1440px] mx-auto flex flex-col px-5 sm:px-10 py-[120px] bg-white gap-6">
          <ProductCard products={collections} />

          <div
            ref={(el) => (productRef.current[7] = el)}
            className=" w-full bg-white flex justify-center"
          >
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
