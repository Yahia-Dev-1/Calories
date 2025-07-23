import { useTotal } from "./context/TotalContext";

function Sidebar() {
const { totalCalories, totalCarbs, totalProtein, totalFat, addedFoods, removeFood } = useTotal();

    return (
      
        <div className="flex flex-col justify-center items-center ">
          <aside className="bg-gray-200 p-4 text-center">
            <h2 className="font-bold mb-4">Total today</h2>
            <ul className="space-y-2">
              <li>calories 🔥: {Math.round(totalCalories)} kcal</li>
              <li>Carbs 🍚: {Math.round(totalCarbs)}g</li>
              <li>Protein 🍗: {Math.round(totalProtein)}g</li>
              <li>Fat 🥑: {Math.round(totalFat)}g</li>
            </ul>
            <ul className="space-y-2 mt-4">
              {addedFoods.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between bg-white rounded px-2 py-1">
                  <span>{item.name} ({item.grams}g)</span>
                  <button onClick={() => removeFood(idx)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">delete</button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
    )
}

export default Sidebar;