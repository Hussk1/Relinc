import { ArrowRight } from "lucide-react";

const PuffBlockItems = [
  {
    title: "Vårt erbjudande",
    description:
      "Förstklassiga lösningar inom digitala affärer och skräddarsydda lösningar.",
    linkText: "Till vårt erbjudande",
  },
  {
    title: "Kundcase",
    description:
      "Bäst blir det när ni ser vad vi har gjort och hör vad våra kunder säger.",
    linkText: "Till våra kundcase",
  },
    {
    title: "Kunskapsbank",
    description:
      "Ta del av artiklar, blogginlägg, nyheter och guider och öka din kunskap.",
    linkText: "Öka din kunskap",
  },
    {
    title: "Kontakta oss",
    description:
      "Vill du göra din vision till verklighet inom det digitala? Vi hjälper dig.",
    linkText: "Kontakta oss",
  },
];

export const PuffBlock = () => {
  return (
<section className="container py-16">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {PuffBlockItems.map((item) => (
      <div
        key={item.title}
        className="border-2 border-white rounded-2xl px-4 py-16 flex flex-col h-full"
      >
        <h2 className="text-primary font-medium leading-7 text-2xl mb-6">
          {item.title}
        </h2>

        <p className="text-white text-lg font-medium mb-6">
          {item.description}
        </p>

        <div className="mt-auto">
          <a
            href=""
            className="inline-flex items-center gap-2 h-8 px-4 rounded-full border border-white font-semibold text-white"
          >
            {item.linkText}
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
  );
};