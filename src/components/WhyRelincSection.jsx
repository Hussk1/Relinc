import { useLayoutEffect, useRef } from "react";

import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhyRelincSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      gsap.set(
        [
          labelRef.current,
          titleRef.current,
          textRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 40,
        },
      );

      gsap.set(contentRef.current, {
        visibility: "visible",
      });

      const animateSection = () => {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .to(labelRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
          })
          .to(
            titleRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            "-=0.5",
          )
          .to(
            textRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
            },
            "-=0.55",
          )
          .to(
            buttonRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
            },
            "-=0.5",
          );
      };

      const rect = section.getBoundingClientRect();

      const isAlreadyVisible =
        rect.top < window.innerHeight && rect.bottom > 0;

      if (isAlreadyVisible) {
        animateSection();
      } else {
        ScrollTrigger.create({
          trigger: section,
          start: "top 92%",
          once: true,
          onEnter: animateSection,
        });
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div
        ref={contentRef}
        className="invisible container relative z-10 flex flex-col items-center px-4 text-center sm:px-6 lg:px-4"
      >
        <span
          ref={labelRef}
          className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary"
        >
          Relinc
        </span>

        <h2
          ref={titleRef}
          className="mb-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Mer än en leverantör
          <br />
          <span className="text-primary">En långsiktig partner</span>
        </h2>

        <p
          ref={textRef}
          className="mb-10 max-w-3xl text-base font-medium leading-8 text-white/80 md:text-lg"
        >
          Vi kombinerar strategi, design, teknik och affärsförståelse för att
          skapa lösningar som hjälper företag att växa. Oavsett om du behöver en
          ny webbplats, ett starkare varumärke eller digital marknadsföring
          arbetar vi alltid med fokus på resultat, långsiktighet och kvalitet.
        </p>

        <Link
          ref={buttonRef}
          to="/kontakta-oss"
          className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:opacity-90"
        >
          Börja din resa här

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};