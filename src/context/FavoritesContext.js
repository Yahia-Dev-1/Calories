import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // استرجاع المفضلة من Local Storage عند تحميل الصفحة
  useEffect(() => {
    const loadFavorites = () => {
      try {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
          const parsedFavorites = JSON.parse(savedFavorites);
          if (Array.isArray(parsedFavorites)) {
            setFavorites(parsedFavorites);
          }
        }
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading favorites:', error);
        setIsLoaded(true);
      }
    };

    loadFavorites();
  }, []);

  // حفظ المفضلة في Local Storage عند تغييرها
  useEffect(() => {
    if (isLoaded) {
      const saveFavorites = () => {
        try {
          localStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
          console.error('Error saving favorites:', error);
        }
      };

      saveFavorites();
    }
  }, [favorites, isLoaded]);

  const toggleFavorite = (foodId) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(foodId) 
        ? prev.filter(id => id !== foodId)
        : [...prev, foodId];
      return newFavorites;
    });
  };

  const isFavorite = (foodId) => {
    return favorites.includes(foodId);
  };

  const getFavorites = () => {
    return favorites;
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavorites,
    clearFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}; 