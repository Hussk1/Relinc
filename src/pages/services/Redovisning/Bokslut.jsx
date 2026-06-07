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
    title: "Professionell bokslutshantering",
    text: "Vi hjälper företag att sammanställa och hantera bokslut på ett korrekt och professionellt sätt för att skapa tydlig ekonomisk översikt och trygg rapportering.",
  },
  {
    number: "2",
    title: "Analys och ekonomisk kontroll",
    text: "Genom noggrann genomgång och ekonomisk analys hjälper vi företag att få bättre kontroll över verksamhetens resultat och framtida planering.",
  },
  {
    number: "3",
    title: "Kvalitet och noggrannhet",
    text: "Våra erfarna rådgivare arbetar med hög precision för att säkerställa att bokslut hanteras professionellt, effektivt och med fokus på kvalitet i varje detalj.",
  },
  {
    number: "4",
    title: "Anpassade bokslutslösningar",
    text: "Vi anpassar våra bokslutstjänster efter företagets verksamhet, storlek och behov för att skapa en smidig och trygg ekonomisk hantering.",
  },
];

const faqs = [
  {
    question: "Vad innebär bokslut?",
    answer:
      "Bokslut innebär att sammanställa företagets ekonomi för en viss period och avsluta räkenskaperna enligt gällande regler. Det ger en tydlig bild av företagets ekonomiska situation och resultat.",
  },
  {
    question: "Varför är ett professionellt bokslut viktigt?",
    answer:
      "Ett professionellt bokslut säkerställer att företagets ekonomi redovisas korrekt och enligt aktuella lagar och krav. Det skapar även ett viktigt underlag för planering och framtida beslut.",
  },
  {
    question: "Vad ingår i bokslutstjänster?",
    answer:
      "Bokslutstjänster kan inkludera ekonomisk sammanställning, rapportering, granskning av underlag samt hantering av redovisning och dokumentation enligt gällande regler.",
  },
  {
    question: "Kan bokslut anpassas efter företagets behov?",
    answer:
      "Ja, bokslutstjänster anpassas efter företagets storlek, verksamhet och ekonomiska förutsättningar för att skapa en effektiv och trygg hantering.",
  },
  {
    question: "Hur hjälper bokslut företag att få bättre kontroll?",
    answer:
      "Genom tydlig rapportering och noggrann analys får företag bättre översikt över ekonomin och ett stabilt underlag för framtida planering och strategiska beslut.",
  },
];

const Bokslut = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Bokslut"
        subtitle="Professionella bokslutstjänster som hjälper företag att få tydlig översikt över ekonomin och säkerställer korrekt rapportering enligt gällande regler."
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
                Bokslut med kvalitet och precision
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Vi erbjuder professionella bokslutstjänster med fokus på
                noggrannhet, kvalitet och tydlig ekonomisk rapportering för
                företag som vill skapa långsiktig stabilitet.
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
              Vanliga frågor om Bokslut
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

export default Bokslut;
