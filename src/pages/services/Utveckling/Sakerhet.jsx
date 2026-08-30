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
    title: "Säkra webblösningar",
    image: "/images/sakra-webblosningar-malmo.webp",
    description:
      "Vi utvecklar webbplatser med fokus på säkerhet, stabilitet och skydd mot digitala hot. Genom moderna säkerhetslösningar hjälper vi till att skydda både data och användare.",
  },
  {
    title: "Skydd och prestanda",
    image: "/images/webbsakerhet-prestanda-malmo.webp",
    description:
      "En säker webbplats handlar om mer än bara skydd. Vi arbetar med uppdateringar, optimering och säkerhetsåtgärder för att skapa en trygg och stabil upplevelse för alla besökare.",
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
    title: "Webbapplikationer",
    description:
      "Vi utvecklar skräddarsydda webbapplikationer som effektiviserar din verksamhet och skapar smarta digitala lösningar.",
    linkText: "Till webbapplikationer",
    link: "/webbapplikationer",
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
    question: "Varför är webbsäkerhet viktigt?",
    answer:
      "Webbsäkerhet är viktigt för att skydda webbplatser, användardata och företag mot digitala hot som intrång, skadlig kod och dataläckor. En säker webbplats skapar även förtroende hos besökare och kunder.",
  },
  {
    question: "Hur skyddar man en webbplats mot attacker?",
    answer:
      "En webbplats kan skyddas genom regelbundna uppdateringar, säkra lösenord, SSL-certifikat, brandväggar och säkerhetsövervakning. Dessa åtgärder minskar risken för intrång och säkerhetsproblem.",
  },
  {
    question: "Vad är ett SSL-certifikat?",
    answer:
      "Ett SSL-certifikat krypterar kommunikationen mellan webbplatsen och besökaren för att skydda känslig information. Det gör också att webbplatsen visas som säker i webbläsaren med https istället för http.",
  },
  {
    question: "Hur ofta bör man uppdatera sin webbplats?",
    answer:
      "Det är viktigt att regelbundet uppdatera webbplatsens system, plugins och säkerhetsfunktioner för att skydda mot nya hot och säkerhetsrisker. Löpande underhåll hjälper även webbplatsen att fungera stabilt och effektivt.",
  },
  {
    question: "Kan en säker webbplats förbättra användarupplevelsen?",
    answer:
      "Ja, en säker webbplats skapar trygghet för användaren och bidrar till en bättre upplevelse. Snabb prestanda, stabil drift och skyddad data gör att besökare känner större förtroende för webbplatsen.",
  },
];

const Sakerhet = () => {
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
        title="Säkerhet"
        subtitle="Säkra och stabila webblösningar med fokus på dataskydd, prestanda och trygg användarupplevelse."
        image="images/Utveckling.webp"
      />

      {/* TWO COLUMN BLOCK */}

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

      {/* FAQ */}

      <section
        ref={faqRef}
        className="relative overflow-hidden py-16 text-white sm:py-20 md:py-28"
      >
        <div className="container relative z-10 px-4 sm:px-6 lg:px-4">
          <div className="mb-10 max-w-3xl sm:mb-12 md:mb-16">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Vanliga frågor om säkerhet
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

      {/* RELATED SERVICES */}

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

export default Sakerhet;