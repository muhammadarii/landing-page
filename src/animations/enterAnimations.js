import { gsap } from "gsap";
export function enterAnimation(container) {
  gsap.from(container, {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out",
  });
}
