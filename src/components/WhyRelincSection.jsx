import { ArrowDown } from "lucide-react";

export const WhyRelincSection = () => {
  return (
    <section className="bg-[#1f1f1f] py-20 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
          Varför Relinc?
        </h2>

        <p className="mb-8 max-w-2xl text-base font-semibold leading-7 text-white md:text-lg">
          Om du söker en partner med över 10 års erfarenhet i branschen, som
          bryr sig om detaljerna och har den kompetens som krävs för att
          förverkliga dina digitala visioner, då har du kommit rätt. Vi
          kombinerar kunskap, kreativitet och teknik för att skapa lösningar som
          gör verklig skillnad för din verksamhet.
        </p>

        <a
          href=""
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-lg font-semibold text-black transition hover:bg-secondary"
        >
          Kontakta oss
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
