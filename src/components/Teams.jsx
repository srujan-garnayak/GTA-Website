import React from "react";
import CTA from "./CTA";

const TeamLeads = () => {
  const teamLeads = [
    {
      id: 1,
      name: "Bidyendu Das",
      role: "PRESIDENT",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791356/IMG-20250625-WA0001_rjvlko.jpg",
    },
    {
      id: 2,
      name: "Sumit K. Sahu",
      role: "VICE-PRESIDENT",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791356/IMG-20250625-WA0003_p0cx8a.jpg",
    },
    {
      id: 3,
      name: "Aditya Rout",
      role: "CODE HEAD",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0004_zgx1rv.jpg",
    },
    {
      id: 4,
      name: "Rahul Mahato",
      role: "3D HEAD",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0007_zdqadf.jpg",
    },
     {
      id: 5,
      name: "Akash Bhumij",
      role: "DESIGN HEAD",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791356/IMG-20250625-WA0002_en3il9.jpg",
    },
    {
      id: 6,
      name: "Sivanshu Surya",
      role: "TREASURER",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0009_glf4ff.jpg",
    },
    {
      id: 7,
      name: "Anubhab Das",
      role: "SECRETARY",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0008_lobfke.jpg",
    },
    {
      id: 8,
      name: "Shivam",
      role: "CONTENT PR",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0006_f3hdgq.jpg",
    },
    {
      id: 9,
      name: "Shivom Arpan Behera",
      role: "CONTENT PR",
      image:
        "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0005_cp7ued.jpg",
    },
  ];

  

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Neon Scan Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-px animate-pulse"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-wider">
                <span className="text-white">Meet</span>{" "}
                <span className="text-white">Our Team</span>{" "}
                <span className="text-cyan-400">Leaders</span>
              </h1>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
              A diverse squad of developers, designers, and leaders form the GTA core team—mentoring, organizing, and shaping every adventure.
            </p>
          </div>

          {/* Team Grid Container */}
          <div className="mb-20">
            {/* First Row - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
              {teamLeads.slice(0, 2).map((lead, index) => (
                <div
                  key={lead.id}
                  className="group relative"
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/50 group-hover:via-blue-500/50 group-hover:to-cyan-500/50 rounded-2xl blur-sm transition-all duration-700"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500 transform group-hover:-translate-y-3">
                    
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700"></div>
                    
                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animation: 'scan 2s linear infinite'}}></div>

                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-64 md:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 group-hover:contrast-125"
                      />
                      
                      {/* Holographic Grid Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{
                        backgroundImage: `
                          linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}></div>
                      
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      
                      {/* Rank Indicator */}
                      <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-3 py-1">
                        <span className="text-cyan-400 font-mono text-sm tracking-wider">RANK-{index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 lg:p-8">
                      <div className="text-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-wide group-hover:text-cyan-100 transition-colors duration-300">
                          {lead.name}
                        </h3>
                        <p className="text-cyan-400 group-hover:text-cyan-300 font-mono text-lg mb-6 tracking-widest">
                          {lead.role}
                        </p>

                        {/* Neural Interface Button */}
                        <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-cyan-600 hover:to-blue-600 border border-cyan-500/30 hover:border-cyan-400 text-white font-mono py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 group-hover:shadow-xl">
                          <span className="tracking-wider">NEURAL LINK</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
              {teamLeads.slice(2, 5).map((lead, index) => (
                <div
                  key={lead.id}
                  className="group relative"
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/40 group-hover:via-purple-500/40 group-hover:to-cyan-500/40 rounded-xl blur-sm transition-all duration-700"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500 transform group-hover:-translate-y-2">
                    
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-700"></div>

                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-48 md:h-52 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                      />
                      
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      
                      {/* Rank Indicator */}
                      <div className="absolute top-3 right-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg px-2 py-1">
                        <span className="text-purple-400 font-mono text-xs tracking-wider">LVL-{index + 3}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-4 lg:p-5">
                      <div className="text-center">
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-1 tracking-wide group-hover:text-cyan-100 transition-colors duration-300">
                          {lead.name}
                        </h3>
                        <p className="text-cyan-400 group-hover:text-purple-300 font-mono text-sm mb-4 tracking-widest">
                          {lead.role}
                        </p>

                        {/* Neural Interface Button */}
                        <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-purple-600 hover:to-cyan-600 border border-purple-500/30 hover:border-purple-400 text-white font-mono py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/10 hover:shadow-purple-400/30">
                          <span className="tracking-wider">CONNECT</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row - 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {teamLeads.slice(5, 9).map((lead, index) => (
                <div
                  key={lead.id}
                  className="group relative"
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/30 group-hover:via-cyan-500/30 group-hover:to-blue-500/30 rounded-lg blur-sm transition-all duration-700"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500 transform group-hover:-translate-y-1">
                    
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-700"></div>

                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-32 md:h-36 lg:h-40 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                      />
                      
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      
                      {/* Rank Indicator */}
                      <div className="absolute top-2 right-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded px-2 py-1">
                        <span className="text-blue-400 font-mono text-xs tracking-wider">#{index + 6}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-3 lg:p-4">
                      <div className="text-center">
                        <h3 className="text-sm lg:text-base font-bold text-white mb-1 tracking-wide group-hover:text-cyan-100 transition-colors duration-300">
                          {lead.name}
                        </h3>
                        <p className="text-cyan-400 group-hover:text-blue-300 font-mono text-xs mb-3 tracking-widest">
                          {lead.role}
                        </p>

                        {/* Neural Interface Button */}
                        <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-600 hover:to-cyan-600 border border-blue-500/30 hover:border-blue-400 text-white font-mono py-2 px-3 rounded text-xs transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/10 hover:shadow-blue-400/30">
                          <span className="tracking-wider">CONNECT</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <CTA />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default TeamLeads;