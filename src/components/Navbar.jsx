import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPng from '../assets/Ansh Bravo Brand logo/black-brand-logo.png'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  // Track scroll position for logo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track scroll position for active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = [
        { id: "home", name: "Home" },
        { id: "skills", name: "Skills" },
        { id: "project", name: "Projects" },
        { id: "contactme", name: "Contact Me" }
      ];

      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveTab(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact Me", href: "#contactme" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-black z-50 flex items-center justify-center px-4 sm:px-6 md:px-10 overflow-hidden">
      
      {/* 1. SCROLL LOGO: Appears on the left on Desktop */}
     {/* 1. SCROLL LOGO: Absolute positioned so it doesn't bump the 'pill' menu */}
<div className="hidden sm:block absolute left-4 sm:left-6 md:left-10">
  <AnimatePresence>
    {showLogo && (
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img 
  src={logoPng} 
  alt="Logo" 
  className="h-16 sm:h-20 w-auto max-w-[150px] object-contain screen-blend" 
  style={{ mixBlendMode: 'screen' }} 
/>
      </motion.div>
    )}
  </AnimatePresence>
</div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:block bg-white p-1 rounded-full shadow-xl">
        <ul className="flex items-center font-redrose">
          {links.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative z-10 block px-6 py-2 text-base transition-colors duration-500 ${
                    isActive ? "text-white" : "text-black/50 hover:text-black"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="black-pill"
                      className="absolute inset-0 bg-black rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden relative z-[60] flex items-center justify-center w-10 h-10 focus:outline-none"
      >
        <div className="relative flex flex-col items-center justify-center w-8 h-8">
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
            className="absolute w-8 h-0.5 block rounded-full bg-white"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-8 h-0.5 bg-white block rounded-full"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
            className="absolute w-8 h-0.5 block rounded-full bg-white"
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen bg-black flex flex-col items-center justify-center sm:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-10 font-redrose">
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsOpen(false);
                    }}
                    className={`text-4xl font-bold text-white underline underline-offset-8 decoration-1 ${
                      activeTab === item.name ? "decoration-white" : "decoration-transparent"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              
              <li className="font-bodoni text-xl text-white/40 mt-10 tracking-widest uppercase">
                Portfolio 2026
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;