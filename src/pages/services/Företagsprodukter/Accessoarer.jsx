import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";
import {
  ArrowRight,
  Leaf,
  Truck,
  RefreshCw,
  Crown,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { text } from "framer-motion/client";
import { imagePath } from "@/lib/imagePath";

const products = [
  {
    title: "Arbetsjackor",
    price: "Från 3 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/hoodie.webp"),
  },
  {
    title: "Profilkläder",
    price: "Från 1 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/hat.webp"),
  },
  {
    title: "T-shirts & Hoodies",
    price: "Från 9 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/shirt.webp"),
  },
];

const sortiment = [
  {
    title: "Arbetsjackor",
    price: "Från 3 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/hoodie.webp"),
  },
  {
    title: "Profilkläder",
    price: "Från 1 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/hat.webp"),
  },
  {
    title: "T-shirts & Hoodies",
    price: "Från 9 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/shirt.webp"),
  },
  {
    title: "Arbetsjackor",
    price: "Från 3 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/hoodie.webp"),
  },
  {
    title: "Profilkläder",
    price: "Från 1 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/hat.webp"),
  },
  {
    title: "T-shirts & Hoodies",
    price: "Från 9 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/shirt.webp"),
  },
  {
    title: "Arbetsjackor",
    price: "Från 3 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/hoodie.webp"),
  },
  {
    title: "Profilkläder",
    price: "Från 1 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/hat.webp"),
  },
  {
    title: "T-shirts & Hoodies",
    price: "Från 9 200 kr",
    text: "Minsta beställningsmängd 25",
    image: imagePath("images/shirt.webp"),
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Ingen returrätt",
    text: "Tryckta och specialanpassade produkter kan inte returneras.",
  },
  {
    icon: Truck,
    title: "Smidig leverans",
    text: "Vi guidar er från idé till färdiga företagskläder.",
  },
  {
    icon: RefreshCw,
    title: "Flexibla lösningar",
    text: "Beställ efter behov, roll, avdelning eller säsong.",
  },
  {
    icon: Crown,
    title: "Professionellt intryck",
    text: "Stärk varumärket med en enhetlig visuell profil.",
  },
];

const faqs = [
  {
    question: "Vilka typer av arbetskläder erbjuder ni?",
    answer:
      "Vi erbjuder ett brett utbud av arbetskläder och profilkläder, inklusive t-shirts, hoodies, jackor, kepsar och andra företagsanpassade produkter.",
  },
  {
    question: "Kan arbetskläder anpassas med egen logotyp?",
    answer:
      "Ja, vi erbjuder tryck och anpassning av arbetskläder med företagets logotyp, färger och design för att skapa ett professionellt och enhetligt uttryck.",
  },
  {
    question: "Kan man göra specialbeställningar?",
    answer:
      "Absolut. Om ni söker andra modeller, färger eller typer av kläder kan vi hjälpa till med skräddarsydda lösningar och specialbeställningar efter era behov.",
  },
  {
    question: "Finns det returrätt på tryckta kläder?",
    answer:
      "Eftersom tryckta och specialanpassade produkter tillverkas efter beställning gäller vanligtvis ingen returrätt på dessa produkter.",
  },
  {
    question: "Hur lång är leveranstiden för arbetskläder?",
    answer:
      "Leveranstiden varierar beroende på typ av produkt, antal och anpassning, men vi arbetar alltid för att leverera så snabbt och smidigt som möjligt.",
  },
];

const Accessoarer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHero
        title="Accessoarer"
        subtitle="Professionella accessoarer som stärker ert varumärke och skapar ett enhetligt intryck."
        image={imagePath("images/Företagsprodukter.webp")}
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <div className="pointer-events-none absolute right-[-500px] top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Populärast bland företag
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f1f] transition hover:border-primary/30"
              >
                <div className="h-[380px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-1 items-end justify-between px-6 pt-6 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-primary">
                      {item.price}
                    </p>
                  </div>
                  <Link
                    to="/kontakt"
                    className="text-sm font-bold text-white transition hover:text-primary"
                  >
                    Kontakta
                  </Link>
                </div>
                <div className="px-6 mb-6">
                  <p className="text-sm font-semibold text-white/80">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 text-white md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Anpassade accessoarer <br /> för alla behov
            </h2>

            <p className="mb-8 text-lg font-semibold leading-7 text-white/75">
              Vi erbjuder accessoarer och profilprodukter som stärker företagets
              varumärke och skapar ett professionellt helhetsintryck. Behöver ni
              något utöver vårt sortiment kan vi även hjälpa till med
              specialbeställningar och skräddarsydda lösningar via kontakt med
              oss.
            </p>

            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
            >
              Kontakta oss
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src="/images/img-3770.webp"
              alt="Arbetskläder"
              className="h-[420px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 text-white md:py-28">
        <div className="container">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Vårt sortiment
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {sortiment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f1f]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[320px] w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 items-end justify-between px-6 pt-6 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-primary">
                      {item.price}
                    </p>
                  </div>
                  <Link
                    to="/kontakt"
                    className="text-sm font-bold text-white transition hover:text-primary"
                  >
                    Kontakta
                  </Link>
                </div>
                <div className="px-6 mb-6">
                  <p className="text-sm font-semibold text-white/80">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <div className="pointer-events-none absolute left-[-500px] bottom-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="container relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-[#1f1f1f] p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm font-semibold leading-6 text-white/70">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
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
              Vanliga frågor om accessoarer
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

export default Accessoarer;
