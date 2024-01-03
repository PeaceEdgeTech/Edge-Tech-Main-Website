import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Toggle = () => {
    return (
        <div className='ml-5'>
            <button className='rounded-full w-auto h-auto border-2 border-blue-600'>
                <div className="flex items-center justify-center">
                    <FaSun className="text-blue-600 text-xl" />
                    <FaMoon className="text-blue-600 text-xl" />
                </div>
            </button>
        </div>
    )
}

export default Toggle