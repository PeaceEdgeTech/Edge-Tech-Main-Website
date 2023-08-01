import React from 'react'
import audi from '../img/Audi.jpg'

const Services = () => {
  return (
    <div className='p-4'>
    <header className="flex justify-center py-4">
      <h3 className="font-semibold text-4xl text-blue-600 uppercase">Services</h3>
    </header>
    <div className='flex flex-row items-center justify-center p-4'>
        <div className='flex flex-col items-center justify-center p-2'>
            <h3 className='uppercase text-xl text-blue-800 mb-1'>Web Development</h3>
            <img src={audi} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer'/>
            <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas delectus odio aperiam recusandae, architecto quibusdam vero obcaecati quae aliquam quaerat laboriosam doloribus temporibus culpa illum autem adipisci omnis nostrum!</p>
        </div>
        <div className='flex flex-col items-center justify-center p-2'>
            <h3 className='uppercase text-xl text-blue-800 mb-1'>Software Development</h3>
            <img src={audi} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer'/>
            <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas delectus odio aperiam recusandae, architecto quibusdam vero obcaecati quae aliquam quaerat laboriosam doloribus temporibus culpa illum autem adipisci omnis nostrum!</p>
        </div>
        <div className='flex flex-col items-center justify-center p-2'>
            <h3 className='uppercase text-xl text-blue-800 mb-1'>Mobile Development</h3>
            <img src={audi} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer'/>
            <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas delectus odio aperiam recusandae, architecto quibusdam vero obcaecati quae aliquam quaerat laboriosam doloribus temporibus culpa illum autem adipisci omnis nostrum!</p>
        </div>
    </div>
    </div>
  )
}

export default Services