import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoaderScreen } from "./components/LoaderScreen";
import Layout from "./components/Layout";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import OmOss from "./pages/OmOss";
import StartaForetag from "./pages/StartaForetag";

// Redovisning
import Radgivning from "./pages/services/Redovisning/Radgivning";
import Arsredovisning from "./pages/services/Redovisning/Arsredovisning";
import Bokforing from "./pages/services/Redovisning/Bokforing";
import Bokslut from "./pages/services/Redovisning/Bokslut";
import Deklaration from "./pages/services/Redovisning/Deklaration";
import Lonehantering from "./pages/services/Redovisning/Lonehantering";

// Utveckling
import Webbdesign from "./pages/services/Utveckling/Webbdesign";
import SEOOptimering from "./pages/services/Utveckling/SEOOptimering";
import Webbapplikationer from "./pages/services/Utveckling/Webbapplikationer";
import MobilAnpassning from "./pages/services/Utveckling/MobilAnpassning";
import Sakerhet from "./pages/services/Utveckling/Sakerhet";

// Grafisk
import Logotypdesign from "./pages/services/Grafisk/Logotypdesign";
import BannersAnnonser from "./pages/services/Grafisk/BannersAnnonser";
import Reklambilder from "./pages/services/Grafisk/Reklambilder";
import Affischer from "./pages/services/Grafisk/Affischer";
import Bildredigering from "./pages/services/Grafisk/Bildredigering";

// Företagsprodukter
import Arbetsklader from "./pages/services/Företagsprodukter/Arbetsklader";
import Accessoarer from "./pages/services/Företagsprodukter/Accessoarer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return <LoaderScreen />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/starta-foretag" element={<StartaForetag />} />

          {/* Redovisning */}
          <Route path="/radgivning" element={<Radgivning />} />
          <Route path="/arsredovisning" element={<Arsredovisning />} />
          <Route path="/bokforing" element={<Bokforing />} />
          <Route path="/bokforing" element={<Bokforing />} />
          <Route path="/bokslut" element={<Bokslut />} />
          <Route path="/deklaration" element={<Deklaration />} />
          <Route path="/lonehantering" element={<Lonehantering />} />

          {/* Utveckling */}
          <Route path="/webbdesign" element={<Webbdesign />} />
          <Route path="/seo-optimering" element={<SEOOptimering />} />
          <Route path="/webbapplikationer" element={<Webbapplikationer />} />
          <Route path="/mobil-anpassning" element={<MobilAnpassning />} />
          <Route path="/sakerhet" element={<Sakerhet />} />

          {/* Grafisk */}
          <Route path="/logotypdesign" element={<Logotypdesign />} />
          <Route path="/banners-annonser" element={<BannersAnnonser />} />
          <Route path="/reklambilder" element={<Reklambilder />} />
          <Route path="/affischer" element={<Affischer />} />
          <Route path="/bildredigering" element={<Bildredigering />} />

          {/* Företagsprodukter */}
          <Route path="/arbetsklader" element={<Arbetsklader />} />
          <Route path="/accessoarer" element={<Accessoarer />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
