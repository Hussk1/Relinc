import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imagePath } from "@/lib/imagePath";

const TwoColumnBlockItems = [
  {
    title: "Ökad synlighet online",
    image: imagePath("images/seo-optimering-malmo.webp"),
    description:
      "Vi hjälper din webbplats att synas bättre i sökresultaten genom genomtänkt SEO, optimerat innehåll och tekniska förbättringar som stärker din digitala närvaro.",
  },
  {
    title: "Smart SEO-struktur",
    image: imagePath("images/seo-optimerad-webbdesign-malmo.webp"),
    description:
      "En framgångsrik webbplats behöver vara snabb, användarvänlig och tydligt strukturerad. Vi kombinerar modern webbdesign med SEO för att skapa en bättre upplevelse för både besökare och sökmotorer.",
  },
];

const PuffBlockItems = [
  {
    title: "Webbdesign",
    description:
      "Vi skapar moderna webbplatser som inte bara ser bra ut utan också konverterar besökare till kunder.",
    linkText: "Till webbdesign",
    link: "/webbdesign",
  },
  {
    title: "Webbapplikationer",
    description:
      "Vi utvecklar skräddarsydda webbapplikationer som effektiviserar din verksamhet och skapar smarta digitala lösningar.",
    linkText: "Till webbapplikationer",
    link: "/webbapplikationer",
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
    question: "Vad är SEO-optimering?",
    answer:
      "SEO-optimering handlar om att förbättra en webbplats för att synas högre i sökmotorer som Google. Genom teknisk optimering, relevant innehåll och rätt struktur ökar möjligheten att nå fler besökare och potentiella kunder organiskt.",
  },
  {
    question: "Varför är SEO viktigt?",
    answer:
      "SEO är viktigt eftersom det hjälper företag att öka sin synlighet online och nå rätt målgrupp. En väloptimerad webbplats kan generera mer trafik, stärka varumärket och skapa fler affärsmöjligheter utan att vara beroende av betald annonsering.",
  },
  {
    question: "Hur lång tid tar det att se resultat av SEO?",
    answer:
      "SEO är en långsiktig strategi och resultaten varierar beroende på konkurrens, bransch och webbplatsens nuvarande status. I många fall kan förbättringar börja synas inom några månader, medan större resultat ofta byggs upp över längre tid.",
  },
  {
    question: "Vad påverkar en webbplats ranking på Google?",
    answer:
      "Flera faktorer påverkar en webbplats ranking, bland annat innehållets kvalitet, webbplatsens prestanda, mobilanpassning, teknisk struktur och antalet relevanta länkar från andra webbplatser. Google prioriterar sidor som erbjuder en bra användarupplevelse och relevant information.",
  },
  {
    question: "Behöver man uppdatera SEO regelbundet?",
    answer:
      "Ja, SEO behöver kontinuerligt uppdateras eftersom sökmotorernas algoritmer förändras och konkurrensen online utvecklas över tid. Genom regelbunden optimering och uppdaterat innehåll kan webbplatsen behålla och förbättra sin synlighet i sökresultaten.",
  },
];

const SEOOptimering = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1b1b1b] [background-image:radial-gradient(circle_at_7%_6%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_9%,transparent_20%),radial-gradient(circle_at_78%_15%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_11%,transparent_25%),radial-gradient(circle_at_32%_27%,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_7%,transparent_17%),radial-gradient(circle_at_94%_39%,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_10%,transparent_23%),radial-gradient(circle_at_13%_48%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_61%_58%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_8%,transparent_19%),radial-gradient(circle_at_20%_71%,rgba(0,0,0,0.33)_0%,rgba(0,0,0,0.15)_10%,transparent_22%),radial-gradient(circle_at_87%_82%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_38%_95%,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0.17)_9%,transparent_21%)] bg-no-repeat bg-[length:100%_100%]">
      <PageHero
        title="SEO Optimering"
        subtitle="Vi hjälper företag att förbättra sin synlighet på Google genom strategisk SEO och optimerade webblösningar som driver organisk trafik och fler affärer."
        image="images/Utveckling.webp"
      />

      <section className="relative container px-4 py-12 text-white sm:px-6 sm:py-16 md:py-24 lg:px-4">
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

                <h2 className="pb-2 pt-5 text-2xl font-bold leading-tight sm:pt-6 sm:text-3xl md:text-4xl lg:text-[42px]">
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

      <section className="relative overflow-hidden py-16 text-white sm:py-20 md:py-28">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 max-w-4xl sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Vanliga frågor om SEO optimering
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
                  className="flex w-full items-center justify-between gap-4 p-4 text-left sm:gap-6 sm:p-5"
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
                  className={`px-4 text-base leading-7 text-white/80 transition-all duration-300 sm:px-5 sm:text-lg ${
                    openIndex === index
                      ? "max-h-60 pb-4 sm:pb-5"
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

      <section className="relative container px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 mb-10 max-w-3xl sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Relaterade tjänster
          </h2>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PuffBlockItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-2xl border-2 border-white px-4 py-10 transition duration-300 hover:-translate-y-1 hover:border-primary sm:px-5 sm:py-12 md:py-16"
            >
              <h2 className="mb-6 text-xl font-medium leading-7 text-primary sm:text-2xl">
                {item.title}
              </h2>

              <p className="mb-6 text-base font-medium leading-7 text-white sm:text-lg">
                {item.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={item.link}
                  className="group inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-white px-4 py-1.5 text-sm font-semibold text-white transition hover:border-primary hover:text-primary sm:text-base"
                >
                  <span>{item.linkText}</span>

                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
};

export default SEOOptimering;