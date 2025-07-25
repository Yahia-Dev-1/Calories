import { useParams, useNavigate } from "react-router-dom";
import foods from "../data/foods";
import { useState } from "react";
import { useTotal } from "../context/TotalContext";
import { useTheme } from "../context/ThemeContext"; 

const FoodDetails = () => {
  
  const { id } = useParams();
  const food = foods.find((item) => item.id === parseInt(id));
  const [grams, setGrams] = useState(100);
  const navigate = useNavigate();
  const { cardBackground, cardText, textColor, inputBackground, inputText, inputBorder, buttonBackground, buttonText, buttonHover } = useTheme();

  const calc = (value) => ((value * grams) / 100).toFixed(2);
  const { addMacros } = useTotal();
  const handleAdd = () => {
    addMacros(food, grams);
    navigate("/");
  };
  return (
    <div className="pb-24">
      <div className="flex flex-col  justify-center items-center">
        <button onClick={() => navigate("/")} className={`flex flex-row ${buttonBackground} ${buttonText} px-4 py-2 rounded ${buttonHover} transition shadow-sm border border-blue-100`}>Back</button>
      </div>
      <div className={`flex flex-col items-center ${cardBackground} rounded-lg shadow p-6 w-full max-w-md mx-auto mt-8 border border-gray-100`}>
        <img src={process.env.PUBLIC_URL + '/img/' + food.image} alt={food.name} width="200" className="mb-4 rounded-lg shadow-sm" />
        <h2 className={`text-2xl font-bold mb-2 ${cardText}`} style={{fontFamily: 'inherit', letterSpacing: '0.01em'}}>{food.name}</h2>
        <p className={`mb-1 ${textColor}`}>Calories: <span className="font-semibold text-blue-700">{calc(food.caloriesPer100g)}</span></p>
        <p className={`mb-1 ${textColor}`}>Protein: <span className="font-semibold text-blue-700">{calc(food.protein)}</span> g</p>
        <p className={`mb-1 ${textColor}`}>Fat: <span className="font-semibold text-blue-700">{calc(food.fat)}</span> g</p>
        <p className={`mb-4 ${textColor}`}>Carbs: <span className="font-semibold text-blue-700">{calc(food.carbs)}</span> g</p>
        <input
          type="number"
          value={grams}
          onChange={(e) => setGrams(e.target.value)}
          placeholder="Grams"
          className={`border ${inputBorder} rounded px-2 py-1 mb-3 w-32 text-center focus:outline-none focus:ring-2 focus:ring-blue-100 ${inputBackground} ${inputText}`}
        />
        <button onClick={() => {navigate("/"); handleAdd();}} className={`${buttonBackground} ${buttonText} px-4 py-2 rounded ${buttonHover} transition shadow-sm border border-blue-100`}>Add to Tracker</button>
      </div>
    </div>
  );
};

export default FoodDetails;