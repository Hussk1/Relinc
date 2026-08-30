import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";

import {
  Leaf,
  Truck,
  RefreshCw,
  Crown,
  ChevronDown,
} from "lucide-react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "Arbetsjackor",
    price: "Från 3 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/hoodie.webp",
  },
  {
    title: "Profilkläder",
    price: "Från 1 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/hat.webp",
  },
  {
    title: "T-shirts & Hoodies",
    price: "Från 9 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/shirt.webp",
  },
];

const sortiment = [
  {
    title: "Arbetsjackor",
    price: "Från 3 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/hoodie.webp",
  },
  {
    title: "Profilkläder",
    price: "Från 1 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/hat.webp",
  },
  {
    title: "T-shirts & Hoodies",
    price: "Från 9 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/shirt.webp",
  },
  {
    title: "Arbetsjackor",
    price: "Från 3 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/hoodie.webp",
  },
  {
    title: "Profilkläder",
    price: "Från 1 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/hat.webp",
  },
  {
    title: "T-shirts & Hoodies",
    price: "Från 9 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/shirt.webp",
  },
  {
    title: "Arbetsjackor",
    price: "Från 3 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/hoodie.webp",
  },
  {
    title: "Profilkläder",
    price: "Från 1 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/hat.webp",
  },
  {
    title: "T-shirts & Hoodies",
    price: "Från 9 200 kr",
    text: "Minsta beställningsmängd 25",
    image: "/images/shirt.webp",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Ingen returrätt",
    text: "Tryckta och specialanpassade kläder kan inte returneras.",
  },
  {
    icon: Truck,
    title: "Smidig leverans",
    text: "Vi guidar er från idé till färdiga företagskläder.",
  },
  {
    icon: RefreshCw,
    title: "Flexibla lösningar",
    text: "Beställ efter behov, roll, avdelning eller säsong.",
  },
  {
    icon: Crown,
    title: "Professionellt intryck",
    text: "Stärk varumärket med en enhetlig visuell profil.",
  },
];

const faqs = [
  {
    question: "Vilka typer av arbetskläder erbjuder ni?",
    answer:
      "Vi erbjuder ett brett utbud av arbetskläder och profilkläder, inklusive t-shirts, hoodies, jackor, kepsar och andra företagsanpassade produkter.",
  },
  {
    question: "Kan arbetskläder anpassas med egen logotyp?",
    answer:
      "Ja, vi erbjuder tryck och anpassning av arbetskläder med företagets logotyp, färger och design för att skapa ett professionellt och enhetligt uttryck.",
  },
  {
    question: "Kan man göra specialbeställningar?",
    answer:
      "Absolut. Om ni söker andra modeller, färger eller typer av kläder kan vi hjälpa till med skräddarsydda lösningar och specialbeställningar efter era behov.",
  },
  {
    question: "Finns det returrätt på tryckta kläder?",
    answer:
      "Eftersom tryckta och specialanpassade produkter tillverkas efter beställning gäller vanligtvis ingen returrätt på dessa produkter.",
  },
  {
    question: "Hur lång är leveranstiden för arbetskläder?",
    answer:
      "Leveranstiden varierar beroende på typ av produkt, antal och anpassning, men vi arbetar alltid för att leverera så snabbt och smidigt som möjligt.",
  },
];

