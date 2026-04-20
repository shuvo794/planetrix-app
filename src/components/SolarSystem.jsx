import React from 'react';

const SolarSystem = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center mt-10 mb-20 px-4 md:px-0">
      {/* Subtle Circular Orbits */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full"></div>
        <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full"></div>
        <div className="absolute w-[650px] h-[650px] border border-white/5 rounded-full"></div>
        <div className="absolute w-[900px] h-[900px] border border-white/5 rounded-full"></div>
        <div className="absolute w-[1200px] h-[1200px] border border-white/5 rounded-full"></div>
      </div>

      {/* Side Planet: Neptune (Left) */}
      <div className="absolute left-[-100px] md:left-[-120px] flex items-center gap-6 md:gap-10">
        <div className="relative w-48 h-48 md:w-72 md:h-72">
          <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full"></div>
          <img 
            src="/Neptune.png" 
            alt="Neptune" 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]" 
          />
        </div>
        <span className="text-white/40 text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">
          Neptune
        </span>
      </div>

      {/* Side Planet: Mercury (Right) */}
      <div className="absolute right-[-100px] md:right-[-120px] flex flex-row-reverse items-center gap-6 md:gap-10">
        <div className="relative w-48 h-48 md:w-72 md:h-72">
          <div className="absolute inset-0 bg-slate-500/10 blur-[80px] rounded-full"></div>
          <img 
            src="/Mercury.png" 
            alt="Mercury" 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
          />
        </div>
        <span className="text-white/40 text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">
          Mercury
        </span>
      </div>

      {/* Central Sun */}
      <div className="relative z-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
        <div className="absolute inset-0 bg-orange-600/30 blur-[120px] rounded-full"></div>
        <img 
          src="/Sun.png" 
          alt="Sun" 
          className="w-full h-full object-contain relative z-10 animate-spin-slow drop-shadow-[0_0_50px_rgba(249,115,22,0.4)]" 
        />
      </div>

      {/* Floating Orbiting Planets (Matching specific positions in design) */}
      
      {/* Small blue planet to the left of sun */}
      <div className="absolute left-[30%] top-[40%] w-16 h-16 md:w-20 md:h-20 z-20">
        <img src="/Uranus.png" alt="Planet" className="w-full h-full object-contain opacity-90" />
      </div>

      {/* Small brown planet to the right of sun */}
      <div className="absolute right-[22%] bottom-[15%] w-20 h-20 md:w-24 md:h-24 z-20">
        <img src="/Jupiter.png" alt="Planet" className="w-full h-full object-contain opacity-90" />
      </div>

      {/* Tiny planets on orbits */}
      <img src="/Mars.png" alt="Mars" className="absolute left-[28%] bottom-[20%] w-8 h-8 opacity-80" />
      <img src="/Venus.png" alt="Venus" className="absolute right-[35%] top-[15%] w-6 h-6 opacity-70" />
      <img src="/Earth.png" alt="Earth" className="absolute left-[40%] top-[10%] w-5 h-5 opacity-60" />
    </div>
  );
};

export default SolarSystem;
