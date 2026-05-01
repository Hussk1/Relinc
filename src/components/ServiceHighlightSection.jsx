import { ArrowRight } from "lucide-react";

const serviceHighlights = [
  {
    title: "Vi bygger din företagsidentitet",
    description:
      "Ta första steget mot en stark närvaro med en genomtänkt visuell identitet. Vi hjälper dig att skapa logotyp, grafisk profil och design som speglar ditt företag och skapar förtroende hos dina kunder. Perfekt för dig som startar nytt eller vill stärka ditt varumärke.",
    buttonText: "Skapa din identitet",
    image: "../images/forre.webp",
    imagePosition: "left",
  },
  {
    title: "Vi bygger din webb",
    description:
      "Vi skapar moderna, användarvänliga och SEO-optimerade webbplatser anpassade efter dina affärsmål. Genom att kombinera kreativ design, teknisk utveckling och strategisk förståelse bygger vi en digital plattform som stärker ditt varumärke och driver resultat. Vi hjälper dig hela vägen från idé och design till utveckling, innehåll och långsiktig tillväxt.",
    buttonText: "Vårt erbjudande inom webb",
    image: "../images/webb.webp",
    imagePosition: "right",
  },
];

export const ServiceHighlightSection = () => {
  return (
    <section className="bg-[#0f0f0f] py-16 md:py-24">
      <div className="container space-y-20 md:space-y-28">
        {serviceHighlights.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-16"
          >
            <div
              className={
                item.imagePosition === "right" ? "md:order-2" : "md:order-1"
              }
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full min-h-[300px] w-full rounded-lg object-cover md:min-h-[420px]"
              />
            </div>

            <div
              className={`${
                item.imagePosition === "right" ? "md:order-1" : "md:order-2"
              } flex h-full max-w-xl flex-col justify-center md:pt-12 lg:pt-16`}
            >
              <h2 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl">
                {item.title}
              </h2>

              <p className="mb-6 text-lg font-semibold leading-7 text-white">
                {item.description}
              </p>

              <a
                href=""
                className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-white px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                {item.buttonText}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
