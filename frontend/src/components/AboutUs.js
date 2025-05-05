import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container p-6 md:p-12 bg-white text-gray-900 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        Welcome to <strong>SuStore</strong>, your number one source for all things furniture and home essentials. We're dedicated to giving you the very best of modern and classic styles, with a focus on quality, affordability, and customer satisfaction.
      </p>

      <p className="mb-4">
        Founded in 2025, SuStore has come a long way from its beginnings as a small online furniture outlet. When we first started out, our passion for elegant and accessible furniture drove us to start our own brand and now serve customers all over the world.
      </p>

      <p className="mb-4">
        We believe in providing furniture that adds comfort and style to your home. From unique sofas to trending decor pieces, we ensure every item meets our high standards.
      </p>

      <p className="mt-6 font-medium text-gray-700">
        Thank you for being a part of our journey. We hope you enjoy our products as much as we enjoy offering them to you.
      </p>

      <div className="mt-6">
        <span className="text-sm text-gray-500">— The SuStore Team</span>
      </div>
    </div>
  );
};

export default AboutUs;
