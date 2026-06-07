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
    question: "Vad är logotypdesign?",
    answer:
      "Logotypdesign handlar om att skapa en visuell symbol eller identitet som representerar ett företag eller varumärke. En professionell logotyp hjälper till att skapa igenkänning och ger ett starkt första intryck.",
  },
  {
    question: "Varför är en bra logotyp viktig?",
    answer:
      "En bra logotyp stärker varumärkets identitet och gör företaget mer minnesvärt. Den skapar förtroende, professionalism och hjälper företaget att sticka ut från konkurrenterna.",
  },
  {
    question: "Hur går processen för logotypdesign till?",
    answer:
      "Processen börjar vanligtvis med research och idéarbete för att förstå företagets mål, målgrupp och identitet. Därefter tas designförslag fram som vidareutvecklas till en färdig logotyp.",
  },
  {
    question: "Vad bör en bra logotyp innehålla?",
    answer:
      "En bra logotyp ska vara enkel, tydlig och lätt att känna igen. Den bör fungera på olika plattformar och storlekar samtidigt som den speglar företagets värderingar och visuella identitet.",
  },
  {
    question: "Kan en logotyp användas både digitalt och i tryck?",
    answer:
      "Ja, en professionellt designad logotyp anpassas för att fungera både digitalt och i tryckt material. Den levereras ofta i flera format för att kunna användas på webbplatser, sociala medier, visitkort och andra marknadsföringsmaterial.",
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
    title: "Bildredigering",
    description:
      "Bildredigering som förbättrar och anpassar dina bilder för att skapa ett mer professionellt och visuellt tilltalande resultat. Vi hjälper dig att skapa högkvalitativa bilder som stärker ditt varumärke.",
    linkText: "Till Bildredigering",
    link: "/Bildredigering",
  },
];

const Logotypdesign = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Logotypdesign"
        subtitle="Modern logotypdesign som kombinerar kreativitet, strategi och tydlig varumärkesidentitet för att hjälpa ditt företag att sticka ut."
        image="/images/Grafisk.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      <section className="container py-16 text-white">
        <div className="space-y-32 my-14">
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
                Unik visuell identitet
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Vi skapar professionella logotyper som stärker ditt varumärke
                och hjälper ditt företag att sticka ut. Med fokus på design,
                färg och typografi bygger vi en visuell identitet som känns
                modern och minnesvärd.
              </p>

              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Boka logotypdesign
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
              Vanliga frågor om logotypdesign
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

export default Logotypdesign;
