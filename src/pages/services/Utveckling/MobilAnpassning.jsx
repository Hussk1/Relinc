import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imagePath } from "@/lib/imagePath";

const TwoColumnBlockItems = [
  {
    title: "Responsiv design",
    image: imagePath("images/ModernWebbdesign.webp"),
    description:
      "Vi skapar mobilanpassade webbplatser som fungerar smidigt på alla enheter och skärmstorlekar. Med responsiv design säkerställer vi en konsekvent och användarvänlig upplevelse för alla besökare.",
  },
  {
    title: "Smidig användarupplevelse",
    image: imagePath("images/upplevelse.webp"),
    description:
      "Vi designar webbplatser med fokus på snabbhet, tydlig navigering och enkel användning för att skapa en bättre upplevelse på både mobil, surfplatta och dator.",
  },
];

const PuffBlockItems = [
  {
    title: "Webbdesign",
    description:
      "Vi skapar moderna webbplatser som inte bara ser bra ut utan också konverterar besökare till kunder.",
    linkText: "Till SEO optimering",
    link: "/seo-optimering",
  },
  {
    title: "Webbapplikationer",
    description:
      "Vi utvecklar skräddarsydda webbapplikationer som effektiviserar din verksamhet och skapar smarta digitala lösningar.",
    linkText: "Till webbapplikationer",
    link: "/webbapplikationer",
  },
  {
    title: "SEO optimering",
    description:
      "Vi hjälper dig att synas högre på Google genom teknisk SEO, innehållsoptimering och strategi som driver relevant trafik till din webbplats.",
    linkText: "Till SEO optimering",
    link: "/seo-optimering",
  },
];

const faqs = [
  {
    question: "Vad innebär mobilanpassning?",
    answer:
      "Mobilanpassning innebär att en webbplats automatiskt anpassar sig efter olika skärmstorlekar och enheter. Det gör att webbplatsen fungerar smidigt och ser bra ut på mobiltelefoner, surfplattor och datorer.",
  },
  {
    question: "Varför är mobilanpassning viktigt?",
    answer:
      "Mobilanpassning är viktigt eftersom en stor del av all webbtrafik idag kommer från mobila enheter. En mobilvänlig webbplats förbättrar användarupplevelsen, ökar tillgängligheten och gör det enklare för besökare att ta del av innehållet.",
  },
  {
    question: "Hur påverkar mobilanpassning SEO?",
    answer:
      "Google prioriterar mobilvänliga webbplatser i sina sökresultat. En responsiv och snabb webbplats kan därför förbättra synligheten online och bidra till bättre ranking i sökmotorer.",
  },
  {
    question: "Vad är responsiv design?",
    answer:
      "Responsiv design är en metod inom webbutveckling där webbplatsens layout och innehåll automatiskt anpassas efter användarens skärmstorlek och enhet för att skapa en konsekvent upplevelse.",
  },
  {
    question: "Hur vet man om en webbplats är mobilanpassad?",
    answer:
      "En mobilanpassad webbplats är enkel att navigera på mindre skärmar, laddar snabbt och har innehåll som anpassas tydligt efter olika enheter utan att användaren behöver zooma eller scrolla i sidled.",
  },
];

const MobilAnpassning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Mobilanpassning"
        subtitle="Vi säkerställer att din webbplats fungerar perfekt på alla enheter med responsiv design och optimerad användarupplevelse."
        image="/images/Utveckling.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      <section className="relative container py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-500px] bottom-[100px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute left-[-500px] bottom-[100px] h-[200px] w-[200px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative z-10 my-10 md:my-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {TwoColumnBlockItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full rounded-2xl object-cover transition duration-500 hover:scale-105 sm:h-[340px] lg:h-[420px]"
                  />
                </div>

                <h2 className="pb-2 pt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px]">
                  {item.title}
                </h2>

                <p className="text-base font-medium leading-7 text-white sm:text-lg">
                  {item.description}
                </p>
              </motion.div>
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
            className="mb-12 max-w-5xl md:mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Vanliga frågor om mobilanpassning
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

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

export default MobilAnpassning;