import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1b1b1b] px-4 [background-image:radial-gradient(circle_at_7%_6%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_9%,transparent_20%),radial-gradient(circle_at_78%_15%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_11%,transparent_25%),radial-gradient(circle_at_32%_27%,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_7%,transparent_17%),radial-gradient(circle_at_94%_39%,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_10%,transparent_23%),radial-gradient(circle_at_13%_48%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_61%_58%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_8%,transparent_19%),radial-gradient(circle_at_20%_71%,rgba(0,0,0,0.33)_0%,rgba(0,0,0,0.15)_10%,transparent_22%),radial-gradient(circle_at_87%_82%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_38%_95%,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0.17)_9%,transparent_21%)] bg-no-repeat bg-[length:100%_100%]">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Sidan kunde inte hittas
        </span>

        <h1 className="mb-2 text-[100px] font-bold leading-none text-primary sm:text-[140px] md:text-[180px]">
          404
        </h1>

        <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Här verkar det vara tomt
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-base font-semibold leading-7 text-white/70 sm:text-lg">
          Sidan du försöker besöka finns inte, har flyttats eller så är
          webbadressen fel. Du kan gå tillbaka till startsidan eller kontakta
          oss om du behöver hjälp.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-black transition hover:opacity-90 sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Till startsidan
          </Link>

          <Link
            to="/kontakta-oss"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-primary hover:text-primary sm:w-auto"
          >
            Kontakta oss
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px] sm:h-[500px] sm:w-[500px]" />
    </div>
  );
};

export default NotFound;