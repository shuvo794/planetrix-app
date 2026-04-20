import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SolarSystem = ({
  activePlanet,
  onNext,
  onPrev,
  leftPlanet,
  rightPlanet,
  direction,
}) => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center mt-6 md:mt-10 mb-16 md:mb-20 px-4 md:px-0 select-none overflow-visible">
      {/* Subtle Circular Orbits */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 md:opacity-100">
        {[250, 400, 600, 850, 1100].map((size, i) => (
          <div
            key={i}
            className="absolute border border-white/5 rounded-full"
            style={{ width: size, height: size }}
          ></div>
        ))}
      </div>

      {/* Side Planet: Left */}
      <motion.div
        onClick={onPrev}
        className="absolute left-[-160px] sm:left-[-140px] md:left-[-180px] lg:left-[-220px] flex items-center gap-4 md:gap-10 cursor-pointer group z-30 transition-transform hover:scale-105 active:scale-95"
        key={`left-${leftPlanet.id}`}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80">
          <div
            className="absolute inset-0 blur-[40px] md:blur-[80px] rounded-full transition-colors duration-700"
            style={{ backgroundColor: `${leftPlanet.color}15` }} // 15 for low opacity
          ></div>
          <img
            src={leftPlanet.image}
            alt={leftPlanet.name}
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          />
        </div>
        <span
          className="transition-colors duration-500 text-xl sm:text-3xl md:text-5xl font-light tracking-[0.2em] uppercase hidden sm:block"
          style={{ color: `${leftPlanet.color}40` }} // 40 for low opacity
        >
          {leftPlanet.name}
        </span>
      </motion.div>

      {/* Side Planet: Right */}
      <motion.div
        onClick={onNext}
        className="absolute right-[-160px] sm:right-[-140px] md:right-[-180px] lg:right-[-220px] flex flex-row-reverse items-center gap-4 md:gap-10 cursor-pointer group z-30 transition-transform hover:scale-105 active:scale-95"
        key={`right-${rightPlanet.id}`}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80">
          <div
            className="absolute inset-0 blur-[40px] md:blur-[80px] rounded-full transition-colors duration-700"
            style={{ backgroundColor: `${rightPlanet.color}15` }}
          ></div>
          <img
            src={rightPlanet.image}
            alt={rightPlanet.name}
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          />
        </div>
        <span
          className="transition-colors duration-500 text-xl sm:text-3xl md:text-5xl font-light tracking-[0.2em] uppercase hidden sm:block"
          style={{ color: `${rightPlanet.color}40` }}
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
            x: direction === 1 ? "100vw" : direction === -1 ? "-100vw" : 0,
            rotate: direction === 1 ? 180 : direction === -1 ? -180 : 0,
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            x: 0,
            rotate: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            x: direction === 1 ? "-100vw" : direction === -1 ? "100vw" : 0,
            rotate: direction === 1 ? -180 : direction === -1 ? 180 : 0,
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.32, 0, 0.67, 0],
            opacity: { duration: 0.4 },
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {activePlanet.companions?.map((companion, idx) => (
            <motion.img
              key={`${activePlanet.id}-comp-${idx}`}
              src={companion.image}
              alt="Decorative Planet"
              initial={{ opacity: 0, scale: 0, x: direction * 50 }}
              animate={{ opacity: 0.15, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: -direction * 50 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`absolute z-30 ${companion.size} aspect-square object-contain opacity-15`}
              style={{
                top: companion.top,
                left: companion.left,
                right: companion.right,
                bottom: companion.bottom,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SolarSystem;
