import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { name: 'Home', href: '#hero-section' },
    { name: 'Games', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Team', href: '#team' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#connect' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (linkName, href) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    
    // Handle smooth scrolling for anchor links
    if (href.startsWith('#') && href !== '#') {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    // Remove active state after animation
    setTimeout(() => {
      setActiveLink('');
    }, 500);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-fit bg-gradient-radial from-gray-900 via-black to-black text-white relative overflow-x-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="w-full h-full opacity-20 animate-pulse"
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

      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full px-6 md:px-10 py-6 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-b border-white/8' 
            : 'bg-gradient-to-br from-white/2 to-white/0 backdrop-blur-md border-b border-white/3'
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-bold text-white tracking-wide transition-all duration-300 hover:text-purple-500 hover:drop-shadow-lg relative group"
            onClick={(e) => e.preventDefault()}
          >
            GTA
            <span className="text-xs opacity-70 ml-1 align-super">®</span>
            <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12 lg:space-x-16 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.name, link.href);
                  }}
                  className={`
                    relative text-sm lg:text-base font-medium tracking-wide py-2 px-1 transition-all duration-300 group
                    ${activeLink === link.name 
                      ? 'text-purple-500 scale-95' 
                      : 'text-white/70 hover:text-white/95'
                    }
                  `}
                >
                  {link.name}
                  
                  {/* Animated underline */}
                  <div 
                    className={`
                      absolute bottom-0 left-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent 
                      transition-all duration-100 ease-out transform -translate-x-1/2
                      ${activeLink === link.name 
                        ? 'w-full opacity-100' 
                        : 'w-0 group-hover:w-full opacity-80'
                      }
                    `} 
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1 p-2 transition-all duration-300 hover:scale-105"
            aria-label="Toggle mobile menu"
          >
            <span 
              className={`w-6 h-0.5 bg-white/80 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} 
            />
            <span 
              className={`w-6 h-0.5 bg-white/80 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} 
            />
            <span 
              className={`w-6 h-0.5 bg-white/80 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-gray-900/95 to-black/95 
            backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-out
            ${isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
            }
          `}
        >
          <ul className="flex flex-col py-8 space-y-6">
            {navLinks.map((link, index) => (
              <li key={link.name} className="px-6">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.name, link.href);
                  }}
                  className={`
                    block text-base font-medium tracking-wide py-2 transition-all duration-300
                    ${activeLink === link.name 
                      ? 'text-purple-500 scale-95' 
                      : 'text-white/70 hover:text-white/95 hover:translate-x-2'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Demo Content */}
      <div id='hero-section' className="pt-32 px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            GTA Gaming Club
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-8 tracking-wide">
            Elite Gaming Community
          </p>
          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Join the ultimate gaming experience with cutting-edge technology and passionate gamers worldwide.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-10px, -10px) rotate(1deg); }
          66% { transform: translate(10px, -5px) rotate(-1deg); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, #0a0a0f 0%, #000000 70%);
        }
      `}</style>
    </div>
  );
};

export default Navbar;