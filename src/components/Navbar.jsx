import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { ChevronDown, Menu, X } from "lucide-react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

const menuColumns = [
  {
    title: "Utveckling",
    links: [
      {
        label: "Webbdesign",
        path: "/webbdesign",
      },
      {
        label: "SEO Optimering",
        path: "/seo-optimering",
      },
      {
        label: "Webbapplikationer",
        path: "/webbapplikationer",
      },
      {
        label: "Mobil Anpassning",
        path: "/mobil-anpassning",
      },
      {
        label: "Säkerhet",
        path: "/sakerhet",
      },
    ],
  },
  {
    title: "Design",
    links: [
      {
        label: "Logotyp & Grafisk profil",
        path: "/LogotypGrafiskProfil",
      },
      {
        label: "Marknadsföringsmaterial",
        path: "/Marknadsforingsmaterial",
      },
      {
        label: "Bildproduktion",
        path: "/bildproduktion",
      },
    ],
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navRef = useRef(null);
  const navContentRef = useRef(null);

  const mobileMenuRef = useRef(null);
  const mobileMenuInnerRef = useRef(null);

  const mobileServicesRef = useRef(null);
  const mobileServicesInnerRef = useRef(null);

  /*
   * NAVBAR ENTRANCE
   */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navRef.current, {
        visibility: "visible",
      });

      gsap.set(navContentRef.current, {
        opacity: 0,
        y: -30,
      });

      gsap.to(navContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  /*
   * SCROLL BACKGROUND
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * MOBILE MENU OPEN / CLOSE
   */
  useLayoutEffect(() => {
    const menu = mobileMenuRef.current;
    const inner = mobileMenuInnerRef.current;

    if (!menu || !inner) return;

    if (isMobileMenuOpen) {
      const ctx = gsap.context(() => {
        const items = inner.querySelectorAll(".mobile-menu-item");

        gsap.killTweensOf([menu, inner, items]);

        gsap.set(menu, {
          visibility: "visible",
        });

        gsap.set(items, {
          opacity: 0,
          y: -16,
        });

        const timeline = gsap.timeline();

        timeline
          .fromTo(
            menu,
            {
              height: 0,
              opacity: 0,
            },
            {
              height: "auto",
              opacity: 1,
              duration: 0.65,
              ease: "power3.inOut",
            },
          )
          .to(
            items,
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.07,
              ease: "power3.out",
            },
            "-=0.35",
          );
      }, menu);

      return () => ctx.revert();
    }

    gsap.killTweensOf(menu);

    gsap.to(menu, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(menu, {
          visibility: "hidden",
        });
      },
    });
  }, [isMobileMenuOpen]);

  /*
   * MOBILE SERVICES OPEN / CLOSE
   */
  useLayoutEffect(() => {
    const services = mobileServicesRef.current;
    const inner = mobileServicesInnerRef.current;

    if (!services || !inner) return;

    if (isServicesOpen && isMobileMenuOpen) {
      const links = inner.querySelectorAll(".mobile-service-item");

      gsap.killTweensOf([services, links]);

      gsap.set(services, {
        visibility: "visible",
      });

      gsap.set(links, {
        opacity: 0,
        y: -12,
      });

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          services,
          {
            height: 0,
            opacity: 0,
          },
          {
            height: "auto",
            opacity: 1,
            duration: 0.55,
            ease: "power3.inOut",
          },
        )
        .to(
          links,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.3",
        );

      return;
    }

    gsap.killTweensOf(services);

    gsap.to(services, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(services, {
          visibility: "hidden",
        });
      },
    });
  }, [isServicesOpen, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsServicesOpen(false);
      setIsMobileMenuOpen(false);
      return;
    }

    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const closeServicesMenu = () => {
    setIsServicesOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`invisible fixed left-0 top-0 z-50 w-full text-white transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* NAVBAR */}

      <div
        ref={navContentRef}
        className="container flex h-20 items-center justify-between px-4 sm:px-6 xl:px-0"
      >
        {/* LOGO */}

        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img
            src="/images/relinc-vit-logotyp.webp"
            alt="Relinc"
            loading="lazy"
            decoding="async"
            className="h-auto w-32"
          />
        </Link>

        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-10 xl:flex">
          {/* SERVICES */}

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setIsServicesOpen((prev) => !prev);
              }}
              className="flex items-center gap-1 text-lg font-semibold text-white/90 transition hover:text-white"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Våra tjänster
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-6 transition-all duration-300 ${
                isServicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-3 opacity-0"
              }`}
            >
              <div className="rounded-b-2xl border border-white/10 bg-[#202020] p-10 shadow-2xl">
                <div className="grid grid-cols-2 gap-10">
                  {menuColumns.map((column) => (
                    <div key={column.title}>
                      <h3 className="mb-4 text-lg font-semibold text-primary">
                        {column.title}
                      </h3>

                      <ul className="space-y-2">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              to={link.path}
                              onClick={closeServicesMenu}
                              className="block text-lg font-medium text-white/80 transition hover:translate-x-1 hover:text-white"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/webbredo"
            className="text-lg font-semibold text-white/90 transition hover:text-white"
          >
            Webbredo
          </Link>

          <Link
            to="/om-oss"
            className="text-lg font-semibold text-white/90 transition hover:text-white"
          >
            Om oss
          </Link>
        </nav>

        {/* DESKTOP CONTACT */}

        <Link
          to="/kontakta-oss"
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:brightness-110 xl:inline-flex"
        >
          Kontakta oss
        </Link>

        {/* MOBILE BUTTON */}

        <button
          type="button"
          className="flex items-center justify-center xl:hidden"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* MOBILE NAV */}

      <nav
        ref={mobileMenuRef}
        className="invisible h-0 overflow-hidden border-t border-white/10 bg-[#202020] xl:hidden"
      >
        <div ref={mobileMenuInnerRef} className="container px-4 py-6 sm:px-6">
          {/* MOBILE SERVICES */}

          <div className="mobile-menu-item">
            <button
              type="button"
              onClick={() => {
                setIsServicesOpen((prev) => !prev);
              }}
              className="flex w-full items-center justify-between py-3 text-left text-lg font-semibold text-white"
              aria-expanded={isServicesOpen}
            >
              Våra tjänster
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* SERVICES CONTENT */}

            <div
              ref={mobileServicesRef}
              className="invisible h-0 overflow-hidden"
            >
              <div ref={mobileServicesInnerRef} className="pb-4 pt-2">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {menuColumns.map((column) => (
                    <div key={column.title} className="mobile-service-item">
                      <h3 className="mb-3 font-semibold text-primary">
                        {column.title}
                      </h3>

                      <ul className="space-y-3">
                        {column.links.map((link) => (
                          <li key={link.label} className="mobile-service-item">
                            <Link
                              to={link.path}
                              onClick={closeMobileMenu}
                              className="block text-base font-medium text-white/80 transition hover:text-white"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/webbredo"
            onClick={closeMobileMenu}
            className="mobile-menu-item block border-t border-white/10 py-4 text-lg font-semibold text-white/90"
          >
            Webbredo
          </Link>

          <Link
            to="/om-oss"
            onClick={closeMobileMenu}
            className="mobile-menu-item block border-t border-white/10 py-4 text-lg font-semibold text-white/90"
          >
            Om oss
          </Link>

          <Link
            to="/kontakta-oss"
            onClick={closeMobileMenu}
            className="mobile-menu-item mt-4 flex w-full items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:brightness-110"
          >
            Kontakta oss
          </Link>
        </div>
      </nav>
    </header>
  );
};
