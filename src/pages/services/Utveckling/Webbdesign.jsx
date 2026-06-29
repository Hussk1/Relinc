import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imagePath } from "@/lib/imagePath";

const TwoColumnBlockItems = [
  {
    title: "Modern webbdesign",
    image: imagePath("images/ModernWebbdesign.webp"),
    description:
      "Vi skapar visuellt tilltalande och moderna webbplatser som stärker ditt varumärke. Genom genomtänkt design, färgval och typografi ser vi till att din webbplats ger ett starkt första intryck och sticker ut i mängden.",
  },
  {
    title: "Användarvänlig upplevelse",
    image: imagePath("images/upplevelse.webp"),
    description:
      "En bra webbplats ska vara enkel att använda. Vi designar med fokus på struktur, navigering och tillgänglighet så att dina besökare snabbt hittar det de söker och får en smidig upplevelse oavsett enhet.",
  },
];

const PuffBlockItems = [
  {
    title: "SEO optimering",
    description:
      "Vi hjälper dig att synas högre på Google genom teknisk SEO, innehållsoptimering och strategi som driver relevant trafik till din webbplats.",
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
    title: "Mobilanpassning",
    description:
      "Vi säkerställer att din webbplats fungerar perfekt på alla enheter med responsiv design och optimerad användarupplevelse.",
    linkText: "Till mobilanpassning",
    link: "/mobil-anpassning",
  },
];

const packages = [
  {
    name: "Enkel",
    price: "12 900 kr",
    text: "För dig som vill komma igång snabbt med en tydlig identitet och enkel webbnärvaro.",
    features: [
      "Logotyp",
      "Enkel grafisk profil",
      "1-sides webbplats",
      "Mobilanpassning",
      "Kontaktsektion",
    ],
  },
  {
    name: "Avancerad",
    price: "24 900 kr",
    text: "För företag som vill ha en starkare digital grund och mer innehåll från start.",
    popular: true,
    features: [
      "Logotyp + grafisk profil",
      "Webbplats med flera sidor",
      "SEO grundoptimering",
      "Kontaktformulär",
      "Bild- och textstruktur",
    ],
  },
  {
    name: "Skräddarsydd",
    price: "Pris på offert",
    text: "För dig som behöver något mer anpassat med design, strategi och funktioner.",
    features: [
      "Skräddarsydd design",
      "Avancerad webbplats",
      "Integrationer",
      "Digital strategi",
      "Löpande support",
    ],
  },
];

const faqs = [
  {
    question: "Vad är webbdesign?",
    answer:
      "Webbdesign handlar om att planera, skapa och utforma utseendet och strukturen på en webbplats. Det inkluderar färger, typografi, layout och hur innehållet presenteras, med målet att skapa en visuellt tilltalande och användarvänlig upplevelse för besökaren.",
  },
  {
    question: "Varför är bra webbdesign viktigt?",
    answer:
      "Bra webbdesign är avgörande eftersom det påverkar första intrycket av ett företag. En genomtänkt design gör det lättare för besökare att hitta information, skapar förtroende och ökar chansen att de stannar kvar på sidan och utför önskade handlingar, som att kontakta företaget eller genomföra ett köp.",
  },
  {
    question: "Hur påverkar webbdesign användarupplevelsen?",
    answer:
      "Webbdesign har en direkt påverkan på användarupplevelsen genom att styra hur enkelt det är att navigera och ta del av innehållet. En tydlig struktur, snabb laddningstid och mobilanpassning gör att användare får en smidig och positiv upplevelse.",
  },
  {
    question: "Vad är skillnaden mellan UX och UI?",
    answer:
      "UX handlar om hur användaren upplever webbplatsen som helhet, medan UI fokuserar på det visuella gränssnittet, såsom knappar, färger och layout. Tillsammans skapar de en helhetsupplevelse som både fungerar bra och ser bra ut.",
  },
  {
    question: "Hur ofta bör man uppdatera sin webbdesign?",
    answer:
      "Det är bra att regelbundet se över och uppdatera sin webbdesign för att hålla den modern, säker och konkurrenskraftig. Mindre uppdateringar kan göras löpande, medan större redesigns ofta sker vart tredje till femte år beroende på behov och teknisk utveckling.",
  },
];

const Webbdesign = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Webbdesign"
        subtitle="Vi skapar moderna webbplatser som inte bara ser bra ut utan också konverterar besökare till kunder."
        image="images/Utveckling.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakta-oss"
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
                    className="h-[260px] w-full rounded-2xl object-cover transition sm:h-[340px] lg:h-[420px]"
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

      <section id="paket" className="py-20 text-white md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Välj rätt paket
            </h2>

            <p className="mx-auto max-w-2xl text-base font-semibold leading-7 text-white/70 sm:text-lg">
              Oavsett om du vill komma igång enkelt eller bygga något mer
              skräddarsytt finns ett paket som passar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className={`relative flex h-full flex-col rounded-2xl bg-[#1f1f1f] p-6 shadow-2xl transition duration-300 hover:-translate-y-2 sm:p-8 ${
                  item.popular
                    ? "border-2 border-primary"
                    : "border border-white/10"
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-black">
                    Populär
                  </span>
                )}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
                  <Sparkles className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                  {item.name}
                </h3>

                <p className="mb-6 text-base font-semibold leading-6 text-white/70">
                  {item.text}
                </p>

                <p className="mb-8 text-3xl font-bold text-primary sm:text-4xl">
                  {item.price}
                </p>

                <ul className="mb-8 space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-base font-semibold text-white/85"
                    >
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/kontakta-oss"
                  className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition ${
                    item.popular
                      ? "bg-primary text-black hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-black"
                  }`}
                >
                  Välj {item.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
            className="mb-12 max-w-3xl md:mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Vanliga frågor om webbdesign
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

export default Webbdesign;