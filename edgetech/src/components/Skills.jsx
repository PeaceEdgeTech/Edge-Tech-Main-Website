import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const Skills = () => {
  return (
    <div id="section" className="">
      <header className="flex justify-center py-4">
        <h3 className="font-semibold text-4xl text-blue-600">SKILLS</h3>
      </header>
      <div className="container mx-auto ">
        <div className="flex flex-col items-center m-8">
          {/* FIRST ROW */}
          <div className='flex ring-1 p-4 mx-4 rounded-xl'>
            <article className="">
              <div className=" flex p-2">
                <FaDotCircle className="mr-1 relative top-1" />
                <div className="font-semibold">PHP</div>
              </div>
            </article>
            <article className="">
              <div className="flex p-2">
                <FaDotCircle className="mr-1 relative top-1" />
                <div className="font-semibold">LARAVEL</div>
              </div>
            </article>
            <article className="">
              <div className="flex p-2">
                <FaDotCircle className="mr-1 relative top-1" />
                <div className="font-semibold">MongoDB</div>
              </div>
            </article>
            <article className="">
              <div className="flex p-2">
                <FaDotCircle className="mr-1 relative top-1" />
                <div className="font-semibold">SQLite</div>
              </div>
            </article>
            <article className="">
              <div className="flex p-2">
                <FaDotCircle className="mr-1 relative top-1" />
                <div className="font-semibold">Python</div>
              </div>
            </article>
            <article className="">
              <div className="flex p-2">
                <FaDotCircle className="mr-1 relative top-1" />
                <div className="font-semibold">Django</div>
              </div>
            </article>
          </div>
        </div>
        {/* SECOND ROW */}
        <div className='flex ring-1 p-4 mx-4 rounded-xl'>
          <article className="">
            <div className=" flex p-2">
              <FaDotCircle className="mr-1 relative top-1" />
              <div className="font-semibold">PHP</div>
            </div>
          </article>
          <article className="">
            <div className="flex p-2">
              <FaDotCircle className="mr-1 relative top-1" />
              <div className="font-semibold">LARAVEL</div>
            </div>
          </article>
          <article className="">
            <div className="flex p-2">
              <FaDotCircle className="mr-1 relative top-1" />
              <div className="font-semibold">MongoDB</div>
            </div>
          </article>
          <article className="">
            <div className="flex p-2">
              <FaDotCircle className="mr-1 relative top-1" />
              <div className="font-semibold">SQLite</div>
            </div>
          </article>
          <article className="">
            <div className="flex p-2">
              <FaDotCircle className="mr-1 relative top-1" />
              <div className="font-semibold">Python</div>
            </div>
          </article>
          <article className="">
            <div className="flex p-2">
              <FaDotCircle className="mr-1 relative top-1" />
              <div className="font-semibold">Django</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Skills;