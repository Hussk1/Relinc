import {
  useLayoutEffect,
  useRef,
} from "react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

export const PageHero = ({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink,
}) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Startposition
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 55,
      });

      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, {
          opacity: 0,
          y: 35,
        });
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current, {
          opacity: 0,
          y: 25,
        });
      }

      // Visa innehållet först när GSAP är redo
      gsap.set(contentRef.current, {
        visibility: "visible",
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Titel
      timeline.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.15,
      });

      // Subtitle
      if (subtitleRef.current) {
        timeline.to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.65",
        );
      }

      // CTA
      if (ctaRef.current) {
        timeline.to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.55",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[440px] bg-cover bg-center pb-10 pt-24 sm:min-h-[500px] sm:pb-12 sm:pt-28 md:h-[60vh] md:min-h-[560px] md:pb-16 md:pt-32"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Content */}
      <div
        ref={contentRef}
        className="invisible container relative z-10 flex h-full flex-col items-start justify-end gap-5 px-4 sm:gap-6 sm:px-6 lg:px-4"
      >
        {/* Title */}
        <div
          ref={titleRef}
          className="max-w-full border-b-4 border-primary pb-3 sm:pb-4"
        >
          <h1 className="break-words text-4xl font-bold leading-none text-white sm:text-5xl md:text-6xl lg:text-[70px]">
            {title}
          </h1>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p
            ref={subtitleRef}
            className="max-w-2xl text-base font-semibold leading-7 text-white sm:text-lg"
          >
            {subtitle}
          </p>
        )}

        {/* CTA */}
        {ctaText && ctaLink && (
          <div ref={ctaRef}>
            <Link
              to={ctaLink}
              className="inline-flex max-w-full rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 sm:px-5 sm:text-base md:text-lg"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};