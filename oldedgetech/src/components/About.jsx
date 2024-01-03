import React from 'react'
import about from "../img/about.jpeg"

const About = () => {
  return (
    <div id="about" className='m-12 p-4 mb-20'>
      <div className='items-center justify-center flex p-6 mb-6'>
        <h1 className='text-4xl tracking-widest uppercase text-blue-600 font-semibold'>About Us</h1>
      </div>
      <div className='grid grid-col sm:grid-cols-1 md:grid-cols-2 '>
        <div className='flex flex-col items-center justify-center text-gray-800'>
          <p className='p-4'>Edge Tech is a Nigeria based tech solution company, it was founded June 19, 2023, with the purpose of promoting tech in Nigeria, Africa and the World at large, Edge Tech is a tech startup which has it's location on the web, our team of developers commutes remotely, providing a simple worklife and a flexible working hour for her employees . Edge Tech provides its tech solution services all around the world makin git a world class tech company. We are glad to have you here at Edge Tech.</p>
          <p className='p-4'>Edeg Tech offers three tech services at the moment, Web Dev, Software Dev, and Mobile Dev; with her team of experienced developers, Edge Tech is able to meet clients requirements as regard the above listed services. all you need to do is tell us your desire and we make it a reality for you, bringing your wildest dream through tech is our job. Our team of devs are well-trained and experienced in their respective expertise, assuring you an excellent job exclusively from Edge Tech.</p>
          <p className='p-4'>Edge Tech: making your widlest dreams true through tech</p>
        </div>
        <div>
          <div className='w-full h-full m-auto shadow-xl shadow-blue-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl h-full w-full' src={about} alt='/' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
