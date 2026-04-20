import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-6 md:p-12 flex justify-center">
      <div className="flex items-center">
        <img src="/Logo.png" alt="Planetrix Logo" className="h-10 md:h-16 w-auto object-contain" />
      </div>
    </header>
  );
};

export default Header;
