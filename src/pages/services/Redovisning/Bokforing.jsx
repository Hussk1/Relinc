import { PageHero } from "../../../components/PageHero";
import { ContactCardsSection } from "../../../components/ContactCardsSection";
import { ContactFormSection } from "../../../components/ContactFormSection";

import { Lightbulb, LineChart, Users, Heart } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Nytänkande",
    text: "Vi utmanar inte bara oss själva utan också hela branschen för att förbli ledande. Genom att vara öppna för nya idéer och kreativa lösningar strävar vi efter att inspirera och främja innovation hos våra kunder och partners. Vårt mod att prova nya saker och tänka annorlunda stimulerar både vår och deras utveckling.",
  },
  {
    icon: LineChart,
    title: "Långsiktighet",
    text: "Vårt mål är alltid att skapa långsiktiga, hållbara relationer (och digitala lösningar). Genom att vara lyhörda för förväntningar och behov samt kontinuerligt förbättra våra verktyg och kompetenser, säkerställer vi att våra lösningar gynnar alla parter.",
  },
  {
    icon: Users,
    title: "Ansvarstagande",
    text: "Ansvar är kärnan i varje interaktion vi har, oavsett om det är interna projekt eller externa partnerskap. Våra värderingar guidar oss i alla situationer och vi strävar efter att alla ska känna sig trygga och värderade i deras samarbete med oss.",
  },
  {
    icon: Heart,
    title: "Gemenskap",
    text: "Vi tror på kraften i att arbeta tillsammans, både inom och utanför Toxic. Genom att värdera och respektera varje parts roll bygger vi starka och inkluderande samarbeten.",
  },
];

const Bokforing = () => {
  return (
    <>
      <PageHero
        title="Bokföring"
        subtitle="Professionell bokföring som säkerställer compliance och transparens för ditt företag."
        image="/images/bildbank-1.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      <section className="container py-16 text-white">
        <div className="space-y-32 my-14">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <img
                src="/images/img-3770.webp"
                alt="Bokföring"
                className="rounded-2xl"
              />
            </div>

            <div className="max-w-xl self-end">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Bokföring som gör skillnad
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Vi erbjuder kvalificerad bokföring för företag som vill ta
                nästa steg i sin utveckling. Oavsett om det handlar om ekonomi,
                digital strategi eller affärsutveckling hjälper vi dig att fatta
                välgrundade beslut som skapar långsiktigt värde.
              </p>

              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Boka bokföring
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-14">
            {values.map((item) => {
              const Icon = item.icon;

              return (
              <div key={item.title} className="border-t border-primary pt-5">
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[#171717]">
                  <Icon className="h-5 w-5" />
                </div>

                  <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold leading-7 text-white">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCardsSection />
      <ContactFormSection />
    </>
  );
};

export default Bokforing;
