import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const options = [
  "Jag vill boka ett möte eller begära offert",
  "Jag behöver hjälp med webb och digitala lösningar",
  "Jag behöver hjälp med grafisk design",
  "Jag är intresserad av företagsprodukter",
  "Annat ärende",
];

const FormLinesIcon = ({ className = "" }) => (
  <svg viewBox="0 0 90 90" fill="none" className={className}>
    <path
      d="M10 70L25 45M28 78L38 50M48 82L48 52M68 78L58 50M84 68L68 45"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const ContactFormSection = () => {
  return (
    <section className="border-t border-white/20 py-20 md:py-28">
      <div className="relative container">
        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-500px] bottom-[100px] h-[400px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute right-[-500px] top-[100px] h-[100px] w-[300px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl"
        >
          <h2 className="mb-8 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Starta din resa <br /> med Relinc
          </h2>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-base font-bold text-white sm:text-lg">
                E-post*
              </label>
              <input
                type="email"
                className="h-12 w-full rounded border border-white bg-transparent px-4 text-white outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-base font-bold text-white sm:text-lg">
                Företagsnamn*
              </label>
              <input
                type="text"
                className="h-12 w-full rounded border border-white bg-transparent px-4 text-white outline-none transition focus:border-primary"
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-base font-bold text-white sm:text-lg">
                Hur kan vi hjälpa dig?*
              </legend>

              <div className="space-y-2">
                {options.map((option, index) => (
                  <motion.label
                    key={option}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base"
                  >
                    <input
                      type="checkbox"
                      className="h-5 w-5 appearance-none rounded border border-white bg-transparent transition checked:border-primary checked:bg-primary"
                    />
                    {option}
                  </motion.label>
                ))}
              </div>
            </fieldset>

            <div>
              <label className="mb-2 block text-base font-bold text-white sm:text-lg">
                Meddelande*
              </label>
              <textarea className="h-40 w-full resize-none rounded border border-white bg-transparent p-4 text-white outline-none transition focus:border-primary" />
            </div>

            <label className="flex items-start gap-3 pt-2 text-sm font-semibold text-white sm:text-base">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 appearance-none rounded border border-white bg-transparent transition checked:border-primary checked:bg-primary"
              />

              <span>
                Jag godkänner Relincs integritetspolicy.{" "}
                <Link to="/privacy-policy" className="text-primary underline">
                  integritetspolicy
                </Link>
                .*
              </span>
            </label>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-base font-bold text-black transition hover:opacity-90"
            >
              Skicka
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </form>

          <FormLinesIcon className="absolute -bottom-2 -right-24 hidden h-24 w-24 text-primary md:block" />
        </motion.div>
      </div>
    </section>
  );
};