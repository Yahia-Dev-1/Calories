import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { TotalProvider } from './context/TotalContext';
import { FavoritesProvider, useFavorites } from './context/FavoritesContext';
import NavigationMenu from './components/NavigationMenu';
import HamburgerMenu from './components/HamburgerMenu';
import Sidebar from './Sidebar';
import FoodCard from './components/FoodCard';
import FoodDetails from './components/FoodDetails';
import About from './components/About';
import Search from './components/Search';
import Profile from './components/Profile';
import foods from './data/foods';
import './App.css';

function AppContent() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();
  const { isDarkMode, toggleTheme, backgroundColor, textColor, cardBackground, cardText, cardHover, inputBackground, inputText, inputBorder } = useTheme();
  const { getFavorites, toggleFavorite, isFavorite } = useFavorites();
  
  // عند فتح الصفحة، الفلتر يعود للوضع الافتراضي
  useEffect(() => {
    setSelectedCategory('All');
  }, [location.pathname]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Show sidebar only on home page, hide on other pages
    setShowSidebar(location.pathname === "/");
  }, [location.pathname]);

  const handleCardClick = () => setShowSidebar(false);

  const handleHeartClick = (e, foodId) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(foodId);
  };

  const categories = ['All', ...Array.from(new Set(foods.map(f => f.category).filter(Boolean)))];

  // فلترة وترتيب الأطعمة - المفضلة في الصف الأول
  const filteredFoods = selectedCategory === 'All' 
    ? foods 
    : foods.filter(food => food.category === selectedCategory);

  const sortedFoods = [...filteredFoods].sort((a, b) => {
    const aIsFavorite = isFavorite(a.id);
    const bIsFavorite = isFavorite(b.id);
    
    if (aIsFavorite && !bIsFavorite) return -1;
    if (!aIsFavorite && bIsFavorite) return 1;
    return 0;
  });

  return (
    <div className={`min-h-screen ${backgroundColor} ${textColor} transition-colors duration-300`}>
      <NavigationMenu />
      <HamburgerMenu 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      {showSidebar && <Sidebar />}
      
      {showSidebar && (
        <div className="text-center mt-4 mb-6">
          <h2 className={`text-xl font-semibold ${textColor}`}>
            {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
          </h2>
        </div>
      )}
      
      <div className="flex flex-row justify-center items-center pb-24">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 gap-x-12 justify-center items-center"
                >
                  {sortedFoods.map((food) => (
                    <div key={food.id} className="relative">
                      <FoodCard food={food} onCardClick={handleCardClick} />
                      {/* Heart Button */}
                      <button
                        onClick={(e) => handleHeartClick(e, food.id)}
                        className="absolute top-3 right-3 z-20 bg-white bg-opacity-90 rounded-full p-1.5 hover:bg-opacity-100 transition-all duration-200 shadow-md"
                      >
                        <svg 
                          className={`w-4 h-4 ${isFavorite(food.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </motion.div>
              }
            />
            <Route 
              path="/food/:id" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <FoodDetails />
                </motion.div>
              }
            />
            <Route 
              path="/about" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route 
              path="/search" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <Search />
                </motion.div>
              }
            />
            <Route 
              path="/profile" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <Profile />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TotalProvider>
        <FavoritesProvider>
          <Router basename="/Calories">
            <AppContent />
          </Router>
        </FavoritesProvider>
      </TotalProvider>
    </ThemeProvider>
  );
}

export default App;