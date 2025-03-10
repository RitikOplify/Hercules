"use client";
import useGsap from "@/useGsap";
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
      href={`collection/${product.id}`}
      className="text-center flex flex-col justify-center gap-6"
    >
      <img
        src={product.image}
        alt="Watch"
        className="mx-auto h-[350px] w-[350px] object-contain"
      />
      <h2 className=" w-full sm:w-[70%] mx-auto text-center font-medium text-base text-[#000] uppercase tracking-wide leading-5">
        {product.name}
      </h2>
      <p className="text-[#808080] font-medium text-xl">{product.price}</p>
    </Link>
  );
}

export default ProductCard;
