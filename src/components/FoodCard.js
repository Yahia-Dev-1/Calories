import { Link } from "react-router-dom";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const FoodCard = React.memo(({ food, onCardClick }) => {
  const { cardBackground, cardText } = useTheme();
  
  return (
    <Link to={`/food/${food.id}`} className="block" onClick={onCardClick}>
      <div className={`relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl ${cardBackground} transition-transform duration-200 hover:scale-105 cursor-pointer group`}>
        <div className={`absolute flex flex-col items-center justify-center z-[1] opacity-90 rounded-xl inset-0.5 ${cardBackground} p-4`}>
          <img 
            src={process.env.PUBLIC_URL + '/img/' + food.image} 
            alt={food.name} 
            className="justify-space-between w-28 h-28 object-cover mb-4 rounded-lg shadow" 
            loading="lazy" 
          />
          <h3 className={`font-semibold text-lg text-center ${cardText}`} style={{fontFamily: 'inherit', letterSpacing: '0.01em'}}>
            {food.name}
          </h3>
        </div>
        <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
      </div>
    </Link>
  );
});

export default FoodCard;