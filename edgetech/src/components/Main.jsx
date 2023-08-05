import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Main = () => {

  return (
    <div className='flex flex-col items-center justify-center mt-40 mb-60 dark:bg-gray-900'>
      <span className='text-2xl text-gray-600 m-2 dark:'>Welcome to <b className='text-blue-600'>EDGE TECH</b></span>
      <span className='text-xl text-gray-600 m-2'>Let's build your websites and software for you!</span>
      <span className='text-blue-600 flex m-2 justify-center '>
        <a href='mailto:edgetech224@gmail.com'>
          <div className='m-2 rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
            <AiOutlineMail />
          </div>
        </a>
        <a href='https://wa.me/2348166846226/' target='_blank' rel='noreferrer'>
          <div className='m-2 rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
            <FaGithub />
          </div>
        </a>
        <a href='https://facebook.com/' target='_blank' rel='noreferrer'>
          <div className='m-2 rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
            <FaFacebook />
          </div>
        </a>
        <a href='https://twitter.com/'>
          <div className='m-2 rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
            <FaTwitter />
          </div>
        </a>
        <a href='https://instagram.com/'>
          <div className='m-2 rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
            <FaInstagram />
          </div>
        </a>
        <a href='https://wa.me/2348166846226/' target='_blank' rel='noreferrer'>
          <div className='m-2 rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
            <FaWhatsapp />
          </div>
        </a>
      </span>
      <div className='border border-xl w-3/4 border-blue-600 mt-2 shadow-xl shadow-blue-400'></div>
    </div>
  );
};

export default Main;
