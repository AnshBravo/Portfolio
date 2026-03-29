import { motion } from "framer-motion";
import htmlIcon from "../assets/skills-icon/html-5 logo.png";
import cssIcon from "../assets/skills-icon/CSS logo.png";
import jsIcon from "../assets/skills-icon/javascript logo.png";
import figmaIcon from "../assets/skills-icon/Figma logo.png";
import canvaIcon from "../assets/skills-icon/Canva logo.png";
import reactIcon from "../assets/skills-icon/devicon_react-wordmark.png";
import tailwindIcon from "../assets/skills-icon/tailwind_css logo.png";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Canva", icon: canvaIcon },
  { name: "React", icon: reactIcon },
  { name: "Tailwind CSS", icon: tailwindIcon }
];

const Skills = () => {
  // We double the array to ensure there's enough content to loop without a gap
  const doubledSkills = [...skills, ...skills];

  return (
    <div id="skills" className="relative z-10 w-full bg-white px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 flex flex-col items-center overflow-hidden">
      {/* Header for Tool Stack */}
      <h2 className="font-bodoni font-bold text-black text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-12 md:mb-16 tracking-widest uppercase">
        Technical Skills
      </h2>

      {/* Marquee Container */}
      <div className="relative flex w-full max-w-7xl overflow-hidden">
        {/* Gradient Fades for a cleaner look at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white to-khaki z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-white to-khaki z-20" />

        <motion.div
          className="flex gap-12 sm:gap-16 md:gap-18 lg:gap-26 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 10, // Adjust speed here (higher = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubledSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center min-w-[70px] sm:min-w-[80px] md:min-w-[100px]" >
              <img
                src={skill.icon}
                alt={skill.name}
                className={skill.name == "Tailwind CSS" ? "w-16 h-16 scale-[1.5] sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain  transition-all duration-500"
 : "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain  transition-all duration-500"
}
              />
              <span className="mt-2 sm:mt-3 md:mt-4 text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-black uppercase tracking-widest font-redrose">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;