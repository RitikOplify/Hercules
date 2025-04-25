"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useRef } from "react";
import useGsap from "@/useGsap";
import Image from "next/image";

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

  const Images = [
    "/ImageCarousel/IMG_1286.png",
    "/ImageCarousel/Img_268.png",
    "/ImageCarousel/IMG_1324.png",
    "/ImageCarousel/IMG_1185.png",
    "/ImageCarousel/air_king_black.jpg",
    "/ImageCarousel/air_king_purplue.jpg",
    "/ImageCarousel/engraved_rolex.jpg",
    "/ImageCarousel/hercules_3_watches.jpg",
    "/ImageCarousel/hercules_concept.jpg",
    "/ImageCarousel/perpetual.jpg",
  ];

  return (
    <div className=" bg-white pb-[80px]">
      <div className=" max-w-[1440px] mx-auto relative px-5 sm:px-10 ">
        <div
          ref={btnsRef}
          className=" flex justify-end items-center gap-5 pb-10"
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
          slidesPerView={4}
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
            768: {
              slidesPerView: 3, // Tablet
            },
            1024: {
              slidesPerView: 4, // Desktop
            },
          }}
          className="multiple-slide-carousel"
        >
          {Images.map((slide, i) => (
            <SwiperSlide key={slide}>
              <div className="flex justify-center items-center">
                <Image
                  ref={(el) => (imageRef.current[i] = el)}
                  height={400}
                  width={400}
                  src={slide}
                  alt={`img-${i}`}
                />
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
