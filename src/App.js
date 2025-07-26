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
  const { getFavorites } = useFavorites();
  
  // عند فتح الصفحة، الفلتر يعود للوضع الافتراضي
  useEffect(() => {
    setSelectedCategory('All');
  }, [location.pathname]);

  useEffect(() => {
    // Show sidebar only on home page, hide on other pages
    setShowSidebar(location.pathname === "/");
  }, [location.pathname]);

  const handleCardClick = () => setShowSidebar(false);

  const categories = ['All', ...Array.from(new Set(foods.map(f => f.category).filter(Boolean)))];

  // فلترة وترتيب الأطعمة - المفضلة في الصف الأول
  const favorites = getFavorites();
  
  const filteredFoods = foods.filter(food => 
    selectedCategory === 'All' || food.category === selectedCategory
  );

  // ترتيب المأكولات: المفضلة أولاً، ثم الباقي
  const sortedFoods = [...filteredFoods].sort((a, b) => {
    const aIsFavorite = favorites.includes(a.id);
    const bIsFavorite = favorites.includes(b.id);
    
    if (aIsFavorite && !bIsFavorite) return -1;
    if (!aIsFavorite && bIsFavorite) return 1;
    return 0;
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${backgroundColor}`}>
      {/* قائمة التنقل */}
      <NavigationMenu />
      
      {/* Hamburger Menu للفلتر */}
      <HamburgerMenu 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {showSidebar && <Sidebar />}
      
      {/* عرض التصنيف المحدد */}
      {location.pathname === "/" && (
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
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center"
                >
                  {sortedFoods.map((food) => (
                    <FoodCard key={food.id} food={food} onCardClick={handleCardClick} />
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