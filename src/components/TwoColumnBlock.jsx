import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

const TwoColumnBlockItems = [
  {
    title: "Fokus på kunden",
    image: imagePath("images/kundanpassade-digitala-losningar-malmo.webp"),
    description:
      "Varje företag är unikt och därför anpassar vi våra lösningar efter dina behov och mål. Genom ett nära samarbete skapar vi smarta och effektiva lösningar inom digital utveckling, design och affärsstöd. Vi hjälper dig med allt från webbdesign, SEO och systemutveckling till grafisk design, video och digital marknadsföring, samt erbjuder stöd inom redovisning och företagslösningar för att förenkla din vardag. Med rätt strategi, teknik och kreativitet bygger vi lösningar som stärker din verksamhet, effektiviserar processer och skapar långsiktig tillväxt.",
    linkText: "Webbredo",
    link: "/starta-foretag",
  },
  {
    title: "Strategi möter resultat",
    image: imagePath("images/digital-strategi-for-foretag.webp"),
    description:
      "Hos oss tror vi att de bästa resultaten skapas när strategi, teknik och kreativitet samverkar, och vi kombinerar teknisk kompetens med en djup förståelse för din verksamhet och dina mål. Oavsett om det handlar om att utveckla en modern webbplats, förbättra din synlighet genom SEO, skapa stark visuell kommunikation eller effektivisera din verksamhet med smarta system och redovisningstjänster är vårt mål alltid detsamma att leverera lösningar som inte bara möter dina behov idag utan också driver din verksamhet framåt långsiktigt. ",
    linkText: "Kontakta oss",
    link: "/kontakta-oss",
  },
];

export const TwoColumnBlock = () => {
  return (
    <section className="relative container px-4 py-12 sm:px-6 sm:py-16 lg:px-4">
      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {TwoColumnBlockItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.16 }}
          >
            <div className="inline-block w-full overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-[260px] w-full rounded-2xl object-cover sm:h-[320px] md:h-[340px] lg:h-[400px]"
              />
            </div>

            <div>
              <h2 className="pb-2 pt-5 text-2xl font-[700] leading-tight text-white sm:pt-6 sm:text-3xl md:text-4xl lg:text-[42px]">
                {item.title}
              </h2>

              <p className="mb-6 text-base font-medium leading-7 text-white sm:text-lg">
                {item.description}
              </p>

              <div className="inline-block">
                <Link
                  to={item.link}
                  className="group flex h-10 items-center gap-2 rounded-full border border-primary bg-primary px-6 font-semibold leading-none text-[#1b1b1b] transition hover:opacity-90"
                >
                  {item.linkText}
                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
