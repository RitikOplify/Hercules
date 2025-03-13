import collections from "@/collections";
import ProductCard from "@/components/Product";
import React, { use } from "react";

function page({ params }) {
  const { id } = use(params);
  const product = collections.find((product) => product.id === id);
  return <ProductCard product={product} />;
}

export default page;
