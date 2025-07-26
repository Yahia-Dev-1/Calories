import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import foods from '../data/foods';
import FoodCard from './FoodCard';
import Sidebar from '../Sidebar';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cardBackground, cardText, textColor } = useTheme();

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 pb-24">
      <Sidebar />
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 ${cardText} text-center`}>
          Search Foods
        </h1>
        
        {/* Search Input with New Design */}
        <div className="mb-8 flex justify-center">
          <div className="search-wrapper">
            <div className="grid" />
            <div id="poda">
              <div className="glow" />
              <div className="darkBorderBg" />
              <div className="darkBorderBg" />
              <div className="darkBorderBg" />
              <div className="white" />
              <div className="border" />
              <div id="main">
                <input 
                  placeholder="Search for foods or categories..." 
                  type="text" 
                  name="text" 
                  className="input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div id="input-mask" />
                <div id="pink-mask" />
                <div className="filterBorder" />
                <div id="filter-icon">
                  <svg preserveAspectRatio="none" height={27} width={27} viewBox="4.8 4.56 14.832 15.408" fill="none">
                    <path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="#d6d6e6" strokeWidth={1} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div id="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" height={24} fill="none" className="feather feather-search">
                    <circle stroke="url(#search)" r={8} cy={11} cx={11} />
                    <line stroke="url(#searchl)" y2="16.65" y1={22} x2="16.65" x1={22} />
                    <defs>
                      <linearGradient gradientTransform="rotate(50)" id="search">
                        <stop stopColor="#f8e7f8" offset="0%" />
                        <stop stopColor="#b6a9b7" offset="50%" />
                      </linearGradient>
                      <linearGradient id="searchl">
                        <stop stopColor="#b6a9b7" offset="0%" />
                        <stop stopColor="#837484" offset="50%" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
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