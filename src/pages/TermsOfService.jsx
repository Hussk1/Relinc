import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

const Section = ({ title, children, index }) => (
  <motion.section
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    custom={index}
    className="rounded-[28px] border border-[#eadfce] bg-[rgba(255,251,245,0.78)] p-6 shadow-[0_16px_40px_rgba(185,157,120,0.08)] backdrop-blur-xl sm:p-8"
  >
    <h2 className="font-['Playfair_Display'] text-2xl text-[#4d4036] sm:text-3xl">
      {title}
    </h2>
    <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#7c7268] sm:text-base">
      {children}
    </div>
  </motion.section>
);

export const TermsOfService = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f1e7] px-4 py-24 pt-32 text-[#4d4036] sm:px-6 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 18% 20%, rgba(255,214,170,0.22) 0%, transparent 34%),
            radial-gradient(circle at 82% 18%, rgba(111,168,201,0.14) 0%, transparent 34%),
            linear-gradient(180deg, #f9f5ee 0%, #f5ede3 50%, #efe4d3 100%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#c3975d] sm:text-sm">
            Legal
          </p>

          <h1 className="font-['Playfair_Display'] text-4xl leading-tight text-[#4d4036] sm:text-5xl lg:text-6xl">
            Terms of
            <span className="block italic text-[#6fa8c9]">Service</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#7c7268] sm:text-lg">
            These Terms of Service outline how VoosRent operates as a premium
            concierge and intermediary service for luxury and performance car
            rentals in Marbella.
          </p>
        </motion.div>

        <div className="space-y-6">
          <Section title="1. Our Service" index={1}>
            <p>
              VoosRent operates as a premium concierge and intermediary service,
              connecting clients with carefully selected luxury and performance
              car rental providers in Marbella.
            </p>
            <p>VoosRent does not own or operate any vehicles.</p>
          </Section>

          <Section title="2. Booking & Agreements" index={2}>
            <p>
              All bookings are subject to availability and confirmation by the
              rental provider.
            </p>
            <p>
              The rental agreement is entered directly between the client and
              the rental provider.
            </p>
            <p>VoosRent is not a party to any rental agreement.</p>
          </Section>

          <Section title="3. Pricing" index={3}>
            <p>
              Prices presented by VoosRent may include a service margin.
            </p>
            <p>
              Final rental terms, pricing, and deposit requirements are
              determined by the rental provider and may vary.
            </p>
          </Section>

          <Section title="4. Payments" index={4}>
            <p>
              All payments, deposits, and financial transactions are handled
              directly by the rental provider unless explicitly agreed
              otherwise.
            </p>
            <p>
              VoosRent is not responsible for payment processing or financial
              disputes.
            </p>
          </Section>

          <Section title="5. Responsibility & Liability" index={5}>
            <p>
              The rental provider is solely responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vehicle condition and availability</li>
              <li>Insurance coverage</li>
              <li>Security deposits</li>
              <li>
                Any incidents, damages, or disputes arising during the rental
                period
              </li>
            </ul>
            <p>
              VoosRent assumes no liability for any issues related to the rental
              experience.
            </p>
          </Section>

          <Section title="6. Availability" index={6}>
            <p>
              Vehicle availability is not guaranteed until confirmed by the
              rental provider.
            </p>
          </Section>

          <Section title="7. Cancellations & Modifications" index={7}>
            <p>
              All cancellations and booking modifications are subject to the
              rental provider’s policies.
            </p>
            <p>
              VoosRent will assist with communication but does not control these
              terms.
            </p>
          </Section>

          <Section title="8. Client Responsibilities" index={8}>
            <p>By using our service, the client agrees to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Hold a valid driver’s license</li>
              <li>Comply with all terms set by the rental provider</li>
            </ul>
          </Section>

          <Section title="9. Communication" index={9}>
            <p>
              By submitting a booking request, the client agrees to be
              contacted via WhatsApp, phone, or email.
            </p>
            <p>
              Communication is primarily handled via WhatsApp to ensure fast and
              efficient service.
            </p>
          </Section>

          <Section title="10. Changes to Terms" index={10}>
            <p>
              VoosRent reserves the right to update these Terms of Service at
              any time without prior notice.
            </p>
          </Section>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={11}
          className="mt-10 text-center text-sm text-[#8a7f74]"
        >
          By using our service, you agree to these Terms of Service.
        </motion.p>
      </div>
    </section>
  );
};

export default TermsOfService;