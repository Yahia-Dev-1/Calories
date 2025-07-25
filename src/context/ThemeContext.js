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
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [isDarkMode]);

  const theme = {
    isDarkMode,
    toggleTheme,
    backgroundColor: isDarkMode ? 'bg-gray-900' : 'bg-white',
    textColor: isDarkMode ? 'text-white' : 'text-black',
    cardBackground: isDarkMode ? 'bg-gray-800' : 'bg-white',
    cardText: isDarkMode ? 'text-gray-100' : 'text-gray-700',
    cardHover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50',
    inputBackground: isDarkMode ? 'bg-gray-700' : 'bg-white',
    inputText: isDarkMode ? 'text-white' : 'text-black',
    inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
    buttonBackground: isDarkMode ? 'bg-gray-700' : 'bg-blue-50',
    buttonText: isDarkMode ? 'text-gray-100' : 'text-blue-700',
    buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-blue-100'
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 