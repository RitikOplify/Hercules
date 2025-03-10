"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useGsap from "@/useGsap";
import { FaAngleRight } from "react-icons/fa";
import collections from "@/collections";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ShopGallery({ title }) {
  const shopRef = useRef([]);
  const cardRef = useRef([]);
  useGsap(cardRef, {
    stagger: true,
  });
  useGsap(shopRef);

  return (
    <div className=" bg-white">
      <div className="max-w-[1440px] mx-auto bg-[#fff] py-[120px] px-5 sm:px-10">
        <h1
          ref={(el) => (shopRef.current[0] = el)}
          className=" text-center font-medium text-black text-2xl"
        >
          {title}
        </h1>
        <div className=" py-[80px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 4000, // Adjust timing (5s per slide)
              disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            // modules={[Pagination]}
            modules={[Autoplay, Pagination]}
            className="w-full"
          >
            {collections.slice(0, 6).map((slide, i) => (
              <SwiperSlide key={slide.id}>
                <ProductCard product={slide} key={i} ref={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Below */}
        <div
          ref={(el) => (shopRef.current[1] = el)}
          className="custom-pagination flex justify-center"
        ></div>

        <div
          ref={(el) => (shopRef.current[2] = el)}
          className="flex justify-center mt-[60px]"
        >
          <Link
            href={"/collection"}
            className="bg-black flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6 shadow-[0_5px_20px_rgba(134,134,134,0.6)]"
          >
            DISCOVER <FaAngleRight />
          </Link>
        </div>

        {/* Custom Pagination Styling */}
        <style jsx global>{`
          .custom-pagination {
            display: flex;
            gap: 8px;
          }
          .swiper-pagination-bullet {
            width: 20px;
            height: 4px;
            background-color: black;
            border-radius: 5px;
            opacity: 0.5;
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </div>
  );
}
