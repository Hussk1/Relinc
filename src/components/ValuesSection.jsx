import {
  UserRound,
  ThumbsUp,
  Check,
  ChartNoAxesCombined,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";

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
    text: "Vi gör det komplexa enkelt. Oavsett om det handlar om webb, design eller digitala lösningar bryter vi ner processer så att de blir tydliga och lättförståeliga.",
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

export const ValuesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="relative container">
        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-300px] bottom-[100px] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Det här står vi för
          </h2>

          <p className="text-base font-semibold leading-7 text-white sm:text-lg">
            Det här är grunden i hur vi arbetar och vad du kan förvänta dig av
            oss. Våra värderingar genomsyrar allt vi gör och hjälper oss skapa
            lösningar som ger verkligt värde över tid.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-primary pt-5 transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full text-primary transition duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>

                <p className="text-base font-semibold leading-7 text-white sm:text-lg">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};