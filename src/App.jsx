import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // Added this line
import Navbar from "./components/Navbar";
import HeroSection from './components/Herosection';
import Skills from './components/Skillssection';
import Projects from './components/Projects';
import Contact from './components/Contactme';
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <AnimatePresence mode="wait"> {/* Added mode="wait" for a smoother transition */}
        {loading ? (
          <Preloader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <HeroSection />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;