import React from 'react';
import { BedDouble, Check, AlertCircle } from 'lucide-react';

const BedAvailability = () => {
  const availability = [
    {
      block: 'Block A',
      roomType: 'Single Occupancy',
      available: 5,
      total: 40,
      status: 'Limited',
    },
    {
      block: 'Block B',
      roomType: 'Double Sharing',
      available: 8,
      total: 60,
      status: 'Available',
    },
    {
      block: 'Block C',
      roomType: 'Triple Sharing',
      available: 12,
      total: 90,
      status: 'Available',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Limited' ? 'text-amber-600 bg-amber-50' : 'text-green-600 bg-green-50';
  };

  const getStatusIcon = (status: string) => {
    return status === 'Limited' ? AlertCircle : Check;
  };

  return (
    <div className="gradient-border rounded-lg p-6 hover-card">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <BedDouble className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Bed Availability
        </h2>
      </div>
      <div className="space-y-6">
        {availability.map((item) => {
          const StatusIcon = getStatusIcon(item.status);
          const statusColor = getStatusColor(item.status);
          
          return (
            <div key={`${item.block}-${item.roomType}`} className="border border-blue-100 rounded-lg p-4 hover:border-blue-200 transition-colors duration-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800 text-lg">{item.block}</h3>
                <span className={`flex items-center px-3 py-1 rounded-full text-xs ${statusColor}`}>
                  <StatusIcon className="h-3 w-3 mr-1" />
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{item.roomType}</p>
              <div className="space-y-2">
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${((item.total - item.available) / item.total) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.available} beds available</span>
                  <span className="text-gray-400">Total: {item.total}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BedAvailability;