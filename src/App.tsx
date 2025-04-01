import React from 'react';
import { Building2, UtensilsCrossed, Users, BedDouble, Star } from 'lucide-react';
import BlockInfo from './components/BlockInfo';
import RoomTypes from './components/RoomTypes';
import UserExperiences from './components/UserExperiences';
import MessFacilities from './components/MessFacilities';
import BedAvailability from './components/BedAvailability';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Welcome to HostelHub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your modern gateway to hassle-free hostel living. Experience comfort, convenience, and community.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockInfo />
          <RoomTypes />
          <BedAvailability />
          <MessFacilities />
          <UserExperiences />
        </div>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">HostelHub</span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto">
            Making hostel life better, one room at a time. Join our community today!
          </p>
          <p className="mt-8 text-sm text-gray-500">© 2024 HostelHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;