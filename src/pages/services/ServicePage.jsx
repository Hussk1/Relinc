import { PageHero } from "../../components/PageHero";

const ServicePage = ({
  title,
  subtitle,
  image,
  children,
  ctaText,
  ctaLink,
}) => {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        image={image}
        ctaText={ctaText}
        ctaLink={ctaLink}
      />

      <section className="container px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20 lg:px-4">
        <div className="max-w-3xl">
          {children}
        </div>
      </section>
    </>
  );
};

export default ServicePage;