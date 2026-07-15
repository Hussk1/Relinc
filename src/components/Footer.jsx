import { Link, useNavigate, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (href) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/20 px-4 pb-10 pt-20 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Kontakt
            </p>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">
              Redo att bygga något
              <span className="block text-primary">unikt tillsammans?</span>
            </h2>
          </div>

          <Link
            to="/kontakta-oss"
            className="inline-flex h-11 items-center justify-center rounded-full border border-primary bg-primary px-6 font-semibold text-black transition hover:opacity-90"
          >
            Kontakta oss
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div>
            <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-wide">
              <img
                src={imagePath("images/relinc-vit-logotyp.webp")}
                alt="Relinc Logo"
                className="w-32 h-auto"
              />
            </h3>

            <p className="max-w-xs text-white/70">
              En digital byrå med kunden i fokus. Vi utvecklar smarta digitala
              lösningar som håller nu och för framtiden.
            </p>

            <div className="mt-6 flex gap-4">
              {[Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Kontakt</h3>

            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                kontakt@relinc.se
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:0704667004" className="hover:underline">
                  +46 70 466 70 04
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                Malmö, Sverige
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Om oss</h3>

            <p className="text-white/70">
              Relinc grundades med ambitionen att hjälpa företag att växa
              digitalt. Genom att kombinera webb, design och strategi skapar vi
              smarta lösningar och starkare varumärken som håller över tid.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Relinc. Alla rättigheter förbehållna.
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="transition hover:text-primary"
            >
              Integritetspolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
