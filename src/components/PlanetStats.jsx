import React from 'react';

const PlanetStats = ({ stats, color }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24 max-w-5xl mx-auto px-4 md:px-0">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group border-b sm:border-b-0 border-white/5 pb-4 sm:pb-0">
          <h3 
            className="text-sm md:text-lg font-bold tracking-[0.2em] uppercase mb-2 md:mb-3 transition-colors duration-500"
            style={{ color: `${color}80` }} // 80% opacity for labels
          >
            {stat.label}
          </h3>
          <p className="text-white text-lg md:text-xl font-light tracking-wide group-hover:scale-105 transition-transform duration-300">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlanetStats;
