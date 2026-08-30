import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoaderScreen } from "./components/LoaderScreen";
import Layout from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OmOss from "./pages/OmOss";
import Webbredo from "./pages/Webbredo";
import Kontakt from "./pages/Kontakt";

// Utveckling
import Webbdesign from "./pages/services/Utveckling/Webbdesign";
import SEOOptimering from "./pages/services/Utveckling/SEOOptimering";
import Webbapplikationer from "./pages/services/Utveckling/Webbapplikationer";
import MobilAnpassning from "./pages/services/Utveckling/MobilAnpassning";
import Sakerhet from "./pages/services/Utveckling/Sakerhet";

// Grafisk
import LogotypGrafiskProfil from "./pages/services/Grafisk/LogotypGrafiskProfil";
import Marknadsforingsmaterial from "./pages/services/Grafisk/Marknadsforingsmaterial";
import Bildproduktion from "./pages/services/Grafisk/Bildproduktion";

// Företagsprodukter
import Arbetsklader from "./pages/services/Företagsprodukter/Arbetsklader";
import Accessoarer from "./pages/services/Företagsprodukter/Accessoarer";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <LoaderScreen
        onComplete={() => {
          setLoading(false);
        }}
      />
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/hem" element={<Home />} />

          {/* Main pages */}
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/webbredo" element={<Webbredo />} />
          <Route path="/kontakta-oss" element={<Kontakt />} />

          {/* Utveckling */}
          <Route path="/webbdesign" element={<Webbdesign />} />
          <Route path="/seo-optimering" element={<SEOOptimering />} />
          <Route path="/webbapplikationer" element={<Webbapplikationer />} />
          <Route path="/mobil-anpassning" element={<MobilAnpassning />} />
          <Route path="/sakerhet" element={<Sakerhet />} />

          {/* Grafisk */}
          <Route
            path="/LogotypGrafiskProfil"
            element={<LogotypGrafiskProfil />}
          />

          <Route
            path="/Marknadsforingsmaterial"
            element={<Marknadsforingsmaterial />}
          />

          <Route path="/bildproduktion" element={<Bildproduktion />} />

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