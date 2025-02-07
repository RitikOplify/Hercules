import RolexCollection from "@/components/OurCollection";
import React from "react";

const RolexProductCard = () => {
  return (
    <div>
      <div className="max-w-[1440px] bg-black px-5 sm:px-10 py-10 mx-auto">
        <div className="w-full grid md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-start">
            <div className="flex flex-col items-center">
              <img
                src="/Images/watch6.png"
                alt="Rolex GMT-Master II"
                className="w-full max-w-sm rounded-2xl shadow-lg"
              />
              <div className="grid grid-cols-4 gap-2 mt-10">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="w-16 h-16 bg-gray-300 rounded" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div className=" space-y-7">
              <h1 className="text-2xl font-bold">
                ROLEX GMT-MASTER II, DLC COATED STEEL, 18 CT YELLOW GOLD
                116713LN
              </h1>
              <p className="text-xl text-gray-400">£18,499.00</p>
              <p className="text-gray-300">
                Hercules Watch Co present a DLC and Yellow Gold Rolex GMT Master
                II created to the highest standards. The case and bracelet have
                been uniquely coated in scratch resistant DLC without
                interfering with the aesthetic beauty of the gold. The dial and
                date wheel have also been customised to blend beautifully with
                the watch.
              </p>
              <button className="bg-white w-fit text-black py-2 px-4 rounded-xl shadow hover:bg-gray-200 transition">
                🛒 BUY PRODUCT
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">ADDITIONAL INFORMATION</h2>
              <div className="mt-2 flex gap-5 font-medium text-white">
                <div className=" flex flex-col gap-3">
                  <span>AGE:</span>
                  <span>GENDER:</span>
                  <span>BOX AND PAPERS:</span>
                  <span>CASE SIZE:</span>
                  <span>STRAP LENGTH:</span>
                </div>
                <div className=" flex flex-col gap-3">
                  <span>25th April 2018</span>
                  <span>Mens</span>
                  <span>Box, Manuals, Guarantee, Booklet, Swing Tag</span>
                  <span>40 mm</span>
                  <span>Adjustable up to 19 cm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RolexCollection />
    </div>
  );
};

export default RolexProductCard;
