import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ContactFormSection } from "../components/ContactFormSection";
import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

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

const serviceHighlights = [
  {
    title: "Vi bygger din företagsidentitet",
    description:
      "Ta första steget mot en stark närvaro med en genomtänkt visuell identitet. Vi hjälper dig att skapa logotyp, grafisk profil och design som speglar ditt företag och skapar förtroende hos dina kunder. Perfekt för dig som startar nytt eller vill stärka ditt varumärke.",
    buttonText: "Skapa din identitet",
    link: "/logotypdesign",
    image: imagePath("images/forre.webp"),
    imagePosition: "left",
  },
  {
    title: "Vi bygger din webb",
    description:
      "Vi skapar moderna, användarvänliga och SEO-optimerade webbplatser anpassade efter dina affärsmål. Genom att kombinera kreativ design, teknisk utveckling och strategisk förståelse bygger vi en digital plattform som stärker ditt varumärke och driver resultat. Vi hjälper dig hela vägen från idé och design till utveckling, innehåll och långsiktig tillväxt.",
    buttonText: "Vårt erbjudande inom webb",
    link: "/webbdesign",
    image: imagePath("images/webb.webp"),
    imagePosition: "right",
  },
  {
    title: "Vi stärker din digitala närvaro",
    description:
      "När grunden är på plats hjälper vi dig att synas och utvecklas vidare. Med SEO, mobilanpassning, innehåll och tydlig struktur skapar vi bättre förutsättningar för att nå rätt kunder och växa långsiktigt.",
    buttonText: "Kontakta oss",
    link: "/kontakta-oss",
    image: imagePath("images/img-3770.webp"),
    imagePosition: "left",
  },
];

const StartaForetag = () => {
  return (
    <>
      <PageHero
        title="Webbredo"
        subtitle="Vi hjälper dig bygga en stark grund med varumärke, design och digital närvaro."
        image="images/Webbredo.webp"
        ctaText="Till erbjudandet"
        ctaLink="/kontakta-oss"
      />

      <section className="py-20 text-white md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="max-w-xl"
            >
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Webbredo
              </span>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Starta ditt företag med rätt grund
              </h2>

              <p className="mb-6 text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Vi hjälper dig att förverkliga din idé och finns med dig hela
                vägen från första tanke till färdigt varumärke och digital
                närvaro.
              </p>

              <p className="mb-8 text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Vi bygger en stark grund genom att skapa din företagsidentitet
                med logotyp, grafisk profil och design som speglar ditt företag.
                Därefter utvecklar vi en modern och professionell webbplats
                anpassad efter dina mål.
              </p>

              <Link
                to="/kontakta-oss"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Boka rådgivning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={imagePath("images/img-3770.webp")}
                alt="Webbredo"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover transition duration-700 hover:scale-105 md:min-h-[460px]"
              />
            </motion.div>
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

      <section className="py-16 md:py-24">
        <div className="relative container space-y-20 md:space-y-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-400px] bottom-[100px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
          </div>

          {serviceHighlights.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-16"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: item.imagePosition === "right" ? 60 : -60,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={
                  item.imagePosition === "right" ? "md:order-2" : "md:order-1"
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full min-h-[260px] w-full rounded-lg object-cover md:min-h-[420px]"
                />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: item.imagePosition === "right" ? -60 : 60,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`${
                  item.imagePosition === "right" ? "md:order-1" : "md:order-2"
                } flex h-full max-w-xl flex-col justify-center md:pt-12 lg:pt-16`}
              >
                <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                  {item.title}
                </h2>

                <p className="mb-6 text-base font-semibold leading-7 text-white sm:text-lg">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="group inline-flex h-10 w-fit items-center gap-2 rounded-full border border-white px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  {item.buttonText}
                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <ContactFormSection />
    </>
  );
};

export default StartaForetag;