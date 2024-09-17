import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="/about" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-300">
        Learn more about me →
      </a>
    </div>
  );
};

export default AboutSection;
