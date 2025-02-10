const WatchLandingPage = () => {
  return (
    <section className=" bg-black">
      <div className="max-w-[1440px] mx-auto flex-col-reverse flex sm:flex-row items-center sm:h-[650px]  justify-center px-5 sm:px-10 py-20 bg-black text-white">
        <div className=" w-full sm:w-1/2 flex flex-col items-start sm:items-center">
          <div className=" mt-10 sm:mt-0">
            <h1 className=" text-4xl sm:text-5xl font-bold">
              Custom DLC <br className=" hidden sm:visible" /> build to last
            </h1>
            <p className="mt-4 text-gray-400">
              Bespoke timepieces to suit the individual. <br className="hidden sm:visible"/> For those who
              prefer to be different.
            </p>
            <button className="mt-6 w-fit px-3 sm:px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg">
              DISCOVER →
            </button>
          </div>
        </div>
        <img
          src="/Images/watch7.png"
          alt="Luxury Watch"
          className=" w-full sm:w-1/2 h-full object-contain"
        />
      </div>
    </section>
  );
};

export default WatchLandingPage;
