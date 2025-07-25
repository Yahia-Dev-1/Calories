import { useTotal } from "./context/TotalContext";
import { useTheme } from "./context/ThemeContext";

function Sidebar() {
const { totalCalories, totalCarbs, totalProtein, totalFat, addedFoods, removeFood, clearAll } = useTotal();
const { cardBackground, cardText, textColor, isDarkMode } = useTheme();

    return (

        <div className="flex flex-col justify-center items-center ">
          
            <aside className={`${cardBackground} p-4 text-center ${textColor} transition-all duration-300 ease-in-out`}>
            <h2 className="font-bold mb-4">Today's Total</h2>
            <ul className="space-y-2">
              <li>Calories 🔥: {Math.round(totalCalories)} kcal</li>
              <li>Carbs 🍚: {Math.round(totalCarbs)}g</li>
              <li>Protein 🍗: {Math.round(totalProtein)}g</li>
              <li>Fat 🥑: {Math.round(totalFat)}g</li>
            </ul>
            <ul className="space-y-2 mt-4">
              {addedFoods.map((item, idx) => (
                <li key={idx} className={`flex items-center justify-between rounded px-2 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <span>{item.name} ({item.grams}g)</span>
                  <button onClick={() => removeFood(idx)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                </li>
              ))}
            </ul>
            <button
              onClick={clearAll}
              className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 transition"
            >
              Clear All
            </button>
          </aside>
        </div>
    )
}

export default Sidebar;