import React from 'react'
import  { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
      <div id="footer" className="bg-gray-400">
          <div className="flex flex-col">
          <h1 className='text-4xl self-center font-semibold p-10'>EDGE-TECH</h1>
            <div className='flex flex-col items-center sm:flex-row sm:w-full justify-center'>
                <ul className='flex flex-col items-center space-y-8 mb-16 sm:mb-14  sm:flex-row sm:space-y-0 sm:justify-between sm:w-full sm:mx-12'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
          </div>

            <div className='flex flex-col items-center'>
              <p>+234 816 684 6226</p>
              <a href="mailto:edgetech@gmail.com">edgetech@gmail.com</a>
                <p>Address: all around the web (Always watching you mhwaahaaa)</p>
                <div className=" flex justify-between w-4/5 my-6">
                  <AiOutlineInstagram  className="text-2xl"/>
                  <AiOutlineLinkedin className="text-2xl"/>
                  <AiFillGithub className='text-2xl' />
                  <AiOutlineTwitter className='text-2xl'/>
                  <AiOutlineFacebook className="text-2xl" href=''/>
                </div>
            </div>

          <article className="flex justify-between text-xs mt-2 mx-1 sm:mx-4">
            Copyright © 2023 DummyTech Solutions. All rights reserved.
            <div className="flex space-x-4">
              <p>Privacy policy</p>
              <p>Terms of use</p>
            </div>
          </article>
      </div>
  )
}

export default Footer
