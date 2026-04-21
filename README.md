# 🪐 Planetrix

An interactive and beautifully animated web application to explore the Solar System. Built with modern web technologies, Planetrix provides a seamless and visually stunning experience as you navigate through different celestial bodies, viewing their unique statistics and companions.

---

## ✨ Features

- **Interactive Navigation:** Smoothly transition between the Sun and 8 planets of our solar system.
- **Dynamic Theming:** The user interface automatically adapts its color scheme (glows, accents, and highlights) to match the currently viewed planet.
- **Fluid Animations:** Powered by Framer Motion, experiencing page transitions and celestial movements feels organic and engaging.
- **Responsive Design:** Carefully crafted to look out-of-this-world on any device size, from mobile phones to large desktop screens.
- **Educational Insights:** Instantly view key statistics for each celestial body, including its diameter, length of day, and average temperature.

---

## 🛠️ Tech Stack

This project leverages a modern and fast frontend ecosystem:

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router v7](https://reactrouter.com/)

---

## 📂 Project Structure

```text
planetrix-app/
├── public/                 # Static assets (images of planets, backgrounds)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Footer.jsx      # Bottom navigation/links
│   │   ├── Header.jsx      # Top navigation/branding
│   │   ├── PlanetStats.jsx # Displays statistics of the active planet
│   │   └── SolarSystem.jsx # Interactive 3D-like planetary viewer
│   ├── App.jsx             # Main application logic, routing, and planet data
│   ├── index.css           # Global styles and Tailwind configuration
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd planetrix-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port specified in your terminal) to explore the solar system!

---

## 📜 Scripts

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles the application for production deployment.
- `npm run preview`: Locally preview the production build.
- `npm run lint`: Runs ESLint to check for code quality and errors.

---

## 🎨 Design Aesthetic

Planetrix was built with a premium space-themed aesthetic. It features a deep space background, glassmorphism elements, and vibrant, theme-aware glows that dynamically update based on the planet's characteristics.