const Arbetsklader = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const pageRef = useRef(null);
  const popularRef = useRef(null);
  const sortimentRef = useRef(null);
  const benefitsRef = useRef(null);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const createSectionAnimation = ({
        section,
        headingSelector,
        itemSelector,
        stagger = 0.12,
      }) => {
        if (!section) return;

        const heading = headingSelector
          ? section.querySelector(headingSelector)
          : null;

        const items = gsap.utils.toArray(
          section.querySelectorAll(itemSelector),
        );

        if (heading) {
          gsap.set(heading, {
            opacity: 0,
            y: 45,
          });
        }

        gsap.set(items, {
          opacity: 0,
          y: 50,
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

          if (heading) {
            timeline.to(heading, {
              opacity: 1,
              y: 0,
              duration: 1.05,
            });
          }

          timeline.to(
            items,
            {
              opacity: 1,
              y: 0,
              duration: 1.05,
              stagger,
            },
            heading ? "-=0.55" : 0,
          );
        };

        const rect = section.getBoundingClientRect();

        const isAlreadyVisible =
          rect.top < window.innerHeight &&
          rect.bottom > 0;

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
      };

      createSectionAnimation({
        section: popularRef.current,
        headingSelector: ".section-heading",
        itemSelector: ".popular-card",
        stagger: 0.13,
      });

      createSectionAnimation({
        section: sortimentRef.current,
        headingSelector: ".section-heading",
        itemSelector: ".sortiment-card",
        stagger: 0.1,
      });

      createSectionAnimation({
        section: benefitsRef.current,
        itemSelector: ".benefit-card",
        stagger: 0.11,
      });

      createSectionAnimation({
        section: faqRef.current,
        headingSelector: ".section-heading",
        itemSelector: ".faq-item",
        stagger: 0.09,
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageHero
        title="Arbetskläder"
        subtitle="Professionella arbetskläder och profilkläder som stärker ert varumärke och skapar ett enhetligt intryck."
        image="images/Företagsprodukter.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      {/* POPULÄRAST */}

      <section
        ref={popularRef}
        className="invisible relative overflow-hidden py-20 text-white md:py-28"
      >
        <div className="pointer-events-none absolute right-[-500px] top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="container relative z-10">
          <div className="section-heading mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Populärast bland företag
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.title}
                className="popular-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f1f] transition hover:border-primary/30"
              >
                <div className="h-[380px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="mb-4 flex flex-1 items-end justify-between px-6 pt-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-primary">
                      {item.price}
                    </p>
                  </div>

                  <Link
                    to="/kontakt"
                    className="text-sm font-bold text-white transition hover:text-primary"
                  >
                    Kontakta
                  </Link>
                </div>

                <div className="mb-6 px-6">
                  <p className="text-sm font-semibold text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SORTIMENT */}

      <section
        ref={sortimentRef}
        className="invisible py-20 text-white md:py-28"
      >
        <div className="container">
          <div className="section-heading mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Vårt sortiment
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {sortiment.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="sortiment-card group overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f1f]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[320px] w-full object-cover"
                  />
                </div>

                <div className="mb-4 flex flex-1 items-end justify-between px-6 pt-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-primary">
                      {item.price}
                    </p>
                  </div>

                  <Link
                    to="/kontakt"
                    className="text-sm font-bold text-white transition hover:text-primary"
                  >
                    Kontakta
                  </Link>
                </div>

                <div className="mb-6 px-6">
                  <p className="text-sm font-semibold text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section
        ref={benefitsRef}
        className="invisible relative overflow-hidden py-20 text-white md:py-28"
      >
        <div className="pointer-events-none absolute bottom-0 left-[-500px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="container relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="benefit-card rounded-2xl border border-white/10 bg-[#1f1f1f] p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold leading-6 text-white/70">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}

      <section
        ref={faqRef}
        className="invisible relative overflow-hidden py-20 text-white md:py-28"
      >
        <div className="container relative z-10">
          <div className="section-heading mb-12 max-w-3xl md:mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Vanliga frågor om företagskläder
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="faq-item overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] transition hover:border-primary/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 p-5 text-left"
                >
                  <span className="text-base font-medium leading-7 text-white sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition ${
                      openIndex === index
                        ? "rotate-180 text-primary"
                        : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-5 text-base leading-7 text-white/80 transition-all duration-300 sm:text-lg ${
                    openIndex === index
                      ? "max-h-60 pb-5"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
};

export default Arbetsklader;