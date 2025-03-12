import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (ref, options = {}) => {
  useEffect(() => {
    if (!ref?.current) return;

    const refs = Array.isArray(ref.current) ? ref.current : [ref.current]; // ✅ Handle both single and multiple refs
    const animations = []; // ✅ Store animations for cleanup

    refs.forEach((item, index) => {
      if (item) {
        const animation = gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: options.stagger ? 0.8 : 1,
            ease: options.ease || "easeInOut",
            delay: options.stagger ? index * (options.staggerDelay || 0.2) : 0,
            scrollTrigger: {
              trigger: item,
              start: options.start || "top 90%",
              end: options.end || "top 80%",
              scrub: options.scrub || false,
            },
          }
        );

        animations.push(animation); // ✅ Store each animation
      }
    });

    // ✅ Cleanup only the specific ScrollTrigger instances
    return () => {
      animations.forEach((animation) => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill(); // Clean individual ScrollTrigger
        }
        animation.kill(); // Clean GSAP animation
      });
    };
  }, []);
};

export default useGsap;
