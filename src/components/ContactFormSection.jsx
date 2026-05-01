import { ArrowRight } from "lucide-react";

const options = [
  "Jag vill boka möte eller begära offert",
  "Jag vill söka jobb/praktik hos er",
  "Annat ärende",
];

const FormLinesIcon = ({ className = "" }) => (
  <svg viewBox="0 0 90 90" fill="none" className={className}>
    <path
      d="M10 70L25 45M28 78L38 50M48 82L48 52M68 78L58 50M84 68L68 45"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const ContactFormSection = () => {
  return (
    <section className="bg-[#171717] py-20 md:py-28">
      <div className="container">
        <div className="relative mx-auto max-w-2xl">
          <h2 className="mb-8 max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Låt oss skapa
            <br />
            magi tillsammans!
          </h2>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-lg font-bold text-white">
                E-post*
              </label>
              <input
                type="email"
                className="h-12 w-full rounded border border-white bg-transparent px-4 text-white outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-bold text-white">
                Företagsnamn*
              </label>
              <input
                type="text"
                className="h-12 w-full rounded border border-white bg-transparent px-4 text-white outline-none focus:border-primary"
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-lg font-bold text-white">
                Hur kan vi hjälpa dig?*
              </legend>

              <div className="space-y-1">
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 text-base font-semibold text-white"
                  >
                    <input
                      type="checkbox"
                      className="h-5 w-5 appearance-none rounded border border-white bg-transparent checked:border-primary checked:bg-primary"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label className="mb-2 block text-lg font-bold text-white">
                Meddelande*
              </label>
              <textarea className="h-40 w-full resize-none rounded border border-white bg-transparent p-4 text-white outline-none focus:border-primary" />
            </div>

            <label className="flex items-center gap-4 pt-2 text-base font-semibold text-white">
              <input
                type="checkbox"
                className="h-5 w-5 appearance-none rounded border border-white bg-transparent checked:border-primary checked:bg-primary"
              />

              <span>
                Jag godkänner Toxics{" "}
                <a href="" className="text-primary underline">
                  integritetspolicy
                </a>
                .*
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-base font-bold text-black transition hover:bg-secondary"
            >
              Skicka
            </button>
          </form>

          <FormLinesIcon className="absolute -bottom-2 -right-24 hidden h-24 w-24 text-primary md:block" />
        </div>
      </div>
    </section>
  );
};