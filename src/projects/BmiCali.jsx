import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import bmiImg from "../assets/projects cover images/Black & White Minimalist Business Logo.png";

const BmiPage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax and fade effects for scroll storytelling
  const titleY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 0.05]);

  return (
    <div className="min-h-screen bg-black text-white font-redrose selection:bg-white selection:text-black">
      
      {/* 1. TOP NAV */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-8 mix-blend-difference">
        <button 
          onClick={() => navigate("/")} 
          className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-zinc-400 transition-colors cursor-pointer"
        >
          [ Back ]
        </button>
        <h1 className="font-bodoni text-xl md:text-2xl uppercase tracking-tighter">BMI Architecture</h1>
        <div className="w-10" />
      </nav>

      {/* 2. HERO SECTION - SPLIT LAYOUT */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 lg:px-20 min-h-[90vh] flex flex-col md:flex-row gap-12 items-center">
        {/* Left: Description & Link */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 lg:w-1/3 space-y-8"
        >
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Utility / Vanilla JS Origins</p>
            <h2 className="font-bodoni text-5xl lg:text-6xl uppercase leading-[0.9]">Function <br/> Meets Form.</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Originally built as a Vanilla JavaScript utility, this BMI calculator was refined into a premium interface that highlights usability and clear user feedback.
            </p>
          </div>
          
          <a 
            href="https://bmicali.netlify.app" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border border-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Live Demo ↗
          </a>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 lg:w-2/3 aspect-video md:aspect-auto md:h-[600px] overflow-hidden rounded-sm border border-white/5 flex items-center justify-center bg-[#050505]"
        >
          <img src={bmiImg} alt="BMI Calculator Preview" className="w-full h-full object-contain p-10 md:p-20" />
        </motion.div>
      </section>

      {/* 3. THE STORY - SCROLL ANIMATED */}
      <section className="relative px-6 md:px-20 py-40 overflow-hidden">
        {/* Background Decorative Text */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 flex items-center justify-center text-[20vw] font-black uppercase pointer-events-none select-none"
        >
          Logic
        </motion.div>

        <motion.div 
          style={{ y: titleY }}
          className="max-w-3xl mx-auto space-y-20 relative z-10"
        >
          <div className="space-y-6 text-center">
            <h3 className="font-bodoni text-3xl uppercase italic tracking-widest">The Narrative</h3>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              This project represents an early deep dive into DOM manipulation and state management. Transitioning it into my current portfolio required a complete visual overhaul to align with a refined frontend brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/5">
            <div className="space-y-4">
              <h4 className="font-bodoni text-xl uppercase tracking-widest">The Challenge</h4>
              <p className="text-sm text-white/40 leading-loose">
                In Vanilla JS, the challenge was handling clean data validation and ensuring the UI updated instantly without page refreshes. It was a lesson in building lean, performant code.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bodoni text-xl uppercase tracking-widest">The Evolution</h4>
              <p className="text-sm text-white/40 leading-loose">
                What started as a 20-line script evolved into a study of white space, typography, and minimalist design. It proves that the "how" matters as much as the "what."
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. CTA / OTHER PROJECTS */}
      <footer className="py-40 px-6 flex flex-col items-center justify-center text-center space-y-16 border-t border-white/5">
        <h2 className="font-bodoni text-6xl md:text-8xl uppercase tracking-tighter">View Others</h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link 
            to="/project/kaizen-ai" 
            className="px-16 py-5 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Kaizen AI
          </Link>
          <Link 
            to="/project/trip-nomad" 
            className="px-16 py-5 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all"
          >
            Trip Nomad
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BmiPage;