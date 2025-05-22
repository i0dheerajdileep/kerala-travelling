import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
  isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMobile }) => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-6'}>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`
            transition-colors duration-200 font-medium text-sm
            ${isMobile 
              ? 'text-gray-800 hover:text-emerald-700' 
              : isScrolled 
                ? 'text-gray-800 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-100'
            }
          `}
        >
          {item.name}
        </a>
      ))}
      <a
        href="#contact"
        className={`
          ${isMobile ? 'mt-2 w-full text-center' : ''}
          px-6 py-2 rounded-full bg-emerald-600 text-white font-medium text-sm
          hover:bg-emerald-700 transition-colors duration-200
        `}
      >
        Book Now
      </a>
    </nav>
  );
};

export default Navbar;