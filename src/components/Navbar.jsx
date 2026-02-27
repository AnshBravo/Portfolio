import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skills" },
    { name: "Contact Me", href: "#contactme" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-black z-50 flex items-center justify-center px-6">
      
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

      {/* Mobile Hamburger Button - Fixed Alignment */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden relative z-[60] flex items-center justify-center w-10 h-10 focus:outline-none"
      >
        <div className="relative flex flex-col items-center justify-center w-8 h-8">
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
            className={`absolute w-8 h-0.5 block rounded-full transition-colors bg-white`}
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-8 h-0.5 bg-white block rounded-full"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
            className={`absolute w-8 h-0.5 block rounded-full transition-colors bg-white`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay - Black BG / White Text */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center sm:hidden"
          >
            <ul className="flex flex-col items-center gap-10 font-rose-red">
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