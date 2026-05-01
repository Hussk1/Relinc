import { PageHero } from "../components/PageHero";
import { ContactCardsSection } from "../components/ContactCardsSection";
import { ContactFormSection } from "../components/ContactFormSection";

const OmOss = () => {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Om Relinc"
        subtitle="Vi är experter på e-handel, webb, digital marknadsföring och skräddarsydda IT-lösningar. Tillsammans utvecklar vi smarta digitala lösningar för stora och medelstora företag och organisationer som vill nå digital framgång."
        image="/images/bildbank-1.webp"
        ctaText="Kontakta oss"
        ctaLink="/kontakt"
      />

      {/* CONTENT (CONTAINER) */}
      <section className="container py-16 text-white">
        <div className="space-y-32 my-14">
          {/* BLOCK 1 */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <img
                src="../images/img-3770.webp"
                alt=""
                className="rounded-2xl"
              />
            </div>

            <div className="max-w-xl self-end">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Vårt erbjudande
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                Vi levererar smarta digitala lösningar som ger effekt i våra
                kunders verksamhet nu och i framtiden. Med en kombination av
                strategi och innovation skapar vi långsiktigt värde i er
                organisation och hjälper er att uppfylla er vision. Vår expertis
                ligger inom e-handel, webblösningar, system- och applösningar
                och digital marknadsföring. Läs mer om vårt erbjudande
              </p>

              <a
                href=""
                className="inline-flex items-center rounded-full bg-[#00ffb3] px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Läs mer om vårt erbjudande
              </a>
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="grid grid-cols-2 gap-10">
            <div className="max-w-xl self-end">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Vill du jobba hos oss?
              </h2>

              <p className="mb-8 text-lg font-semibold leading-7 text-white">
                På Toxic har vi alla en sak gemensamt - vi drivs av att skapa
                digitala kundupplevelser och utveckla smarta digitala lösningar
                som verkligen används. En stor anledning till att vi lyckas med
                det är att vi har byggt en stark värdegrund att stå på. Vi trivs
                med varandra. Vi har roligt på jobbet och vi har en bra balans
                mellan jobb och privatliv.
              </p>

              <a
                href=""
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition hover:opacity-90"
              >
                Se våra lediga tjänster
              </a>
            </div>

            <div>
              <img
                src="../images/img-3770.webp"
                alt=""
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* HISTORIA */}
        <div className="my-32">
          <h2 className="text-2xl text-white font-bold mb-6">Vår historia</h2>

          <div className="grid grid-cols-2 gap-10">
            <p className="text-lg font-semibold leading-7 text-white">
              Toxic grundades 1996 i hjärtat av Småland av Kalle Ekstrand, som
              idag arbetar som försäljningschef på bolaget. Vi bär än i dag med
              oss entreprenörsandan från de småländska skogarna men finns i dag
              etablerade i Jönköping, Borås, Göteborg och Anderstorp. Vi har
              över 25 års erfarenhet i branschen och över 300 nöjda kunder.
            </p>

            <p className="text-lg font-semibold leading-7 text-white">
              Vår målsättning är att vara den byrå som alla kunder vill jobba
              med och som alla medarbetare vill jobba på. För att nå visionen
              ser vi till att alla medarbetare får rätt förutsättningar att
              utvecklas och att våra kunder erbjuds främsta kompetens.
            </p>
          </div>
        </div>
      </section>

      <ContactCardsSection />
      <ContactFormSection />
    </>
  );
};

export default OmOss;
