import { useLayoutEffect, useRef } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const footerRef = useRef(null);
  const topRef = useRef(null);
  const contentRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const footer = footerRef.current;
      const top = topRef.current;
      const content = contentRef.current;
      const bottom = bottomRef.current;

      gsap.set(top, {
        opacity: 0,
        y: 50,
      });

      gsap.set(content, {
        opacity: 0,
        y: 55,
      });

      gsap.set(bottom, {
        opacity: 0,
        y: 35,
      });

      gsap.set(footer, {
        visibility: "visible",
      });

      const animateFooter = () => {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .to(top, {
            opacity: 1,
            y: 0,
            duration: 1,
          })
          .to(
            content,
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
            },
            "-=0.6",
          )
          .to(
            bottom,
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
            },
            "-=0.55",
          );
      };

      const rect = footer.getBoundingClientRect();

      const isAlreadyVisible =
        rect.top < window.innerHeight && rect.bottom > 0;

      if (isAlreadyVisible) {
        animateFooter();
      } else {
        ScrollTrigger.create({
          trigger: footer,
          start: "top 92%",
          once: true,
          onEnter: animateFooter,
        });
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollLink = (href) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
      return;
    }

    const el = document.querySelector(href);

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="invisible px-4 pb-10 pt-16 text-white sm:px-6 sm:pt-20 lg:px-4"
    >
      <div className="container mx-auto">
        {/* TOP CTA */}
        <div
          ref={topRef}
          className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Kontakt
            </p>

            <h2 className="max-w-2xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Redo att bygga något
              <span className="block text-primary">unikt tillsammans?</span>
            </h2>
          </div>

          <Link
            to="/kontakta-oss"
            className="inline-flex h-11 w-fit items-center justify-center rounded-full border border-primary bg-primary px-6 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:opacity-90"
          >
            Kontakta oss
          </Link>
        </div>

        {/* FOOTER CONTENT */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* RELINC */}
          <div>
            <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-wide">
              <img
                src="/images/relinc-vit-logotyp.webp"
                alt="Relinc Logo"
                className="h-auto w-32"
              />
            </h3>

            <p className="max-w-xs text-white/70">
              En digital byrå med kunden i fokus. Vi utvecklar smarta digitala
              lösningar som håller nu och för framtiden.
            </p>

            <div className="mt-6 flex gap-4">
              {[
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/relinc.se/",
                  label: "Instagram",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/relincab/",
                  label: "LinkedIn",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition duration-300 hover:scale-105 hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Kontakt
            </h3>

            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />

                <a
                  href="mailto:kontakt@relinc.se"
                  className="transition hover:text-primary"
                >
                  kontakt@relinc.se
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />

                <a
                  href="tel:+46704557004"
                  className="transition hover:text-primary"
                >
                  +46 70 455 70 04
                </a>
              </li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Om oss
            </h3>

            <p className="text-white/70">
              Relinc grundades med ambitionen att hjälpa företag att växa
              digitalt. Genom att kombinera webb, design och strategi skapar vi
              smarta lösningar och starkare varumärken som håller över tid.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          ref={bottomRef}
          className="mt-8 flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between"
        >
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