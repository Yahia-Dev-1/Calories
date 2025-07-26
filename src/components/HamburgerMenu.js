import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const HamburgerMenu = ({ categories, selectedCategory, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { textColor } = useTheme();

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

  return (
    <div className="hamburger-menu" ref={menuRef}>
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
        <h3 style={{ color: textColor }}>Categories</h3>
        
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
      </div>
    </div>
  );
};

export default HamburgerMenu; 