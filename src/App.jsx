import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Skills from "./components/Skillssection";
import Projects from "./components/Projects";
import Contact from "./components/Contactme";
import Preloader from "./components/preloader";
import TripNomadPage from "./projects/TripNomad";
import KaizenAI from "./projects/Kaizen";
import BmiPage from "./projects/BmiCali";

const RouteEffects = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const timer = setTimeout(() => {
        const target = document.getElementById(targetId);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);

      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <>
    <Navbar />
    <HeroSection />
    <Skills />
    <Projects />
    <Contact />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <RouteEffects />
      <main className="min-h-screen overflow-x-clip">
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" />
          ) : (
            <motion.div
              key="app-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Navigate to="/projects/tripnomad" replace />} />
                <Route path="/projects/tripnomad" element={<TripNomadPage />} />
                <Route path="/projects/kaizen" element={<KaizenAI />} />
                <Route path="/projects/bmicali" element={<BmiPage />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </Router>
  );
}

export default App;
