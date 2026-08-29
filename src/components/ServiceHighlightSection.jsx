import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

const serviceHighlights = [
  {
    title: "Vi bygger din företagsidentitet",
    description:
      "Ta första steget mot en stark närvaro med en genomtänkt visuell identitet. Vi hjälper dig att skapa logotyp, grafisk profil och design som speglar ditt företag och skapar förtroende hos dina kunder. Perfekt för dig som startar nytt eller vill stärka ditt varumärke.",
    buttonText: "Skapa din identitet",
    link: "/LogotypGrafiskProfil",
    image: imagePath("images/grafisk-profil-logotypdesign-malmo.webp"),
    imagePosition: "left",
  },
  {
    title: "Vi bygger din webb",
    description:
      "Vi skapar moderna, användarvänliga och SEO-optimerade webbplatser anpassade efter dina affärsmål. Genom att kombinera kreativ design, teknisk utveckling och strategisk förståelse bygger vi en digital plattform som stärker ditt varumärke och driver resultat.",
    buttonText: "Vårt erbjudande inom webb",
    link: "/webbdesign",
    image: imagePath("images/webbdesign-malmo-seo-optimerad-hemsida.webp"),
    imagePosition: "right",
  },
];

export const ServiceHighlightSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="relative container space-y-16 px-4 sm:px-6 md:space-y-24 lg:px-4 lg:space-y-28">
        <div className="pointer-events-none absolute inset-0">
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
                className="h-[260px] w-full rounded-lg object-cover sm:h-[340px] md:h-full md:min-h-[420px]"
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
              <h2 className="mb-5 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {item.title}
              </h2>

              <p className="mb-6 text-base font-semibold leading-7 text-white sm:text-lg">
                {item.description}
              </p>

              <Link
                to={item.link}
                className="group inline-flex h-10 w-fit items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:brightness-110 xl:inline-flex"
              >
                {item.buttonText}
                <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};