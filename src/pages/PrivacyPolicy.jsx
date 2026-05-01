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

export const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f1e7] px-4 py-24 pt-32 sm:pt-36 text-[#4d4036] sm:px-6">
      {/* Background */}
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
        {/* Header */}
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
            Privacy
            <span className="block italic text-[#6fa8c9]">Policy</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#7c7268] sm:text-lg">
            This Privacy Policy outlines how VoosRent collects, uses, and
            protects your personal information when you use our luxury car rental
            services in Marbella.
          </p>
        </motion.div>

        <div className="space-y-6">
          <Section title="1. Information We Collect" index={1}>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address (if provided)</li>
              <li>Booking preferences and details</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information" index={2}>
            <p>Your information is used to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Process and manage booking requests</li>
              <li>Provide personalized service and communication</li>
              <li>Connect you with suitable rental providers</li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information" index={3}>
            <p>
              To fulfill your request, we may share relevant information with
              trusted rental partners in Marbella.
            </p>
            <p>
              We do not sell or distribute your personal data to third parties
              for marketing purposes.
            </p>
          </Section>

          <Section title="4. Communication Consent" index={4}>
            <p>
              By submitting your information, you consent to being contacted by
              VoosRent via WhatsApp, phone, or email regarding your booking.
            </p>
          </Section>

          <Section title="5. Data Protection" index={5}>
            <p>
              We take appropriate measures to protect your personal information
              and ensure it is handled securely.
            </p>
          </Section>

          <Section title="6. Data Retention" index={6}>
            <p>
              We retain personal data only as long as necessary to provide our
              services and fulfill legal obligations.
            </p>
          </Section>

          <Section title="7. Your Rights (GDPR)" index={7}>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </Section>

          <Section title="8. Contact" index={8}>
            <p>For any privacy-related inquiries:</p>
            <p className="font-medium text-[#4d4036]">
              info@voosrent.com
            </p>
          </Section>
        </div>

        {/* Footer note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={9}
          className="mt-10 text-center text-sm text-[#8a7f74]"
        >
          By using our service, you agree to this Privacy Policy.
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;