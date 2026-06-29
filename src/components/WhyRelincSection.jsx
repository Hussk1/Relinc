import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const WhyRelincSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1f1f1f] py-20 md:py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 flex flex-col items-center text-center"
      >
        <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Relinc
        </span>

        <h2 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Mer än en leverantör
          <br />
          <span className="text-primary">en långsiktig partner</span>
        </h2>

        <p className="mb-10 max-w-3xl text-base font-medium leading-8 text-white/80 md:text-lg">
          Vi kombinerar strategi, design, teknik och affärsförståelse för att
          skapa lösningar som hjälper företag att växa. Oavsett om du behöver en
          ny webbplats, ett starkare varumärke eller digital marknadsföring
          arbetar vi alltid med fokus på resultat, långsiktighet och kvalitet.
        </p>

        <Link
          to="/kontakta-oss"
          className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:opacity-90"
        >
          Starta ditt projekt
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
};
