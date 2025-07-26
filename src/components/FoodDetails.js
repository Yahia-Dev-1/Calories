import { useParams, useNavigate } from "react-router-dom";
import foods from "../data/foods";
import { useState } from "react";
import { useTotal } from "../context/TotalContext";
import { useTheme } from "../context/ThemeContext";
import { useFavorites } from "../context/FavoritesContext";
import HeartButton from "./HeartButton";

const FoodDetails = () => {
  
  const { id } = useParams();
  const food = foods.find((item) => item.id === parseInt(id));
  const [grams, setGrams] = useState(100);
  const navigate = useNavigate();
  const { cardBackground, cardText, textColor, inputBackground, inputText, inputBorder, buttonBackground, buttonText, buttonHover, isDarkMode } = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();

  const calc = (value) => ((value * grams) / 100).toFixed(2);
  const { addMacros } = useTotal();
  const handleAdd = () => {
    addMacros(food, grams);
    navigate("/");
  };

  const handleHeartClick = () => {
    toggleFavorite(food.id);
  };
  
  return (
    <div className="pb-24">
      <div className="flex flex-col justify-center items-center pt-8">
        <button 
          onClick={() => navigate("/")} 
          className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} text-center w-48 rounded-2xl h-14 relative text-xl font-semibold group shadow-lg transition-all duration-300 hover:scale-105`}
          type="button"
        >
          <div className={`${isDarkMode ? 'bg-blue-500' : 'bg-green-400'} rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
              <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="currentColor"></path>
              <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="currentColor"></path>
            </svg>
          </div>
          <p className="translate-x-2">Go Back</p>
        </button>
      </div>
      
      <div className="flex justify-center items-center mt-8">
        <div className={`flex flex-col items-center ${cardBackground} rounded-lg shadow p-6 w-full max-w-md mx-auto border border-gray-100 relative`}>
          {/* الصورة في المنتصف */}
          <img src={process.env.PUBLIC_URL + '/img/' + food.image} alt={food.name} width="200" className="mb-4 rounded-lg shadow-sm" />
          
          {/* زر القلب تحت الصورة */}
          <div className="mb-4 transform scale-75">
            <HeartButton 
              isFavorite={isFavorite(food.id)}
              onToggle={handleHeartClick}
              foodId={food.id}
            />
          </div>
          
          <h2 className={`text-2xl font-bold mb-2 ${cardText}`} style={{fontFamily: 'inherit', letterSpacing: '0.01em'}}>{food.name}</h2>
          <p className={`mb-1 ${textColor}`}>Calories: <span className="font-semibold text-amber-700">{calc(food.caloriesPer100g)}</span></p>
          <p className={`mb-1 ${textColor}`}>Protein: <span className="font-semibold text-amber-700">{calc(food.protein)}</span> g</p>
          <p className={`mb-1 ${textColor}`}>Fat: <span className="font-semibold text-amber-700">{calc(food.fat)}</span> g</p>
          <p className={`mb-4 ${textColor}`}>Carbs: <span className="font-semibold text-amber-700">{calc(food.carbs)}</span> g</p>
          
          <input
            type="number"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
            placeholder="Grams"
            className={`border ${inputBorder} rounded px-2 py-1 mb-3 w-32 text-center focus:outline-none focus:ring-2 focus:ring-blue-100 ${inputBackground} ${inputText}`}
          />
          
          <button onClick={() => {navigate("/"); handleAdd();}} className="button">
            <span className="text">Add to Tracker</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;