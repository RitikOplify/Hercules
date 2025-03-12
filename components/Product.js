"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import useGsap from "@/useGsap";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import ShopGallery from "./Home/ShopGallery";
import { TiShoppingCart } from "react-icons/ti";

const Product = ({ product }) => {
  const productRef = useRef([]);
  const sCardRef = useRef([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useGsap(sCardRef, { stagger: true });
  useGsap(productRef);

  return (
    <div>
      <div className="bg-white">
        <div className=" h-auto 2xl:h-screen 2xl:content-center mx-auto pt-10 sm:pt-[120px] px-5 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-start">
          <div className="flex gap-0 lg:gap-5 justify-between relative">
            {/* Navigation Arrows for Main Swiper */}
            <button
              aria-label="prev-buttom"
              id="arrow-left"
              className="hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-b from-gray-300 to-gray-500 text-white rounded-full p-2"
            >
              <IoIosArrowBack size={24} />
            </button>
            <button
              aria-label="next-buttom"
              id="arrow-right"
              className=" hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-b from-gray-300 to-gray-500 text-white rounded-full p-2"
            >
              <IoIosArrowForward size={24} />
            </button>

            {/* Thumbnail Swiper (Hidden on Small Screens) */}
            <div className="relative flex-col items-center justify-start gap-5 h-[500px] 2xl:h-[680px] 2xl:gap-5 hidden md:flex">
              <button
                id="arrow-up"
                className="text-black text-3xl 2xl:text-4xl"
              >
                <IoIosArrowUp />
              </button>
              <Swiper
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={5}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs, Navigation]}
                navigation={{
                  nextEl: "#arrow-down",
                  prevEl: "#arrow-up",
                }}
                className="thumbSwiper h-[420px] w-[80px] "
              >
                {product?.images?.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="cursor-pointer max-h-[80px] "
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px]  object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button id="arrow-down" className="text-black text-3xl ">
                <IoIosArrowDown />
              </button>
            </div>

            {/* Main Image Swiper */}
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs, Navigation]}
              navigation={{
                nextEl: "#arrow-right",
                prevEl: "#arrow-left",
              }}
              className="mainSwiper w-[500px] h-[500px] 2xl:h-[680px]"
            >
              {product?.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    width={480}
                    height={480}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Information */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-6">
              <h1
                ref={(el) => (productRef.current[1] = el)}
                className="font-medium text-xl text-[#000] uppercase tracking-wide leading-5"
              >
                {product.name}
              </h1>
              <p
                ref={(el) => (productRef.current[2] = el)}
                className="text-[#808080] font-medium text-xl"
              >
                {product.price}
              </p>
              <p
                ref={(el) => (productRef.current[3] = el)}
                className="text-black leading-6 text-base max-w-3xl"
              >
                {product.desc}
              </p>
              <div ref={(el) => (productRef.current[4] = el)}>
                <Link
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black w-fit flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6 shadow-[0_5px_20px_rgba(134,134,134,0.6)]"
                >
                  <TiShoppingCart size={24} />
                  BUY PRODUCT
                </Link>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2
                ref={(el) => (productRef.current[5] = el)}
                className="mb-5 text-xl font-medium text-black"
              >
                ADDITIONAL INFORMATION
              </h2>
              <div
                ref={(el) => (productRef.current[6] = el)}
                className="flex gap-6 text-[13px] text-black"
              >
                <div className="flex flex-col gap-1 font-normal">
                  {product.additional.map((item, index) => (
                    <span key={index}>{Object.keys(item)[0]}:</span>
                  ))}
                </div>
                <div className="flex flex-col gap-1 font-light">
                  {product.additional.map((item, index) => (
                    <span key={index}>{Object.values(item)[0]}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}

      <ShopGallery title={"OUR FULL COLLECTION"} />
    </div>
  );
};

export default Product;
