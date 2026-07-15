import { Link } from "react-router-dom";
import { ArrowRight, Check, Minus } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ContactFormSection } from "../components/ContactFormSection";
import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

const packages = [
  {
    name: "Enkel",
    price: "12 900 kr",
    description:
      "För dig som vill komma igång snabbt med en tydlig identitet och enkel webbnärvaro.",
    popular: false,
  },
  {
    name: "Avancerad",
    price: "24 900 kr",
    description:
      "För företag som vill ha en starkare digital grund och mer innehåll från start.",
    popular: true,
  },
  {
    name: "Skräddarsydd",
    price: "Pris på offert",
    description:
      "För dig som behöver något mer anpassat med design, strategi och funktioner.",
    popular: false,
  },
];

const comparisonRows = [
  {
    label: "Grafisk profil",
    simple: "Enkel",
    advanced: "Komplett",
    custom: "Skräddarsydd",
  },
  {
    label: "Logotyp",
    simple: false,
    advanced: true,
    custom: "Skräddarsydd",
  },
  {
    label: "Antal webbsidor",
    simple: "3 sidor",
    advanced: "9 sidor",
    custom: "10+ sidor",
  },
  {
    label: "Mobilanpassning",
    simple: true,
    advanced: true,
    custom: true,
  },
  {
    label: "Kontaktformulär",
    simple: true,
    advanced: true,
    custom: true,
  },
  {
    label: "SEO-optimering",
    simple: false,
    advanced: "Enkel",
    custom: "Avancerad",
  },
  {
    label: "Webbapplikationer",
    simple: false,
    advanced: false,
    custom: true,
  },
  {
    label: "Säkerhet",
    simple: false,
    advanced: false,
    custom: true,
  },
  {
    label: "Support efter lansering",
    simple: "7 dagar",
    advanced: "14 dagar",
    custom: "30 dagar",
  },
];

const serviceHighlights = [
  {
    title: "Vi bygger din företagsidentitet",
    description:
      "Ta första steget mot en stark närvaro med en genomtänkt visuell identitet. Vi hjälper dig att skapa logotyp, grafisk profil och design som speglar ditt företag och skapar förtroende hos dina kunder. Perfekt för dig som startar nytt eller vill stärka ditt varumärke.",
    buttonText: "Skapa din identitet",
    link: "/logotypdesign",
    image: imagePath("images/grafisk-profil-logotypdesign-malmo.webp"),
    imagePosition: "left",
  },
  {
    title: "Vi bygger din webb",
    description:
      "Vi skapar moderna, användarvänliga och SEO-optimerade webbplatser anpassade efter dina affärsmål. Genom att kombinera kreativ design, teknisk utveckling och strategisk förståelse bygger vi en digital plattform som stärker ditt varumärke och driver resultat. Vi hjälper dig hela vägen från idé och design till utveckling, innehåll och långsiktig tillväxt.",
    buttonText: "Vårt erbjudande inom webb",
    link: "/webbdesign",
    image: imagePath("images/webbutveckling-malmo-seo-optimerad-hemsida.webp"),
    imagePosition: "right",
  },
  {
    title: "Vi stärker din digitala närvaro",
    description:
      "När grunden är på plats hjälper vi dig att synas och utvecklas vidare. Med SEO, mobilanpassning, innehåll och tydlig struktur skapar vi bättre förutsättningar för att nå rätt kunder och växa långsiktigt.",
    buttonText: "Kontakta oss",
    link: "/kontakta-oss",
    image: imagePath("images/seo-digital-narvaro-malmo.webp"),
    imagePosition: "left",
  },
];

