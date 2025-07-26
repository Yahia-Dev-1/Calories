import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // تطبيق الوضع المظلم على مستوى document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fefdf7';
      document.body.style.color = '#1f2937';
    }
  }, [isDarkMode]);

  const theme = {
    isDarkMode,
    toggleTheme,
    backgroundColor: isDarkMode ? 'bg-gray-900' : 'bg-amber-5',
    textColor: isDarkMode ? 'text-white' : 'text-gray-800',
    cardBackground: isDarkMode ? 'bg-gray-800' : 'bg-amber-5',
    cardText: isDarkMode ? 'text-gray-100' : 'text-gray-700',
    cardHover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-amber-25',
    inputBackground: isDarkMode ? 'bg-gray-700' : 'bg-amber-5',
    inputText: isDarkMode ? 'text-white' : 'text-gray-800',
    inputBorder: isDarkMode ? 'border-gray-600' : 'border-amber-50',
    buttonBackground: isDarkMode ? 'bg-gray-700' : 'bg-amber-25',
    buttonText: isDarkMode ? 'text-gray-100' : 'text-amber-600',
    buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-amber-50'
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 