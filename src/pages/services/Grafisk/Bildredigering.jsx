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
    icon: UserRound,
    title: "Kundfokus",
    text: "Vi sätter alltid kunden i centrum och utgår från dina mål, behov och förutsättningar. Genom att arbeta nära dig skapar vi lösningar som inte bara ser bra ut utan också fungerar i praktiken och ger resultat.",
  },
  {
    icon: ThumbsUp,
    title: "Kvalitet",
    text: "Vi strävar alltid efter hög kvalitet i allt vi gör, från första idé till färdig lösning. Genom noggrannhet och erfarenhet säkerställer vi att varje detalj håller en professionell standard.",
  },
  {
    icon: Check,
    title: "Enkelhet",
    text: "Vi gör det komplexa enkelt. Oavsett om det handlar om webb, design eller ekonomi bryter vi ner processer så att de blir tydliga och lättförståeliga.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Långsiktighet",
    text: "Vi bygger inte bara lösningar för idag utan för framtiden. Vårt mål är att vara en partner över tid och skapa hållbar utveckling för ditt företag.",
  },
  {
    icon: Handshake,
    title: "Samarbete",
    text: "Vi tror på nära och transparenta samarbeten. Genom tydlig kommunikation och gemensamma mål skapar vi bättre resultat tillsammans.",
  },
];

const faqs = [
  {
    question: "Vad innebär bildproduktion?",
    answer:
      "Bildproduktion innebär att vi skapar, redigerar och anpassar visuellt material för företag, produkter och marknadsföring.",
  },
  {
    question: "Vilka typer av bilder kan ni skapa?",
    answer:
      "Vi kan skapa produktbilder, kampanjbilder, bilder för sociala medier, webbmaterial och annat visuellt innehåll anpassat efter ditt varumärke.",
  },
  {
    question: "Arbetar ni med AI-genererade bilder?",
    answer:
      "Ja, vi använder AI som en del av produktionen och kombinerar det med manuell redigering för att skapa ett mer genomarbetat och professionellt resultat",
  },
  {
    question: "Kan bilderna anpassas för olika plattformar?",
    answer:
      "Ja, bilderna kan anpassas i storlek, format och utformning för exempelvis sociala medier, webbplatser, annonser och andra digitala kanaler.",
  },
  {
    question: "Kan ni utgå från befintliga produktbilder?",
    answer:
      "Ja, vi kan arbeta med befintliga bilder och förbättra, redigera eller bygga vidare på materialet för att skapa ett nytt visuellt uttryck.",
  },
];

const PuffBlockItems = [
  {
    title: "Banners & Annonser",
    description:
      "Bannerdesign och annonser som fångar uppmärksamhet och stärker ditt varumärke. Vi skapar visuellt tilltalande och effektiva marknadsföringsmaterial som hjälper dig att nå din målgrupp.",
    linkText: "Till Banners & Annonser",
    link: "/BannersAnnonser",
  },
  {
    title: "Logotypdesign",
    description:
      "Unik visuell identitet som stärker ditt varumärke och skapar ett starkt första intryck. Vi utvecklar logotyper som är både estetiska och funktionella.",
    linkText: "Till Logotypdesign",
    link: "/Logotypdesign",
  },
];

const Bildredigering = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Bildproduktion"
        subtitle="Vi skapar och redigerar professionellt bildmaterial anpassat för ditt varumärke, dina produkter och din marknadsföring."
        image="images/Grafisk.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      <section className="container py-16 text-white">
        <div className="space-y-32 my-14">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <img
                src="images/img-3770.webp"
                alt="Logotypdesign"
                className="rounded-2xl"
              />
            </div>

            <div className="max-w-xl self-end">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Professionell bildproduktion
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Vi skapar och redigerar visuellt bildmaterial anpassat efter
                ditt varumärke, dina produkter och dina mål. Med fokus på
                kvalitet, detaljer och ett professionellt uttryck tar vi fram
                bilder som stärker din visuella kommunikation.
              </p>

              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Kontakta oss
              </a>
            </div>
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
            className="mb-12 max-w-3xl md:mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Vanliga frågor om bildproduktion
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

      <section className="relative container py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-500px] bottom-[100px] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 mb-12 max-w-3xl md:mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Relaterade tjänster
          </h2>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {PuffBlockItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-2xl border-2 border-white px-4 py-12 transition duration-300 hover:-translate-y-1 hover:border-primary md:py-16"
            >
              <h2 className="mb-6 text-2xl font-medium leading-7 text-primary">
                {item.title}
              </h2>

              <p className="mb-6 text-lg font-medium text-white">
                {item.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={item.link}
                  className="group inline-flex h-8 items-center gap-2 rounded-full border border-white px-4 font-semibold text-white transition hover:border-primary hover:text-primary"
                >
                  {item.linkText}
                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactFormSection />
    </>
  );
};

export default Bildredigering;
