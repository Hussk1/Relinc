import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

export const TextImageBlock = () => {
  return (
    <section className="relative container py-16 md:py-24">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-500px] top-[100px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Bygg din digitala grund
          </h2>

          <p className="mb-4 text-base font-medium leading-7 text-white/85 sm:text-lg">
            Vi hjälper dig att förverkliga din idé och finns med dig hela vägen
            från första tanke till färdigt varumärke och digital närvaro.
          </p>

          <p className="mb-4 text-base font-medium leading-7 text-white/85 sm:text-lg">
            Vi bygger en stark grund genom att skapa din företagsidentitet med
            logotyp, grafisk profil och design som speglar ditt företag.
            Därefter utvecklar vi en modern och professionell webbplats anpassad
            efter dina mål som hjälper dig att nå dina kunder.
          </p>

          <p className="mb-4 text-base font-medium leading-7 text-white/85 sm:text-lg">
            Bygg ditt paket efter dina behov och skapa en stabil grund för
            framtida tillväxt.
          </p>

          <Link
            to="/starta-foretag"
            className="group inline-flex h-10 w-fit items-center gap-2 rounded-full border border-white px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Till erbjudandet
            <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={imagePath("images/Digitala.webp")}
            alt="Bygg din digitala grund"
            className="h-full w-full rounded-2xl object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};
