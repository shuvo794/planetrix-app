import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlanetStats from "./components/PlanetStats";
import SolarSystem from "./components/SolarSystem";

const PLANETS = [
  {
    id: "sun",
    name: "Sun",
    image: "/Sun.png",
    color: "#f97316",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "1,392,684 km" },
      { label: "LENGTH OF DAY", value: "---" },
      { label: "AVERAGE TEMPERATURE", value: "5,500°C" },
    ],
    companions: [
      { image: "/Earth.png", top: "15%", left: "20%", size: "w-12" },
      { image: "/Jupiter.png", bottom: "20%", right: "25%", size: "w-20" },
      { image: "/Mars.png", bottom: "30%", left: "30%", size: "w-10" },
    ],
  },
  {
    id: "mercury",
    name: "Mercury",
    image: "/Mercury.png",
    color: "#94a3b8",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "4,879 km" },
      { label: "LENGTH OF DAY", value: "4,222.6 Earth hours" },
      { label: "AVERAGE TEMPERATURE", value: "167°C" },
    ],
    companions: [
      { image: "/Sun.png", top: "10%", right: "20%", size: "w-32" },
      { image: "/Venus.png", bottom: "25%", left: "15%", size: "w-14" },
    ],
  },
  {
    id: "venus",
    name: "Venus",
    image: "/Venus.png",
    color: "#fbbf24",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "12,104 km" },
      { label: "LENGTH OF DAY", value: "2,802 Earth hours" },
      { label: "AVERAGE TEMPERATURE", value: "464°C" },
    ],
    companions: [
      { image: "/Mercury.png", top: "20%", left: "25%", size: "w-12" },
      { image: "/Earth.png", bottom: "20%", right: "30%", size: "w-16" },
    ],
  },
  {
    id: "earth",
    name: "Earth",
    image: "/Earth.png",
    color: "#3b82f6",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "12,756 km" },
      { label: "LENGTH OF DAY", value: "24 hour ground" },
      { label: "AVERAGE TEMPERATURE", value: "15°C" },
    ],
    companions: [
      { image: "/Venus.png", top: "15%", left: "20%", size: "w-16" },
      { image: "/Mars.png", bottom: "25%", right: "25%", size: "w-14" },
      { image: "/Mercury.png", top: "40%", right: "15%", size: "w-8" },
    ],
  },
  {
    id: "mars",
    name: "Mars",
    image: "/Mars.png",
    color: "#ef4444",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "6,794 km" },
      { label: "LENGTH OF DAY", value: "24.7 Earth hours" },
      { label: "AVERAGE TEMPERATURE", value: "65 degrees Celsius" },
    ],
    companions: [
      { image: "/Earth.png", top: "20%", left: "15%", size: "w-16" },
      { image: "/Jupiter.png", bottom: "20%", right: "20%", size: "w-24" },
    ],
  },
  {
    id: "jupiter",
    name: "Jupiter",
    image: "/Jupiter.png",
    color: "#d97706",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "142,984 km" },
      { label: "LENGTH OF DAY", value: "9.9 Earth hours" },
      { label: "AVERAGE TEMPERATURE", value: "110-degree Celsius" },
    ],
    companions: [
      { image: "/Mars.png", top: "25%", left: "20%", size: "w-12" },
      { image: "/Saturn.png", bottom: "15%", right: "25%", size: "w-28" },
    ],
  },
  {
    id: "saturn",
    name: "Saturn",
    image: "/Saturn.png",
    color: "#eab308",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "120,536 km" },
      { label: "LENGTH OF DAY", value: "10.7 Earth hours" },
      { label: "AVERAGE TEMPERATURE", value: "140-degree Celsius" },
    ],
    companions: [
      { image: "/Jupiter.png", top: "20%", left: "20%", size: "w-24" },
      { image: "/Uranus.png", bottom: "20%", right: "20%", size: "w-20" },
      { image: "/Mars.png", bottom: "40%", left: "15%", size: "w-10" },
    ],
  },
  {
    id: "uranus",
    name: "Uranus",
    image: "/Uranus.png",
    color: "#22d3ee",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "51,118 km" },
      { label: "LENGTH OF DAY", value: "17.2 Earth hours" },
      { label: "AVERAGE TEMPERATURE", value: "195-degree Celsius" },
    ],
    companions: [
      { image: "/Saturn.png", top: "15%", left: "15%", size: "w-28" },
      { image: "/Neptune.png", bottom: "15%", right: "15%", size: "w-20" },
      { image: "/Earth.png", top: "40%", right: "25%", size: "w-12" },
    ],
  },
  {
    id: "neptune",
    name: "Neptune",
    image: "/Neptune.png",
    color: "#2563eb",
    stats: [
      { label: "GALAXY", value: "Milky Way" },
      { label: "DIAMETER", value: "49,528 km" },
      { label: "LENGTH OF DAY", value: "16.1 Earth hours" },
      { label: "AVERAGE TEMPERATURE", value: "-200°C" },
    ],
    companions: [
      { image: "/Uranus.png", top: "20%", left: "20%", size: "w-20" },
      { image: "/Sun.png", bottom: "20%", right: "10%", size: "w-40" },
    ],
  },
];

const PlanetView = () => {
  const { planetId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(0);

  const currentIndex = PLANETS.findIndex((p) => p.id === planetId) || 0;
  const activePlanet = PLANETS[currentIndex] || PLANETS[0];

  const nextPlanet = () => {
    setDirection(1);
    const nextIdx = (currentIndex + 1) % PLANETS.length;
    navigate(`/${PLANETS[nextIdx].id}`);
  };

  const prevPlanet = () => {
    setDirection(-1);
    const prevIdx = (currentIndex - 1 + PLANETS.length) % PLANETS.length;
    navigate(`/${PLANETS[prevIdx].id}`);
  };

  return (
    <main className="relative z-10 pt-32 md:pt-48 pb-0 flex-grow">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 text-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activePlanet.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ type: "spring", bounce: 0, duration: 1.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-8 md:mb-16">
              {activePlanet.name}
            </h2>
            <PlanetStats
              stats={activePlanet.stats}
              color={activePlanet.color}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <SolarSystem
        activePlanet={activePlanet}
        onNext={nextPlanet}
        onPrev={prevPlanet}
        leftPlanet={
          PLANETS[(currentIndex - 1 + PLANETS.length) % PLANETS.length]
        }
        rightPlanet={PLANETS[(currentIndex + 1) % PLANETS.length]}
        direction={direction}
        currentIndex={currentIndex}
      />
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#080b12] text-white selection:bg-blue-500/30 font-sans">
        <div
          className="fixed inset-0 z-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/galaxy_background.png')" }}
        ></div>

        <Header />

        <Routes>
          <Route path="/:planetId" element={<PlanetView />} />
          <Route path="/" element={<PlanetView />} />{" "}
          {/* Default to sun logic handled in PlanetView */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
