import { useEffect } from "react";
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
import TripNomadPage from "./projects/TripNomad";
import ZapPage from "./projects/zap";
import OrganizlyPage from "./projects/kanbanBoard";

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
  return (
    <Router>
      <RouteEffects />
      <main className="min-h-screen overflow-x-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Navigate to="/#project" replace />} />
          <Route path="/projects/tripnomad" element={<TripNomadPage />} />
          <Route path="/projects/zap" element={<ZapPage />} />
          <Route path="/projects/organizly" element={<OrganizlyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
