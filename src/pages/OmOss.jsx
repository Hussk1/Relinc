import { PageHero } from "../components/PageHero";
import { ContactFormSection } from "../components/ContactFormSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

const OmOss = () => {
  return (
    <>
      <PageHero
        title="Om Relinc"
        subtitle="Vi hjälper företag att växa genom smarta digitala lösningar, stark visuell identitet och strategisk utveckling."
        image="images/Omoss.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakta-oss"
      />

      <section className="relative container py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-500px] top-[300px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute right-[-500px] bottom-[200px] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative z-10 my-14 space-y-28 md:space-y-36">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={imagePath("images/kundsamarbete-digital-byra-malmo.webp")}
                alt="Relinc erbjudande"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover md:min-h-[460px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex max-w-xl flex-col justify-end"
            >
              <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Vårt erbjudande
              </span>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Strategi, design och teknik som skapar resultat
              </h2>

              <p className="mb-8 text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Vi levererar smarta digitala lösningar som ger effekt i våra
                kunders verksamhet nu och i framtiden. Genom att kombinera
                strategi, kreativitet och teknik hjälper vi företag att bygga en
                stark digital närvaro och skapa långsiktigt värde.
              </p>

              <Link
                to="/starta-foretag"
                className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Läs mer om vårt erbjudande
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="flex max-w-xl flex-col justify-end md:order-1"
            >
              <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Team & kultur
              </span>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Vi bygger långsiktiga relationer
              </h2>

              <p className="mb-8 text-base font-semibold leading-7 text-white/80 sm:text-lg">
                På Relinc drivs vi av att skapa lösningar som faktiskt används,
                utvecklar företag och gör skillnad. Vi tror på nära samarbeten,
                tydlig kommunikation och en arbetsprocess där både kund och team
                känner sig trygga från första idé till färdig lösning.
              </p>

              <Link
                to="/kontakta-oss"
                className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Kontakta oss
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-2xl md:order-2"
            >
              <img
                src={imagePath("images/digitala-losningar-foretag-malmo.webp")}
                alt="Relinc team"
                className="h-full min-h-[320px] w-full rounded-2xl object-cover md:min-h-[460px]"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="my-24 md:my-32"
          >
            <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
              Vår historia
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <p className="text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Relinc grundades med ambitionen att hjälpa företag växa genom
                digitala lösningar som är både smarta, visuellt starka och
                affärsmässigt genomtänkta. Vi kombinerar erfarenhet inom webb,
                design, strategi och företagsutveckling för att skapa lösningar
                som fungerar i praktiken.
              </p>

              <p className="text-base font-semibold leading-7 text-white/80 sm:text-lg">
                Vår målsättning är att vara en partner som företag kan lita på
                över tid. Genom tydlig kommunikation, kvalitet och kreativitet
                hjälper vi våra kunder att bygga starkare varumärken, förbättra
                sina digitala kanaler och skapa en stabil grund för framtida
                tillväxt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
};

export default OmOss;