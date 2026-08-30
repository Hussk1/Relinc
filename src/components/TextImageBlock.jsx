import { useLayoutEffect, useRef } from "react";

import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TextImageBlock = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const text = textRef.current;
      const image = imageRef.current;

      gsap.set([text, image], {
        visibility: "visible",
      });

      gsap.set(text, {
        opacity: 0,
        y: 45,
      });

      gsap.set(image, {
        opacity: 0,
        y: 55,
        scale: 1.04,
      });

      const animateSection = () => {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .to(text, {
            opacity: 1,
            y: 0,
            duration: 1.15,
          })
          .to(
            image,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
            },
            "-=0.65",
          );
      };

      const rect = section.getBoundingClientRect();

      const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

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
      className="relative container px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-4"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div ref={textRef} className="invisible text-white">
          <h2 className="mb-5 text-2xl font-bold leading-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Bygg din digitala grund
          </h2>

          <p className="mb-4 text-base font-medium leading-7 text-white/85 sm:text-lg">
            Vi hjälper dig att förverkliga din idé och finns med dig hela vägen
            från första tanke till färdigt varumärke och digital närvaro.
          </p>

          <p className="mb-4 text-base font-medium leading-7 text-white/85 sm:text-lg">
            Vi bygger en stark grund genom att skapa din företagsidentitet med
            logotyp, grafisk profil och design som speglar ditt företag.
            Därefter utvecklar vi en modern och professionell webbplats anpassad
            efter dina mål som hjälper dig att nå dina kunder.
          </p>

          <p className="mb-4 text-base font-medium leading-7 text-white/85 sm:text-lg">
            Bygg ditt paket efter dina behov och skapa en stabil grund för
            framtida tillväxt.
          </p>

          <Link
            to="/webbredo"
            className="group inline-flex h-10 w-fit items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:brightness-110 xl:inline-flex"
          >
            Till webbredo
            <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={imageRef} className="invisible overflow-hidden rounded-2xl">
          <img
            src="/images/digital-narvaro-for-foretag-malmo.webp"
            alt="Bygg din digitala grund"
            loading="lazy"
            decoding="async"
            className="h-[280px] w-full rounded-2xl object-cover sm:h-[360px] md:h-full md:min-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
};
