import React from 'react';
import { Star, Quote } from 'lucide-react';

const UserExperiences = () => {
  const reviews = [
    {
      name: 'Priya Singh',
      rating: 5,
      comment: 'Great facilities and friendly staff. The rooms are well-maintained and the environment is perfect for students.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      course: 'Computer Science',
      year: '3rd Year'
    },
    {
      name: 'Rahul Kumar',
      rating: 4,
      comment: 'Good mess food and clean environment. Could improve WiFi speed, but overall a great place to stay.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      course: 'Engineering',
      year: '2nd Year'
    },
    {
      name: 'Anita Patel',
      rating: 5,
      comment: 'Perfect location and excellent security. The staff is very helpful and it truly feels like home!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      course: 'Medicine',
      year: '4th Year'
    },
  ];

  return (
    <div className="gradient-border rounded-lg p-6 hover-card col-span-full lg:col-span-2">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Star className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          User Experiences
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="relative border border-blue-100 rounded-lg p-6 hover:border-blue-200 transition-colors duration-200">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-blue-100"
              />
              <div className="ml-3">
                <h3 className="font-medium text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.course} • {review.year}</p>
              </div>
            </div>
            <div className="flex items-center mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserExperiences;