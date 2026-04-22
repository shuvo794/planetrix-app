import React from "react";

const PlanetStats = ({ stats, color }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12 mb-8 md:mb-24 max-w-5xl mx-auto px-4 md:px-0">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center group"
        >
          <h3
            className="text-[10px] sm:text-sm md:text-lg font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-1 md:mb-3 transition-colors duration-500"
            style={{ color: `${color}80` }}
          >
            {stat.label}
          </h3>
          <p className="text-white text-sm sm:text-lg md:text-xl font-light tracking-wide group-hover:scale-105 transition-transform duration-300">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlanetStats;
