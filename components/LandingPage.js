import Image from "next/image";

const WatchLandingPage = () => {
  return (
    <section className="flex items-center h-[80vh] justify-center px-10 py-20 bg-black text-white">
      <div className=" w-1/2 flex flex-col items-center">
        <div>
          <h1 className="text-5xl font-bold">
            Custom DLC <br /> build to last
          </h1>
          <p className="mt-4 text-gray-400">
            Bespoke timepieces to suit the individual. <br /> For those who
            prefer to be different.
          </p>
          <button className="mt-6 w-fit px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg">
            DISCOVER →
          </button>
        </div>
      </div>
      <img
        src="/Images/watch7.png"
        alt="Luxury Watch"
        className="w-1/2 h-full object-contain"
      />
    </section>
  );
};

export default WatchLandingPage;
