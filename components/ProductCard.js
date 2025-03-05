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
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-y-[60px]">
      {products.map((product, i) => (
        <Link href={`/collection/${product.id}`}
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="flex flex-col  items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-w-[350px] h-auto"
          />
          <h2 className="text-base tracking-[8%] mt-6 font-medium text-[#000]">
            {product.name}
          </h2>
          <p className=" text-[#808080] tracking-[8%] mt-4 font-medium text-base">
            {product.price}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default ProductCard;
