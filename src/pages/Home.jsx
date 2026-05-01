import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";
import { TwoColumnBlock } from "../components/TwoColumnBlock";
import { PuffBlock } from "../components/PuffBlock";
import { TextImageBlock } from "../components/TextImageBlock";
import { ServiceHighlightSection } from "../components/ServiceHighlightSection";
import { KnowledgeSection } from "../components/KnowledgeSection";
import { WhyRelincSection } from "../components/WhyRelincSection";
import { ValuesSection  } from "../components/ValuesSection";
import { ContactCardsSection  } from "../components/ContactCardsSection";
import { ContactFormSection  } from "../components/ContactFormSection";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo);

      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-Background overflow-x-hidden">
      <main>
        <HeroSection />
        <TwoColumnBlock />
        <PuffBlock />
        <TextImageBlock />
        <ServiceHighlightSection />
        <KnowledgeSection />
        <WhyRelincSection />
        <ValuesSection  />
        <ContactCardsSection  />
        <ContactFormSection  />
      </main>
    </div>
  );
};