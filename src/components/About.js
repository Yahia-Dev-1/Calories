import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { cardBackground, cardText, textColor } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pb-24">
      <div className={`${cardBackground} rounded-lg shadow-lg p-8 max-w-2xl w-full`}>
        <h1 className={`text-3xl font-bold mb-6 ${cardText} text-center`}>
          About Calories Tracker
        </h1>
        
        <div className={`space-y-4 ${textColor}`}>
          <p className="text-lg leading-relaxed">
            Welcome to our comprehensive calorie tracking application! This app helps you monitor your daily nutritional intake 
            and maintain a healthy lifestyle.
          </p>
          
          <h2 className={`text-xl font-semibold mt-6 mb-3 ${cardText}`}>Features:</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Track calories, protein, carbs, and fat</li>
            <li>Extensive food database with nutritional information</li>
            <li>Easy-to-use interface with dark/light mode</li>
            <li>Responsive design for all devices</li>
            <li>Real-time calculations and updates</li>
          </ul>
          
          <h2 className={`text-xl font-semibold mt-6 mb-3 ${cardText}`}>How to use:</h2>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Browse through the food categories or search for specific items</li>
            <li>Click on any food item to view detailed nutritional information</li>
            <li>Adjust the serving size in grams</li>
            <li>Add the food to your daily tracker</li>
            <li>Monitor your daily totals in the sidebar</li>
          </ol>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm italic">
              <strong>Note:</strong> This application is designed for educational and personal use. 
              For professional dietary advice, please consult with a healthcare provider or registered dietitian.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 