import React from 'react';
import audi from '../img/Audi.jpg';

const Portfolio = () => {
  return (
    <div id="projects" className="h-3/4 mx-12 text-gray-600 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto">
        <header className='flex justify-center'>
          <p className="tracking-widest font-bold text-4xl text-blue-600">PORTFOLIO</p>
        </header>
        <div className="flex justify-center bg-gray-100 mt-6 dark:bg-gray-800">
          <div className="grid grid-cols-1 my-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-20 gap-4 md:gap-10 mt-8">
            <div className="group relative bg-white p-4 border-2 border-blue-600 rounded-lg transition duration-300 hover:bg-black dark:hover:bg-white">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-semibold text-blue-600">Tools:</p>
                <ul className="list-disc pl-4 text-white">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>Python</li>
                  <li>Django</li>
                </ul>
              </div>
              Django Weather App
            </div>
            <div className="group relative bg-white p-4 border-2 border-blue-600 rounded-lg transition duration-300 hover:bg-black dark:hover:bg-white">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-semibold text-blue-600">Tools:</p>
                <ul className="list-disc pl-4 text-white">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              Easing Life Website
            </div>
            <div className="group relative bg-white p-4 border-2 border-blue-600 rounded-lg transition duration-300 hover:bg-black dark:hover:bg-white">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-semibold text-blue-600">Tools:</p>
                <ul className="list-disc pl-4 text-white">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>MySQL</li>
                </ul>
              </div>
              Klassy Cafe
            </div>
            <div className="group relative bg-white p-4 border-2 border-blue-600 rounded-lg transition duration-300 hover:bg-black dark:hover:bg-white">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-semibold text-blue-600">Tools:</p>
                <ul className="list-disc pl-4 text-white">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Python</li>
                  <li>BootStrap</li>
                  <li>SQLite</li>
                </ul>
              </div>
              Student Study Portal
            </div>
            <div className="group relative bg-white p-4 border-2 border-blue-600 rounded-lg transition duration-300 hover:bg-black dark:hover:bg-white">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-semibold text-blue-600">Tools:</p>
                <ul className="list-disc pl-4 text-white">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>React</li>
                </ul>
              </div>
              
            </div>
            <div className="group relative bg-white p-4 border-2 border-blue-600 rounded-lg transition duration-300 hover:bg-black dark:hover:bg-white">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-semibold text-blue-600">Tools:</p>
                <ul className="list-disc pl-4 text-white">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
