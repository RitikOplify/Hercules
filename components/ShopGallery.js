"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useGsap from "@/useGsap";
import { FaAngleRight } from "react-icons/fa";

export default function App() {
  const shopRef = useRef([]);
  const cardRef = useRef([]);
  useGsap(cardRef, {
    stagger: true,
  });
  useGsap(shopRef);
  const data = [
    {
      name: "ROLEX GMT-MASTER II, DLC COATED STEEL, 18 CT YELLOW GOLD 116713LN",
      price: "£18,499.00",
      image: "/Images/watch1.jpg",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL, 18 CT EVEROSE GOLD 116621",
      price: "£18,499.00",
      image: "/Images/watch4.jpg",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL AND STEEL WITH PLATINUM BEZEL 116622",
      price: "£13,995.00",
      image: "/Images/watch5.png",
    },
    {
      name: "ROLEX GMT-MASTER II, DLC COATED STEEL, 18 CT YELLOW GOLD 116713LN",
      price: "£18,499.00",
      image: "/Images/watch1.jpg",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL, 18 CT EVEROSE GOLD 116621",
      price: "£18,499.00",
      image: "/Images/watch4.jpg",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL AND STEEL WITH PLATINUM BEZEL 116622",
      price: "£13,995.00",
      image: "/Images/watch5.png",
    },
  ];

  return (
    <div className=" bg-white">
      <div className="max-w-[1440px] mx-auto bg-[#fff] py-[120px] px-5 sm:px-10">
        <h1
          ref={(el) => (shopRef.current[0] = el)}
          className=" text-center font-medium text-black text-2xl"
        >
          SHOP GALARY
        </h1>
        <div className=" py-[80px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            className="w-full"
          >
            {data.map((slide, i) => (
              <SwiperSlide key={i}>
                <div
                  ref={(el) => (cardRef.current[i] = el)}
                  className="text-center flex flex-col gap-6"
                >
                  <img
                    src={slide.image}
                    alt="Watch"
                    className="mx-auto h-[220px] w-[220px] object-contain"
                  />
                  <h2 className=" w-full sm:w-1/2 mx-auto text-center font-medium text-base text-[#000] uppercase tracking-wide leading-5">
                    {slide.name}
                  </h2>
                  <p className="text-[#808080] font-medium text-xl">
                    {slide.price}
                  </p>
                </div>
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
          <button className="bg-black flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6 shadow-[0_5px_20px_rgba(134,134,134,0.6)]">
            DISCOVER <FaAngleRight />
          </button>
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
