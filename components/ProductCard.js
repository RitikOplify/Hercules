import React from "react";

function ProductCard({product}) {
  return (
    <div className="flex flex-col gap-2 items-start">
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
    </div>
  );
}

export default ProductCard;
