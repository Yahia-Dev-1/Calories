import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FoodDetails from "./components/FoodDetails";
import FoodCard from "./components/FoodCard";
import foods from "./data/foods";
import Sidebar from "./Sidebar";
import { TotalProvider } from "./context/TotalContext";
import { AnimatePresence, motion } from "framer-motion";


function AppContent() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [search, setSearch] = useState("");
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === "/") {
      setShowSidebar(true);
    }
  }, [location.pathname]);


  const handleCardClick = () => setShowSidebar(false);

  // فلترة الأطعمة حسب البحث
  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
 

      {showSidebar && <Sidebar />}
      {/* شريط البحث أعلى يسار الصفحة */}
      <div className="flex flex-row justify-center items-center px-8 mt-4 pb-5 gap-2">
        <div className="relative w-64">
          <input
            type="text"
            placeholder=" 🔎Search for food..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded-full pl-4 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm placeholder-gray-400"
            style={{direction: 'ltr'}}
          />
        </div>
        <span className="text-gray-400 text-xl">
        
        </span>
      </div>
      <div className="flex flex-row justify-center items-center ">
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
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

function App() {
  return (
   
      <TotalProvider>
         <Router basename="/Calories">
        <AppContent />
         </Router>
      </TotalProvider>
   
  );
}

export default App;