import { motion } from "framer-motion";
import logoPng from '../assets/Ansh Bravo Brand logo/black-brand-logo.png'

const Preloader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Your Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-4"
      >
        {/* Replace with your actual logo IMG or SVG */}
        <img 
          src={logoPng} 
          alt="Logo" 
          className="h-100 w-auto max-w-full object-contain screen-blend" 
          style={{ mixBlendMode: 'screen' }} 
        />
      </motion.div>

      {/* Portfolio Text with Letter Spacing Animation */}
      <motion.p
        initial={{ letterSpacing: "0.2em", opacity: 0 }}
        animate={{ letterSpacing: "0.5em", opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="font-montserrat text-[6vw] sm:text-[4vw] uppercase text-white/60 -mt-25 text-center px-4"
      >
        Portfolio
      </motion.p>
    </motion.div>
  );
};

export default Preloader;