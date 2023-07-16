import React from 'react';
import audi from '../img/Audi.jpg';

const Portfolio = () => {
  return (
    <div id="section" className="h-3/4">
      <div className="container mx-auto">
        <header>
          <h3 className="font-semibold uppercase">portfolio</h3>
        </header>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="project-tools opacity-0 absolute top-0 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-all duration-400">
                <p className="font-semibold">Tools:</p>
                <ul className="list-disc pl-4">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>React</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="project-tools opacity-0 absolute top-0 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-all duration-400">
                <p className="font-semibold">Tools:</p>
                <ul className="list-disc pl-4">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>React</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="project-tools opacity-0 absolute top-0 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-all duration-400">
                <p className="font-semibold">Tools:</p>
                <ul className="list-disc pl-4">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>React</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="project-tools opacity-0 absolute top-0 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-all duration-400">
                <p className="font-semibold">Tools:</p>
                <ul className="list-disc pl-4">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>React</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="project-tools opacity-0 absolute top-0 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-all duration-400">
                <p className="font-semibold">Tools:</p>
                <ul className="list-disc pl-4">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>React</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />
              <div className="project-tools opacity-0 absolute top-0 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-all duration-400">
                <p className="font-semibold">Tools:</p>
                <ul className="list-disc pl-4">
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
