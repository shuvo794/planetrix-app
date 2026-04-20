import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#080b12]/80 backdrop-blur-xl border-t border-white/5 p-16 mt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        {/* Left side: Logo and Description */}
        <div className="max-w-md text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-8">
            <img src="/Logo.png" alt="Planetrix Logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-slate-400 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet curabitur eget quam. 
            Tortor nam volutpat tincidunt nibh lacus vitae sed mi. Viverra eu commodo sed sed commodo commodo urna sed.
          </p>
        </div>

        {/* Middle: Floating Planet in Footer */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 my-8 md:my-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-orange-600/10 blur-3xl rounded-full"></div>
          <img src="/Mars.png" alt="Mars" className="w-full h-full object-contain animate-pulse opacity-80" />
        </div>

        {/* Right side: Vertical Links */}
        <div className="flex flex-col gap-4 text-slate-400 text-lg text-center md:text-left">
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
          <a href="#" className="hover:text-white transition-colors">Career</a>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
          <a href="#" className="hover:text-white transition-colors">Contact us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
