import { useLayoutEffect, useRef } from "react";

import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TwoColumnBlockItems = [
  {
    title: "Fokus på kunden",
    image: "/images/kundanpassade-digitala-losningar-malmo.webp",
    description:
      "Varje företag är unikt och därför anpassar vi våra lösningar efter dina behov och mål. Genom ett nära samarbete skapar vi smarta och effektiva lösningar inom digital utveckling, design och affärsstöd. Vi hjälper dig med allt från webbdesign, SEO och systemutveckling till grafisk design, video och digital marknadsföring, samt erbjuder stöd inom redovisning och företagslösningar för att förenkla din vardag. Med rätt strategi, teknik och kreativitet bygger vi lösningar som stärker din verksamhet, effektiviserar processer och skapar långsiktig tillväxt.",
    linkText: "Webbredo",
    link: "/webbredo",
  },
  {
    title: "Strategi möter resultat",
    image: "/images/digital-strategi-for-foretag.webp",
    description:
      "Hos oss tror vi att de bästa resultaten skapas när strategi, teknik och kreativitet samverkar, och vi kombinerar teknisk kompetens med en djup förståelse för din verksamhet och dina mål. Oavsett om det handlar om att utveckla en modern webbplats, förbättra din synlighet genom SEO, skapa stark visuell kommunikation eller effektivisera din verksamhet med smarta system och redovisningstjänster är vårt mål alltid detsamma att leverera lösningar som inte bara möter dina behov idag utan också driver din verksamhet framåt långsiktigt.",
    linkText: "Kontakta oss",
    link: "/kontakta",
  },
];

export const TwoColumnBlock = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".two-column-card");

      cards.forEach((card, index) => {
        const imageWrapper = card.querySelector(".two-column-image");
        const image = card.querySelector(".two-column-image img");
        const title = card.querySelector(".two-column-title");
        const text = card.querySelector(".two-column-text");
        const button = card.querySelector(".two-column-button");

        gsap.set(card, {
          visibility: "visible",
        });

        gsap.set(imageWrapper, {
          opacity: 0,
          y: 50,
        });

        gsap.set(image, {
          scale: 1.06,
        });

        gsap.set([title, text, button], {
          opacity: 0,
          y: 30,
        });

        const animateCard = () => {
          const timeline = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
            delay: index * 0.08,
          });

          timeline
            .to(imageWrapper, {
              opacity: 1,
              y: 0,
              duration: 0.8,
            })
            .to(
              image,
              {
                scale: 1,
                duration: 1,
                ease: "power2.out",
              },
              "<",
            )
            .to(
              title,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
              },
              "-=0.45",
            )
            .to(
              text,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
              },
              "-=0.35",
            )
            .to(
              button,
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
              },
              "-=0.3",
            );

          return timeline;
        };

        const rect = card.getBoundingClientRect();

        const isAlreadyVisible =
          rect.top < window.innerHeight && rect.bottom > 0;

        if (isAlreadyVisible) {
          animateCard();
        } else {
          ScrollTrigger.create({
            trigger: card,
            start: "top 95%",
            once: true,
            onEnter: animateCard,
          });
        }
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative container px-4 py-12 sm:px-6 sm:py-16 lg:px-4"
    >
      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {TwoColumnBlockItems.map((item) => (
          <div key={item.title} className="two-column-card invisible">
            <div className="two-column-image inline-block w-full overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-[260px] w-full rounded-2xl object-cover sm:h-[320px] md:h-[340px] lg:h-[400px]"
              />
            </div>

            <div>
              <h2 className="two-column-title pb-2 pt-5 text-2xl font-[700] leading-tight text-white sm:pt-6 sm:text-3xl md:text-4xl lg:text-[42px]">
                {item.title}
              </h2>

              <p className="two-column-text mb-6 text-base font-medium leading-7 text-white sm:text-lg">
                {item.description}
              </p>

              <div className="two-column-button inline-block">
                <Link
                  to={item.link}
                  className="group flex h-10 items-center gap-2 rounded-full border border-primary bg-primary px-6 font-semibold leading-none text-[#1b1b1b] transition duration-300 hover:scale-[1.03] hover:opacity-90"
                >
                  {item.linkText}

                  <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
