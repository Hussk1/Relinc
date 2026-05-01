import { PageHero } from "../../../components/PageHero";
import { ContactCardsSection } from "../../../components/ContactCardsSection";
import { ContactFormSection } from "../../../components/ContactFormSection";

import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const TwoColumnBlockItems = [
  {
    title: "Fokus på kunden",
    image: "/images/TwoColumnBlock-1.webp",
    description:
      "Varje företag är unikt och därför anpassar vi våra lösningar efter dina behov och mål. Genom ett nära samarbete skapar vi smarta och effektiva lösningar inom digital utveckling, design och affärsstöd.",
  },
  {
    title: "Strategi möter resultat",
    image: "/images/TwoColumnBlock-2.webp",
    description:
      "Hos oss tror vi att de bästa resultaten skapas när strategi, teknik och kreativitet samverkar. Vi kombinerar teknisk kompetens med en djup förståelse för din verksamhet och dina mål.",
  },
];

const Webbdesign = () => {
  return (
    <>
      <PageHero
        title="Webbdesign"
        subtitle="Professionell webbdesign som förbättrar användarupplevelsen och ökar konverteringen."
        image="/images/bildbank-1.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      <section className="container py-16 text-white">
        <div className="my-14 space-y-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {TwoColumnBlockItems.map((item) => (
              <div key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-2xl"
                />

                <div>
                  <h2 className="pb-2 pt-6 text-[42px] font-bold leading-tight text-white">
                    {item.title}
                  </h2>

                  <p className="mb-6 text-lg font-medium leading-7 text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-20">
        <div className="container flex flex-col items-center text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
            Välj rätt plattform
          </h2>

          <p className="mb-8 max-w-2xl text-base font-semibold leading-7 text-white md:text-lg">
            Vi jobbar med Umbraco och Sitevision som är två välkända och
            omtyckta plattformar på marknaden. Dessa plattformar erbjuder inte
            bara en robust och flexibel grund för din webbplats, utan de
            garanterar också en hög nivå av användarvänlighet och
            anpassningsmöjligheter. Vi hjälper dig att hitta rätt plattform
            efter dina behov.
          </p>

          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
          >
            Kontakta oss
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <ContactCardsSection />
      <ContactFormSection />
    </>
  );
};

export default Webbdesign;
