import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imagePath } from "@/lib/imagePath";

const TwoColumnBlockItems = [
  {
    title: "Smarta digitala lösningar",
    image: imagePath("images/ModernWebbdesign.webp"),
    description:
      "Vi utvecklar moderna webbapplikationer som förenklar arbetsprocesser, effektiviserar verksamheter och skapar smarta digitala upplevelser anpassade efter företagets behov.",
  },
  {
    title: "Anpassade efter din verksamhet",
    image: imagePath("images/upplevelse.webp"),
    description:
      "Varje webbapplikation skräddarsys efter dina behov och mål. Med fokus på prestanda, användarvänlighet och skalbarhet skapar vi lösningar som växer tillsammans med din verksamhet.",
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
    title: "SEO optimering",
    description:
      "Vi hjälper dig att synas högre på Google genom teknisk SEO, innehållsoptimering och strategi som driver relevant trafik till din webbplats.",
    linkText: "Till SEO optimering",
    link: "/seo-optimering",
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
    question: "Vad är en webbapplikation?",
    answer:
      "En webbapplikation är ett digitalt system som körs i webbläsaren och hjälper företag att hantera processer, data och arbetsflöden online. Till skillnad från vanliga webbplatser är webbapplikationer ofta interaktiva och byggda för specifika funktioner och behov.",
  },
  {
    question: "Varför ska man använda en webbapplikation?",
    answer:
      "Webbapplikationer hjälper företag att effektivisera arbetet, automatisera processer och förbättra användarupplevelsen. Genom skräddarsydda lösningar kan verksamheter spara tid, minska manuellt arbete och skapa smartare digitala arbetsflöden.",
  },
  {
    question: "Kan webbapplikationer anpassas efter verksamhetens behov?",
    answer:
      "Ja, webbapplikationer utvecklas ofta helt efter verksamhetens specifika krav och mål. Funktioner, design och integrationer kan anpassas för att skapa en lösning som passar företagets arbetsprocesser och användare.",
  },
  {
    question: "Är webbapplikationer säkra?",
    answer:
      "Säkerhet är en viktig del vid utvecklingen av webbapplikationer. Genom moderna säkerhetslösningar, kryptering och regelbundna uppdateringar skyddas både användardata och system från säkerhetshot och obehörig åtkomst.",
  },
  {
    question: "Hur lång tid tar det att utveckla en webbapplikation?",
    answer:
      "Tiden för att utveckla en webbapplikation varierar beroende på projektets omfattning och funktionalitet. En enklare lösning kan ta några veckor att utveckla medan mer avancerade system kan kräva flera månaders arbete.",
  },
];

const Webbapplikationer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Webbapplikationer"
        subtitle="Moderna webbapplikationer byggda för prestanda, användarvänlighet och skalbarhet som hjälper din verksamhet att växa digitalt."
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
                    className="h-[260px] w-full rounded-2xl object-cover sm:h-[340px] lg:h-[420px]"
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
            className="mb-12 max-w-4xl md:mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Vanliga frågor om webbapplikationer
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

export default Webbapplikationer;