import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Reveal = ({
  children,
  y = 40,
  duration = 0.8,
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [y, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};