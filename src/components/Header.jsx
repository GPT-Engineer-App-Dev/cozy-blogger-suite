import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">My Personal Blog</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;