import React from "react";

function ShopGallery() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto text-black py-12">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-wide">
          SHOP GALLERY
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {[
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
          ].map((watch, index) => (
            <div key={index} className="text-center">
              <img
                src={watch.image}
                alt="Watch"
                className="mx-auto mb-4 h-[220px] w-[220px] object-contain"
              />

              <h2 className=" w-[90%] text-center font-medium text-sm mb-2 uppercase tracking-wide leading-5">
                {watch.name}
              </h2>
              <p className="text-gray-600 font-medium text-lg">{watch.price}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-4 h-1 bg-black rounded-full"></div>
          <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-black text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition duration-300 tracking-wider">
            DISCOVER &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopGallery;
