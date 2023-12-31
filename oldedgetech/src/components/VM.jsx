import React from 'react'
import mission from '../img/mission.jpeg'
import vision from '../img/vision.jpeg'

const VM = () => {
    return (
        <div className='p-4'>
            <div className='flex flex-col items-center justify-evenly p-16 m-4 md:flex-row sm:flex-col'>
                <div className='shadow-xl shadow-blue-600 flex flex-col items-center justify-center rounded p-8 m-8 md:m-1 md:p-1'>
                    <header className="flex justify-center py-4">
                        <h3 className="text-4xl tracking-widest uppercase text-blue-600 font-semibold ">Our Mission</h3>
                    </header>
                    <img src={mission} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer' />
                    <p className='text-gray-800'>To be a leading tech partner, driving innovations with Blockchain, AI, and ML solutions, empowering businesses to thrive in the digital future.</p>
                </div>
                <div className='shadow-xl shadow-blue-600 flex flex-col items-center justify-center rounded p-8 m-8 md:m-1 md:p-1'>
                    <header className="flex justify-center py-4">
                        <h3 className="text-4xl tracking-widest uppercase text-blue-600 font-semibold">Our Vision</h3>
                    </header>
                    <img src={vision} alt="" className='rounded-full w-20 h-20 m-1 cursor-pointer' />
                    <p className='text-gray-800'>Empowering innovation through cutting-edge digital solutions. Exceptional web, software, and app development for success in the digital landscape.</p>
                </div>
            </div>
        </div>
    )
}

export default VM
