import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

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
    <footer className="bg-black px-4 pb-10 pt-20 text-white">
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
              <span className="block text-primary">smart tillsammans?</span>
            </h2>
          </div>

          <button
            onClick={() => handleScrollLink("#contact")}
            className="inline-flex h-11 items-center justify-center rounded-full border border-primary bg-primary px-6 font-semibold text-black transition hover:opacity-90"
          >
            Kontakta oss
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-wide">
              <img
                src="../images/LOGO_PNG.png"
                alt="Relinc Logo"
                className="h-10 w-auto"
              />
            </h3>
            <p className="max-w-xs text-white/70">
              En digital byrå med kunden i fokus. Vi utvecklar smarta digitala
              lösningar som håller nu och för framtiden.
            </p>

            <div className="mt-6 flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
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
            <h3 className="mb-4 text-lg font-semibold text-white">
              Snabblänkar
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <button
                  onClick={() => handleScrollLink("#erbjudande")}
                  className="transition hover:text-primary"
                >
                  Vårt erbjudande
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollLink("#parter")}
                  className="transition hover:text-primary"
                >
                  Våra parter
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollLink("#kundcase")}
                  className="transition hover:text-primary"
                >
                  Kundcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollLink("#kunskapsbank")}
                  className="transition hover:text-primary"
                >
                  Kunskapsbank
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Kontakt</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                +46 70 123 45 67
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                Iwzon@relinc.se
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
              Vi hjälper företag att omvandla vision till värde genom design,
              teknik och digital utveckling.
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
            <span>|</span>
            <Link
              to="/terms-of-service"
              className="transition hover:text-primary"
            >
              Villkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
