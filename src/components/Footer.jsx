import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#080b12]/95 backdrop-blur-3xl border-t border-white/5 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left: Logo & Description */}
        <div className="max-w-md">
          <div className="flex items-center mb-8">
            <img src="/Logo.png" alt="Planetrix Logo" className="h-9 w-auto brightness-110" />
          </div>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg font-light">
            Journey through the cosmos with Planetrix. Discover the secrets of our solar system 
            through an immersive interactive experience designed for explorers of all ages.
          </p>
        </div>

        {/* Right: Vertical Links */}
        <div className="flex flex-col gap-4 text-right">
          <h4 className="text-white/20 font-bold tracking-[0.2em] uppercase text-xs mb-2">Navigation</h4>
          <nav className="flex flex-col gap-3 text-slate-400 text-base md:text-lg">
            <a href="#" className="hover:text-white transition-all hover:-translate-x-1">About Us</a>
            <a href="#" className="hover:text-white transition-all hover:-translate-x-1">Blog</a>
            <a href="#" className="hover:text-white transition-all hover:-translate-x-1">Career</a>
            <a href="#" className="hover:text-white transition-all hover:-translate-x-1">FAQ</a>
            <a href="#" className="hover:text-white transition-all hover:-translate-x-1">Contact us</a>
          </nav>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 blur-[80px] rounded-full"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 blur-[80px] rounded-full"></div>
    </footer>
  );
};

export default Footer;
