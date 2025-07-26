import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import foods from '../data/foods';

const HamburgerMenu = ({ categories, selectedCategory, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('categories'); // 'categories' or 'favorites'
  const menuRef = useRef(null);
  const { textColor } = useTheme();
  const { getFavorites } = useFavorites();
  const navigate = useNavigate();

  // Category icons mapping
  const getCategoryIcon = (category) => {
    const icons = {
      'All': '🍽️',
      'Bakery': '🥖',
      'Eggs': '🥚',
      'Vegetables': '🥬',
      'Carbs': '🍚',
      'Dairy': '🥛',
      'Fats': '🫒',
      'Legumes': '🫘',
      'Sweets': '🍫',
      'Meat': '🥩',
      'Fish': '🐟',
      'Fruits': '🍎',
      'Traditional': '🍽️',
      'Snacks': '🍿',
      'Nuts': '🥜',
      'Potato': '🥔',
      'Poultry': '🍗',
      'Rabbit': '🐰'
    };
    return icons[category] || '🍽️';
  };

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    setIsOpen(false);
  };

  const handleFavoriteClick = (foodId) => {
    navigate(`/food/${foodId}`);
    setIsOpen(false);
  };

  const favorites = getFavorites();

  return (
    <div className="hamburger-menu" ref={menuRef} style={{ top: '2rem' }}>
      {/* Hamburger Button */}
      <button
        className={`hamburger-button ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle filter menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Filter Menu */}
      <div className={`filter-menu ${isOpen ? 'active' : ''}`}>
        {/* Tabs */}
        <div className="flex mb-4 border-b border-gray-300 dark:border-gray-600">
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'categories' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
            onClick={() => setActiveTab('categories')}
          >
            Categories
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'favorites' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites ({favorites.length})
          </button>
        </div>

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="filter-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-category ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                <span className="category-icon">{getCategoryIcon(category)}</span>
                <span className="category-name">{category}</span>
              </button>
            ))}
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="filter-categories">
            {favorites.length > 0 ? (
              favorites.map((foodId) => {
                const food = foods.find(f => f.id === foodId);
                return food ? (
                  <button
                    key={foodId}
                    className="filter-category hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleFavoriteClick(foodId)}
                  >
                    <span className="category-icon">❤️</span>
                    <span className="category-name">{food.name}</span>
                  </button>
                ) : null;
              })
            ) : (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                No favorites yet
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu; 