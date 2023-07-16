import React from 'react';
import logo from '../img/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-blue-600 font-bold">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="ml-0">
        <img src={logo} alt="..." className='w-20 h-20'/>
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
              <button className="bg-gray-900 rounded p-2 w-25 border border-blue-600 hover:bg-gray-700 hover:text-blue-400">
                <a href="/contact">Contact</a>
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
