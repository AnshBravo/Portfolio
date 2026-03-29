import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from './components/Herosection';
import Skills from './components/Skillssection';
import Projects from './components/Projects';
import Contact from './components/Contactme';
import Preloader from "./components/preloader";

// Import your new dedicated project pages
import TripNomadPage from './projects/TripNomad'; 
import KaizenAI from './projects/Kaizen';
import BmiPage from './projects/BmiCali';

function App() {
  const [loading, setLoading] = useState(true);
  const [playGame, setPlayGame] = useState(false)

  const handleClick = () => {
    setPlayGame(!playGame)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Created a Home component to keep your main page structure clean
  const Home = () => (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      
      <Contact />
    </>
  );

  return (
    <Router>
      <main className="min-h-screen overflow-x-hidden w-full">
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="loader" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Routes>
                {/* Main Portfolio Route */}
                <Route path="/" element={<Home />} />

                {/* Redirect legacy /projects path to the dedicated Trip Nomad route */}
                <Route path="/projects" element={<Navigate to="/projects/tripnomad" replace />} />

                {/* Dedicated Project Story Route */}
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