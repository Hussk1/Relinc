import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const WhyRelincSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container relative z-10 flex flex-col items-center px-4 text-center sm:px-6 lg:px-4">
        <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Relinc
        </span>

        <h2 className="mb-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Mer än en leverantör
          <br />
          <span className="text-primary">En långsiktig partner</span>
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
          Börja din resa här
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};