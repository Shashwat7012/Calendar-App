import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Event Scheduler</div>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="/contact" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
