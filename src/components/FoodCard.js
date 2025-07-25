import { Link } from "react-router-dom";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const FoodCard = React.memo(({ food, onCardClick }) => {
  const { cardBackground, cardText, cardHover } = useTheme();
  
  return (
    <Link to={`/food/${food.id}`} className="block" onClick={onCardClick}>
        <div className={`${cardBackground} rounded-lg shadow p-4 w-40 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-md ${cardHover} cursor-pointer`}>
        <img src={process.env.PUBLIC_URL + '/img/' + food.image} alt={food.name} className="w-28 h-28 object-cover mb-3 rounded-lg shadow" loading="lazy" />
        <h3 className={`font-semibold text-lg ${cardText} group-hover:text-gray-900 transition-colors duration-200`} style={{fontFamily: 'inherit', letterSpacing: '0.01em'}}> {food.name} </h3>
      </div>
    </Link>
  );
});

export default FoodCard;