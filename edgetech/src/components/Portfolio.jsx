import React from 'react';
import audi from '../img/Audi.jpg';

const Portfolio = () => {
  return (
    <div id="portfolio" className="h-3/4 mx-12">
      <div className="container mx-auto">
        <header className='flex justify-center'>
          <h3 className="font-semibold text-4xl text-blue-600">PORTFOLIO</h3>
        </header>

        <div className="flex justify-center bg-gray-100 mt-6">
          <div className="grid grid-cols-1 my-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-20 gap-4 md:gap-10 mt-8">
          <div className="group relative bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />  
                <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-semibold">Tools:</p>
                  <ul className="list-disc pl-4 text-white">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
              </div>
            </div>

            <div className="group relative bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />  
                <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-semibold">Tools:</p>
                  <ul className="list-disc pl-4 text-white">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
              </div>
            </div>

            <div className="group relative bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />  
                <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-semibold">Tools:</p>
                  <ul className="list-disc pl-4 text-white">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
              </div>
            </div>

            <div className="group relative bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />  
                <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-semibold">Tools:</p>
                  <ul className="list-disc pl-4 text-white">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
              </div>
            </div>

            <div className="group relative bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />  
                <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-semibold">Tools:</p>
                  <ul className="list-disc pl-4 text-white">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
              </div>
            </div>

            <div className="group relative bg-white p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black">
              <img src={audi} alt="one of my old cars" className="w-40 h-40 rounded-md" />  
                <div className="opacity-0 absolute top-4 bg-gray-500 bg-opacity-70 w-40 h-40 rounded-md p-2 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-semibold">Tools:</p>
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
