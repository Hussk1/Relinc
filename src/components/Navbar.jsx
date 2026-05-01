import { ChevronDown } from "lucide-react";
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
    title: "Grafisk",
    links: [
      { label: "Logotypdesign", path: "/logotypdesign" },
      { label: "Banners & Annonser", path: "/banners-annonser" },
      { label: "Reklambilder", path: "/reklambilder" },
      { label: "Affischer", path: "/affischer" },
      { label: "Bildredigering", path: "/bildredigering" },
    ],
  },
  {
    title: "Redovisning",
    links: [
      { label: "Rådgivning", path: "/radgivning" },
      { label: "Årsredovisning", path: "/arsredovisning" },
      { label: "Bokföring", path: "/bokforing" },
      { label: "Bokslut", path: "/bokslut" },
      { label: "Lönehantering", path: "/lonehantering" },
      { label: "Deklaration", path: "/deklaration" },
    ],
  },
  {
    title: "Företagsprodukter",
    links: [
      { label: "Arbetskläder", path: "/arbetsklader" },
      { label: "Accessoarer", path: "/accessoarer" },
    ],
  },
];

export const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#171717]/95 text-white backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="../images/LOGO_PNG.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* NAV */}
        <nav className="hidden items-center gap-10 xl:flex">
          {/* DROPDOWN */}
          <div className="group">
            <button className="flex items-center gap-1 text-lg font-semibold text-white/90 transition hover:text-white">
              Våra tjänster
              <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-20 w-full max-w-6xl -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-b-2xl border border-white/10 bg-[#202020] p-10 shadow-2xl">
                <div className="grid grid-cols-5 gap-10">
                  {menuColumns.map((column) => (
                    <div key={column.title}>
                      <h3 className="mb-4 text-lg font-semibold text-primary">
                        {column.title}
                      </h3>

                      <ul className="space-y-2">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.path}
                              className="block text-lg font-medium text-white/80 transition hover:translate-x-1 hover:text-white"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <a
            href="/starta-foretag"
            className="text-lg font-semibold text-white/90 transition hover:text-white"
          >
            Webbredo
          </a>

          <a
            href="/om-oss"
            className="text-lg font-semibold text-white/90 transition hover:text-white"
          >
            Om oss
          </a>

          <a
            href="/kunskapsbank"
            className="text-lg font-semibold text-white/90 transition hover:text-white"
          >
            Kunskapsbank
          </a>
        </nav>

        {/* CTA */}
        <a
          href=""
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:bg-secondary xl:inline-flex"
        >
          Offert
        </a>
      </div>
    </header>
  );
};
