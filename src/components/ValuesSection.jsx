import { useLayoutEffect, useRef } from "react";

import {
  UserRound,
  ThumbsUp,
  Check,
  ChartNoAxesCombined,
  Handshake,
} from "lucide-react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: UserRound,
    title: "Kundfokus",
    text: "Vi sätter alltid kunden i centrum och utgår från dina mål, behov och förutsättningar. Genom att arbeta nära dig skapar vi lösningar som inte bara ser bra ut utan också fungerar i praktiken och ger resultat.",
  },
  {
    icon: ThumbsUp,
    title: "Kvalitet",
    text: "Vi strävar alltid efter hög kvalitet i allt vi gör, från första idé till färdig lösning. Genom noggrannhet och erfarenhet säkerställer vi att varje detalj håller en professionell standard.",
  },
  {
    icon: Check,
    title: "Enkelhet",
    text: "Vi gör det komplexa enkelt. Oavsett om det handlar om webb, design eller digitala lösningar bryter vi ner processer så att de blir tydliga och lättförståeliga.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Långsiktighet",
    text: "Vi bygger inte bara lösningar för idag utan för framtiden. Vårt mål är att vara en partner över tid och skapa hållbar utveckling för ditt företag.",
  },
  {
    icon: Handshake,
    title: "Samarbete",
    text: "Vi tror på nära och transparenta samarbeten. Genom tydlig kommunikation och gemensamma mål skapar vi bättre resultat tillsammans.",
  },
];

export const ValuesSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const header = headerRef.current;
      const cards = gsap.utils.toArray(".value-card");

      gsap.set(header, {
        opacity: 0,
        y: 45,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 45,
      });

      gsap.set(section, {
        visibility: "visible",
      });

      const animateSection = () => {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .to(header, {
            opacity: 1,
            y: 0,
            duration: 1,
          })
          .to(
            cards,
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.13,
            },
            "-=0.55",
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
      className="invisible py-20 md:py-28"
    >
      <div className="relative container px-4 sm:px-6 lg:px-4">
        {/* HEADER */}

        <div
          ref={headerRef}
          className="mb-12 max-w-3xl"
        >
          <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Det här står vi för
          </h2>

          <p className="text-base font-semibold leading-7 text-white sm:text-lg">
            Det här är grunden i hur vi arbetar och vad du kan förvänta dig av
            oss. Våra värderingar genomsyrar allt vi gör och hjälper oss skapa
            lösningar som ger verkligt värde över tid.
          </p>
        </div>

        {/* GRID */}

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="value-card group border-t border-primary pt-5 transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full text-primary transition duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>

                <p className="text-base font-semibold leading-7 text-white sm:text-lg">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};