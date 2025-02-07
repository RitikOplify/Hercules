import React from "react";

const WhoWeAre = () => {
  return (
    <div className="flex h-[70vh] bg-[#1e1f1f] text-white">
      <div className="w-1/2 flex justify-center items-center">
        <img src="/Images/watch1.jpg" alt="Watch" />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-start p-10">
        <h1 className="text-4xl font-bold mb-4">WHO WE ARE</h1>
        <p className="text-gray-300 mb-4">
          HWC have brought together some of the finest visionaries in the watch
          industry. As a team we are able to create timepieces that we hope will
          define the wearer as extraordinary. The durability and reliability of
          our watches is second to none and yet every single timepiece we create
          is totally unique.
        </p>
        <p className="text-gray-300 mb-6">
          Let's make a piece of history together – a legacy for younger
          generations to admire and aspire to.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition duration-300">
          DISCOVER &rarr;
        </button>
      </div>
    </div>
  );
};

export default WhoWeAre;
