import { useLayoutEffect, useRef } from "react";

import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 70,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(contentRef.current, {
        visibility: "visible",
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.55",
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.45",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden pt-20"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={contentRef}
          className="invisible flex flex-col gap-6 pb-20 pt-16 sm:pb-24 sm:pt-28 md:pb-32 md:pt-36"
        >
          <h1
            ref={titleRef}
            className="max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[70px] lg:leading-[80px]"
          >
            Relinc - en digital <br className="hidden md:block" />
            byrå för din tillväxt
          </h1>

          <p
            ref={textRef}
            className="max-w-2xl text-base font-medium leading-7 text-white/85 sm:text-lg"
          >
            Vi förverkligar idéer genom att skapa smarta digitala lösningar för
            både nutid och framtid. Låt oss bli din partner på vägen mot dina
            mål.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/kontakta"
              className="group inline-flex h-11 w-fit items-center gap-2 rounded-full border border-primary bg-primary px-6 font-semibold leading-none text-[#1b1b1b] transition duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              Kontakta oss

              <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};