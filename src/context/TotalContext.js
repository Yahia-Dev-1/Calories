// src/context/TotalContext.jsx
import React, { createContext, useContext, useState } from "react";

const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  // قراءة البيانات من localStorage أو استخدام القيم الافتراضية
  const getInitial = (key, def) => {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : def;
  };

  const [totalCalories, setTotalCalories] = useState(getInitial('totalCalories', 0));
  const [totalCarbs, setTotalCarbs] = useState(getInitial('totalCarbs', 0));
  const [totalProtein, setTotalProtein] = useState(getInitial('totalProtein', 0));
  const [totalFat, setTotalFat] = useState(getInitial('totalFat', 0));
  const [addedFoods, setAddedFoods] = useState(getInitial('addedFoods', []));

  // حفظ القيم في localStorage عند أي تغيير
  React.useEffect(() => {
    localStorage.setItem('totalCalories', JSON.stringify(totalCalories));
    localStorage.setItem('totalCarbs', JSON.stringify(totalCarbs));
    localStorage.setItem('totalProtein', JSON.stringify(totalProtein));
    localStorage.setItem('totalFat', JSON.stringify(totalFat));
    localStorage.setItem('addedFoods', JSON.stringify(addedFoods));
  }, [totalCalories, totalCarbs, totalProtein, totalFat, addedFoods]);

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

  const clearAll = () => {
    setAddedFoods([]);
    setTotalCalories(0);
    setTotalCarbs(0);
    setTotalProtein(0);
    setTotalFat(0);
  };

  return (
    <TotalContext.Provider value={{
      totalCalories, totalCarbs, totalProtein, totalFat, addMacros, addedFoods, removeFood, clearAll
    }}>
      {children}
    </TotalContext.Provider>
  );
};

export const useTotal = () => useContext(TotalContext);