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
    title: "Korrekta löner och rapportering",
    text: "Vi hjälper företag att säkerställa att löner, skatter och arbetsgivaravgifter hanteras korrekt och enligt gällande regler och tidsramar.",
  },
  {
    number: "2",
    title: "Effektiv och smidig administration",
    text: "Genom moderna rutiner och digital hantering förenklar vi löneprocessen och hjälper företag att minska administrationen i det dagliga arbetet.",
  },
  {
    number: "3",
    title: "Trygghet för företag och anställda",
    text: "Vi arbetar noggrant och professionellt för att skapa en trygg lönehantering där både företag och anställda kan känna sig säkra på att allt hanteras korrekt.",
  },
  {
    number: "4",
    title: "Flexibla lösningar för verksamheten",
    text: "Varje företag har olika behov och därför anpassar vi våra lönehanteringstjänster efter verksamhetens storlek, rutiner och krav för att skapa bästa möjliga lösning.",
  },
];

const faqs = [
  {
    question: "Vad innebär lönehantering?",
    answer:
      "Lönehantering innebär administration av löner, skatter, arbetsgivaravgifter och andra personalrelaterade uppgifter. Målet är att säkerställa att löner betalas ut korrekt och enligt gällande regler.",
  },
  {
    question: "Varför är professionell lönehantering viktigt?",
    answer:
      "Professionell lönehantering minskar risken för fel, sparar tid och säkerställer att företag följer aktuella lagar och regler. Det skapar även trygghet för både arbetsgivare och anställda.",
  },
  {
    question: "Vad ingår i lönehantering?",
    answer:
      "Lönehantering kan inkludera löneberäkningar, rapportering, arbetsgivaravgifter, skattehantering, semesterhantering och administration av anställningsrelaterade uppgifter.",
  },
  {
    question: "Kan lönehantering anpassas efter företagets behov?",
    answer:
      "Ja, lönehantering anpassas efter företagets storlek, antal anställda och specifika behov. Lösningarna kan skräddarsys för att skapa en smidig och effektiv löneprocess.",
  },
  {
    question: "Hur hjälper lönehantering företag att spara tid?",
    answer:
      "Genom att effektivisera administrationen och hantera löneprocessen korrekt kan företag minska manuellt arbete och fokusera mer på sin kärnverksamhet.",
  },
];

const Lonehantering = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Lönehantering"
        subtitle="Professionell lönehantering som säkerställer korrekta löner, smidig administration och trygg hantering för företag och anställda."
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
                Smidig administration för företag
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Genom noggranna rutiner och modern hantering förenklar vi
                löneprocessen och hjälper företag att spara tid samtidigt som
                trygghet och kvalitet säkerställs.
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
              Vanliga frågor om Lönehantering
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

export default Lonehantering;
