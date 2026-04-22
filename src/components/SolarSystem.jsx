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
    <div className="relative w-full h-[380px] sm:h-[500px] md:h-[750px] flex items-center justify-center mt-4 sm:mt-12 md:mt-32 mb-8 sm:mb-16 md:mb-32 px-4 md:px-0 select-none overflow-visible">
      {/* Subtle Circular Orbits — static, responsive sizes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] border border-white/10 rounded-full border-dashed" style={{ borderWidth: "1.5px" }}></div>
        <div className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] border border-white/10 rounded-full border-dashed" style={{ borderWidth: "2px" }}></div>
        <div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] border border-white/10 rounded-full border-dashed" style={{ borderWidth: "1.5px" }}></div>
        <div className="absolute hidden md:block w-[700px] h-[700px] border border-white/10 rounded-full border-dashed" style={{ borderWidth: "2px" }}></div>
        <div className="absolute hidden md:block w-[900px] h-[900px] border border-white/10 rounded-full border-dashed" style={{ borderWidth: "1.5px" }}></div>
      </div>

      {/* Side Planet: Left — more visible on mobile */}
      <motion.div
        onClick={onPrev}
        className="absolute left-[-60px] sm:left-[-80px] md:left-[-120px] lg:left-[-140px] flex items-center gap-2 sm:gap-4 md:gap-8 cursor-pointer group z-30 transition-transform hover:scale-105 active:scale-95"
        key={`left-${leftPlanet.id}`}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-24 h-24 sm:w-40 sm:h-40 md:w-64 md:h-64">
          <div
            className="absolute inset-[15%] rounded-full transition-colors duration-700"
            style={{ boxShadow: `0 0 60px 30px ${leftPlanet.color}40` }}
          ></div>
          <img
            src={leftPlanet.image}
            alt={leftPlanet.name}
            className="w-full h-full object-contain relative z-10"
          />
        </div>
        <span
          className="transition-colors duration-500 text-xs sm:text-xl md:text-2xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase hidden sm:block"
          style={{ color: `${leftPlanet.color}90` }}
        >
          {leftPlanet.name}
        </span>
      </motion.div>

      {/* Side Planet: Right — more visible on mobile */}
      <motion.div
        onClick={onNext}
        className="absolute right-[-60px] sm:right-[-80px] md:right-[-120px] lg:right-[-140px] flex flex-row-reverse items-center gap-2 sm:gap-4 md:gap-8 cursor-pointer group z-30 transition-transform hover:scale-105 active:scale-95"
        key={`right-${rightPlanet.id}`}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-24 h-24 sm:w-40 sm:h-40 md:w-64 md:h-64">
          <div
            className="absolute inset-[15%] rounded-full transition-colors duration-700"
            style={{ boxShadow: `0 0 60px 30px ${rightPlanet.color}40` }}
          ></div>
          <img
            src={rightPlanet.image}
            alt={rightPlanet.name}
            className="w-full h-full object-contain relative z-10"
          />
        </div>
        <span
          className="transition-colors duration-500 text-xs sm:text-xl md:text-2xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase hidden sm:block"
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
          className="relative z-20 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[550px] md:h-[550px]"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Dynamic Theme Glow */}
          <div
            className="absolute inset-[20%] rounded-full transition-all duration-1000"
            style={{ boxShadow: `0 0 120px 60px ${activePlanet.color}30` }}
          ></div>
          <img
            src={activePlanet.image}
            alt={activePlanet.name}
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>
      </AnimatePresence>

      {/* Companion planets — CSS transition rotate on click */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `rotate(${currentIndex * -30}deg)`,
          transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          willChange: "transform",
        }}
      >
        <AnimatePresence>
          {activePlanet.companions?.map((companion, idx) => (
            <motion.img
              key={`${activePlanet.id}-comp-${idx}`}
              src={companion.image}
              alt="Decorative Planet"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
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
      </div>
    </div>
  );
};

export default SolarSystem;
