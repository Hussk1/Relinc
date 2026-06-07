import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

export const PageHero = ({
  title,
  subtitle,
  image,
  ctaText,
  ctaLink,
}) => {
  return (
    <section
      className="relative min-h-[520px] bg-cover bg-center pt-28 pb-14 sm:min-h-[560px] md:h-[60vh] md:pt-32 md:pb-16"
      style={{
        backgroundImage: `url(${imagePath(image)})`,
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 container flex h-full flex-col items-start justify-end gap-6"
      >
        <div className="border-b-4 border-primary pb-4">
          <h1 className="text-5xl font-bold leading-none text-white sm:text-6xl lg:text-[70px]">
            {title}
          </h1>
        </div>

        {subtitle && (
          <p className="max-w-2xl text-base font-semibold leading-7 text-white sm:text-lg">
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="inline-flex rounded-full bg-secondary px-5 py-2.5 text-base font-semibold text-black transition hover:opacity-90 sm:text-lg"
          >
            {ctaText}
          </Link>
        )}
      </motion.div>
    </section>
  );
};