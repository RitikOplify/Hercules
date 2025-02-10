"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaAngleRight } from "react-icons/fa";

export default function App() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalBullets, setTotalBullets] = useState(0);

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

  const calculateTotalBullets = (swiper) => {
    const slidesPerView = swiper.params.slidesPerView;
    const totalSlides = swiper.slides.length;
    const totalBullets = Math.ceil(totalSlides / slidesPerView);
    setTotalBullets(totalBullets);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    calculateTotalBullets(swiper);
  };

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index * swiperRef.current.params.slidesPerView);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        calculateTotalBullets(swiperRef.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" max-w-[1440px] mx-auto bg-[#fff] py-[120px] px-5 sm:px-10">
      <h1 className=" text-center font-medium text-black text-2xl">
        SHOP GALARY
      </h1>

      <div className=" py-[80px]">
        <Swiper
          modules={[Pagination]}
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiperInit}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {data.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="text-center flex flex-col gap-6">
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

      {/* Custom Pagination Buttons */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalBullets }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-1 rounded-full transition-all duration-300 ${
              activeIndex >=
                index * (swiperRef.current?.params.slidesPerView || 1) &&
              activeIndex <
                (index + 1) * (swiperRef.current?.params.slidesPerView || 1)
                ? "bg-black w-6"
                : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      <div className="flex justify-center mt-[60px]">
        <button className="mt-6 bg-black flex items-center gap-3 text-base text-[#fff] font-normal rounded-xl py-3 px-6">
          DISCOVER <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
