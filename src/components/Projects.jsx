import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Project One", category: "UI/UX" },
  { id: 2, title: "Project Two", category: "Front End" },
  { id: 3, title: "Project Three", category: "Front End" },
  { id: 4, title: "Project Four", category: "Front End" },
  { id: 5, title: "Project Five", category: "Front End" },
];

const Projects = () => {
  return (
    <section id="project" className="relative z-10 w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        
        {/* 1. Heading - Sticky on the left */}
        <motion.div 
          className="md:w-1/4 space-y-3 md:space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bodoni font-bold text-black text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase md:sticky md:top-28">
            Projects
          </h2>
          <p className="font-redrose text-black/70 text-sm sm:text-base leading-relaxed md:sticky md:top-44">
            Welcome to my collection of work. Here you'll find projects spanning web development, 
            UI/UX design, and creative media — each one built with intention and craft.
          </p>
        </motion.div>

        {/* 2. The Black "Tab" Container */}
        <div className="flex-1 bg-black rounded-[20px] sm:rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-20 relative overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          
          {/* The Figma Lamp/Spotlight Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
            {/* The Lamp Cord */}
            <div className="w-[2px] h-20 sm:h-24 md:h-30 bg-white/20" />
            {/* The Light Glow */}
            <div className="w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-white/10 rounded-full blur-[60px] sm:blur-[70px] md:blur-[80px] -mt-10" />
          </div>

          {/* Project Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16 md:mt-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                {/* The Card Body (White Rectangle in your Figma) */}
                <div className="aspect-[4/5] bg-white rounded-lg sm:rounded-xl mb-3 sm:mb-4 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
                
                {/* Project Info */}
                <h3 className="font-bodoni font-bold text-white text-lg sm:text-xl uppercase tracking-wider">
                  {project.title}
                </h3>
                <p className="font-redrose text-white/40 text-xs sm:text-sm tracking-wide mt-1 sm:mt-2">
                  {project.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;