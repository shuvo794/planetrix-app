import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#080b12]/98 border-t border-white/5 py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        {/* Left: Logo & Description */}
        <div className="max-w-xl">
          <div className="flex items-center mb-10">
            <img src="/Logo.png" alt="Planetrix Logo" className="h-10 w-auto brightness-110" />
          </div>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg font-light max-w-md">
            Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet 
            curabitur eget quam. Tortor nam volutpat tincidunt nibh lacus vitae sed 
            mi. Viverra eu commodo sed sed commodo commodo urna sed.
          </p>
        </div>

        {/* Right: Vertical Links */}
        <div className="flex flex-col gap-4 text-right">
          <nav className="flex flex-col gap-4 text-slate-400 text-base md:text-lg">
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Career</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Contact us</a>
          </nav>
        </div>
      </div>

      {/* Decorative Blurred Background Elements */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-32 h-32 bg-orange-600/30 blur-[60px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/15 blur-[80px] rounded-full pointer-events-none"></div>
      
      {/* Background Planet Images (highly blurred) */}
      <img src="/Mars.png" className="absolute top-1/2 left-[40%] -translate-y-1/2 w-32 opacity-10 blur-[20px] pointer-events-none hidden md:block" alt="" />
      <img src="/Earth.png" className="absolute bottom-[-10%] right-[20%] w-40 opacity-5 blur-[25px] pointer-events-none hidden md:block" alt="" />
    </footer>
  );
};

export default Footer;
