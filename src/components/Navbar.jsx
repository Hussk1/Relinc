import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const menuColumns = [
  {
    title: "Utveckling",
    links: [
      { label: "Webbdesign", path: "/webbdesign" },
      { label: "SEO Optimering", path: "/seo-optimering" },
      { label: "Webbapplikationer", path: "/webbapplikationer" },
      { label: "Mobil Anpassning", path: "/mobil-anpassning" },
      { label: "Säkerhet", path: "/sakerhet" },
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const closeServicesMenu = () => {
    setIsServicesOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full text-white transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 xl:px-0">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={closeMobileMenu}
        >
          <img
            src="/images/relinc-vit-logotyp.webp"
            alt="Relinc"
            className="h-auto w-32"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-10 xl:flex">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="flex items-center gap-1 text-lg font-semibold text-white/90 transition hover:text-white"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Våra tjänster

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-6 transition-all duration-200 ${
                isServicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
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

        {/* Desktop contact button */}
        <Link
          to="/kontakta-oss"
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:brightness-110 xl:inline-flex"
        >
          Kontakta oss
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex items-center justify-center xl:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <nav className="border-t border-white/10 bg-[#202020] px-4 py-6 sm:px-6 xl:hidden">
          <div className="container">
            {/* Mobile services */}
            <div>
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between py-3 text-left text-lg font-semibold text-white"
                aria-expanded={isServicesOpen}
              >
                Våra tjänster

                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="pb-4 pt-2">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {menuColumns.map((column) => (
                      <div key={column.title}>
                        <h3 className="mb-3 font-semibold text-primary">
                          {column.title}
                        </h3>

                        <ul className="space-y-3">
                          {column.links.map((link) => (
                            <li key={link.label}>
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
              )}
            </div>

            <Link
              to="/webbredo"
              onClick={closeMobileMenu}
              className="block border-t border-white/10 py-4 text-lg font-semibold text-white/90"
            >
              Webbredo
            </Link>

            <Link
              to="/om-oss"
              onClick={closeMobileMenu}
              className="block border-t border-white/10 py-4 text-lg font-semibold text-white/90"
            >
              Om oss
            </Link>

            <Link
              to="/kontakta-oss"
              onClick={closeMobileMenu}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:brightness-110"
            >
              Kontakta oss
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};