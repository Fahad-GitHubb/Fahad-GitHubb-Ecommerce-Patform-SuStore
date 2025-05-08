import React from 'react';
import { Users, Award, Clock } from 'lucide-react';
import { useEffect } from 'react';


const AboutUs = () => {
  useEffect(() => {
    const token = sessionStorage.getItem('authenticated');
    if (token === 'false' || token === null) {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-white to-gray-50 text-gray-900 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="flex flex-col space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold mb-2">About Us</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded"></div>
        </div>
        
        <p className="mb-2 text-lg">
          Welcome to <strong className="text-indigo-700">SuStore</strong>, your number one source for all things furniture and home essentials. We're dedicated to giving you the very best of modern and classic styles, with a focus on quality, affordability, and customer satisfaction.
        </p>

        <p className="mb-2">
          Founded in 2025, SuStore has come a long way from its beginnings as a small online furniture outlet. When we first started out, our passion for elegant and accessible furniture drove us to start our own brand and now serve customers all over the world.
        </p>

        <p className="mb-2">
          We believe in providing furniture that adds comfort and style to your home. From unique sofas to trending decor pieces, we ensure every item meets our high standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <Users className="text-indigo-600 mb-2" size={24} />
            <h3 className="font-medium text-gray-800">Customer First</h3>
            <p className="text-center text-sm text-gray-600 mt-1">Your satisfaction is our top priority</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <Award className="text-indigo-600 mb-2" size={24} />
            <h3 className="font-medium text-gray-800">Premium Quality</h3>
            <p className="text-center text-sm text-gray-600 mt-1">We never compromise on materials</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <Clock className="text-indigo-600 mb-2" size={24} />
            <h3 className="font-medium text-gray-800">Fast Delivery</h3>
            <p className="text-center text-sm text-gray-600 mt-1">Quick and reliable shipping</p>
          </div>
        </div>

        <p className="mt-4 font-medium text-gray-700">
          Thank you for being a part of our journey. We hope you enjoy our products as much as we enjoy offering them to you.
        </p>

        <div className="mt-4">
          <span className="text-sm text-gray-500 italic">— The SuStore Team</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;