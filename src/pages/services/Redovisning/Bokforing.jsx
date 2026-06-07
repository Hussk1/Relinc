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
    title: "Korrekt och strukturerad bokföring",
    text: "Vi hjälper företag att hantera bokföringen på ett noggrant och professionellt sätt för att skapa ordning, tydlighet och bättre kontroll över ekonomin.",
  },

  {
    number: "2",
    title: "Effektiv ekonomihantering",
    text: "Genom moderna arbetssätt och smidig administration förenklar vi den dagliga bokföringen och hjälper företag att spara tid och minska administrationen.",
  },

  {
    number: "3",
    title: "Trygghet och noggrannhet",
    text: "Vi arbetar med hög precision och säkerställer att bokföringen hanteras korrekt enligt aktuella regler och krav för att skapa trygghet i verksamheten.",
  },

  {
    number: "4",
    title: "Anpassade bokföringslösningar",
    text: "Varje företag har olika behov och därför anpassar vi våra bokföringstjänster efter verksamhetens storlek, bransch och ekonomiska förutsättningar.",
  },
];

const faqs = [
  {
    question: "Vad innebär bokföring?",
    answer:
      "Bokföring innebär att registrera och hantera företagets ekonomiska händelser för att skapa ordning och tydlig översikt över verksamhetens ekonomi.",
  },
  {
    question: "Varför är professionell bokföring viktigt?",
    answer:
      "Professionell bokföring hjälper företag att hålla ordning på ekonomin, följa aktuella regler och skapa ett stabilt underlag för framtida beslut och planering.",
  },
  {
    question: "Vad ingår i bokföringstjänster?",
    answer:
      "Bokföringstjänster kan inkludera löpande bokföring, hantering av verifikationer, rapportering, momsredovisning och ekonomisk administration.",
  },
  {
    question: "Kan bokföring anpassas efter företagets behov?",
    answer:
      "Ja, bokföringstjänster anpassas efter företagets storlek, bransch och ekonomiska behov för att skapa en smidig och effektiv hantering.",
  },
  {
    question: "Hur hjälper bokföring företag att få bättre kontroll?",
    answer:
      "Genom tydlig och strukturerad bokföring får företag bättre översikt över ekonomin, vilket gör det enklare att följa resultat, planera och fatta välgrundade beslut.",
  },
];

const Bokforing = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Bokföring"
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
                Smidig och trygg ekonomihantering
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Genom strukturerad bokföring och professionell administration
                hjälper vi företag att spara tid, minska administration och
                säkerställa korrekt ekonomisk hantering.
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
              Vanliga frågor om Bokförning
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

export default Bokforing;
