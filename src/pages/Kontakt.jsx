import { PageHero } from "../components/PageHero";
import { ContactFormSection } from "../components/ContactFormSection";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "E-post",
    text: "Kontakta oss via e-post så återkommer vi så snabbt som möjligt.",
    value: "kontakt@relinc.se",
    href: "mailto:kontakt@relinc.se",
  },
  {
    icon: Phone,
    title: "Telefon",
    text: "Ring oss för frågor, offert eller rådgivning kring era behov.",
    value: "+46 70 455 70 04",
    href: "tel:+46704557004",
  },
];

const Kontakt = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1b1b1b] [background-image:radial-gradient(circle_at_7%_6%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_9%,transparent_20%),radial-gradient(circle_at_78%_15%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_11%,transparent_25%),radial-gradient(circle_at_32%_27%,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_7%,transparent_17%),radial-gradient(circle_at_94%_39%,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_10%,transparent_23%),radial-gradient(circle_at_13%_48%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_61%_58%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_8%,transparent_19%),radial-gradient(circle_at_20%_71%,rgba(0,0,0,0.33)_0%,rgba(0,0,0,0.15)_10%,transparent_22%),radial-gradient(circle_at_87%_82%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_38%_95%,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0.17)_9%,transparent_21%)] bg-no-repeat bg-[length:100%_100%]">
      <PageHero
        title="Kontakta oss"
        subtitle="Låt oss prata om hur vi kan hjälpa ditt företag att växa genom smarta digitala lösningar, design och strategi."
        image="images/kontaktaoss.webp"
      />

      {/* Contact form */}
      <div id="kontaktform" className="scroll-mt-24">
        <ContactFormSection />
      </div>

      {/* Contact cards */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
            {contactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#1f1f1f]/90 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50"
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

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;