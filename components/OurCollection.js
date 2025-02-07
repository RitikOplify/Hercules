import React from "react";

const RolexCollection = () => {
  const products = [
    {
      name: "ROLEX GMT-MASTER II, DLC COATED STEEL, 18 CT YELLOW GOLD 116713LN",
      price: "£18,499.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL, 18 CT EVEROSE GOLD 116621",
      price: "£18,499.00",
      image: "/Images/watch7.png",
    },
    {
      name: "ROLEX YACHTMASTER, DLC COATED STEEL AND STEEL WITH PLATINUM BEZEL 116622",
      price: "£13,995.00",
      image: "/Images/watch7.png",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-10 bg-white text-black p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">OUR FULL COLLECTION</h1>
      <div className="w-full grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-full bg-gray-100"
            />
            <h2 className="text-lg font-semibold mt-4 text-start">
              {product.name}
            </h2>
            <p className="text-gray-600 mt-1">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4 mt-8">
        <div className="w-6 h-1 bg-black rounded" />
        <div className="w-6 h-1 bg-gray-300 rounded" />
        <div className="w-6 h-1 bg-gray-300 rounded" />
      </div>

      <button className="mt-6 bg-black text-white py-2 px-6 rounded-xl shadow hover:bg-gray-800 transition">
        DISCOVER ➔
      </button>
    </div>
  );
};

export default RolexCollection;