const ComparisonValue = ({ value }) => {
  if (value === true) {
    return (
      <div className="flex items-center justify-end gap-2 lg:justify-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
          <Check className="h-5 w-5 text-primary" />
        </span>

        <span className="sr-only">Ingår</span>
      </div>
    );
  }

  if (value === false) {
    return (
      <div className="flex items-center justify-end gap-2 lg:justify-center">
        <Minus className="h-5 w-5 text-white/30" />
        <span className="sr-only">Ingår inte</span>
      </div>
    );
  }

  return (
    <span className="block text-right text-sm font-semibold leading-6 text-white/85 lg:text-center">
      {value}
    </span>
  );
};

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
                Bygg en stark närvaro online
              </h2>

              <p className="mb-6 text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Oavsett om du behöver en helt ny webbplats eller vill ta din
                befintliga närvaro till nästa nivå hjälper vi dig att skapa en
                lösning som passar ditt företag.
              </p>

              <p className="mb-8 text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Vi kombinerar design, strategi och teknik för att utveckla en
                modern och professionell webbplats som stärker ditt varumärke
                och skapar förtroende hos dina kunder.
              </p>

              <Link
                to="/kontakta-oss"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Kontakta oss
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
                src={imagePath("images/webbdesign-malmo-digital-narvaro.webp")}
                alt="Webbredo"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover md:min-h-[460px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="paket" className="relative py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Våra paket
            </span>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Välj paket efter dina behov
            </h2>

            <p className="text-base font-semibold leading-7 text-white/70 sm:text-lg">
              Börja enkelt, välj en komplett lösning eller skapa ett helt
              skräddarsytt upplägg för ditt företag.
            </p>
          </motion.div>

          {/* MOBILE AND TABLET CARDS */}
          <div className="grid grid-cols-1 gap-8 lg:hidden">
            {packages.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative rounded-2xl bg-[#1f1f1f] p-6 ${
                  item.popular
                    ? "border-2 border-primary"
                    : "border border-white/10"
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-4 left-6 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-black">
                    Mest populär
                  </span>
                )}

                <div className="mb-7">
                  <h3 className="mb-2 text-3xl font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="mb-5 text-sm font-medium leading-6 text-white/60">
                    {item.description}
                  </p>

                  <p className="text-3xl font-bold text-primary">
                    {item.price}
                  </p>
                </div>

                <div className="mb-8 divide-y divide-white/10 border-y border-white/10">
                  {comparisonRows.map((row) => {
                    const key =
                      item.name === "Enkel"
                        ? "simple"
                        : item.name === "Avancerad"
                          ? "advanced"
                          : "custom";

                    return (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-6 py-4"
                      >
                        <span className="text-sm font-semibold text-white/70">
                          {row.label}
                        </span>

                        <ComparisonValue value={row[key]} />
                      </div>
                    );
                  })}
                </div>

                <Link
                  to="/kontakta-oss"
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                    item.popular
                      ? "bg-primary text-black hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-black"
                  }`}
                >
                  {item.name === "Skräddarsydd"
                    ? "Begär offert"
                    : `Välj ${item.name}`}

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* DESKTOP COMPARISON TABLE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="hidden overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f1f] shadow-2xl lg:block"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px] border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="sticky left-0 z-20 w-[260px] bg-[#191919] p-6 text-left align-middle">
                      <span className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">
                        Funktioner
                      </span>
                    </th>

                    {packages.map((item) => (
                      <th
                        key={item.name}
                        className={`relative min-w-[220px] p-7 text-center align-top ${
                          item.popular ? "bg-primary/[0.07]" : ""
                        }`}
                      >
                        {item.popular && (
                          <span className="mb-4 inline-flex whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-black">
                            Mest populär
                          </span>
                        )}

                        <h3 className="mb-3 text-2xl font-bold text-white">
                          {item.name}
                        </h3>

                        <p className="mx-auto mb-5 min-h-[72px] max-w-[250px] text-sm font-medium leading-6 text-white/60">
                          {item.description}
                        </p>

                        <p className="text-2xl font-bold text-primary">
                          {item.price}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.label}
                      className={`transition hover:bg-white/[0.025] ${
                        index !== comparisonRows.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                    >
                      <th
                        scope="row"
                        className="sticky left-0 z-10 bg-[#1f1f1f] px-6 py-5 text-left text-sm font-bold text-white"
                      >
                        {row.label}
                      </th>

                      <td className="px-6 py-5">
                        <ComparisonValue value={row.simple} />
                      </td>

                      <td className="bg-primary/[0.035] px-6 py-5">
                        <ComparisonValue value={row.advanced} />
                      </td>

                      <td className="px-6 py-5">
                        <ComparisonValue value={row.custom} />
                      </td>
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr className="border-t border-white/10">
                    <td className="sticky left-0 z-10 bg-[#191919] p-6">
                      <p className="text-sm font-semibold leading-6 text-white/55">
                        Osäker på vilket paket som passar?
                      </p>

                      <Link
                        to="/kontakta-oss"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-primary"
                      >
                        Få personlig hjälp
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </td>

                    {packages.map((item) => (
                      <td
                        key={item.name}
                        className={`p-6 ${
                          item.popular ? "bg-primary/[0.07]" : "bg-[#191919]"
                        }`}
                      >
                        <Link
                          to="/kontakta-oss"
                          className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                            item.popular
                              ? "bg-primary text-black hover:opacity-90"
                              : "border border-primary text-primary hover:bg-primary hover:text-black"
                          }`}
                        >
                          {item.name === "Skräddarsydd"
                            ? "Begär offert"
                            : `Välj ${item.name}`}

                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="relative container space-y-20 md:space-y-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-[100px] left-[-400px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
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
