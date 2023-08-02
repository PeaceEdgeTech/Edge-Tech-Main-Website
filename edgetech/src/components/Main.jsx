import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Main = () => {

  return (
    <div className='flex flex-col items-center justify-center p-60'>
      <span className='text-2xl text-gray-600 m-2'>Welcome to <b className='text-blue-700'>EDGE TECH</b></span>
      <span className='text-xl text-gray-600 m-2'>Let's build your websites and software for you!</span>
      <span className='text-blue-600 flex m-2'>
        <a href="mailto:edgetech224@gmail.com"><AiOutlineMail className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
        <a href="https://github.com/PeaceOloruntoba"><FaGithub className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
        <a href="https://facebook.com/"><FaFacebook className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
        <a href="https://instagram.com/"><FaInstagram className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
        <a href="https://twitter.com/"><FaTwitter className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
        <a href="https://wa.me/2348166846226/"><FaWhatsapp className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
      </span>
      <div className='border border-xl w-full border-blue-600'></div>
    </div>
  );
};

export default Main;
