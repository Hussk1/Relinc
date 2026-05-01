import { ArrowRight } from "lucide-react";

const TwoColumnBlockItems = [
  {
    title: "Fokus på kunden",
    image: "/images/focus.webp",
    description:
      "Varje företag är unikt och därför anpassar vi våra lösningar efter dina behov och mål. Genom ett nära samarbete skapar vi smarta och effektiva lösningar inom digital utveckling, design och affärsstöd. Vi hjälper dig med allt från webbdesign, SEO och systemutveckling till grafisk design, video och digital marknadsföring, samt erbjuder stöd inom redovisning och företagslösningar för att förenkla din vardag. Med rätt strategi, teknik och kreativitet bygger vi lösningar som stärker din verksamhet, effektiviserar processer och skapar långsiktig tillväxt.",
    linkText: "Till våra kundcase",
  },
  {
    title: "Strategi möter resultat",
    image: "/images/Strategi.webp",
    description:
      "Hos oss tror vi att de bästa resultaten skapas när strategi, teknik och kreativitet samverkar, och vi kombinerar teknisk kompetens med en djup förståelse för din verksamhet och dina mål. Oavsett om det handlar om att utveckla en modern webbplats, förbättra din synlighet genom SEO, skapa stark visuell kommunikation eller effektivisera din verksamhet med smarta system och redovisningstjänster är vårt mål alltid detsamma att leverera lösningar som inte bara möter dina behov idag utan också driver din verksamhet framåt långsiktigt. ",
    linkText: "Se vårt erbjudande",
  },
];

export const TwoColumnBlock = () => {
  return (
    <section className="relative container py-16">
            {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        {/* vänster glow */}
        <div className="absolute left-[-500px] top-[500px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="grid grid-cols-2 gap-8">
        {TwoColumnBlockItems.map((item) => (
          <div key={item.title}>
            <div className="inline-block">
              <img src={item.image} alt={item.title} className="rounded-2xl" />
            </div>

            <div>
              <h2 className="text-[42px] font-[700] leading-14 text-white pt-6 pb-2">
                {item.title}
              </h2>

              <p className="text-white text-lg font-medium mb-6">
                {item.description}
              </p>

              <div className="inline-block">
                <a
                  href=""
                  className="flex items-center gap-2 h-10 px-6 rounded-full bg-primary border border-primary font-semibold text-[#1b1b1b] leading-none"
                >
                  {item.linkText}
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
