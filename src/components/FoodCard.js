import { Link } from "react-router-dom";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useFavorites } from "../context/FavoritesContext";

const FoodCard = React.memo(({ food, onCardClick }) => {
  const { cardBackground, cardText } = useTheme();
  const { isFavorite } = useFavorites();
  
  const favoriteStatus = isFavorite(food.id);
  
  return (
    <Link to={`/food/${food.id}`} className="block" onClick={onCardClick}>
      <div className={`relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl ${cardBackground} transition-transform duration-200 hover:scale-105 cursor-pointer group`}>
        <div className={`absolute flex flex-col items-center justify-center z-[1] opacity-90 rounded-xl inset-0.5 ${cardBackground} p-4`}>
          <img 
            src={process.env.PUBLIC_URL + '/img/' + food.image} 
            alt={food.name} 
            className="w-28 h-28 object-cover mb-3 rounded-lg shadow" 
            loading="lazy" 
          />
          <h3 className={`font-semibold text-lg text-center ${cardText}`} style={{fontFamily: 'inherit', letterSpacing: '0.01em'}}>
            {food.name}
          </h3>
        </div>
        <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
        
        {/* مؤشر صغير للمأكولات المفضلة */}
        {favoriteStatus && (
          <div className="absolute top-2 right-2 z-10">
            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
});

export default FoodCard;