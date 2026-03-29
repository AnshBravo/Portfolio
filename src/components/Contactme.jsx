import { motion } from "framer-motion";
import { Mail, Phone, Github } from "lucide-react"; // Using lucide for clean icons

const Contact = () => {
  return (
    <footer id="contactme" className="relative z-10 w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 text-white">
      {/* Section Heading */}
      <motion.h2 
        className="font-bodoni font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-12 sm:mb-16 md:mb-20 tracking-widest uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-12 md:gap-16">
        
        {/* Left Side: Message */}
        <motion.div 
          className="max-w-md space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-redrose text-base sm:text-lg tracking-widest">
            Let's discuss frontend development opportunities.
          </p>
          <p className="font-redrose text-sm sm:text-base leading-relaxed text-white/60">
            I am available for UI/UX design, responsive web development, React implementation, and accessibility-focused frontend work.
          </p>
          <p className="font-redrose text-sm sm:text-base tracking-wide">
            Contact me to discuss internship opportunities or junior frontend roles.
          </p>
        </motion.div>

        {/* Right Side: Contact Links */}
        <motion.div 
          className="flex flex-col gap-6 sm:gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a 
            href="mailto:anshbravo99@gmail.com" 
            className="flex items-center gap-3 sm:gap-4 group transition-colors hover:text-white/70"
          >
            <div className="p-2 sm:p-3 rounded-full bg-white/5 group-hover:bg-white/10">
              <Mail size={18} className="sm:w-5 sm:h-5" />
            </div>
            <span className="font-redrose text-xs sm:text-sm tracking-wider lowercase break-all">anshbravo99@gmail.com</span>
          </a>

          <a 
            href="tel:+91XXXXXXXXXX" 
            className="flex items-center gap-3 sm:gap-4 group transition-colors hover:text-white/70"
          >
            <div className="p-2 sm:p-3 rounded-full bg-white/5 group-hover:bg-white/10">
              <Phone size={18} className="sm:w-5 sm:h-5" />
            </div>
            <span className="font-redrose text-xs sm:text-sm tracking-wider">+91 7838895169</span>
          </a>

          <a 
            href="https://github.com/anshbravo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 group transition-colors hover:text-white/70"
          >
            <div className="p-2 sm:p-3 rounded-full bg-white/5 group-hover:bg-white/10">
              <Github size={18} className="sm:w-5 sm:h-5" />
            </div>
            <span className="font-redrose text-xs sm:text-sm tracking-wider">GitHub/AnshBravo</span>
          </a>
        </motion.div>
      </div>

      {/* Footer Signature from Design */}
      <div className="mt-16 sm:mt-24 md:mt-32 pt-6 sm:pt-8 md:pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 opacity-40">
        <p className="font-bodoni italic text-xs sm:text-sm tracking-widest">Designed & Built by Ansh</p>
        <p className="font-redrose text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em]">Portfolio 2026</p>
      </div>
    </footer>
  );
};

export default Contact;