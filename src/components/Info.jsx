import {
  ArrowUpRight,
  BadgeDollarSign,
  ShieldCheck,
  Tag,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

export const Info = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-[#f7f1e7] py-20 sm:py-24 text-[#4d4036]">

      {/* Main block */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 bg-[rgba(255,251,245,0.75)] backdrop-blur-xl border border-[#eadfce] rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(185,157,120,0.12)] relative overflow-hidden"
      >
        {/* Atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 15% 20%, rgba(255,214,170,0.25) 0%, transparent 35%),
                radial-gradient(circle at 85% 15%, rgba(111,168,201,0.18) 0%, transparent 35%),
                radial-gradient(circle at 60% 80%, rgba(255,196,210,0.12) 0%, transparent 30%)
              `,
            }}
          />
        </div>

        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="space-y-6 relative z-10"
        >
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl leading-tight">
            We’re BIG On What <br />
            <span className="text-[#c3975d] italic">Drives You Forward</span>
          </h2>

          <p className="text-[#6f655d] max-w-md text-base sm:text-lg leading-relaxed">
            Experience premium car rentals designed for a refined Mediterranean
            lifestyle. Transparent pricing, flexible plans, and exceptional
            vehicles — all tailored for you.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.getElementById("cars");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 rounded-full border border-[#dccdbb] bg-[linear-gradient(135deg,#f7ecdc,#f3e2c6_45%,#e8cda7_75%,#f7ecdc)] px-6 py-3 text-[11px] font-medium text-[#9c7440] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-2px_6px_rgba(0,0,0,0.05),0_8px_20px_rgba(195,151,93,0.12)] transition-all duration-300 hover:border-[#c3975d] hover:text-[#5e4120] sm:text-sm"
          >
            View Rental Options <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 relative z-10">
          {[
            {
              icon: <BadgeDollarSign />,
              title: "Flexible Rental Plans",
              description:
                "Daily, weekly or monthly rentals tailored to your lifestyle.",
            },
            {
              icon: <ShieldCheck />,
              title: "Trusted Luxury Service",
              description:
                "Premium vehicles maintained to the highest standards.",
            },
            {
              icon: <Tag />,
              title: "Transparent Pricing",
              description: "Clear, upfront pricing with zero hidden surprises.",
            },
            {
              icon: <Wrench />,
              title: "24/7 Concierge Support",
              description: "Always available to ensure a seamless experience.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -6 }}
              className="space-y-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e7d8c7] bg-[#fffaf4] text-[#6fa8c9] shadow-sm transition hover:shadow-md">
                {item.icon}
              </div>
              <h4 className="font-semibold text-base sm:text-lg text-[#4d4036]">
                {item.title}
              </h4>
              <p className="text-[#8a7f74] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* STATS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 sm:mt-20 lg:mt-24 bg-[rgba(255,251,245,0.7)] backdrop-blur-xl border border-[#eadfce] rounded-[28px] lg:rounded-[32px] mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center shadow-[0_20px_60px_rgba(185,157,120,0.10)] relative overflow-hidden"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 0%, rgba(255,214,170,0.2) 0%, transparent 40%),
                radial-gradient(circle at 100% 100%, rgba(111,168,201,0.15) 0%, transparent 40%)
              `,
            }}
          />
        </div>

        {[
          { value: "100+", label: "Cars Available" },
          { value: "10K+", label: "Happy Clients" },
          { value: "4.9★", label: "Rating" },
          { value: "10+", label: "Years Experience" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            className="relative z-10"
          >
            <div className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#c3975d]">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-[#7c7268] mt-2 tracking-[0.2em] uppercase">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
