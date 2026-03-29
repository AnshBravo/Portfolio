import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from './components/Herosection';
import Skills from './components/Skillssection';
import Projects from './components/Projects';
import Contact from './components/Contactme';
import Preloader from "./components/preloader";
import MemoryGame from './components/MemoryGame';

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
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-col justify-center items-center m-4'
      >
        <button 
          onClick={handleClick} 
          className='px-6 py-2 bg-black border border-white w-40 mb-8 text-white font-bold rounded-full font-redrose transition-all duration-300 cursor-pointer'
        >
          {playGame ? 'Hide Game' : 'Play A Game'}
        </button>

        <AnimatePresence mode="wait">
          {playGame && (
            <motion.div
              key="memory-game-container"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ 
                duration: 0.4, 
                type: "spring", 
                stiffness: 200, 
                damping: 20 
              }}
              className="w-full flex justify-center"
            >
              <MemoryGame />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
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