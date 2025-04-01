import React from 'react';
import { Users, Wifi, Coffee, Tv } from 'lucide-react';

const RoomTypes = () => {
  const roomTypes = [
    {
      type: 'Single Occupancy',
      price: '₹15,000/month',
      features: ['Private bathroom', 'Study table', 'Single bed', 'AC Room'],
      amenities: ['WiFi', 'Housekeeping', 'Power Backup']
    },
    {
      type: 'Double Sharing',
      price: '₹10,000/month',
      features: ['Shared bathroom', 'Study tables', 'Two beds', 'AC Room'],
      amenities: ['WiFi', 'Housekeeping', 'Laundry']
    },
    {
      type: 'Triple Sharing',
      price: '₹8,000/month',
      features: ['Shared bathroom', 'Study tables', 'Three beds', 'AC Room'],
      amenities: ['WiFi', 'Housekeeping', 'Common Room']
    },
  ];

  return (
    <div className="gradient-border rounded-lg p-6 hover-card">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Users className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Room Types
        </h2>
      </div>
      <div className="space-y-6">
        {roomTypes.map((room) => (
          <div key={room.type} className="border border-blue-100 rounded-lg p-4 hover:border-blue-200 transition-colors duration-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-800 text-lg">{room.type}</h3>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                {room.price}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {room.features.map((feature) => (
                  <span key={feature} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity) => (
                  <span key={amenity} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs flex items-center">
                    <Coffee className="h-3 w-3 mr-1" />
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomTypes;