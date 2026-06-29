import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoaderScreen } from "./components/LoaderScreen";
import Layout from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OmOss from "./pages/OmOss";
import StartaForetag from "./pages/StartaForetag";
import Kontakt from "./pages/Kontakt";

// Utveckling
import Webbdesign from "./pages/services/Utveckling/Webbdesign";
import SEOOptimering from "./pages/services/Utveckling/SEOOptimering";
import Webbapplikationer from "./pages/services/Utveckling/Webbapplikationer";
import MobilAnpassning from "./pages/services/Utveckling/MobilAnpassning";
import Sakerhet from "./pages/services/Utveckling/Sakerhet";

// Grafisk
import Logotypdesign from "./pages/services/Grafisk/Logotypdesign";
import BannersAnnonser from "./pages/services/Grafisk/BannersAnnonser";
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

  if (loading) {
    return <LoaderScreen />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {/* Main pages */}
          <Route path="/hem" element={<Home />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/starta-foretag" element={<StartaForetag />} />
          <Route path="/kontakta-oss" element={<Kontakt />} />

          {/* Utveckling */}
          <Route path="/webbdesign" element={<Webbdesign />} />
          <Route path="/seo-optimering" element={<SEOOptimering />} />
          <Route path="/webbapplikationer" element={<Webbapplikationer />} />
          <Route path="/mobil-anpassning" element={<MobilAnpassning />} />
          <Route path="/sakerhet" element={<Sakerhet />} />

          {/* Grafisk */}
          <Route path="/logotypdesign" element={<Logotypdesign />} />
          <Route path="/banners-annonser" element={<BannersAnnonser />} />
          <Route path="/bildredigering" element={<Bildredigering />} />

          {/* Företagsprodukter */}
          <Route path="/arbetsklader" element={<Arbetsklader />} />
          <Route path="/accessoarer" element={<Accessoarer />} />

          {/* Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
