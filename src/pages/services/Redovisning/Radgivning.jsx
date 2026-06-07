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
    title: "Strategisk planering",
    text: "Vi hjälper företag att skapa tydliga strategier och långsiktiga planer som stärker verksamheten och skapar bättre förutsättningar för framtida tillväxt.",
  },

  {
    number: "2",
    title: "Ekonomisk analys",
    text: "Genom noggrann analys av företagets ekonomi identifierar vi möjligheter, risker och förbättringsområden för att hjälpa verksamheten att utvecklas effektivt.",
  },

  {
    number: "3",
    title: "Tryggt beslutsstöd",
    text: "Vi fungerar som ett stöd i viktiga beslut och hjälper företag att fatta välgrundade ekonomiska och strategiska beslut med större trygghet och kontroll.",
  },

  {
    number: "4",
    title: "Personlig rådgivning",
    text: "Varje företag är unikt och därför erbjuder vi rådgivning anpassad efter verksamhetens mål, behov och utmaningar för att skapa bästa möjliga resultat.",
  },
];

const faqs = [
  {
    question: "Vad innebär ekonomisk rådgivning?",
    answer:
      "Ekonomisk rådgivning handlar om att hjälpa företag fatta välgrundade beslut inom ekonomi, planering och affärsutveckling. Genom strategisk vägledning och analys skapas lösningar som stärker verksamheten och bidrar till långsiktig tillväxt.",
  },
  {
    question: "Varför är rådgivning viktigt för företag?",
    answer:
      "Professionell rådgivning hjälper företag att hantera utmaningar, identifiera möjligheter och skapa bättre förutsättningar för framtiden. Med rätt stöd kan företag fatta tryggare beslut och utveckla verksamheten mer effektivt.",
  },
  {
    question: "Hur kan ekonomisk rådgivning hjälpa ett företag?",
    answer:
      "Ekonomisk rådgivning kan hjälpa företag med budgetering, planering, strategiska beslut och analys av verksamhetens ekonomi. Målet är att skapa stabilitet, förbättra lönsamheten och stödja företagets utveckling.",
  },
  {
    question: "Kan rådgivning anpassas efter företagets behov?",
    answer:
      "Ja, rådgivningen anpassas efter varje företags mål, utmaningar och verksamhet. Genom personligt stöd och skräddarsydda lösningar får företag hjälp utifrån sina specifika behov och förutsättningar.",
  },
  {
    question: "Varför välja professionella ekonomiska rådgivare?",
    answer:
      "Professionella rådgivare erbjuder erfarenhet, expertkunskap och strategiska insikter som hjälper företag att fatta bättre beslut. Genom långsiktigt samarbete skapas trygghet och stöd för hållbar utveckling och tillväxt.",
  },
];

const Radgivning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Rådgivning"
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
                Rådgivning som driver utveckling
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Vi hjälper företag att navigera genom ekonomiska utmaningar och
                möjligheter med rådgivning som skapar trygghet, bättre beslut
                och långsiktig tillväxt.
              </p>

              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Boka rådgivning
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
              Vanliga frågor om Rådgivning
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

export default Radgivning;
