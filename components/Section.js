import React from "react";

const Section = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex h-[600px]">
          {/* Left Section */}
          <div className="w-1/2 bg-white flex flex-col justify-center items-start p-10">
            <h1 className="text-3xl font-bold mb-4 text-black">CUSTOM</h1>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a felis fermentum, congue mi ut, sodales turpis. Cras
              orci lacus, fermentum eget dui ullamcorper, tempor vehicula justo.
            </p>
            <button className="flex items-center text-black font-semibold hover:underline">
              <span className="mr-1">&#8250;</span> EXPLORE MORE
            </button>
          </div>

          {/* Right Section */}
          <div className="w-1/2 bg-black flex justify-center items-center">
            <img src="/Images/watch1.jpg" alt="Rolex Watch" />
          </div>
        </div>
        <div className="flex h-[600px]">
          {/* Left Section */}
          <div
            className="w-1/2 bg-cover bg-center"
            style={{ backgroundImage: "url(/Images/watch2.jpg)" }}
          ></div>

          {/* Right Section */}
          <div className="w-1/2 bg-white flex flex-col justify-center items-start p-10">
            <h1 className="text-3xl font-bold mb-4 text-black">PRESTIGE</h1>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a felis fermentum, congue mi ut, sodales turpis. Cras
              orci lacus, fermentum eget dui ullamcorper, tempor vehicula justo.
            </p>
            <button className="flex items-center text-black font-semibold hover:underline">
              <span className="mr-1">&#8250;</span> EXPLORE MORE
            </button>
          </div>
        </div>

        <div className="flex h-[600px]">
          {/* Left Section */}
          <div className="w-1/2 bg-white flex flex-col justify-center items-start p-10">
            <h1 className="text-3xl font-bold mb-4 text-black">CONCEPT</h1>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a felis fermentum, congue mi ut, sodales turpis. Cras
              orci lacus, fermentum eget dui ullamcorper, tempor vehicula justo.
            </p>
            <button className="flex items-center text-black font-semibold hover:underline">
              <span className="mr-1">&#8250;</span> EXPLORE MORE
            </button>
          </div>

          {/* Right Section */}
          <div className="w-1/2 bg-black flex justify-center items-center">
            <img src="/Images/watch6.png" alt="Rolex Watch" />
          </div>
        </div>

        <div className="flex h-[600px]">
          <div className="w-1/2 flex justify-center items-center">
            <img src="/Images/watch5.png" alt="Rolex Watch" />
          </div>

          <div className="w-1/2 bg-white flex flex-col justify-center items-start p-10">
            <h1 className="text-3xl font-bold mb-4 text-black">ENGRAVED ART</h1>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a felis fermentum, congue mi ut, sodales turpis. Cras
              orci lacus, fermentum eget dui ullamcorper, tempor vehicula justo.
            </p>
            <button className="flex items-center text-black font-semibold hover:underline">
              <span className="mr-1">&#8250;</span> EXPLORE MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
