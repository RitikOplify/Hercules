import collections from "@/collections";
import RolexProductCard from "@/components/Product";
import React, { use } from "react";

function page({ params }) {
  const { id } = use(params);
  const product = collections.find((product) => product.id === id);
  const collection = collections.filter((product) => product.id !== id);
  return <RolexProductCard product={product} collections={collection} />;
}

export default page;
