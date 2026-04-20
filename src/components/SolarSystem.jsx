import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SolarSystem = ({ activePlanet, onNext, onPrev, leftPlanet, rightPlanet, direction }) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center mt-10 mb-20 px-4 md:px-0 select-none">
      {/* Subtle Circular Orbits */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[300, 450, 650, 900, 1200].map((size, i) => (
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
        className="absolute left-[-150px] md:left-[-180px] flex items-center gap-6 md:gap-10 cursor-pointer group z-30 transition-transform hover:scale-105"
        key={`left-${leftPlanet.name}`}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-48 h-48 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors"></div>
          <img 
            src={leftPlanet.image} 
            alt={leftPlanet.name} 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
          />
        </div>
        <span className="text-white/20 group-hover:text-white/60 transition-colors text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">
          {leftPlanet.name}
        </span>
      </motion.div>

      {/* Side Planet: Right */}
      <motion.div 
        onClick={onNext}
        className="absolute right-[-150px] md:right-[-180px] flex flex-row-reverse items-center gap-6 md:gap-10 cursor-pointer group z-30 transition-transform hover:scale-105"
        key={`right-${rightPlanet.name}`}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-48 h-48 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors"></div>
          <img 
            src={rightPlanet.image} 
            alt={rightPlanet.name} 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
          />
        </div>
        <span className="text-white/20 group-hover:text-white/60 transition-colors text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">
          {rightPlanet.name}
        </span>
      </motion.div>

      {/* Central Planet */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div 
          key={activePlanet.name}
          custom={direction}
          initial={{ 
            x: direction === 1 ? '100vw' : direction === -1 ? '-100vw' : 0,
            rotate: direction === 1 ? 180 : direction === -1 ? -180 : 0,
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            x: 0, 
            rotate: 0,
            opacity: 1,
            scale: 1
          }}
          exit={{ 
            x: direction === 1 ? '-100vw' : direction === -1 ? '100vw' : 0,
            rotate: direction === 1 ? -180 : direction === -1 ? 180 : 0,
            opacity: 0,
            scale: 0.5
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.32, 0, 0.67, 0], // Custom cubic-bezier for a "rolling" feel
            opacity: { duration: 0.4 }
          }}
          className="relative z-20 w-[350px] h-[350px] md:w-[550px] md:h-[550px]"
        >
          <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full"></div>
          <img 
            src={activePlanet.image} 
            alt={activePlanet.name} 
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative smaller planets */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/Earth.png" alt="Earth" className="absolute top-[20%] left-[25%] w-12 h-12 md:w-16 md:h-16 z-30 opacity-20" />
        <img src="/Mars.png" alt="Mars" className="absolute bottom-[30%] left-[28%] w-10 h-10 md:w-14 md:h-14 z-30 opacity-15" />
        <img src="/Jupiter.png" alt="Jupiter" className="absolute bottom-[20%] right-[30%] w-16 h-16 md:w-20 md:h-20 z-30 opacity-20" />
      </div>
    </div>
  );
};

export default SolarSystem;
