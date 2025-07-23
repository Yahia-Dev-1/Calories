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
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === "/") {
      setShowSidebar(true);
    }
  }, [location.pathname]);


  const handleCardClick = () => setShowSidebar(false);

  return (
    <div>
 

      {showSidebar && <Sidebar />}
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
                  {foods.map((food) => (
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