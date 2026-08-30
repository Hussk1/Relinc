import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PuffBlockItems = [
  {
    title: "Webbdesign",

    description:
      "Vi skapar moderna webbplatser som inte bara ser bra ut utan också konverterar besökare till kunder.",

    linkText: "Läs mer",

    link: "/webbdesign",
  },

  {
    title: "Logotyp & Grafisk profil",

    description:
      "Vi skapar en tydlig och professionell visuell identitet med logotyp, färger och design som stärker ditt varumärke och skapar igenkänning.",

    linkText: "Läs mer",

    link: "/LogotypGrafiskProfil",
  },

  {
    title: "Kontakta oss",

    description:
      "Låt oss prata om hur vi kan hjälpa ditt företag att växa genom smarta digitala lösningar, design och strategi.",

    linkText: "Kontakta oss",

    link: "/kontakta-oss",
  },
];

export const PuffBlock = () => {
  return (
    <section className="container px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PuffBlockItems.map((item) => (
          <div
            key={item.title}
            className="group flex h-full flex-col rounded-2xl border border-white/50 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-primary sm:p-6"
          >
            <h3 className="mb-4 text-2xl font-bold text-primary">
              {item.title}
            </h3>

            <p className="mb-8 text-base font-medium leading-7 text-white/80">
              {item.description}
            </p>

            <div className="mt-auto">
              <Link
                to={item.link}
                className="group/link inline-flex items-center gap-2 rounded-full border border-white px-5 py-2 font-semibold text-white transition-all duration-300 hover:border-primary hover:text-primary"
              >
                {item.linkText}

                <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};