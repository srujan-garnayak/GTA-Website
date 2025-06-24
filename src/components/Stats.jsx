import React, { useState, useEffect } from 'react';

const GamingClubStats = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    tournaments: 0,
    events: 0,
    awards: 0
  });

  const finalNumbers = {
    tournaments: 28,
    events: 120,
    awards: 5
  };

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedNumbers({
          tournaments: Math.floor(finalNumbers.tournaments * progress),
          events: Math.floor(finalNumbers.events * progress),
          awards: Math.floor(finalNumbers.awards * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedNumbers(finalNumbers);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateNumbers, 300);
    return () => clearTimeout(timer);
  }, []);

  const StatItem = ({ number, label, delay, color }) => (
    <div 
      className={`
        relative text-center p-12 cursor-pointer transition-all duration-500 ease-out
        rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.005]
        backdrop-blur-sm border border-white/[0.03]
        hover:transform hover:-translate-y-2 hover:border-${color}-500/20
        hover:shadow-2xl hover:shadow-${color}-500/10
        group animate-fadeInUp
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated cross lines on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-px h-0 bg-gradient-to-b from-transparent via-${color}-500/60 to-transparent transition-all duration-500 group-hover:h-full`} />
        <div className={`absolute w-0 h-px bg-gradient-to-r from-transparent via-${color}-500/60 to-transparent transition-all duration-500 group-hover:w-full`} />
      </div>

      <div className={`
        text-6xl md:text-8xl lg:text-9xl font-extralight leading-none mb-6
        text-white transition-all duration-400 relative z-10
        group-hover:text-${color}-500 group-hover:scale-105
        group-hover:drop-shadow-[0_0_20px_rgba(138,43,226,0.3)]
        tabular-nums
      `}>
        {number}
      </div>

      <div className={`
        text-xs font-medium text-white/70 uppercase tracking-[3px]
        transition-all duration-300 relative z-10
        group-hover:text-white/95 group-hover:tracking-[4px]
      `}>
        {label}
      </div>

      {/* Animated dot */}
      <div className="flex justify-center mt-6 relative z-10">
        <div className={`
          relative w-1 h-1 bg-white/40 rounded-full transition-all duration-400
          group-hover:bg-${color}-500 group-hover:w-2 group-hover:h-2
          group-hover:shadow-[0_0_12px_rgba(138,43,226,0.6)]
        `}>
          {/* Outer ring on hover */}
          <div className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-3 h-3 border border-transparent rounded-full transition-all duration-400
            group-hover:border-${color}-500/30 group-hover:w-5 group-hover:h-5
          `} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-radial from-slate-900 via-black to-black text-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.1), transparent),
              radial-gradient(2px 2px at 40% 70%, rgba(138, 43, 226, 0.2), transparent),
              radial-gradient(1px 1px at 90% 40%, rgba(30, 144, 255, 0.3), transparent),
              radial-gradient(1px 1px at 60% 10%, rgba(255, 20, 147, 0.2), transparent)
            `,
            backgroundSize: '200px 200px, 300px 300px, 150px 150px, 250px 250px',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 py-20 min-h-screen flex items-center justify-center relative z-10">
        <div className="relative w-full">
          {/* Horizontal line across grid */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            <StatItem 
              number={animatedNumbers.tournaments} 
              label="Tournaments" 
              delay={100}
              color="purple"
            />
            <StatItem 
              number={animatedNumbers.events} 
              label="Events" 
              delay={200}
              color="blue"
            />
            <StatItem 
              number={animatedNumbers.awards} 
              label="Awards" 
              delay={300}
              color="pink"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-10px, -10px) rotate(1deg); }
          66% { transform: translate(10px, -5px) rotate(-1deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, #0a0a0f 0%, #000000 70%);
        }
        
        ::selection {
          background: rgba(138, 43, 226, 0.3);
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default GamingClubStats;