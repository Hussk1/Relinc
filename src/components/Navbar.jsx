import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { imagePath } from "@/lib/imagePath";

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
      { label: "Logotyp & Grafisk profil", path: "/logotypdesign" },
      { label: "Marknadsföringsmaterial", path: "/banners-annonser" },
      { label: "Bildproduktion", path: "/bildredigering" },
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
        <Link to="/" className="flex items-center">
          <img src={imagePath("images/relinc-vit-logotyp.webp")} alt="Logo" className="w-32 h-auto" />
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-10 xl:flex">
          {/* DROPDOWN */}
          <div className="group">
            <button className="flex items-center gap-1 text-lg font-semibold text-white/90 transition hover:text-white">
              Våra tjänster
              <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-20 w-full max-w-4xl -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-b-2xl border border-white/10 bg-[#202020] p-10 shadow-2xl">
                <div className="grid grid-cols-3 gap-10">
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

          {/* LINKS */}
          <Link
            to="/starta-foretag"
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

        {/* CTA */}
        <Link
          to="/kontakt"
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:bg-secondary xl:inline-flex"
        >
          Kontakta oss
        </Link>
      </div>
    </header>
  );
};
