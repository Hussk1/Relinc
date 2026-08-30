import {
  useLayoutEffect,
  useRef,
} from "react";

import { gsap } from "gsap";

export const PrivacyPolicy = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * INITIAL STATE
       */
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(footerRef.current, {
        opacity: 0,
        y: 25,
      });

      /*
       * Förhindrar flash innan GSAP är redo
       */
      gsap.set(contentRef.current, {
        visibility: "visible",
      });

      /*
       * ANIMATION
       */
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.1,
        })
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
          },
          "-=0.6",
        )
        .to(
          footerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-4 py-24 pt-32 sm:px-6 sm:pt-36"
    >
      <div
        ref={contentRef}
        className="invisible mx-auto max-w-4xl"
      >
        {/* HEADER */}

        <div className="mb-12">
          <h1
            ref={titleRef}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Integritetspolicy
          </h1>
        </div>

        {/* TEXT */}

        <div
          ref={textRef}
          className="space-y-6 text-lg font-semibold leading-7 text-white/80"
        >
          <p>
            Relinc hanterar personuppgifter i enlighet med GDPR – EU:s
            dataskyddsförordning. Det innebär att alla personuppgifter som vi
            behandlar hanteras enligt gällande lagstiftning och med stor respekt
            för din integritet.
          </p>

          <p>
            Vi behandlar personuppgifter i syfte att kunna kommunicera med
            kunder, potentiella kunder och samarbetspartners. Detta kan inkludera
            kontakt via e-post, offertförfrågningar, projektinformation samt
            annan relevant kommunikation kopplad till våra tjänster.
          </p>

          <p>
            Den rättsliga grunden för vår behandling av personuppgifter är i
            första hand avtal eller intresseavvägning, där vårt berättigade
            intresse är att kunna erbjuda och utveckla våra tjänster. I de fall
            du kontaktar oss eller ingår ett samarbete med oss behandlas dina
            uppgifter i den utsträckning som krävs för att fullfölja detta.
          </p>

          <p>
            Relinc delar inte, säljer eller överför personuppgifter till tredje
            part, om det inte krävs för att kunna leverera våra tjänster eller om
            vi är skyldiga enligt lag.
          </p>

          <p>
            Vi sparar personuppgifter endast så länge det är nödvändigt för det
            syfte de samlades in för, eller så länge vi är skyldiga enligt lag.
          </p>

          <p>
            Du har rätt att begära tillgång till de personuppgifter vi har om dig,
            begära rättelse eller radering samt invända mot behandling. Du kan
            när som helst kontakta oss för att utöva dina rättigheter.
          </p>

          <p>
            Vid frågor om hur vi hanterar personuppgifter är du välkommen att
            kontakta oss på:{" "}
            <span className="font-bold text-primary">
              kontakt@relinc.se
            </span>
          </p>

          <p>
            Denna webbplats kan använda tjänster från tredje part, exempelvis
            reCAPTCHA, vilket innebär att Googles integritetspolicy och
            användarvillkor gäller.
          </p>
        </div>

        {/* FOOTER */}

        <p
          ref={footerRef}
          className="mt-16 text-center text-sm text-white/60"
        >
          Genom att använda vår webbplats godkänner du denna integritetspolicy.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;