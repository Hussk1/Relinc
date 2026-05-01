import { ArrowRight, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-[53px]">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        {/* vänster glow */}
        <div className="absolute left-[-200px] top-[100px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

        {/* höger glow */}
        <div className="absolute right-[-150px] top-[200px] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

        {/* center subtle */}
        <div className="absolute left-[40%] top-[300px] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto flex flex-col gap-8 px-4 mb-[120px]">
        <div className="flex flex-col py-4 pt-[120px] gap-6">
          <h1 className="text-[70px] font-extrabold text-white font-['Sofia Pro', 'Sofia Pro Fallback', sans-serif] leading-[80px]">
            Relinc - en digital <br /> byrå för din tillväxt
          </h1>
          <p className="text-lg font-medium leading-6 text-white w-1/2">
            Vi förverkligar idéer genom att skapa smarta digitala lösningar för
            både nutid och framtid. Låt oss bli din partner på vägen mot dina
            mål.
          </p>
          <div className="flex gap-4">
            <a
              href=""
              className="flex items-center gap-2 h-10 px-6 rounded-full bg-primary border border-primary font-semibold text-[#1b1b1b] leading-none"
            >
              Vårt erbjudande <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href=""
              className="flex items-center gap-2 h-10 px-6 rounded-full bg-primary border border-primary font-semibold text-[#1b1b1b] leading-none"
            >
              Kontakta oss
              <ArrowDown className="w-4 h-4 shrink-0 translate-y-[1px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
