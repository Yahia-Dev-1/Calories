import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTotal } from '../context/TotalContext';

const Profile = () => {
  const { cardBackground, cardText, textColor, inputBackground, inputText, inputBorder, buttonBackground, buttonText, buttonHover, isDarkMode } = useTheme();
  const { totalCalories, totalCarbs, totalProtein, totalFat, addedFoods, clearAll } = useTotal();
  
  const [userProfile, setUserProfile] = useState({
    name: 'User',
    age: 25,
    weight: 70,
    height: 170,
    activityLevel: 'moderate',
    goal: 'maintain'
  });

  const [saveStatus, setSaveStatus] = useState('');

  // استرجاع البيانات من Local Storage عند تحميل الصفحة
  useEffect(() => {
    const loadSavedProfile = () => {
      try {
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
          const parsedProfile = JSON.parse(savedProfile);
          // التحقق من صحة البيانات
          if (parsedProfile && typeof parsedProfile === 'object') {
            setUserProfile(parsedProfile);
            setSaveStatus('Data loaded successfully!');
            setTimeout(() => setSaveStatus(''), 2000);
          }
        }
      } catch (error) {
        console.error('Error loading saved profile:', error);
        setSaveStatus('Error loading data');
        setTimeout(() => setSaveStatus(''), 2000);
      }
    };

    loadSavedProfile();
  }, []);

  // حفظ البيانات في Local Storage عند تغييرها
  useEffect(() => {
    const saveProfile = () => {
      try {
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        setSaveStatus('Data saved!');
        setTimeout(() => setSaveStatus(''), 2000);
      } catch (error) {
        console.error('Error saving profile:', error);
        setSaveStatus('Error saving data');
        setTimeout(() => setSaveStatus(''), 2000);
      }
    };

    // تأخير قليل لتجنب الحفظ المتكرر
    const timeoutId = setTimeout(saveProfile, 500);
    return () => clearTimeout(timeoutId);
  }, [userProfile]);

  const calculateBMR = () => {
    // Mifflin-St Jeor Equation
    const bmr = 10 * userProfile.weight + 6.25 * userProfile.height - 5 * userProfile.age + 5;
    return Math.round(bmr);
  };

  const calculateTDEE = () => {
    const bmr = calculateBMR();
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    return Math.round(bmr * activityMultipliers[userProfile.activityLevel]);
  };

  const tdee = calculateTDEE();
  const bmr = calculateBMR();

  return (
    <div className="min-h-screen p-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 ${cardText} text-center`}>
          Profile & Statistics
        </h1>

        {/* Save Status */}
        {saveStatus && (
          <div className={`mb-4 p-3 rounded-lg text-center ${
            saveStatus.includes('Error') 
              ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300' 
              : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
          }`}>
            {saveStatus}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className={`${cardBackground} rounded-lg shadow-lg p-6`}>
            <h2 className={`text-xl font-semibold mb-4 ${cardText}`}>Personal Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${textColor}`}>Name</label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                  className={`w-full p-3 border ${inputBorder} rounded-lg ${inputBackground} ${inputText}`}
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${textColor}`}>Age</label>
                  <input
                    type="number"
                    value={userProfile.age}
                    onChange={(e) => setUserProfile({...userProfile, age: parseInt(e.target.value) || 0})}
                    className={`w-full p-3 border ${inputBorder} rounded-lg ${inputBackground} ${inputText}`}
                    min="1"
                    max="120"
                    placeholder="25"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${textColor}`}>Weight (kg)</label>
                  <input
                    type="number"
                    value={userProfile.weight}
                    onChange={(e) => setUserProfile({...userProfile, weight: parseInt(e.target.value) || 0})}
                    className={`w-full p-3 border ${inputBorder} rounded-lg ${inputBackground} ${inputText}`}
                    min="20"
                    max="300"
                    placeholder="70"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${textColor}`}>Height (cm)</label>
                <input
                  type="number"
                  value={userProfile.height}
                  onChange={(e) => setUserProfile({...userProfile, height: parseInt(e.target.value) || 0})}
                  className={`w-full p-3 border ${inputBorder} rounded-lg ${inputBackground} ${inputText}`}
                  min="100"
                  max="250"
                  placeholder="170"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${textColor}`}>Activity Level</label>
                <select
                  value={userProfile.activityLevel}
                  onChange={(e) => setUserProfile({...userProfile, activityLevel: e.target.value})}
                  className={`w-full p-3 border ${inputBorder} rounded-lg ${inputBackground} ${inputText}`}
                >
                  <option value="sedentary">Sedentary (little or no exercise)</option>
                  <option value="light">Lightly active (light exercise 1-3 days/week)</option>
                  <option value="moderate">Moderately active (moderate exercise 3-5 days/week)</option>
                  <option value="active">Very active (hard exercise 6-7 days/week)</option>
                  <option value="veryActive">Extra active (very hard exercise, physical job)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className={`${cardBackground} rounded-lg shadow-lg p-6`}>
            <h2 className={`text-xl font-semibold mb-4 ${cardText}`}>Daily Statistics</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20`}>
                  <p className={`text-sm ${textColor}`}>BMR</p>
                  <p className={`text-2xl font-bold ${cardText}`}>{bmr} kcal</p>
                </div>
                <div className={`p-4 rounded-lg bg-green-50 dark:bg-green-900/20`}>
                  <p className={`text-sm ${textColor}`}>TDEE</p>
                  <p className={`text-2xl font-bold ${cardText}`}>{tdee} kcal</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`${textColor}`}>Calories Consumed</span>
                  <span className={`font-semibold ${cardText}`}>{Math.round(totalCalories)} / {tdee} kcal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{width: `${Math.min((totalCalories / tdee) * 100, 100)}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className={`text-sm ${textColor}`}>Protein</p>
                  <p className={`font-semibold ${cardText}`}>{Math.round(totalProtein)}g</p>
                </div>
                <div className="text-center">
                  <p className={`text-sm ${textColor}`}>Carbs</p>
                  <p className={`font-semibold ${cardText}`}>{Math.round(totalCarbs)}g</p>
                </div>
                <div className="text-center">
                  <p className={`text-sm ${textColor}`}>Fat</p>
                  <p className={`font-semibold ${cardText}`}>{Math.round(totalFat)}g</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Foods */}
        <div className={`${cardBackground} rounded-lg shadow-lg p-6 mt-8`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${cardText}`}>Today's Foods</h2>
            <button
              onClick={clearAll}
              className={`${buttonBackground} ${buttonText} px-4 py-2 rounded ${buttonHover} transition`}
            >
              Clear All
            </button>
          </div>
          
          {addedFoods.length > 0 ? (
            <div className="space-y-2">
              {addedFoods.map((item, idx) => (
                <div key={idx} className={`flex justify-between items-center p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <span className={`${textColor}`}>{item.name}</span>
                  <span className={`${textColor}`}>{item.grams}g - {Math.round(item.calories)} kcal</span>
                </div>
              ))}
            </div>
          ) : (
            <p className={`${textColor} text-center py-4`}>No foods added today</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 