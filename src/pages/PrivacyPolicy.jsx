import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-24 pt-32 sm:px-6 sm:pt-36">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Integritetspolicy
          </h1>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
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
            <span className="text-primary font-bold">
              kontakt@relinc.se
            </span>
          </p>

          <p>
            Denna webbplats kan använda tjänster från tredje part, exempelvis
            reCAPTCHA, vilket innebär att Googles integritetspolicy och
            användarvillkor gäller.
          </p>
        </motion.div>

        {/* FOOTER */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center text-sm text-white/60"
        >
          Genom att använda vår webbplats godkänner du denna integritetspolicy.
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;