import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";

import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TwoColumnBlockItems = [
  {
    title: "Smarta digitala lösningar",
    image: "/images/webbapplikationer-digitala-losningar-malmo.webp",
    description:
      "Vi utvecklar moderna webbapplikationer som förenklar arbetsprocesser, effektiviserar verksamheter och skapar smarta digitala upplevelser anpassade efter företagets behov.",
  },
  {
    title: "Anpassade efter din verksamhet",
    image: "/images/skraddarsydda-webbapplikationer-malmo.webp",
    description:
      "Varje webbapplikation skräddarsys efter dina behov och mål. Med fokus på prestanda, användarvänlighet och skalbarhet skapar vi lösningar som växer tillsammans med din verksamhet.",
  },
];

const PuffBlockItems = [
  {
    title: "Webbdesign",
    description:
      "Vi skapar moderna webbplatser som inte bara ser bra ut utan också konverterar besökare till kunder.",
    linkText: "Till webbdesign",
    link: "/webbdesign",
  },
  {
    title: "SEO optimering",
    description:
      "Vi hjälper dig att synas högre på Google genom teknisk SEO, innehållsoptimering och strategi som driver relevant trafik till din webbplats.",
    linkText: "Till SEO optimering",
    link: "/seo-optimering",
  },
  {
    title: "Mobilanpassning",
    description:
      "Vi säkerställer att din webbplats fungerar perfekt på alla enheter med responsiv design och optimerad användarupplevelse.",
    linkText: "Till mobilanpassning",
    link: "/mobil-anpassning",
  },
];

const faqs = [
  {
    question: "Vad är en webbapplikation?",
    answer:
      "En webbapplikation är ett digitalt system som körs i webbläsaren och hjälper företag att hantera processer, data och arbetsflöden online. Till skillnad från vanliga webbplatser är webbapplikationer ofta interaktiva och byggda för specifika funktioner och behov.",
  },
  {
    question: "Varför ska man använda en webbapplikation?",
    answer:
      "Webbapplikationer hjälper företag att effektivisera arbetet, automatisera processer och förbättra användarupplevelsen. Genom skräddarsydda lösningar kan verksamheter spara tid, minska manuellt arbete och skapa smartare digitala arbetsflöden.",
  },
  {
    question: "Kan webbapplikationer anpassas efter verksamhetens behov?",
    answer:
      "Ja, webbapplikationer utvecklas ofta helt efter verksamhetens specifika krav och mål. Funktioner, design och integrationer kan anpassas för att skapa en lösning som passar företagets arbetsprocesser och användare.",
  },
  {
    question: "Är webbapplikationer säkra?",
    answer:
      "Säkerhet är en viktig del vid utvecklingen av webbapplikationer. Genom moderna säkerhetslösningar, kryptering och regelbundna uppdateringar skyddas både användardata och system från säkerhetshot och obehörig åtkomst.",
  },
  {
    question: "Hur lång tid tar det att utveckla en webbapplikation?",
    answer:
      "Tiden för att utveckla en webbapplikation varierar beroende på projektets omfattning och funktionalitet. En enklare lösning kan ta några veckor att utveckla medan mer avancerade system kan kräva flera månaders arbete.",
  },
];

const Webbapplikationer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const pageRef = useRef(null);
  const twoColumnRef = useRef(null);
  const faqRef = useRef(null);
  const relatedRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [
        twoColumnRef.current,
        faqRef.current,
        relatedRef.current,
      ].filter(Boolean);

      sections.forEach((section) => {
        gsap.set(section, {
          opacity: 0,
          y: 30,
        });

        const animateSection = () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
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
            start: "top 90%",
            once: true,
            onEnter: animateSection,
          });
        }
      });

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
        title="Webbapplikationer"
        subtitle="Moderna webbapplikationer byggda för prestanda, användarvänlighet och skalbarhet som hjälper din verksamhet att växa digitalt."
        image="images/Utveckling.webp"
      />

      <section className="relative container px-4 py-12 text-white sm:px-6 sm:py-16 md:py-24 lg:px-4">
        <div
          ref={twoColumnRef}
          className="relative z-10 my-10 md:my-14"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {TwoColumnBlockItems.map((item) => (
              <div key={item.title}>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full rounded-2xl object-cover sm:h-[340px] lg:h-[420px]"
                  />
                </div>

                <h2 className="pb-2 pt-5 text-2xl font-bold leading-tight sm:pt-6 sm:text-3xl md:text-4xl lg:text-[42px]">
                  {item.title}
                </h2>

                <p className="text-base font-medium leading-7 text-white sm:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={faqRef}
        className="relative overflow-hidden py-16 text-white sm:py-20 md:py-28"
      >
        <div className="container relative z-10 px-4 sm:px-6 lg:px-4">
          <div className="mb-10 max-w-4xl sm:mb-12 md:mb-16">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Vanliga frågor om webbapplikationer
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] transition hover:border-primary/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left sm:gap-6 sm:p-5"
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
                  className={`px-4 text-base leading-7 text-white/80 transition-all duration-300 sm:px-5 sm:text-lg ${
                    openIndex === index
                      ? "max-h-60 pb-4 sm:pb-5"
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

      <section
        ref={relatedRef}
        className="relative container px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-4"
      >
        <div className="relative z-10 mb-10 max-w-3xl sm:mb-12 md:mb-16">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Relaterade tjänster
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PuffBlockItems.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-2xl border-2 border-white px-4 py-10 transition duration-300 hover:-translate-y-1 hover:border-primary sm:px-5 sm:py-12 md:py-16"
            >
              <h2 className="mb-6 text-xl font-medium leading-7 text-primary sm:text-2xl">
                {item.title}
              </h2>

              <p className="mb-6 text-base font-medium leading-7 text-white sm:text-lg">
                {item.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={item.link}
                  className="group inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-white px-4 py-1.5 text-sm font-semibold text-white transition hover:border-primary hover:text-primary sm:text-base"
                >
                  <span>{item.linkText}</span>

                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
};

export default Webbapplikationer;