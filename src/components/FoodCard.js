import { Link } from "react-router-dom";

const FoodCard = ({ food, onCardClick }) => {
  return (
    <Link to={`/food/${food.id}`} className="block" onClick={onCardClick}>
      <div className="bg-white rounded shadow p-4 w-40 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
        <img src={food.image} alt={food.name} className="w-24 h-24 object-cover mb-2 rounded" />
        <h3 className="font-semibold text-lg text-gray-800">{food.name}</h3>
      </div>
    </Link>
  );
};

export default FoodCard;