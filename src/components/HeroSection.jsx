import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-visible pt-20"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 -bottom-40 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-260px] top-[80px] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px] md:h-[540px] md:w-[540px]"
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-260px] top-[200px] h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px] md:h-[520px] md:w-[520px]"
        />

        <div className="absolute left-[35%] bottom-[-40px] h-[260px] w-[260px] rounded-full bg-primary/5 blur-[100px] md:h-[340px] md:w-[340px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6 pb-24 pt-24 sm:pt-28 md:pb-32 md:pt-36"
        >
          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-[70px] lg:leading-[80px]">
            Relinc - en digital <br className="hidden md:block" />
            byrå för din tillväxt
          </h1>

          <p className="max-w-2xl text-base font-medium leading-7 text-white/85 sm:text-lg">
            Vi förverkligar idéer genom att skapa smarta digitala lösningar för
            både nutid och framtid. Låt oss bli din partner på vägen mot dina
            mål.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/kontakta-oss"
              className="group inline-flex h-11 w-fit items-center gap-2 rounded-full border border-primary bg-primary px-6 font-semibold leading-none text-[#1b1b1b] transition duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              Kontakta oss
              <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};