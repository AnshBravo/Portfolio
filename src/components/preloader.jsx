import { motion } from "framer-motion";
import logoPng from "../assets/Ansh Bravo Brand logo/black-brand-logo.png";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#04070f] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.86, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        className="relative mb-5"
      >
        <motion.div
          animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-sky-200/20 blur-[70px]"
        />
        <img src={logoPng} alt="Ansh Bravo logo" className="relative h-56 w-auto max-w-full object-contain sm:h-64" />
      </motion.div>

      <motion.p
        initial={{ letterSpacing: "0.22em", opacity: 0 }}
        animate={{ letterSpacing: "0.34em", opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="px-4 text-center text-xs uppercase tracking-[0.34em] text-white/55 sm:text-sm"
      >
        Building portfolio experience
      </motion.p>

      <div className="mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-white/15">
        <motion.span
          className="block h-full w-1/2 bg-gradient-to-r from-sky-200 via-white to-violet-200"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
