import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-12 flex justify-center">
      <div className="flex items-center gap-4">
        <img src="/Logo.png" alt="Planetrix Logo" className="w-12 h-12 object-contain" />
        <span className="text-white text-3xl font-bold tracking-[0.4em] uppercase">Planetrix</span>
      </div>
    </header>
  );
};

export default Header;
