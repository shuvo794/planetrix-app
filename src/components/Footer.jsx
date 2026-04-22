import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#080b12]/98 border-t border-white/5 py-10 md:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 relative z-10">
        {/* Left: Logo & Description */}
        <div className="max-w-xl">
          <div className="flex items-center mb-6 md:mb-10">
            <img
              src="/Logo.png"
              alt="Planetrix Logo"
              className="h-8 md:h-10 w-auto brightness-110"
            />
          </div>
          <p className="text-slate-400 leading-relaxed text-sm md:text-lg font-light max-w-md">
            Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet
            curabitur eget quam. Tortor nam volutpat tincidunt nibh lacus vitae
            sed mi. Viverra eu commodo sed sed commodo commodo urna sed.
          </p>
        </div>

        {/* Right: Vertical Links */}
        <div className="flex flex-col gap-3 md:gap-4 text-left md:text-right">
          <nav className="flex flex-row flex-wrap md:flex-col gap-x-6 gap-y-2 md:gap-4 text-slate-400 text-sm md:text-lg">
            <a href="#" className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Career
            </a>
            <a href="#" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact us
            </a>
          </nav>
        </div>
      </div>

      {/* Decorative Background Glows — hidden on mobile to avoid overlap */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-8 h-8 rounded-full pointer-events-none hidden md:block" style={{ boxShadow: '0 0 80px 50px rgba(234,88,12,0.25)' }}></div>
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full pointer-events-none hidden md:block" style={{ boxShadow: '0 0 100px 60px rgba(59,130,246,0.12)' }}></div>

      {/* Background Planet Images — desktop only */}
      <img
        src="/Mars.png"
        className="absolute top-1/2 left-[40%] -translate-y-1/2 w-32 opacity-[0.06] pointer-events-none hidden md:block"
        alt=""
      />
      <img
        src="/Earth.png"
        className="absolute bottom-[-10%] right-[20%] w-40 opacity-[0.04] pointer-events-none hidden md:block"
        alt=""
      />
    </footer>
  );
};

export default Footer;
