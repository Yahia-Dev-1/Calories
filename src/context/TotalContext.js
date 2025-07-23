// src/context/TotalContext.jsx
import React, { createContext, useContext, useState } from "react";

const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [addedFoods, setAddedFoods] = useState([]);

  const addCalories = (amount) => {
    setTotalCalories(prev => prev + amount);
  };

  const addMacros = (food, grams) => {
    const g = parseFloat(grams);
    setTotalCalories(prev => prev + (food.caloriesPer100g / 100) * g);
    setTotalCarbs(prev => prev + (food.carbs / 100) * g);
    setTotalProtein(prev => prev + (food.protein / 100) * g);
    setTotalFat(prev => prev + (food.fat / 100) * g);
    setAddedFoods(list => [
      ...list,
      {
        name: food.name,
        grams: g,
        calories: (food.caloriesPer100g / 100) * g,
        carbs: (food.carbs / 100) * g,
        protein: (food.protein / 100) * g,
        fat: (food.fat / 100) * g,
      }
    ]);
  };

  const removeFood = (idx) => {
    setAddedFoods(list => {
      const newList = list.filter((_, i) => i !== idx);
      // إعادة حساب القيم الكلية من جديد
      const totalCalories = newList.reduce((sum, item) => sum + item.calories, 0);
      const totalCarbs = newList.reduce((sum, item) => sum + item.carbs, 0);
      const totalProtein = newList.reduce((sum, item) => sum + item.protein, 0);
      const totalFat = newList.reduce((sum, item) => sum + item.fat, 0);
      setTotalCalories(totalCalories);
      setTotalCarbs(totalCarbs);
      setTotalProtein(totalProtein);
      setTotalFat(totalFat);
      return newList;
    });
  };

  return (
    <TotalContext.Provider value={{
      totalCalories, totalCarbs, totalProtein, totalFat, addMacros, addedFoods, removeFood
    }}>
      {children}
    </TotalContext.Provider>
  );
};

export const useTotal = () => useContext(TotalContext);