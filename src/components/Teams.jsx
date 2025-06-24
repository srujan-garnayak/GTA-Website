import React from 'react';

const TeamLeads = () => {
  const teamLeads = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lead Developer",
      department: "Engineering",
      image: "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791356/IMG-20250625-WA0001_rjvlko.jpg",
      bio: "Full-stack developer with 8+ years of experience in modern web technologies."
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Design Lead",
      department: "UX/UI Design",
      image: "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791356/IMG-20250625-WA0003_p0cx8a.jpg",
      bio: "Creative director specializing in user-centered design and brand strategy."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Project Manager",
      department: "Operations",
      image: "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0004_zgx1rv.jpg",
      bio: "Agile expert with a passion for delivering exceptional user experiences."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Tech Lead",
      department: "Architecture",
      image: "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0007_zdqadf.jpg",
      bio: "System architect focused on scalable solutions and performance optimization."
    },
    {
      id: 5,
      name: "David Kim",
      role: "Tech Lead",
      department: "Architecture",
      image: "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0006_f3hdgq.jpg",
      bio: "System architect focused on scalable solutions and performance optimization."
    },
    {
      id: 6,
      name: "David Kim",
      role: "Tech Lead",
      department: "Architecture",
      image: "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0008_lobfke.jpg",
      bio: "System architect focused on scalable solutions and performance optimization."
    },
    {
      id: 7,
      name: "David Kim",
      role: "Tech Lead",
      department: "Architecture",
      image: "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0009_glf4ff.jpg",
      bio: "System architect focused on scalable solutions and performance optimization."
    },
    {
      id: 8,
      name: "David Kim",
      role: "Tech Lead",
      department: "Architecture",
      image: "https://res.cloudinary.com/dhkfjehat/image/upload/v1750791355/IMG-20250625-WA0005_cp7ued.jpg",
      bio: "System architect focused on scalable solutions and performance optimization."
    },
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

        {/* Team Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {teamLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group relative"
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
                    className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Department Badge */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4">
                    <span className="bg-blue-600 group-hover:bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                      {lead.department}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 lg:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300">
                    {lead.name}
                  </h3>
                  <p className="text-blue-400 group-hover:text-purple-300 font-medium mb-3 text-base transition-colors duration-300">
                    {lead.role}
                  </p>
                  <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed line-clamp-3 transition-colors duration-300">
                    {lead.bio}
                  </p>

                  {/* Connect Button */}
                  <div className="mt-4 pt-4 border-t border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/25 text-white font-medium py-2 px-4 rounded-lg text-base transition-all duration-300 transform hover:scale-105">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
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