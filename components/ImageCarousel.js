"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useRef } from "react";
import useGsap from "@/useGsap";
import collections from "@/collections";

export default function ResponsiveCarousel() {
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);

  const btnsRef = useRef();
  const imageRef = useRef([]);
  useGsap(btnsRef);
  useGsap(imageRef, {
    stagger: true,
  });
  const rightClick = () => {
    rightBtnRef.current.click();
  };

  const leftClick = () => {
    leftBtnRef.current.click();
  };
  const images = [
    "/Images/watch1.jpg",
    "/Images/watch7.png",
    "/Images/watch6.png",
    "/Images/watch5.png",
  ];

  return (
    <div className=" bg-white pb-[120px]">
      <div className=" max-w-[1440px] mx-auto relative px-5 sm:px-10 ">
        <div
          ref={btnsRef}
          className=" flex justify-end items-center gap-5 py-5"
        >
          <button
            className=" bg-black flex items-center justify-center text-white h-14 w-14 rounded-xl"
            onClick={rightClick}
          >
            <FaAngleLeft />
          </button>
          <button
            className="bg-black flex items-center justify-center text-white h-14 w-14 rounded-xl"
            onClick={leftClick}
          >
            <FaAngleRight />
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            nextEl: "#slider-button-right",
            prevEl: "#slider-button-left",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1, // Mobile
            },
            640: {
              slidesPerView: 2, // Tablet
            },
            1024: {
              slidesPerView: 3, // Desktop
            },
          }}
          className="multiple-slide-carousel"
        >
          {collections.map((slide, i) => (
            <SwiperSlide key={slide.image}>
              <div
                ref={(el) => (imageRef.current[i] = el)}
                className="bg-indigo-50 h-96 flex justify-center items-center"
              >
                <img src={slide.image} alt={`img-${i}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <div
            aria-label="prev-button"
            ref={rightBtnRef}
            id="slider-button-left"
            className="swiper-button-prev group  !hidden !p-2 justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
          ></div>

          <div
            aria-label="next-button"
            ref={leftBtnRef}
            id="slider-button-right"
            className="swiper-button-next group !hidden  !p-2  justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
          ></div>
        </div>
      </div>
    </div>
  );
}
