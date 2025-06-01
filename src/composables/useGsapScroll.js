import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll(elRef, options = {}) {
  const defaultOptions = {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: elRef,
      start: "top 80%",
      toggleActions: "play none none reverse",
      markers: false,
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    scrollTrigger: {
      ...defaultOptions.scrollTrigger,
      ...options.scrollTrigger,
      trigger: elRef,
    },
  };

  gsap.from(elRef, mergedOptions);
}
