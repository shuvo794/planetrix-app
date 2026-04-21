import React from "react";

export const PlanetSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Title Skeleton */}
      <div className="h-12 md:h-16 w-64 bg-white/5 rounded-lg mx-auto mb-12 md:mb-20"></div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24 md:mb-32 max-w-[1600px] mx-auto px-8 md:px-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="h-4 w-24 bg-white/5 rounded"></div>
            <div className="h-8 w-32 bg-white/10 rounded"></div>
          </div>
        ))}
      </div>

      {/* Center Planet Skeleton */}
      <div className="relative flex items-center justify-center h-[500px] md:h-[750px]">
        <div className="w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] md:w-[550px] md:h-[550px] bg-white/5 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};
