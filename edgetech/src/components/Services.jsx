import React from 'react'
import audi from '../img/Audi.jpg'

const Services = () => {
  return (
    <div className='p-4 m-4' id='services'>
    <header className="flex justify-center py-4">
      <h3 className="text-4xl tracking-widest uppercase text-blue-600 font-semibold">Services</h3>
    </header>
    <div className='grid grid-col-1 sm:grid-cols-3 md:grid-cols-3 items-center justify-center p-4'>
        <div className='flex flex-col items-center justify-center p-2 shadow-xl shadow-blue-400 rounded-lg mx-2'>
            <h3 className='uppercase text-xl text-blue-800 mb-1'>Web Development</h3>
            <img src={audi} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer'/>
            <p className='text-gray-800'>Our web development services focus on creating dynamic and user-friendly websites that align with your business objectives. From crafting visually appealing designs to implementing robust functionalities, we utilize the latest technologies and industry best practices to ensure your online presence stands out and delivers an exceptional user experience.</p>
        </div>
        <div className='flex flex-col items-center justify-center p-2 shadow-xl shadow-blue-400 rounded-lg mx-2'>
            <h3 className='uppercase text-xl text-blue-800 mb-1'>Software Development</h3>
            <img src={audi} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer'/>
            <p className='text-gray-800'>With our software development services, we bring your innovative ideas to life through custom software solutions. Our team of skilled developers designs and builds tailored applications, addressing specific business needs and challenges. We prioritize scalability, security, and efficiency to help your organization stay ahead in a fast-paced digital landscape.</p>
        </div>
        <div className='flex flex-col items-center justify-center p-2 shadow-xl shadow-blue-400 rounded-lg mx-2'>
            <h3 className='uppercase text-xl text-blue-800 mb-1'>Mobile Development</h3>
            <img src={audi} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer'/>
            <p className='text-gray-800'>Our mobile app development services cater to the ever-growing mobile market. We specialize in creating intuitive and feature-rich mobile applications for Android and iOS platforms. Whether you need a consumer-focused app or an enterprise-level solution, we take a user-centric approach to ensure your app engages and delights users while driving business growth.</p>
        </div>
    </div>
    </div>
  )
}

export default Services
