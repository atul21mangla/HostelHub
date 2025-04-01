import React from 'react';
import { UtensilsCrossed, Clock, Coffee, Soup } from 'lucide-react';

const MessFacilities = () => {
  const meals = [
    {
      meal: 'Breakfast',
      time: '7:30 AM - 9:30 AM',
      items: 'Idli, Dosa, Bread, Eggs, Tea/Coffee',
      icon: Coffee,
      highlight: 'Fresh and Healthy Start'
    },
    {
      meal: 'Lunch',
      time: '12:30 PM - 2:30 PM',
      items: 'Rice, Roti, Dal, Vegetables, Curd',
      icon: UtensilsCrossed,
      highlight: 'Balanced Nutrition'
    },
    {
      meal: 'Dinner',
      time: '7:30 PM - 9:30 PM',
      items: 'Rice, Roti, Dal, Vegetables, Dessert',
      icon: Soup,
      highlight: 'Variety of Options'
    },
  ];

  return (
    <div className="gradient-border rounded-lg p-6 hover-card">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <UtensilsCrossed className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Mess Facilities
        </h2>
      </div>
      <div className="space-y-6">
        {meals.map((meal) => (
          <div key={meal.meal} className="border border-blue-100 rounded-lg p-4 hover:border-blue-200 transition-colors duration-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <meal.icon className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-800 text-lg">{meal.meal}</h3>
              </div>
              <div className="flex items-center text-sm text-blue-600">
                <Clock className="h-4 w-4 mr-1" />
                {meal.time}
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{meal.items}</p>
            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs">
              {meal.highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessFacilities;