import React from 'react'

function CTA() {
  return (
    <div>
      <div id='connect' className="text-center">
          <div className="bg-gradient-to-br from-black via-gray-950 to-black border border-gray-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto relative overflow-hidden group transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-500/30 hover:-translate-y-3 backdrop-blur-sm">
            {/* Animated neural network background */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
              <div className="absolute top-4 left-8 w-0.5 h-16 bg-gradient-to-b from-cyan-400/50 to-transparent rotate-45 group-hover:animate-pulse"></div>
              <div className="absolute bottom-6 right-12 w-0.5 h-12 bg-gradient-to-t from-purple-400/50 to-transparent -rotate-45 group-hover:animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-0.5 bg-gradient-to-r from-cyan-400/30 to-transparent group-hover:animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
            
            {/* Holographic border effect */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm animate-pulse"></div>
            
            {/* Scanning line effect */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 ease-in-out"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-cyan-300 group-hover:drop-shadow-lg font-mono tracking-wider">
                &gt; START_YOUR_JOURNEY.exe
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-6 transition-all duration-500 group-hover:text-cyan-200 font-mono leading-relaxed">
                // Initiating neural connection to GTA mainframe...<br/>
                // Accessing enhanced potential protocols...<br/>
                // Status: READY FOR INTEGRATION
              </p>
              <button className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg text-base sm:text-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 cursor-pointer relative overflow-hidden group/btn font-mono tracking-widest">
                {/* Matrix-style background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                
                {/* Scanning beam effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glitch effect bars */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse" style={{animationDelay: '0.2s'}}></div>
                
                <span className="relative z-10 group-hover/btn:drop-shadow-lg">[INITIALIZE_CONNECTION]</span>
              </button>
            </div>
            
            {/* Cyberpunk floating elements */}
            <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
            <div className="absolute top-8 right-8 w-0.5 h-0.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-600" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-800" style={{animationDelay: '0.7s'}}></div>
            
            {/* Digital grid overlay */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
              <div className="w-full h-full" style={{backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CTA