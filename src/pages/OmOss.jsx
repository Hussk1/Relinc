import {
  useLayoutEffect,
  useRef,
} from "react";

import { PageHero } from "../components/PageHero";
import { ContactFormSection } from "../components/ContactFormSection";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OmOss = () => {
  const pageRef = useRef(null);

  const firstSectionRef = useRef(null);
  const firstImageRef = useRef(null);
  const firstContentRef = useRef(null);

  const secondSectionRef = useRef(null);
  const secondContentRef = useRef(null);
  const secondImageRef = useRef(null);

  const historyRef = useRef(null);
  const historyTitleRef = useRef(null);
  const historyTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * FIRST SECTION
       */
      const firstSection = firstSectionRef.current;

      if (firstSection) {
        gsap.set(firstImageRef.current, {
          opacity: 0,
          y: 55,
          scale: 1.04,
        });

        gsap.set(firstContentRef.current, {
          opacity: 0,
          y: 45,
        });

        gsap.set(firstSection, {
          visibility: "visible",
        });

        const animateFirstSection = () => {
          const timeline = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
          });

          timeline
            .to(firstImageRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
            })
            .to(
              firstContentRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 1.05,
              },
              "-=0.65",
            );
        };

        const rect = firstSection.getBoundingClientRect();

        const isAlreadyVisible =
          rect.top < window.innerHeight &&
          rect.bottom > 0;

        if (isAlreadyVisible) {
          animateFirstSection();
        } else {
          ScrollTrigger.create({
            trigger: firstSection,
            start: "top 92%",
            once: true,
            onEnter: animateFirstSection,
          });
        }
      }

      /*
       * SECOND SECTION
       */
      const secondSection = secondSectionRef.current;

      if (secondSection) {
        gsap.set(secondContentRef.current, {
          opacity: 0,
          y: 45,
        });

        gsap.set(secondImageRef.current, {
          opacity: 0,
          y: 55,
          scale: 1.04,
        });

        gsap.set(secondSection, {
          visibility: "visible",
        });

        const animateSecondSection = () => {
          const timeline = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
          });

          timeline
            .to(secondContentRef.current, {
              opacity: 1,
              y: 0,
              duration: 1.05,
            })
            .to(
              secondImageRef.current,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
              },
              "-=0.65",
            );
        };

        const rect = secondSection.getBoundingClientRect();

        const isAlreadyVisible =
          rect.top < window.innerHeight &&
          rect.bottom > 0;

        if (isAlreadyVisible) {
          animateSecondSection();
        } else {
          ScrollTrigger.create({
            trigger: secondSection,
            start: "top 92%",
            once: true,
            onEnter: animateSecondSection,
          });
        }
      }

      /*
       * HISTORY
       */
      const historySection = historyRef.current;

      if (historySection) {
        gsap.set(historyTitleRef.current, {
          opacity: 0,
          y: 40,
        });

        gsap.set(historyTextRef.current, {
          opacity: 0,
          y: 45,
        });

        gsap.set(historySection, {
          visibility: "visible",
        });

        const animateHistory = () => {
          const timeline = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
          });

          timeline
            .to(historyTitleRef.current, {
              opacity: 1,
              y: 0,
              duration: 1,
            })
            .to(
              historyTextRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 1.05,
              },
              "-=0.55",
            );
        };

        const rect = historySection.getBoundingClientRect();

        const isAlreadyVisible =
          rect.top < window.innerHeight &&
          rect.bottom > 0;

        if (isAlreadyVisible) {
          animateHistory();
        } else {
          ScrollTrigger.create({
            trigger: historySection,
            start: "top 92%",
            once: true,
            onEnter: animateHistory,
          });
        }
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-x-hidden bg-[#1b1b1b] [background-image:radial-gradient(circle_at_7%_6%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_9%,transparent_20%),radial-gradient(circle_at_78%_15%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_11%,transparent_25%),radial-gradient(circle_at_32%_27%,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_7%,transparent_17%),radial-gradient(circle_at_94%_39%,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_10%,transparent_23%),radial-gradient(circle_at_13%_48%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_61%_58%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_8%,transparent_19%),radial-gradient(circle_at_20%_71%,rgba(0,0,0,0.33)_0%,rgba(0,0,0,0.15)_10%,transparent_22%),radial-gradient(circle_at_87%_82%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_38%_95%,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0.17)_9%,transparent_21%)] bg-no-repeat bg-[length:100%_100%]"
    >
      <PageHero
        title="Om Relinc"
        subtitle="Vi hjälper företag att växa genom smarta digitala lösningar, stark visuell identitet och strategisk utveckling."
        image="images/Omoss.webp"
      />

      <section className="relative container px-4 py-12 text-white sm:px-6 sm:py-16 md:py-24 lg:px-4">
        <div className="relative z-10 my-10 space-y-20 sm:my-14 sm:space-y-24 md:space-y-36">

          {/* FIRST BLOCK */}

          <div
            ref={firstSectionRef}
            className="invisible grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
          >
            <div
              ref={firstImageRef}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src="/images/kundsamarbete-digital-byra-malmo.webp"
                alt="Relinc erbjudande"
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[360px] md:h-full md:min-h-[460px]"
              />
            </div>

            <div
              ref={firstContentRef}
              className="flex max-w-xl flex-col justify-end"
            >
              <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Vårt erbjudande
              </span>

              <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Strategi, design och teknik som skapar resultat
              </h2>

              <p className="mb-8 text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Vi levererar smarta digitala lösningar som ger effekt i våra
                kunders verksamhet nu och i framtiden. Genom att kombinera
                strategi, kreativitet och teknik hjälper vi företag att bygga en
                stark digital närvaro och skapa långsiktigt värde.
              </p>

              <Link
                to="/webbredo"
                className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Läs mer om vårt erbjudande
              </Link>
            </div>
          </div>

          {/* SECOND BLOCK */}

          <div
            ref={secondSectionRef}
            className="invisible grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
          >
            <div
              ref={secondContentRef}
              className="flex max-w-xl flex-col justify-end md:order-1"
            >
              <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Team & kultur
              </span>

              <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Vi bygger långsiktiga relationer
              </h2>

              <p className="mb-8 text-base font-semibold leading-7 text-white/80 sm:text-lg">
                På Relinc drivs vi av att skapa lösningar som faktiskt används,
                utvecklar företag och gör skillnad. Vi tror på nära samarbeten,
                tydlig kommunikation och en arbetsprocess där både kund och team
                känner sig trygga från första idé till färdig lösning.
              </p>

              <Link
                to="/kontakta-oss"
                className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Kontakta oss
              </Link>
            </div>

            <div
              ref={secondImageRef}
              className="overflow-hidden rounded-2xl md:order-2"
            >
              <img
                src="/images/digitala-losningar-foretag-malmo.webp"
                alt="Relinc team"
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[360px] md:h-full md:min-h-[460px]"
              />
            </div>
          </div>

          {/* HISTORY */}

          <div
            ref={historyRef}
            className="invisible my-16 sm:my-20 md:my-32"
          >
            <h2
              ref={historyTitleRef}
              className="mb-6 text-2xl font-bold text-white sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl"
            >
              Vår historia
            </h2>

            <div
              ref={historyTextRef}
              className="grid grid-cols-1 gap-10 md:grid-cols-2"
            >
              <p className="text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Relinc grundades med ambitionen att hjälpa företag växa genom
                digitala lösningar som är både smarta, visuellt starka och
                affärsmässigt genomtänkta. Vi kombinerar erfarenhet inom webb,
                design, strategi och företagsutveckling för att skapa lösningar
                som fungerar i praktiken.
              </p>

              <p className="text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Vår målsättning är att vara en partner som företag kan lita på
                över tid. Genom tydlig kommunikation, kvalitet och kreativitet
                hjälper vi våra kunder att bygga starkare varumärken, förbättra
                sina digitala kanaler och skapa en stabil grund för framtida
                tillväxt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
};

export default OmOss;