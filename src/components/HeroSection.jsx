import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col gap-6 pb-20 pt-16 sm:pb-24 sm:pt-28 md:pb-32 md:pt-36">
          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[70px] lg:leading-[80px]">
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
        </div>
      </div>
    </section>
  );
};