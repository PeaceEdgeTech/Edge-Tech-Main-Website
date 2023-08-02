import React from 'react'
import {  AiOutlineMail } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id="footer" className="p-4">
      <div className="flex flex-col">
        <h1 className='text-4xl self-center font-bold p-8'>EDGE TECH</h1>
        <div className='flex flex-col items-center sm:flex-row sm:w-full justify-center'>
          <ul className='flex flex-col items-center mb-10 sm:mb-10  sm:flex-row sm:space-y-0 sm:justify-between sm:w-full sm:mx-12'>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <p>+234 816 684 6226</p>
        <a href="mailto:edgetech224@gmail.com">edgetech224@gmail.com</a>
        <p>Address: all around the web (Always watching you 😶‍🌫️😶‍🌫️😶‍🌫️)</p>
        <span className='text-gray-800 flex m-2'>
          <a href="mailto:edgetech224@gmail.com"><AiOutlineMail className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
          <a href="https://github.com/PeaceOloruntoba"><FaGithub className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
          <a href="https://facebook.com/"><FaFacebook className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
          <a href="https://instagram.com/"><FaInstagram className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
          <a href="https://twitter.com/"><FaTwitter className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
          <a href="https://wa.me/2348166846226/"><FaWhatsapp className='m-2 cursor-pointer hover:scale-150 ease-in duration-300' /></a>
        </span>
      </div>
      <article className="flex justify-center items-center text-xs mt-2 mx-1 sm:mx-4">
        Copyright © 2023 ,<a href="/">Edge Tech</a>. All rights reserved.
      </article>
    </div>
  )
}

export default Footer
