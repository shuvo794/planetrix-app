import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PlanetStats from './components/PlanetStats';
import SolarSystem from './components/SolarSystem';

function App() {
  const sunStats = [
    { label: "GALAXY", value: "Milky Way" },
    { label: "DIAMETER", value: "1,392,684 km" },
    { label: "LENGTH OF DAY", value: "---" },
    { label: "AVERAGE TEMPERATURE", value: "6000 Kelvin" },
  ];

  return (
    <div className="min-h-screen bg-[#080b12] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      {/* Starry Background Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-40 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/galaxy_background.png')" }}
      ></div>

      <Header />

      <main className="relative z-10 pt-40 pb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-16">
            Sun
          </h2>

          <PlanetStats stats={sunStats} />
        </div>

        <SolarSystem />
      </main>

      <Footer />
    </div>
  );
}

export default App;
