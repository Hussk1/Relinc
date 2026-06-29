import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PuffBlockItems = [
  {
    title: "Webbdesign",
    description:
      "Moderna och användarvänliga webbplatser som stärker ditt varumärke och driver resultat.",
    linkText: "Till vårt erbjudande",
    link: "/webbdesign",
  },
  {
    title: "Logotypdesign",
    description:
      "Unika logotyper som stärker ditt varumärke och skapar ett professionellt första intryck.",
    linkText: "Till vårt erbjudande",
    link: "/logotypdesign",
  },
  {
    title: "Kontakta oss",
    description:
      "Kontakta oss så hjälper vi dig att ta nästa steg med rätt strategi och lösning.",
    linkText: "Kontakta oss",
    link: "/kontakta-oss",
  },
];

export const PuffBlock = () => {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PuffBlockItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#1f1f1f] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary"
          >
            <h3 className="mb-4 text-2xl font-bold text-white">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};