import { PageHero } from "../../../components/PageHero";
import { ContactFormSection } from "../../../components/ContactFormSection";
import {
  ArrowRight,
  ChevronDown,
  UserRound,
  ThumbsUp,
  Check,
  ChartNoAxesCombined,
  Handshake,
  Ban,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imagePath } from "@/lib/imagePath";

const values = [
  {
    icon: UserRound,
    title: "Kundfokus",
    text: "Vi sätter alltid kunden i centrum och utgår från dina mål, behov och förutsättningar. Genom att arbeta nära dig skapar vi lösningar som inte bara ser bra ut utan också fungerar i praktiken och ger resultat.",
  },
  {
    icon: ThumbsUp,
    title: "Kvalitet",
    text: "Vi strävar alltid efter hög kvalitet i allt vi gör, från första idé till färdig lösning. Genom noggrannhet och erfarenhet säkerställer vi att varje detalj håller en professionell standard.",
  },
  {
    icon: Check,
    title: "Enkelhet",
    text: "Vi gör det komplexa enkelt. Oavsett om det handlar om webb, design eller ekonomi bryter vi ner processer så att de blir tydliga och lättförståeliga.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Långsiktighet",
    text: "Vi bygger inte bara lösningar för idag utan för framtiden. Vårt mål är att vara en partner över tid och skapa hållbar utveckling för ditt företag.",
  },
  {
    icon: Handshake,
    title: "Samarbete",
    text: "Vi tror på nära och transparenta samarbeten. Genom tydlig kommunikation och gemensamma mål skapar vi bättre resultat tillsammans.",
  },
];

const faqs = [
  {
    question: "Vad menas med marknadsföringsmaterial?",
    answer:
      "Vi skapar visuellt innehåll för marknadsföring i form av bilder och videor som hjälper företag att presentera produkter, tjänster och varumärken på ett professionellt sätt.",
  },
  {
    question: "Skapar ni AI-genererade bilder och videor?",
    answer:
      "Ja, vi använder AI som en del av produktionen för att skapa unikt visuellt material. Innehållet bearbetas och anpassas därefter manuellt för att uppnå ett professionellt resultat.",
  },
  {
    question: "Redigeras materialet manuellt?",
    answer:
      "Ja, AI är ett verktyg i processen. Vi arbetar även manuellt med bland annat videoklippning, bildredigering, text, ljud, övergångar och andra detaljer för att skapa ett färdigt material.",
  },
  {
    question: "Vilken typ av innehåll kan ni skapa?",
    answer:
      "Vi kan skapa produktbilder, produktvideor, reklamvideor, kampanjmaterial och visuellt innehåll för exempelvis sociala medier, webbplatser och digital annonsering.",
  },
  {
    question: "Kan materialet anpassas efter mitt företag?",
    answer:
      "Ja, innehållet anpassas efter ditt varumärke, dina produkter, färger, stil och målgrupp för att skapa ett enhetligt uttryck som passar företagets marknadsföring",
  },
];

const PuffBlockItems = [
  {
    title: "Logotyp & Grafisk profil",
    description:
      "Unik visuell identitet som stärker ditt varumärke och skapar ett starkt första intryck. Vi utvecklar logotyper som är både estetiska och funktionella.",
    linkText: "Till Logotypdesign",
    link: "/LogotypGrafiskProfil",
  },
  {
    title: "Bildproduktion",
    description:
      "Bildproduktion som förbättrar och anpassar dina bilder för att skapa ett mer professionellt och visuellt tilltalande resultat. Vi hjälper dig att skapa högkvalitativa bilder som stärker ditt varumärke.",
    linkText: "Till Bildproduktion",
    link: "/Bildproduktion",
  },
];

const Marknadsforingsmaterial = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1b1b1b] [background-image:radial-gradient(circle_at_7%_6%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_9%,transparent_20%),radial-gradient(circle_at_78%_15%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_11%,transparent_25%),radial-gradient(circle_at_32%_27%,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_7%,transparent_17%),radial-gradient(circle_at_94%_39%,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_10%,transparent_23%),radial-gradient(circle_at_13%_48%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_61%_58%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_8%,transparent_19%),radial-gradient(circle_at_20%_71%,rgba(0,0,0,0.33)_0%,rgba(0,0,0,0.15)_10%,transparent_22%),radial-gradient(circle_at_87%_82%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_38%_95%,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0.17)_9%,transparent_21%)] bg-no-repeat bg-[length:100%_100%]">
      <PageHero
        title="Marknadsföringsmaterial"
        subtitle="Vi skapar professionellt marknadsföringsmaterial som stärker ditt varumärke och hjälper dig att kommunicera tydligt och effektivt i både digitala och tryckta kanaler."
        image="images/Grafisk.webp"
      />

      <section className="container px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-4">
        <div className="my-10 space-y-20 sm:my-14 sm:space-y-24 md:space-y-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="images/marknadsforingsmaterial-grafisk-design-malmo.webp"
                alt="Marknadsföringsmaterial"
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[360px] md:h-full md:min-h-[460px]"
              />
            </div>

            <div className="max-w-xl self-end">
              <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Design som stärker din marknadsföring
              </h2>

              <p className="mb-8 text-base font-semibold leading-7 text-white sm:text-lg">
                Vi skapar visuellt marknadsföringsmaterial för sociala medier,
                annonser, kampanjer och tryck som är anpassat efter ditt
                varumärke och dina mål.
              </p>

              <a
                href="/kontakta-oss"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white sm:py-20 md:py-28">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-4">
          <div className="mb-10 max-w-4xl sm:mb-12 md:mb-16">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Vanliga frågor om marknadsföringsmaterial
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1f] transition hover:border-primary/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left sm:gap-6 sm:p-5"
                >
                  <span className="text-base font-medium leading-7 text-white sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition ${
                      openIndex === index ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-4 text-base leading-7 text-white/80 transition-all duration-300 sm:px-5 sm:text-lg ${
                    openIndex === index
                      ? "max-h-60 pb-4 sm:pb-5"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative container px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-4">
        <div className="relative z-10 mb-10 max-w-3xl sm:mb-12 md:mb-16">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Relaterade tjänster
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {PuffBlockItems.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-2xl border-2 border-white px-4 py-10 transition duration-300 hover:-translate-y-1 hover:border-primary sm:px-5 sm:py-12 md:py-16"
            >
              <h2 className="mb-6 text-xl font-medium leading-7 text-primary sm:text-2xl">
                {item.title}
              </h2>

              <p className="mb-6 text-base font-medium leading-7 text-white sm:text-lg">
                {item.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={item.link}
                  className="group inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-white px-4 py-1.5 text-sm font-semibold text-white transition hover:border-primary hover:text-primary sm:text-base"
                >
                  <span>{item.linkText}</span>

                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
};

export default Marknadsforingsmaterial;