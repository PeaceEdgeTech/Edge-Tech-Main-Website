import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id="section" className="">
      <header className="flex justify-center py-4">
        <h3 className="font-semibold text-4xl text-blue-600">SKILLS</h3>
      </header>

      <div className="container mx-auto py-8 text-gray-700">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">

            
            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">HTML</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">CSS</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">Bootstrap</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">SASS</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">Tailwind CSS</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">JavaScript</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">PHP</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">LARAVEL</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">MongoDB</div>
              </div>
            </article>

            <div className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">SQLite</div>
              </div>
            </div>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">Python</div>
              </div>
            </article>

            <article className="p-4 border border-blue-500 rounded-lg transition duration-300 hover:bg-black hover:text-blue-500">
              <div className="flex items-center">
                <FaDotCircle className="text-blue-500 mr-2" />
                <div className="font-semibold">Django</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
