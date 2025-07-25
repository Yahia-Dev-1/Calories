import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import foods from '../data/foods';
import FoodCard from './FoodCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cardBackground, cardText, textColor, inputBackground, inputText, inputBorder } = useTheme();

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 ${cardText} text-center`}>
          Search Foods
        </h1>
        
        {/* Search Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for foods or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full p-4 text-lg border ${inputBorder} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputBackground} ${inputText} shadow-sm`}
          />
        </div>

        {/* Search Results */}
        <div className="mb-4">
          <p className={`${textColor} text-center`}>
            {searchTerm ? `Found ${filteredFoods.length} results for "${searchTerm}"` : 'Search for foods to get started'}
          </p>
        </div>

        {/* Food Grid */}
        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} onCardClick={() => {}} />
            ))}
          </div>
        ) : searchTerm ? (
          <div className={`${cardBackground} rounded-lg shadow-lg p-8 text-center`}>
            <p className={`${textColor} text-lg`}>
              No foods found matching "{searchTerm}". Try a different search term.
            </p>
          </div>
        ) : (
          <div className={`${cardBackground} rounded-lg shadow-lg p-8 text-center`}>
            <p className={`${textColor} text-lg`}>
              Start typing to search for foods and categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search; 