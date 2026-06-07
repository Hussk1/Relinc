import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  UserRound,
  ThumbsUp,
  Check,
  ChartNoAxesCombined,
  Handshake,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imagePath } from "@/lib/imagePath";


const values = [
  {
    number: "1",
    title: "Korrekt och professionell rapportering",
    text: "Vi hjälper företag att ta fram årsredovisningar som uppfyller gällande krav och ger en tydlig och professionell bild av verksamhetens ekonomi.",
  },

  {
    number: "2",
    title: "Ekonomisk översikt och analys",
    text: "Genom noggrann sammanställning och analys skapar vi bättre översikt över företagets ekonomiska resultat och underlag för framtida beslut.",
  },

  {
    number: "3",
    title: "Trygghet och kvalitet",
    text: "Våra erfarna rådgivare arbetar med hög precision för att säkerställa att årsredovisningen hanteras korrekt, tryggt och enligt aktuella regler.",
  },

  {
    number: "4",
    title: "Anpassade lösningar för företag",
    text: "Varje verksamhet har olika behov och därför anpassar vi våra årsredovisningstjänster efter företagets storlek, bransch och ekonomiska förutsättningar.",
  },
];

const faqs = [
  {
    question: "Vad är en årsredovisning?",
    answer:
      "En årsredovisning är en sammanställning av företagets ekonomi och verksamhet under ett räkenskapsår. Den ger en tydlig bild av företagets resultat, tillgångar och ekonomiska situation.",
  },
  {
    question: "Varför är årsredovisning viktigt?",
    answer:
      "Årsredovisningen är viktig eftersom den visar företagets ekonomiska ställning och säkerställer att verksamheten följer aktuella lagar och regler. Den fungerar även som ett viktigt underlag för framtida beslut.",
  },
  {
    question: "Vad ingår i en årsredovisning?",
    answer:
      "En årsredovisning kan innehålla resultatrapport, balansrapport, förvaltningsberättelse och andra ekonomiska sammanställningar som beskriver företagets ekonomi och utveckling.",
  },
  {
    question: "Kan årsredovisning anpassas efter företagets behov?",
    answer:
      "Ja, årsredovisningstjänster anpassas efter företagets storlek, verksamhet och ekonomiska förutsättningar för att skapa en korrekt och professionell rapportering.",
  },
  {
    question: "Hur hjälper en årsredovisning företag?",
    answer:
      "En tydlig och korrekt årsredovisning hjälper företag att få bättre översikt över ekonomin, skapa förtroende hos kunder och myndigheter samt ge ett stabilt underlag för framtida planering.",
  },
];

const Arsredovisning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Årsredovisning"
        subtitle="Strategisk ekonomisk rådgivning som hjälper företag att fatta smarta beslut, skapa hållbar tillväxt och utvecklas långsiktigt."
        image="/images/Redovisning.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      <section className="container py-16 text-white">
        <div className="space-y-64 my-14">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <img
                src={imagePath("images/img-3770.webp")}
                alt="Logotypdesign"
                className="rounded-2xl"
              />
            </div>

            <div className="max-w-xl self-end">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Professionell årsredovisning
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Vi hjälper företag att ta fram tydliga och korrekta
                årsredovisningar som uppfyller gällande krav och ger en
                professionell översikt över verksamhetens ekonomi.
              </p>

              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Boka möte
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-14">
            {values.map((item) => (
              <div key={item.title} className="border-t border-primary pt-5">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary text-lg font-bold text-primary">
                  {item.number}
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  {item.title}
                </h3>

                <p className="text-lg font-semibold leading-7 text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12 max-w-4xl md:mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Vanliga frågor om Årsredovisning
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] transition hover:border-primary/50"
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
                      openIndex === index ? "rotate-180 text-primary" : ""
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
};

export default Arsredovisning;
