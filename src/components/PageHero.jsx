export const PageHero = ({ title, subtitle, image, ctaText, ctaLink }) => {
  return (
    <section
      className="relative h-[60vh] pt-32 pb-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative container flex h-full flex-col items-start justify-end gap-6 z-10">
        <div className="border-b-4 border-primary pb-4">
          <h1 className="text-[70px] font-bold text-white leading-none">
            {title}
          </h1>
        </div>

        {subtitle && (
          <p className="max-w-2xl text-lg font-semibold text-white">
            {subtitle}
          </p>
        )}
        <a
          href={ctaLink}
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-lg font-semibold text-black transition hover:bg-secondary xl:inline-flex"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};
