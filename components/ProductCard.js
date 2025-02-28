"use client";
import useGsap from "@/useGsap";
import Link from "next/link";
import React, { useRef } from "react";

function ProductCard({ products }) {
  const cardsRef = useRef([]);
  useGsap(cardsRef, {
    stagger: true,
  });
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-[60px]">
      {products.map((product, i) => (
        <Link href={`/collection/${product.id}`}
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="flex flex-col gap-2 items-start"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full bg-gray-100"
          />
          <h2 className="text-sm tracking-[8%] font-medium text-[#000] text-start">
            {product.name}
          </h2>
          <p className=" text-[#808080] tracking-[8%] font-medium text-[13px]">
            {product.price}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default ProductCard;
