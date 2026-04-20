import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import PlanetStats from './components/PlanetStats';
import SolarSystem from './components/SolarSystem';

const PLANETS = [
  {
    name: "Sun",
    image: "/Sun.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "1,392,684 km" },
      { label: "LENGTH OF DAY", value: "---" },
      { label: "AVERAGE TEMPERATURE", value: "6000 Kelvin" },
    ]
  },
  {
    name: "Mercury",
    image: "/Mercury.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "4,879 km" },
      { label: "LENGTH OF DAY", value: "4222.6 hours" },
      { label: "AVERAGE TEMPERATURE", value: "167°C" },
    ]
  },
  {
    name: "Venus",
    image: "/Venus.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "12,104 km" },
      { label: "LENGTH OF DAY", value: "2802 hours" },
      { label: "AVERAGE TEMPERATURE", value: "464°C" },
    ]
  },
  {
    name: "Earth",
    image: "/Earth.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "12,756 km" },
      { label: "LENGTH OF DAY", value: "24 hours" },
      { label: "AVERAGE TEMPERATURE", value: "15°C" },
    ]
  },
  {
    name: "Mars",
    image: "/Mars.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "6,794 km" },
      { label: "LENGTH OF DAY", value: "24.7 hours" },
      { label: "AVERAGE TEMPERATURE", value: "-65°C" },
    ]
  },
  {
    name: "Jupiter",
    image: "/Jupiter.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "142,984 km" },
      { label: "LENGTH OF DAY", value: "9.9 hours" },
      { label: "AVERAGE TEMPERATURE", value: "-110°C" },
    ]
  },
  {
    name: "Saturn",
    image: "/Saturn.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "120,536 km" },
      { label: "LENGTH OF DAY", value: "10.7 hours" },
      { label: "AVERAGE TEMPERATURE", value: "-140°C" },
    ]
  },
  {
    name: "Uranus",
    image: "/Uranus.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "51,118 km" },
      { label: "LENGTH OF DAY", value: "17.2 hours" },
      { label: "AVERAGE TEMPERATURE", value: "-195°C" },
    ]
  },
  {
    name: "Neptune",
    image: "/Neptune.png",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "49,528 km" },
      { label: "LENGTH OF DAY", value: "16.1 hours" },
      { label: "AVERAGE TEMPERATURE", value: "-201°C" },
    ]
  }
];

function App() {
  const [activePlanetIndex, setActivePlanetIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const activePlanet = PLANETS[activePlanetIndex];

  const nextPlanet = () => {
    setDirection(1);
    setActivePlanetIndex((prev) => (prev + 1) % PLANETS.length);
  };

  const prevPlanet = () => {
    setDirection(-1);
    setActivePlanetIndex((prev) => (prev - 1 + PLANETS.length) % PLANETS.length);
  };

  return (
    <div className="min-h-screen bg-[#080b12] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <div 
        className="fixed inset-0 z-0 opacity-40 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/galaxy_background.png')" }}
      ></div>

      <Header />

      <main className="relative z-10 pt-40 pb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activePlanet.name}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-16">
                {activePlanet.name}
              </h2>
              <PlanetStats stats={activePlanet.stats} />
            </motion.div>
          </AnimatePresence>
        </div>

        <SolarSystem 
          activePlanet={activePlanet} 
          onNext={nextPlanet} 
          onPrev={prevPlanet}
          leftPlanet={PLANETS[(activePlanetIndex - 1 + PLANETS.length) % PLANETS.length]}
          rightPlanet={PLANETS[(activePlanetIndex + 1) % PLANETS.length]}
          direction={direction}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
