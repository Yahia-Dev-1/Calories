import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FoodDetails from "./components/FoodDetails";
import FoodCard from "./components/FoodCard";
import NavigationMenu from "./components/NavigationMenu";
import HamburgerMenu from "./components/HamburgerMenu";
import About from "./components/About";
import Search from "./components/Search";
import Profile from "./components/Profile";
import foods from "./data/foods";
import Sidebar from "./Sidebar";
import { TotalProvider } from "./context/TotalContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css"; 

function AppContent() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();
  const { isDarkMode, toggleTheme, backgroundColor, textColor, cardBackground, cardText, cardHover, inputBackground, inputText, inputBorder } = useTheme();
  // عند فتح الصفحة، الفلتر يعود للوضع الافتراضي
  useEffect(() => {
    setSelectedCategory('All');
  }, [location.pathname]);


  useEffect(() => {
    if (location.pathname === "/") {
      setShowSidebar(true);
    }
  }, [location.pathname]);


  const handleCardClick = () => setShowSidebar(false);




  const categories = ['All', ...Array.from(new Set(foods.map(f => f.category).filter(Boolean)))];



  // فلترة الأطعمة حسب التصنيف
  const filteredFoods = foods.filter(food =>
    selectedCategory === 'All' || food.category === selectedCategory
  );

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
                  {filteredFoods.map((food) => (
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
         <Router basename="/Calories">
        <AppContent />
         </Router>
      </TotalProvider>
    </ThemeProvider>
  );
}

export default App;