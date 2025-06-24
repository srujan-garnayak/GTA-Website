import React from 'react';

const TeamLeads = () => {
  const teamLeads = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lead Developer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with 8+ years of experience in modern web technologies."
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Design Lead",
      department: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Creative director specializing in user-centered design and brand strategy."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Project Manager",
      department: "Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Agile expert with a passion for delivering exceptional user experiences."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Tech Lead",
      department: "Architecture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "System architect focused on scalable solutions and performance optimization."
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Data Lead",
      department: "Analytics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Data scientist driving insights and machine learning initiatives."
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "DevOps Lead",
      department: "Infrastructure",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Cloud infrastructure specialist ensuring reliable and secure deployments."
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team Leaders
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A diverse squad of developers, designers, and leaders form the GTA core team—mentoring, organizing, and shaping every adventure.
          </p>
        </div>

        {/* Team Flex Container */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {teamLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 min-w-48 sm:min-w-56 md:min-w-64 lg:min-w-72 xl:min-w-80 relative"
            >
              {/* Background Lighting Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/30 group-hover:to-blue-500/20 transition-all duration-500 rounded-xl sm:rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-transparent group-hover:from-blue-400/10 group-hover:via-purple-400/15 group-hover:to-transparent transition-all duration-700 rounded-xl sm:rounded-2xl"></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-800 rounded-xl sm:rounded-2xl h-full">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Department Badge */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                  <span className="bg-blue-600 group-hover:bg-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                    {lead.department}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300">
                  {lead.name}
                </h3>
                <p className="text-blue-400 group-hover:text-purple-300 font-medium mb-2 sm:mb-3 text-sm sm:text-base transition-colors duration-300">
                  {lead.role}
                </p>
                <p className="text-gray-300 group-hover:text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-3 transition-colors duration-300">
                  {lead.bio}
                </p>

                {/* Connect Button */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/25 text-white font-medium py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                    Connect
                  </button>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Start your journey
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              Become part of GTA. Unlock your potential with our experienced team.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLeads;