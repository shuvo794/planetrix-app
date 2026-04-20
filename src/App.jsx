function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>
      
      <div className="relative z-10 text-center p-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl max-w-lg w-full mx-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Planetrix
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 font-light tracking-wide mb-10">
          Our digital frontier is currently being forged. 
          Something <span className="text-white font-medium">extraordinary</span> is coming.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium tracking-widest uppercase">
            Coming Soon
          </div>
          
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
