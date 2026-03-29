import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import projectImg from "../assets/projects cover images/Trip Nomad.png";

const TripNomadPage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Subtle parallax for the main image
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <div className="min-h-screen bg-black text-white font-redrose selection:bg-white selection:text-black">
      
      {/* 1. TOP NAV - FIXED */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-8 mix-blend-difference">
        <button 
          onClick={() => navigate(-1)} 
          className="text-[10px] font-black uppercase tracking-[0.4em] hover:opacity-50 transition-opacity cursor-pointer"
        >
          [ Back ]
        </button>
        <h1 className="font-bodoni text-xl md:text-2xl uppercase tracking-tighter">Trip Nomad</h1>
        <div className="w-10" /> {/* Spacer */}
      </nav>

      {/* 2. HERO SECTION - SPLIT */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 lg:px-20 min-h-[90vh] flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Description & Link */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:w-1/3 space-y-8"
        >
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Frontend / SaaS</p>
            <h2 className="font-bodoni text-4xl lg:text-5xl uppercase leading-tight">AI Guided <br/> Exploration</h2>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              A React-based travel discovery engine that translates user intent into tailored itineraries using AI-assisted prompts and responsive interface design.
            </p>
          </div>
          <a 
            href="https://tripnomad.netlify.app" 
            target="_blank" 
            className="inline-block border border-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Live Preview ↗
          </a>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          style={{ scale: imageScale }}
          className="md:w-2/3 h-[500px] md:h-[600px] overflow-hidden rounded-2xl border border-white/10"
        >
          <img src={projectImg} alt="Trip Nomad" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* 3. THE STORY - SCROLL ANIMATED */}
      <section className="px-6 md:px-20 py-32 space-y-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <h3 className="font-bodoni text-3xl uppercase tracking-widest italic">The Narrative</h3>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
            This project was developed to transform travel planning from a data-driven process into a structured yet intuitive experience. Trip Nomad uses the Gemini API to interpret user preferences and convert them into actionable itinerary suggestions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div className="h-[400px] bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center italic text-white/20">
            [ Interactive Demo Clip or Detail Image ]
          </div>
          <div className="space-y-6">
            <h4 className="font-bodoni text-2xl uppercase tracking-widest">Minimalist Logic</h4>
            <p className="text-sm text-white/50 leading-loose">
              The interface emphasizes performance and clarity, using a monochrome UI and Framer Motion transitions to keep interactions seamless across routes while preserving fast load behavior.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. FOOTER / CTA */}
      <footer className="px-6 py-32 border-t border-white/10 bg-[#050505]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
          <h2 className="font-bodoni text-5xl md:text-7xl uppercase tracking-tighter">Ready to Build?</h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <a 
              href="mailto:anshabravo@brand.com" 
              className="px-12 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-zinc-200 transition-colors"
            >
              Contact Me
            </a>
            <Link 
              to="/#project" 
              className="px-12 py-4 border border-white text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
            >
              Other Projects
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TripNomadPage;