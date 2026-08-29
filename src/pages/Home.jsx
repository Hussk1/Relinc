import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { HeroSection } from "../components/HeroSection";
import { TwoColumnBlock } from "../components/TwoColumnBlock";
import { PuffBlock } from "../components/PuffBlock";
import { TextImageBlock } from "../components/TextImageBlock";
import { ServiceHighlightSection } from "../components/ServiceHighlightSection";
import { WhyRelincSection } from "../components/WhyRelincSection";
import { ValuesSection } from "../components/ValuesSection";
import { ContactFormSection } from "../components/ContactFormSection";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo);

      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.scrollY - 90;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1b1b1b] [background-image:radial-gradient(circle_at_7%_6%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_9%,transparent_20%),radial-gradient(circle_at_78%_15%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_11%,transparent_25%),radial-gradient(circle_at_32%_27%,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_7%,transparent_17%),radial-gradient(circle_at_94%_39%,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_10%,transparent_23%),radial-gradient(circle_at_13%_48%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_61%_58%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.17)_8%,transparent_19%),radial-gradient(circle_at_20%_71%,rgba(0,0,0,0.33)_0%,rgba(0,0,0,0.15)_10%,transparent_22%),radial-gradient(circle_at_87%_82%,rgba(0,0,0,0.29)_0%,rgba(0,0,0,0.14)_12%,transparent_26%),radial-gradient(circle_at_38%_95%,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0.17)_9%,transparent_21%)] bg-no-repeat bg-[length:100%_100%]">
      <main>
        <HeroSection />
        <TwoColumnBlock />
        <PuffBlock />
        <TextImageBlock />
        <ServiceHighlightSection />
        <WhyRelincSection />
        <ValuesSection />
        <ContactFormSection />
      </main>
    </div>
  );
};
