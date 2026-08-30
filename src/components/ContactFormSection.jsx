import { useLayoutEffect, useRef, useState } from "react";

import { ArrowRight, LoaderCircle, X } from "lucide-react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const options = [
  "Jag vill boka ett möte eller begära offert",
  "Jag behöver hjälp med webb och digitala lösningar",
  "Jag behöver hjälp med logotyp och grafisk profil",
  "Jag behöver hjälp med marknadsföringsmaterial eller bildproduktion",
  "Annat ärende",
];

const FormLinesIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 90 90"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 70L25 45M28 78L38 50M48 82L48 52M68 78L58 50M84 68L68 45"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const ContactFormSection = ({
  endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const title = titleRef.current;
      const form = formRef.current;

      gsap.set(title, {
        opacity: 0,
        y: 50,
      });

      gsap.set(form, {
        opacity: 0,
        y: 60,
      });

      gsap.set(section, {
        visibility: "visible",
      });

      const animateSection = () => {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .to(title, {
            opacity: 1,
            y: 0,
            duration: 1,
          })
          .to(
            form,
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
            },
            "-=0.55",
          );
      };

      const rect = section.getBoundingClientRect();

      const isAlreadyVisible =
        rect.top < window.innerHeight && rect.bottom > 0;

      if (isAlreadyVisible) {
        animateSection();
      } else {
        ScrollTrigger.create({
          trigger: section,
          start: "top 92%",
          once: true,
          onEnter: animateSection,
        });
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleOption = (option) => {
    setSelectedOptions((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );

    setMessage("");
  };

  const closePopup = () => {
    setMessage("");
    setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    if (formData.get("website")) {
      form.reset();
      setSelectedOptions([]);
      setStatus("success");
      setMessage("Tack! Ditt meddelande är skickat.");
      return;
    }

    if (selectedOptions.length === 0) {
      setStatus("error");
      setMessage("Välj minst ett alternativ under hur vi kan hjälpa dig.");
      return;
    }

    if (!endpoint) {
      setStatus("error");
      setMessage(
        "Formuläret är inte anslutet ännu. Lägg till VITE_CONTACT_FORM_ENDPOINT i miljövariablerna.",
      );
      return;
    }

    setStatus("submitting");
    setMessage("");

    const payload = {
      email: formData.get("email"),
      company: formData.get("company"),
      services: selectedOptions,
      message: formData.get("message"),
      privacyAccepted: formData.get("privacy") === "on",
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`,
        );
      }

      form.reset();
      setSelectedOptions([]);
      setStatus("success");
      setMessage(
        "Tack! Ditt meddelande är skickat. Vi återkommer så snart vi kan.",
      );
    } catch {
      setStatus("error");
      setMessage(
        "Det gick inte att skicka meddelandet. Försök igen eller kontakta oss direkt via e-post.",
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="invisible py-20 md:py-28"
    >
      <div className="relative container px-4 sm:px-6 lg:px-4">
        <div className="relative mx-auto max-w-2xl">
          <h2
            ref={titleRef}
            className="mb-8 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Starta din resa <br /> med Relinc
          </h2>

          <form
            ref={formRef}
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-base font-bold text-white sm:text-lg"
              >
                E-post*
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="h-12 w-full rounded border border-white bg-transparent px-4 text-white outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="contact-company"
                className="mb-2 block text-base font-bold text-white sm:text-lg"
              >
                Företagsnamn*
              </label>

              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                required
                className="h-12 w-full rounded border border-white bg-transparent px-4 text-white outline-none transition focus:border-primary"
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-base font-bold text-white sm:text-lg">
                Hur kan vi hjälpa dig?*
              </legend>

              <div className="space-y-2">
                {options.map((option, index) => {
                  const id = `contact-option-${index}`;

                  return (
                    <label
                      htmlFor={id}
                      key={option}
                      className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-white sm:text-base"
                    >
                      <input
                        id={id}
                        name="services"
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => toggleOption(option)}
                        className="h-5 w-5 shrink-0 rounded border border-white bg-transparent accent-primary"
                      />

                      {option}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-base font-bold text-white sm:text-lg"
              >
                Meddelande*
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                className="h-40 w-full resize-none rounded border border-white bg-transparent p-4 text-white outline-none transition focus:border-primary"
              />
            </div>

            <div
              className="absolute -left-[9999px]"
              aria-hidden="true"
            >
              <label htmlFor="contact-website">Webbplats</label>

              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <label className="flex items-start gap-3 pt-2 text-sm font-semibold text-white sm:text-base">
              <input
                name="privacy"
                type="checkbox"
                required
                className="mt-1 h-5 w-5 shrink-0 rounded border border-white bg-transparent accent-primary"
              />

              <span>
                Jag godkänner Relincs{" "}
                <Link
                  to="/privacy-policy"
                  className="text-primary underline"
                >
                  integritetspolicy
                </Link>
                .*
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-base font-bold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  Skickar
                  <LoaderCircle
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>
                  Skicka
                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </>
              )}
            </button>
          </form>

          <FormLinesIcon className="absolute -bottom-2 -right-24 hidden h-24 w-24 text-primary md:block" />
        </div>
      </div>

      {message && (status === "success" || status === "error") && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-status-title"
        >
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#202020] p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-primary hover:text-primary"
              aria-label="Stäng"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${
                status === "success"
                  ? "bg-primary/10 text-primary"
                  : "bg-red-400/10 text-red-300"
              }`}
            >
              {status === "success" ? (
                <span className="text-2xl font-bold">✓</span>
              ) : (
                <span className="text-2xl font-bold">!</span>
              )}
            </div>

            <h3
              id="contact-status-title"
              className="mb-3 pr-10 text-2xl font-bold text-white sm:text-3xl"
            >
              {status === "success"
                ? "Tack för ditt meddelande!"
                : "Något gick fel"}
            </h3>

            <p className="mb-6 leading-7 text-white/70">
              {message}
            </p>

            <button
              type="button"
              onClick={closePopup}
              className="inline-flex rounded-full bg-secondary px-5 py-2.5 font-bold text-black transition hover:opacity-90"
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </section>
  );
};