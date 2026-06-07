import { PageHero } from "../components/PageHero";
import { ContactFormSection } from "../components/ContactFormSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const contactCards = [
  {
    icon: Mail,
    title: "E-post",
    text: "Kontakta oss via e-post så återkommer vi så snabbt som möjligt.",
    value: "info@relinc.se",
    href: "mailto:info@relinc.se",
  },
  {
    icon: Phone,
    title: "Telefon",
    text: "Ring oss för frågor, offert eller rådgivning kring era behov.",
    value: "+46 70 000 00 00",
    href: "tel:+46700000000",
  },
  {
    icon: MapPin,
    title: "Adress",
    text: "Vi arbetar med företag över hela Sverige och digitalt.",
    value: "Sverige",
    href: "/",
  },
];

const Kontakt = () => {
  return (
    <>
      <PageHero
        title="Kontakta oss"
        subtitle="Låt oss prata om hur vi kan hjälpa ditt företag att växa genom smarta digitala lösningar, design och strategi."
        image="/images/kontaktaoss.webp"
        ctaText="Boka möte"
        ctaLink="#kontaktform"
      />

      {/* CONTACT FORM */}
      <div id="kontaktform">
        <ContactFormSection />
      </div>

      <section className="relative overflow-hidden py-20 text-white md:py-28">
        {/* GLOWS */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-400px] top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute right-[-300px] bottom-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="container relative z-10">
          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {contactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#1f1f1f] p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-base font-medium leading-7 text-white/70">
                    {item.text}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-lg font-semibold text-primary">
                    {item.value}

                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
