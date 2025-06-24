import React from 'react'

function CTA() {
  return (
    <div>
      <div className="text-center">
          <div className="bg-gradient-to-r from-gray-950 to-black rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Start your journey
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              Become part of GTA. Unlock your potential with our experienced
              team.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Join Our Team
            </button>
          </div>
        </div>
    </div>
  )
}

export default CTA
