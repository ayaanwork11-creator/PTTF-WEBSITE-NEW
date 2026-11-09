import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustRibbon } from './components/TrustRibbon';
import { ServicesGrid } from './components/ServicesGrid';
import { MetrologyTelemetry } from './components/MetrologyTelemetry';
import { Footer } from './components/Footer';
import { TextilesApparelPage } from './pages/TextilesApparelPage';
import { LeatherFootwearPage } from './pages/LeatherFootwearPage';
import { PetroleumTestingPage } from './pages/PetroleumTestingPage';
import { PPETestingPage } from './pages/PPETestingPage';
import { EnvironmentalTestingPage } from './pages/EnvironmentalTestingPage';
import { InspectionVerificationPage } from './pages/InspectionVerificationPage';
import { AboutUsPage } from './pages/AboutUsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const HomePage = () => (
  <>
    <Hero />
    <TrustRibbon />
    <ServicesGrid />
    <MetrologyTelemetry />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-surface min-h-screen">
        <Navbar />
        <main className="relative pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/textile-testing" element={<TextilesApparelPage />} />
            <Route path="/services/textiles-apparel" element={<TextilesApparelPage />} />
            <Route path="/services/leather-footwear" element={<LeatherFootwearPage />} />
            <Route path="/services/leather-footwear-testing" element={<LeatherFootwearPage />} />
            <Route path="/services/petroleum-testing" element={<PetroleumTestingPage />} />
            <Route path="/services/petroleum" element={<PetroleumTestingPage />} />
            <Route path="/services/ppe-testing" element={<PPETestingPage />} />
            <Route path="/services/ppe" element={<PPETestingPage />} />
            <Route path="/services/environmental-testing" element={<EnvironmentalTestingPage />} />
            <Route path="/services/environmental" element={<EnvironmentalTestingPage />} />
            <Route path="/services/inspection-verification" element={<InspectionVerificationPage />} />
            <Route path="/services/inspection" element={<InspectionVerificationPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/services/:serviceSlug" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
