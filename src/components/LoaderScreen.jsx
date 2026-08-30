import { useEffect, useRef } from "react";

import { gsap } from "gsap";

export const LoaderScreen = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const ringRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 1,
        ease: "none",
        repeat: -1,
      });

      const timeline = gsap.timeline({
        onComplete,
      });

      timeline
        .from(logoRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .to(
          {},
          {
            duration: 0.9,
          },
        )
        .to(loaderRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#171717]"
    >
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <div
            ref={ringRef}
            className="absolute inset-[-18px] rounded-full border-2 border-primary/20 border-t-primary"
          />

          <img
            ref={logoRef}
            src="/images/favicon.webp"
            alt="Relinc"
            loading="lazy"
            decoding="async"
            className="h-24 w-24 object-contain drop-shadow-[0_0_35px_rgba(171,255,61,0.45)]"
          />
        </div>

        <p ref={textRef} className="mt-8 text-lg font-semibold text-white">
          Laddar Relinc
          <span>...</span>
        </p>
      </div>
    </div>
  );
};
