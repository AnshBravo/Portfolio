import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import kaizenImg from "../assets/projects cover images/kaizenai.png";

const KaizenAI = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Scroll animations for the story section
  const textY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

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
        <h1 className="font-bodoni text-xl md:text-2xl uppercase tracking-tighter">Kaizen AI</h1>
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
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">AI / Productivity Engine</p>
            <h2 className="font-bodoni text-5xl lg:text-6xl uppercase leading-[0.9]">1% Better <br/> Every Day.</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Kaizen AI is a resolution-tracking ecosystem that uses machine learning to decompose massive goals into micro-habits. Built to eliminate the friction of starting.
            </p>
          </div>
          
          <a 
            href="https://aikaizen.netlify.app" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border border-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Launch Prototype ↗
          </a>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 lg:w-2/3 h-[450px] md:h-[650px] overflow-hidden rounded-sm border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <img src={kaizenImg} alt="Kaizen AI Interface" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* 3. THE STORY - SCROLL ANIMATED */}
      <section className="px-6 md:px-20 py-40 bg-[#050505]">
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-3xl mx-auto space-y-24"
        >
          <div className="space-y-6">
            <h3 className="font-bodoni text-3xl uppercase italic tracking-widest text-center">The Narrative</h3>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center font-light">
              Most resolutions fail because they are too broad. I built Kaizen AI to act as a digital architect for personal growth—stripping away the noise and focusing on the next immediate step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-white/5">
            <div className="space-y-4">
              <h4 className="font-bodoni text-xl uppercase tracking-widest">The Challenge</h4>
              <p className="text-sm text-white/40 leading-loose">
                Balancing complex AI data processing with a "Dark Vibe" aesthetic that doesn't feel cluttered. I had to ensure the UI remained dead-simple while the backend handled habit-loop logic.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bodoni text-xl uppercase tracking-widest">The Outcome</h4>
              <p className="text-sm text-white/40 leading-loose">
                A high-performance React application that utilizes Framer Motion for organic transitions, making the act of completing a task feel as rewarding as the goal itself.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. CTA / OTHER PROJECTS */}
      <footer className="py-40 px-6 flex flex-col items-center justify-center text-center space-y-16 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          <h2 className="font-bodoni text-6xl md:text-8xl uppercase tracking-tighter">Next Chapter</h2>
          <p className="text-white/30 uppercase tracking-[0.5em] text-[10px]">What shall we build together?</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link 
            to="/project/trip-nomad" 
            className="px-16 py-5 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            View Trip Nomad
          </Link>
          <Link 
            to="/#project" 
            className="px-16 py-5 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all"
          >
            All Projects
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default KaizenAI;