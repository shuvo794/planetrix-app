import React from 'react';

const PlanetStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h3 className="text-white text-base md:text-lg font-bold tracking-[0.2em] uppercase mb-3">
            {stat.label}
          </h3>
          <p className="text-slate-400 text-sm md:text-base font-light tracking-wide">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlanetStats;
