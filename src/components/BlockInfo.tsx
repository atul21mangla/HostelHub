import React from 'react';
import { Building2, Users, Wifi, Shield } from 'lucide-react';

const BlockInfo = () => {
  const blocks = [
    { 
      name: 'Block A',
      floors: 4,
      rooms: 40,
      features: ['High-speed WiFi', '24/7 Security', 'Study Room']
    },
    {
      name: 'Block B',
      floors: 3,
      rooms: 30,
      features: ['Gaming Room', 'Laundry Service', 'Gym Access']
    },
    {
      name: 'Block C',
      floors: 4,
      rooms: 40,
      features: ['Reading Room', 'TV Lounge', 'Terrace Garden']
    },
  ];

  return (
    <div className="gradient-border rounded-lg p-6 hover-card">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Building2 className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Block Information
        </h2>
      </div>
      <div className="space-y-6">
        {blocks.map((block) => (
          <div key={block.name} className="border border-blue-100 rounded-lg p-4 hover:border-blue-200 transition-colors duration-200">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-gray-800 text-lg">{block.name}</h3>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {block.rooms} rooms
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {block.floors} floors • Modern Amenities
            </p>
            <div className="flex flex-wrap gap-2">
              {block.features.map((feature) => (
                <span key={feature} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockInfo;