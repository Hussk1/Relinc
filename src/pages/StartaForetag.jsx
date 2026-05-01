import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ContactCardsSection } from "../components/ContactCardsSection";
import { ContactFormSection } from "../components/ContactFormSection";

const packages = [
  {
    name: "Starter",
    price: "12 900 kr",
    text: "För dig som vill komma igång snabbt med en tydlig identitet och enkel webbnärvaro.",
    features: [
      "Logotyp",
      "Enkel grafisk profil",
      "1-sides webbplats",
      "Mobilanpassning",
      "Kontaktsektion",
    ],
  },
  {
    name: "Avancerad",
    price: "24 900 kr",
    text: "För företag som vill ha en starkare digital grund och mer innehåll från start.",
    popular: true,
    features: [
      "Logotyp + grafisk profil",
      "Webbplats med flera sidor",
      "SEO grundoptimering",
      "Kontaktformulär",
      "Bild- och textstruktur",
    ],
  },
  {
    name: "Skräddarsydd",
    price: "Pris på offert",
    text: "För dig som behöver något mer anpassat med design, strategi och funktioner.",
    features: [
      "Skräddarsydd design",
      "Avancerad webbplats",
      "Integrationer",
      "Digital strategi",
      "Löpande support",
    ],
  },
];

const StartaForetag = () => {
  return (
    <>
      <PageHero
        title="Starta ditt företag"
        subtitle="Vi hjälper dig bygga en stark grund med varumärke, design och digital närvaro."
        image="/images/bildbank-1.webp"
        ctaText="Till erbjudandet"
        ctaLink="/kontakt"
      />
      <section id="paket" className="bg-[#171717] py-20 text-white md:py-28">
        <div className="container">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Välj rätt paket
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-semibold text-white/70">
              Oavsett om du vill komma igång enkelt eller bygga något mer
              skräddarsytt finns ett paket som passar.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`relative rounded-2xl bg-[#1f1f1f] p-8 shadow-2xl transition hover:-translate-y-1 ${
                  item.popular
                    ? "border-2 border-primary"
                    : "border border-white/10"
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-black">
                    Populär
                  </span>
                )}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
                  <Sparkles className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-3xl font-bold">{item.name}</h3>
                <p className="mb-6 text-base font-semibold leading-6 text-white/70">
                  {item.text}
                </p>
                
                <p className="mb-8 text-4xl font-bold text-primary">
                  {item.price}
                </p>

                <ul className="mb-8 space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-base font-semibold text-white/85"
                    >
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/kontakt"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition ${
                    item.popular
                      ? "bg-primary text-black hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-black"
                  }`}
                >
                  Välj {item.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCardsSection />
      <ContactFormSection />
    </>
  );
};

export default StartaForetag;
