"use client";
import { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WatchLandingPage = () => {
  const landingPageRef = useRef([]);

  useEffect(() => {
    if (!landingPageRef.current) return;

    let ctx = gsap.context(() => {
      const elements = landingPageRef.current;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body, // Image triggers the animation sequence
            start: "top 100%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(
          elements[3], // Image
          { scale: 0.8, opacity: 0 }, // Initial state
          { scale: 1, opacity: 1, duration: 0.8, ease: "easeInOut" }
        )
        .fromTo(
          elements[0], // Heading
          { y: 50, opacity: 0 }, // Initial state
          { y: 0, opacity: 1, duration: 0.6, ease: "easeInOut" },
          "-=0.4"
        )
        .fromTo(
          elements[1], // Paragraph
          { opacity: 0, y: 50 }, // Initial state
          { opacity: 1, y: 0, duration: 0.6, ease: "easeInOut" },
          "-=0.3"
        )
        .fromTo(
          elements[2], // Explore More Button
          { opacity: 0, y: 50 }, // Initial state
          { opacity: 1, y: 0, duration: 0.5, ease: "easeInOut" },
          "-=0.3"
        );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className=" bg-black">
      <div className="mx-auto flex-col-reverse flex md:flex-row items-center md:h-[650px] 2xl:h-screen justify-center px-5 sm:px-10 py-20 bg-black text-white">
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-center">
          <div className="mt-10 md:mt-0">
            <h1
              ref={(el) => (landingPageRef.current[0] = el)}
              className="text-4xl sm:text-5xl font-bold opacity-0"
            >
              Custom DLC <br className="hidden sm:visible" /> build to last
            </h1>
            <p
              ref={(el) => (landingPageRef.current[1] = el)}
              className="mt-4 text-gray-400 opacity-0"
            >
              Bespoke timepieces to suit the individual.
              <br className="hidden sm:visible" /> For those who prefer to be
              different.
            </p>
            <button
              ref={(el) => (landingPageRef.current[2] = el)}
              className="mt-6 flex font-medium items-center gap-3 text-base text-black bg-white rounded-xl py-3 px-6 shadow-[0_5px_20px_rgba(255,255,255,0.6)] opacity-0"
            >
              DISCOVER <FaAngleRight />
            </button>
          </div>
        </div>
        <img
          ref={(el) => (landingPageRef.current[3] = el)}
          src="/Images/watch7.png"
          alt="Luxury Watch"
          className="w-full sm:w-1/2 h-[70%] object-contain opacity-0 scale-75"
        />
      </div>
    </section>
  );
};

export default WatchLandingPage;
