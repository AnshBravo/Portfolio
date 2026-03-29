import { motion } from 'framer-motion';

const HeroSection = () => {
  const name = "ANSHBRAVO";

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center pt-16 sm:pt-14 md:pt-12 overflow-hidden">
      
      <div className="h-10 w-full">
        <h1 className="font-montserrat text-[40px] sm:text-[60px] md:text-[85px] scale-y-[-1] uppercase flex w-full justify-between px-2
               [mask-image:linear-gradient(to_bottom,transparent,black_70%)]
               filter blur-[0px] transition-all duration-700">{name.split("").map((char, i) => <span key={i}>{char}</span>)}</h1>
        <h1 className="font-montserrat text-[40px] sm:text-[60px] md:text-[85px] flex w-full justify-between uppercase transition-all duration-700 -mt-8 sm:-mt-12 md:-mt-17 px-2">{name.split("").map((char, i) => <span key={i}>{char}</span>)}</h1>
      </div>

      {/* 4. Introduction Text Block */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 py-8 md:py-10 mt-8 sm:mt-17 md:mt-28 bg-black grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
  
  {/* Column 1: Description */}
  <motion.div 
    className="self-start"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2 className="font-bodoni font-bold text-white text-xl sm:text-3xl sm:text-center md:text-4xl mb-4 tracking-widest uppercase">
      Introduction
    </h2>
    
    <div className="space-y-4 md:space-y-6 text-white/80 max-w-2xl">
      <motion.h3 
        className="font-bodoni font-bold text-3xl sm:text-4xl md:text-5xl text-white"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I am <span className="text-4xl sm:text-5xl md:text-6xl">Ansh</span>
      </motion.h3>
      <motion.p 
        className="font-redrose text-sm sm:text-base leading-relaxed tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Frontend Developer. BBA Candidate. User-focused interface builder.
      </motion.p>
      <motion.p 
        className="font-redrose text-sm sm:text-base leading-relaxed text-white/60 first-letter:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I specialize in frontend development with an emphasis on responsive interfaces, component-based architecture, and accessible UI. I deliver React and Framer Motion experiences that balance performance, visual clarity, and brand consistency.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="mailto:anshbravo99@gmail.com"
          className="inline-block px-6 py-3 bg-white text-black font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-zinc-200"
        >
          Contact via email
        </a>
        <a
          href="#project"
          className="inline-block px-6 py-3 border border-white text-white font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
        >
          See Projects
        </a>
      </div>
    </div>

  </motion.div>

  {/* Column 2: Image Placeholder */}
  <motion.div 
    className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white rounded-sm"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    {/* Replace with actual image later*/}
  </motion.div>

</div>

    </section>
  );
};

export default HeroSection;