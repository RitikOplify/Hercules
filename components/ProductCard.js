"use client";
import useGsap from "@/useGsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

function ProductCard({ product, ref }) {
  const cardsRef = useRef([]);
  useGsap(cardsRef, {
    stagger: true,
  });
  return (
    <Link
      ref={(el) => (cardsRef.current[ref] = el)}
      href={`/collection/${product.id}`}
      className="text-center flex flex-col justify-center gap-6"
    >
      <div className="relative w-full h-[350px]">
        <Image
          src={product.image}
          alt="Watch"
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          className="object-contain"
        />
      </div>
      <h2 className="w-full sm:w-[70%] mx-auto text-center font-semibold text-sm tracking-[0.6px] text-[#292321] uppercase leading-5">
        {product.name}
      </h2>
      <p className="text-[#292321] font-semibold text-base">{product.price}</p>
    </Link>
  );
}

export default ProductCard;
