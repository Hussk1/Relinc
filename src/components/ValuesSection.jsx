import { Lightbulb, LineChart, Users, Heart, ThumbsUp } from "lucide-react";

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
  {
    icon: ThumbsUp,
    title: "Glädje",
    text: "Vi tror att de bästa lösningarna kommer när vi hela teamet jobbar mot ett och samma mål – och har roligt på vägen. Därför strävar vi alltid efter att såväl kunder som medarbetare jobbar i en positiv och energigivande miljö där vi firar framgångar tillsammans.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="bg-[#171717] py-20 md:py-28">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Våra värderingar
          </h2>

          <p className="text-lg font-semibold leading-7 text-white">
            Våra värderingar ligger till grund för allt vi gör och alla vi väljer
            att arbeta med. De påverkar våra beslut om vilka kunder vi engagerar,
            vilka leverantörer vi stöder, hur vi driver vårt företag, hur vi bygger
            vår kultur, prioriterar våra åtgärder, kommunicerar, formar våra
            arbetsprocesser samt sätter våra mål och strategier.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
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
  );
};