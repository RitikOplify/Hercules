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
        <Link
          key={product.id}
          href={`collection/${product.id}`}
          ref={(el) => (cardsRef.current[i] = el)}
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
      ))}
    </div>
  );
}

export default ProductCard;
