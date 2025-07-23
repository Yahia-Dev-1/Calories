import { useParams, useNavigate } from "react-router-dom";
import foods from "../data/foods";
import { useState } from "react";
import { useTotal } from "../context/TotalContext"; 

const FoodDetails = () => {
  
  const { id } = useParams();
  const food = foods.find((item) => item.id === parseInt(id));
  const [grams, setGrams] = useState(100);
  const navigate = useNavigate();

  const calc = (value) => ((value * grams) / 100).toFixed(2);
  const { addMacros } = useTotal();
  const handleAdd = () => {
    addMacros(food, grams);
    navigate("/");
  };
  return (  <div>
      <div className="flex flex-col  justify-center items-center">
      <button onClick={() => navigate("/")} className=" flex flex-row   bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ">back</button>
      </div>
  
    
    <div className="   flex flex-col items-center    bg-white rounded shadow p-6 w-full max-w-md mx-auto mt-8">
      <img  src={food.image} alt={food.name} width="200" className="mb-4 rounded  " />
      <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
      <p className="mb-1">Calories: <span className="font-semibold">{calc(food.caloriesPer100g)}</span></p>
      <p className="mb-1">Protein: <span className="font-semibold">{calc(food.protein)}</span> g</p>
      <p className="mb-1">Fat: <span className="font-semibold">{calc(food.fat)}</span> g</p>
      <p className="mb-4">Carbs: <span className="font-semibold">{calc(food.carbs)}</span> g</p>
      <input
        type="number"
        value={grams}
        onChange={(e) => setGrams(e.target.value)}
        placeholder="Grams"
        className="border rounded px-2 py-1 mb-3 w-32 text-center"
      />
      <button onClick={() => {navigate("/"); handleAdd();}} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add</button>
    </div></div>
  );
};

export default FoodDetails;