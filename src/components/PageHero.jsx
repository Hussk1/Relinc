import { Link } from "react-router-dom";

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
      className="relative min-h-[440px] bg-cover bg-center pb-10 pt-24 sm:min-h-[500px] sm:pb-12 sm:pt-28 md:h-[60vh] md:min-h-[560px] md:pb-16 md:pt-32"
      style={{
        backgroundImage: `url(${imagePath(image)})`,
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/60" />

      <div className="container relative z-10 flex h-full flex-col items-start justify-end gap-5 px-4 sm:gap-6 sm:px-6 lg:px-4">
        <div className="max-w-full border-b-4 border-primary pb-3 sm:pb-4">
          <h1 className="break-words text-4xl font-bold leading-none text-white sm:text-5xl md:text-6xl lg:text-[70px]">
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
            className="inline-flex max-w-full rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 sm:px-5 sm:text-base md:text-lg"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};