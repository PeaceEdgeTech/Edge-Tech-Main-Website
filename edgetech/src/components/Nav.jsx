import React from 'react';
import logo from '../img/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-blue-600">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="ml-0">
        <img src={logo} alt="..." w="64" h="64" />
        </div>

        <div className="lg:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Skills</a>
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Team</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden py-2 px-4">
          <a href="#" className="hover:text-gray-400 block py-1">Home</a>
          <a href="#" className="hover:text-gray-400 block py-1">About</a>
          <a href="#" className="hover:text-gray-400 block py-1">Skills</a>
          <a href="#" className="hover:text-gray-400 block py-1">Projects</a>
          <a href="#" className="hover:text-gray-400 block py-1">Team</a>
          <a href="#" className="hover:text-gray-400 block py-1">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
