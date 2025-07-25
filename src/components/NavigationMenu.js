import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NavigationMenu = () => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    {
      path: '/',
      title: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <path d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
        </svg>
      )
    },
    {
      path: '/about',
      title: 'About',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <path d="M128,56A72,72,0,1,0,200,128,72.08113,72.08113,0,0,0,128,56Zm0,128a56,56,0,1,1,56-56A56.06353,56.06353,0,0,1,128,184Z" fill="currentColor"></path>
          <path d="M128,80a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H136V88A8,8,0,0,0,128,80Z" fill="currentColor"></path>
        </svg>
      )
    },
    {
      path: '/search',
      title: 'Search',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <circle cx="116" cy="116" r="84" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
          <line x1="175.39356" y1="175.40039" x2="223.99414" y2="224.00098" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
        </svg>
      )
    },
    {
      path: '/profile',
      title: 'Profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"></circle>
          <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="nav-menu">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
        >
          <span className="nav-link-icon">
            {item.icon}
          </span>
          <span className="nav-link-title">{item.title}</span>
        </Link>
      ))}
      
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="nav-link"
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <span className="nav-link-icon">
          {isDarkMode ? (
            // Sun icon for dark mode
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="128" cy="128" r="60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
              <line x1="128" y1="36" x2="128" y2="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="62.9" y1="62.9" x2="57.3" y2="57.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="36" y1="128" x2="28" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="62.9" y1="193.1" x2="57.3" y2="198.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="128" y1="220" x2="128" y2="228" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="193.1" y1="193.1" x2="198.7" y2="198.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="220" y1="128" x2="228" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="193.1" y1="62.9" x2="198.7" y2="57.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            </svg>
          ) : (
            // Moon icon for light mode
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <path d="M120.43,47.69c-4.85-1.67-9.3-3.37-13.09-4.71a8,8,0,0,0-8.31,1.31L68.69,79.87C49.87,97.23,43,120.61,54.92,140.28a15.75,15.75,0,0,0,1.89,2.72A80.12,80.12,0,0,0,120,176c.75,0,1.5,0,2.23-.05a71.89,71.89,0,0,0,31.24-9.14c4.38-1.93,8.24-4.59,11.47-7.82a71.73,71.73,0,0,0,7.82-11.47c9.14-31.24,9.14-64.85,0-96.09C158.3,3.2,141.24-2.22,120.43,47.69Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
          )}
        </span>
        <span className="nav-link-title">{isDarkMode ? 'Light' : 'Dark'}</span>
      </button>
    </div>
  );
};

export default NavigationMenu; 