import React from 'react';
import logo from '../img/logo.png'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-black text-blue-600 font-bold">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="ml-0">
        <img src={logo} alt="..." className='w-20 h-20'/>
        </div>

        <div className="lg:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            {isOpen ? (<FaTimes className="text-2xl" />) : (<FaBars className="text-2xl" />)}
          </button>
        </div>

        <div className="hidden lg:flex space-x-5 items-center">
          <ul className="lg:flex space-x-5 items-center">
            <li>
              <a href="/" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">About</a>
            </li>
            <li>
              <a href="/skills" className="hover:text-blue-400">Skills</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-blue-400">Projects</a>
            </li>
            <li>
              <a href="/team" className="hover:text-blue-400">Team</a>
            </li>
            <li>
              <button className="bg-gray-900 rounded p-2 w- border border-blue-600 hover:bg-gray-700 hover:text-blue-400"><a href="/contact">Contact</a></button>
            </li>
            <li>
            <buttonclassName={`relative rounded-full p-2 w-10 h-10 bg-gray-900 text-white focus:outline-none transition-colors duration-300 ${isDarkMode ? 'justify-end' : 'justify-start'}`}onClick={toggleDarkMode}>
      <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-blue-600 right-0' : 'bg-white left-0'} border border-${isDarkMode ? 'blue-600' : 'white'}`}/>
      <div className="flex items-center">
        <FaMoon className="text-yellow-400" />
        <FaSun className="text-yellow-400 ml-1" />
      </div>
    </button>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden py-2 px-4">
          <a href="/" className="hover:text-blue-400 block py-1">Home</a>
          <a href="/about" className="hover:text-blue-400 block py-1">About</a>
          <a href="/skills" className="hover:text-blue-400 block py-1">Skills</a>
          <a href="/projects" className="hover:text-blue-400 block py-1">Projects</a>
          <a href="/team" className="hover:text-blue-400 block py-1">Team</a>
          <a href="/contact" className="hover:text-blue-400 block py-1">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
