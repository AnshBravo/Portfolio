import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
// Replace with your actual project cover image import
import organizlyCoverImg from "../assets/projects cover images/Organizly.png";

const OrganizlyPage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

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
        <h1 className="font-bodoni text-xl md:text-2xl uppercase tracking-tighter">
          Organizly
        </h1>
        <div className="w-10" /> {/* Spacer */}
      </nav>

      {/* 2. HERO SECTION - SPLIT */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 lg:px-20 min-h-[90vh] flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Description & Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:w-1/3 space-y-8"
        >
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
              Collaborative Workspace // Real-Time Systems
            </p>
            <h2 className="font-bodoni text-4xl lg:text-5xl uppercase leading-tight">
              AI Kanban <br /> Workspace
            </h2>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              An AI-powered, real-time Kanban management platform engineered
              with multi-tenant board authorization, drag-and-drop fractional
              positioning, and Socket.IO synchronization.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://organizly-demo.example.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Live Preview ↗
            </a>
            <a
              href="https://github.com/yourusername/organizly"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-white/30 px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:border-white transition-all text-white/70 hover:text-white"
            >
              Source Code ↗
            </a>
          </div>
        </motion.div>

        {/* Right: Cover Image */}
        <motion.div
          style={{ scale: imageScale }}
          className="md:w-2/3 h-[500px] md:h-[600px] overflow-hidden rounded-2xl border border-white/10"
        >
          <img
            src={organizlyCoverImg}
            alt="Organizly Workspace Preview"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* 3. TECHNICAL DEEP DIVE */}
      <section className="px-6 md:px-20 py-32 space-y-32">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <h3 className="font-bodoni text-3xl uppercase tracking-widest italic">
            System Engineering
          </h3>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
            Organizly combines PostgreSQL relational query modeling with
            low-latency WebSockets for instantaneous task coordination. It
            implements fractional indexing algorithms to allow $O(1)$ reordering
            of board cards during drag-and-drop operations without requiring
            full-array index recalculations.
          </p>
        </motion.div>

        {/* Key Engineering Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div className="h-[400px] bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center p-8 space-y-4 font-mono text-xs text-white/70">
            <div className="text-white/40 uppercase tracking-widest text-[10px]">
              // Core Technical Stack & Architecture
            </div>
            <div className="border-b border-white/10 pb-2">
              Database: PostgreSQL (Optimized Relational Joins & Indexes)
            </div>
            <div className="border-b border-white/10 pb-2">
              Real-time Engine: Socket.IO State Synchronization
            </div>
            <div className="border-b border-white/10 pb-2">
              Algorithm: Fractional Positioning for $O(1)$ Drag-and-Drop
            </div>
            <div className="border-b border-white/10 pb-2">
              AI Integration: Gemini API (Task & Subtask Generation)
            </div>
            <div>Security: Granular RBAC Middleware & Token Verification</div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bodoni text-2xl uppercase tracking-widest">
              Real-Time State & AI Intelligence
            </h4>
            <p className="text-sm text-white/50 leading-loose">
              Equipped with explicit RBAC permission checks, an activity audit
              log, calendar views, and a global command palette. Gemini API
              integration powers automated task decomposition, subtask
              generation, and sprint risk assessment for seamless project
              tracking.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. FOOTER / CTA */}
      <footer className="px-6 py-32 border-t border-white/10 bg-[#050505]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
          <h2 className="font-bodoni text-5xl md:text-7xl uppercase tracking-tighter">
            Ready to Build?
          </h2>

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

export default OrganizlyPage;
