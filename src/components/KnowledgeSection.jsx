import { ArrowRight, Clock3, ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    tag: "Nyhet",
    title: "Markvaruhuset väljer Toxic för ny e-handelsplattform i Litium",
    description:
      "Att bygga e-handel för en aktör som säljer till både företag och privatpersoner – med olika flöden, olika logik och höga krav på integration mot affärssystem – är ett projekt som ställer höga krav...",
    image: "../images/KnowledgeSection-1.webp",
    readTime: "2min",
  },
  {
    tag: "Nyhet",
    title: "Femte gången gillt – vi är nominerade till Umbraco Awards 2026!",
    description:
      "Vi är väldigt glada över att ännu en gång vara nominerade till Umbraco Awards. I år är vi nominerade i kategorin Best Cloud Solution med vår lösning för KABE AB.",
    image: "../images/KnowledgeSection-2.webp",
    readTime: "3min",
  },
  {
    tag: "Blogg",
    title: "Vad är Meta Andromeda och hur påverkar det din annonsering?",
    description:
      "Annonserar du på Instagram och Facebook? Då har du säkert märkt att annonserna inte riktigt fungerar som förut. Plötsligt verkar vissa annonser nå rätt personer medan andra försvinner i flödet. Vad...",
    image: "../images/KnowledgeSection-3.webp",
    readTime: "4min",
    blueTag: true,
  },
];

export const KnowledgeSection = () => {
  return (
    <section className="bg-[#171717] py-20 md:py-28">
      <div className="container">
        <div className="mb-14">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Fyll på din kunskapsbank
          </h2>

          <a
            href=""
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Se alla våra nyheter
          </a>
        </div>

        <div className="relative">
          <button className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-16 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary text-primary transition hover:bg-primary hover:text-black lg:flex">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-lg border border-white bg-[#1b1b1b]"
              >
                <div className="relative h-[200px] overflow-visible rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full rounded-t-lg object-cover"
                  />

                  <span
                    className={`absolute -bottom-[18px] left-5 z-10 rounded-full px-5 py-3 text-base font-semibold text-black ${
                      article.blueTag ? "bg-[#9eefff]" : "bg-primary"
                    }`}
                  >
                    {article.tag}
                  </span>
                </div>

                <div className="flex min-h-[310px] flex-col px-5 pb-6 pt-12">
                  <h3 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl">
                    {article.title}
                  </h3>

                  <p className="mb-8 text-base font-semibold leading-7 text-white">
                    {article.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <a
                      href=""
                      className="inline-flex items-center gap-2 text-base font-semibold text-primary"
                    >
                      Läs inlägget
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <div className="flex items-center gap-2 text-base font-semibold text-white">
                      <Clock3 className="h-5 w-5" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-16 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary text-primary transition hover:bg-primary hover:text-black lg:flex">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full border border-primary ${
                index === 0 ? "bg-primary" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
