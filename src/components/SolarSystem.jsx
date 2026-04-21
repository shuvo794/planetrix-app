import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SolarSystem = ({
  activePlanet,
  onNext,
  onPrev,
  leftPlanet,
  rightPlanet,
  direction,
  currentIndex,
}) => {
  return (
    <div className="relative w-full h-[500px] md:h-[750px] flex items-center justify-center mt-20 md:mt-32 mb-24 md:mb-32 px-4 md:px-0 select-none overflow-visible">
      {/* Subtle Circular Orbits */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ 
          rotate: [currentIndex * 45, currentIndex * 45 + 360] 
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 150, ease: "linear" },
          default: { type: "spring", bounce: 0, duration: 2.5 }
        }}
      >
        {[200, 350, 500, 700, 900].map((size, i) => (
          <div
            key={i}
            className="absolute border border-white/30 rounded-full border-dashed"
            style={{
              width: size,
              height: size,
              borderWidth: i % 2 === 0 ? "1.5px" : "2px",
            }}
          ></div>
        ))}
      </motion.div>

      {/* Side Planet: Left */}
      <motion.div
        onClick={onPrev}
        className="absolute left-[-180px] sm:left-[-140px] md:left-[-200px] lg:left-[-250px] flex items-center gap-4 md:gap-10 cursor-pointer group z-30 transition-transform hover:scale-105 active:scale-95"
        key={`left-${leftPlanet.id}`}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80">
          <div
            className="absolute inset-0 blur-[40px] md:blur-[80px] rounded-full transition-colors duration-700"
            style={{ backgroundColor: `${leftPlanet.color}40` }}
          ></div>
          <img
            src={leftPlanet.image}
            alt={leftPlanet.name}
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          />
        </div>
        <span
          className="transition-colors duration-500 text-xl sm:text-3xl md:text-5xl font-light tracking-[0.2em] uppercase hidden sm:block drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          style={{ color: `${leftPlanet.color}90` }}
        >
          {leftPlanet.name}
        </span>
      </motion.div>

      {/* Side Planet: Right */}
      <motion.div
        onClick={onNext}
        className="absolute right-[-180px] sm:right-[-140px] md:right-[-200px] lg:right-[-250px] flex flex-row-reverse items-center gap-4 md:gap-10 cursor-pointer group z-30 transition-transform hover:scale-105 active:scale-95"
        key={`right-${rightPlanet.id}`}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80">
          <div
            className="absolute inset-0 blur-[40px] md:blur-[80px] rounded-full transition-colors duration-700"
            style={{ backgroundColor: `${rightPlanet.color}40` }}
          ></div>
          <img
            src={rightPlanet.image}
            alt={rightPlanet.name}
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          />
        </div>
        <span
          className="transition-colors duration-500 text-xl sm:text-3xl md:text-5xl font-light tracking-[0.2em] uppercase hidden sm:block drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          style={{ color: `${rightPlanet.color}90` }}
        >
          {rightPlanet.name}
        </span>
      </motion.div>

      {/* Central Planet */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={activePlanet.id}
          custom={direction}
          initial={{
            x: direction === 1 ? 250 : direction === -1 ? -250 : 0,
            y: 40,
            rotate: direction === 1 ? 20 : direction === -1 ? -20 : 0,
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            x: direction === 1 ? -250 : direction === -1 ? 250 : 0,
            y: -40,
            rotate: direction === 1 ? -20 : direction === -1 ? 20 : 0,
            opacity: 0,
            scale: 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 20,
            mass: 1.5,
          }}
          className="relative z-20 w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] md:w-[550px] md:h-[550px]"
        >
          {/* Dynamic Theme Glow */}
          <div
            className="absolute inset-0 blur-[60px] md:blur-[120px] rounded-full transition-all duration-1000"
            style={{ backgroundColor: `${activePlanet.color}30` }} // 30 for theme opacity
          ></div>
          <img
            src={activePlanet.image}
            alt={activePlanet.name}
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dynamic Decorative smaller planets */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        animate={{ rotate: currentIndex * -30 }}
        transition={{ type: "spring", bounce: 0, duration: 2.5 }}
      >
        <AnimatePresence>
          {activePlanet.companions?.map((companion, idx) => (
            <motion.img
              key={`${activePlanet.id}-comp-${idx}`}
              src={companion.image}
              alt="Decorative Planet"
              initial={{ opacity: 0, scale: 0, x: direction * 50 }}
              animate={{ opacity: 0.6, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -direction * 50 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 1.8,
                delay: idx * 0.15,
              }}
              className={`absolute z-30 ${companion.size} aspect-square object-contain`}
              style={{
                top: companion.top,
                left: companion.left,
                right: companion.right,
                bottom: companion.bottom,
              }}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SolarSystem;
