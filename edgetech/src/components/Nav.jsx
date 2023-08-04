import React from 'react';
import logo from '../img/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import Toggle from './Toggle';

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id='nav' className='text-blue-600 font-bold'>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="ml-0">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </div>
        <div className='flex items-center justify-center'>
          <div className="lg:hidden">
            <button className="focus:outline-none" onClick={toggleMenu}>
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
          <div className="hidden lg:flex space-x-5 items-center">
            <ul className="lg:flex space-x-5 items-center">
              <li><a href="/" className="hover:text-blue-800">Home</a></li>
              <li><a href="#about" className="hover:text-blue-800">About</a></li>
              <li><a href="#skills" className="hover:text-blue-800">Skills</a></li>
              <li><a href="#services" className="hover:text-blue-800">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-800">Portfolio</a></li>
              <li>
                <button className='bg-gray-200 rounded p-2 hover:bg-gray-300 hover:text-blue-800'>
                  <a href="/contact">Contact</a>
                </button>
              </li>
            </ul>
          </div>
          <Toggle />
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden py-2 px-4">
          <a href="/" className="hover:text-blue-800 block py-1">Home</a>
          <a href="#about" className="hover:text-blue-800 block py-1">About</a>
          <a href="#skills" className="hover:text-blue-800 block py-1">Skills</a>
          <a href="#services" className="hover:text-blue-800 block py-1">Services</a>
          <a href="#projects" className="hover:text-blue-800 block py-1">Portfolio</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
