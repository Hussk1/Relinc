import { PageHero } from "../../components/PageHero";

const ServicePage = ({ title, subtitle, image, children, ctaText, ctaLink }) => {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} image={image} ctaText={ctaText} ctaLink={ctaLink} />

      <section className="container py-20 text-white">
        <div className="max-w-3xl">
          {children}
        </div>
      </section>
    </>
  );
};

export default ServicePage;