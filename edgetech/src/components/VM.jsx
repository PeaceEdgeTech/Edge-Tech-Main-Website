import React from 'react'
import audi from '../img/Audi.jpg'

const VM = () => {
    return (
        <div className='p-4'>
            <div className='flex flex-col items-center justify-center p-16 m-4 md:flex-row sm:flex-col'>
                <div className='flex flex-col items-center justify-center p-2 border rounded border-blue-600 p-8 m-8'>
                    <header className="flex justify-center py-4">
                        <h3 className="font-semibold text-4xl text-blue-600 uppercase ">Our Mission</h3>
                    </header>
                    <img src={audi} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer' />
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas delectus odio aperiam recusandae, architecto quibusdam vero obcaecati quae aliquam quaerat laboriosam doloribus temporibus culpa illum autem adipisci omnis nostrum!</p>
                </div>
                <div className='flex flex-col items-center justify-center p-2 border rounded border-blue-600 p-8 m-8'>
                    <header className="flex justify-center py-4">
                        <h3 className="font-semibold text-4xl text-blue-600 uppercase">Our Vision</h3>
                    </header>
                    <img src={audi} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer' />
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas delectus odio aperiam recusandae, architecto quibusdam vero obcaecati quae aliquam quaerat laboriosam doloribus temporibus culpa illum autem adipisci omnis nostrum!</p>
                </div>
            </div>
        </div>
    )
}

export default VM