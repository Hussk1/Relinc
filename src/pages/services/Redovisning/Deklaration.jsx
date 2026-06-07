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
    title: "Korrekt och säker deklaration",
    text: "Vi hjälper företag att hantera deklarationer och skatteuppgifter korrekt och enligt gällande regler för att skapa trygghet och minska risken för fel.",
  },
  {
    number: "2",
    title: "Effektiv skatteadministration",
    text: "Genom strukturerad hantering och noggrann administration förenklar vi deklarationsprocessen och hjälper företag att spara tid och få bättre kontroll över ekonomin.",
  },
  {
    number: "3",
    title: "Professionell expertis och rådgivning",
    text: "Våra erfarna rådgivare arbetar med hög precision och ger stöd genom hela deklarationsprocessen för att säkerställa korrekt och professionell hantering.",
  },
  {
    number: "4",
    title: "Anpassade deklarationslösningar",
    text: "Varje företag har olika behov och därför anpassar vi våra deklarationstjänster efter verksamhetens storlek, bransch och ekonomiska förutsättningar.",
  },
];

const faqs = [
  {
    question: "Vad innebär deklarationshantering?",
    answer:
      "Deklarationshantering innebär att hantera företagets deklarationer, skatteuppgifter och rapportering enligt gällande lagar och regler. Målet är att säkerställa att allt lämnas in korrekt och i rätt tid.",
  },
  {
    question: "Varför är professionell deklarationshjälp viktigt?",
    answer:
      "Professionell deklarationshjälp minskar risken för fel, sparar tid och hjälper företag att följa aktuella skatteregler och krav från myndigheter.",
  },
  {
    question: "Vad ingår i deklarationstjänster?",
    answer:
      "Deklarationstjänster kan inkludera skattedeklarationer, momsredovisning, inkomstdeklarationer, rapportering och genomgång av företagets ekonomiska underlag.",
  },
  {
    question: "Kan deklarationstjänster anpassas efter företagets behov?",
    answer:
      "Ja, deklarationstjänster anpassas efter företagets verksamhet, storlek och specifika behov för att skapa en trygg och effektiv hantering.",
  },
  {
    question: "Hur hjälper deklarationshantering företag att spara tid?",
    answer:
      "Genom att låta experter hantera deklarationer och skatteadministration kan företag minska administrationen, undvika onödiga fel och fokusera mer på verksamhetens utveckling.",
  },
];

const Deklaration = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Deklaration"
        subtitle="Professionell deklarationshjälp som säkerställer korrekt hantering, minskar administrationen och hjälper företag att följa aktuella regler och krav."
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
                Smidig och säker skattehantering
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Genom noggrann administration och professionell hantering
                förenklar vi deklarationsprocessen och hjälper företag att spara
                tid och minska risken för fel.
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
              Vanliga frågor om Deklaration
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

export default Deklaration;
