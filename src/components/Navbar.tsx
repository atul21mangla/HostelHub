import React from 'react';
import { Home, Menu, X, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Home className="h-8 w-8 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              HostelHub
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Blocks</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Rooms</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Mess</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Reviews</a>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
              Login
            </button>
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b shadow-lg">
            <div className="px-4 py-3 space-y-3">
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Blocks</a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Rooms</a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Mess</a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">Reviews</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;