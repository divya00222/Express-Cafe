import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import TrainingPage from "./pages/TrainingPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useEffect } from "react";

// Synchronous scroll alignment on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream text-espresso selection:bg-caramel/30 selection:text-espresso">
        {/* Navigation Header */}
        <Navbar />

        {/* Core Screen Views */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Multi-Column Footer */}
        <Footer />

        {/* Dynamic Scroll to Top Action Button */}
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}
