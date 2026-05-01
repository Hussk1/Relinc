import { ArrowRight, ExternalLink } from "lucide-react";

const IconContact = ({ className = "" }) => (
  <svg viewBox="0 0 54 56" fill="none" className={className}>
    <path
      d="M3 33.8546L17.1092 1C17.1092 1 8.87882 55 28.5902 55C39.6087 55 40.2787 28.6199 40.2787 28.6199M40.2787 28.6199L28.2158 39.297M40.2787 28.6199L51 40.6331"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconWork = ({ className = "" }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <path
      d="M10 50L25 10M25 10L48 28M25 10L30 42"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSupport = ({ className = "" }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <path
      d="M30 5V24M30 36V55M5 30H24M36 30H55M13 13L25 25M35 35L47 47M13 47L25 35M35 25L47 13"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const items = [
  {
    title: "Kontakt",
    text: "Letar du efter en partner som kan översätta din vision till digitala lösningar? Med över två decennier i branschen har vi expertisen som krävs.",
    button: "Kontakta oss",
    icon: IconContact,
    color: "text-[#00ffb3]",
  },
  {
    title: "Jobba hos oss",
    text: "Vill du ha kul på jobbet, ha en bra balans mellan arbetsliv och privatliv och jobba hos en arbetsgivare som bryr sig, på riktigt. Då ska du söka dig till oss på Toxic.",
    button: "Jobba hos oss",
    icon: IconWork,
    color: "text-[#ff9aa2]",
    external: true,
  },
  {
    title: "Support",
    text: "Är det något som strular? Kontakta våra supporthjältar så hjälper de dig med lösningar.",
    button: "Support",
    icon: IconSupport,
    color: "text-[#ffd600]",
  },
];

export const ContactCardsSection = () => {
  return (
    <section className="border-y border-white/20 bg-[#171717] py-20 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex h-full max-w-sm flex-col">
                <div className="mb-5 flex h-[72px] items-end gap-4">
                  <Icon className={`h-14 w-14 shrink-0 ${item.color}`} />

                  <h3 className="pb-1 text-2xl font-bold leading-none text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="mb-6 text-base font-semibold leading-7 text-white">
                  {item.text}
                </p>

                <a
                  href=""
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-white px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  {item.button}
                  {item.external ? (
                    <ExternalLink className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};