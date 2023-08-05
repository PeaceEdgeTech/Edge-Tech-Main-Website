import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImg from '../img/logo.png'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id='contact' className='w-full text-gray-600'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-4xl tracking-widest uppercase text-blue-600 font-semibold'>Contact Us</p>
        <h2 className='py-4'>Get in Touch with us</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-blue-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt='/' />
              </div>
              <div>
                <h2 className='py-2'>Edge Tech</h2>
                <p>Software Development Company</p>
                <p className='py-4'>We have a team of expert developers, dedicated to design and develop to your making your wildest dreams true. For your Websites, Mobile Apps, and Software, Contact us and let&apos;s talk.</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with us</p>
                <div className='flex items-center justify-between py-4'>
                  <a href='mailto:edgetech224@gmail.com'>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a href='https://facebook.com/' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
                      <FaFacebook />
                    </div>
                  </a>
                  <a href='https://twitter.com/'>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
                      <FaTwitter />
                    </div>
                  </a>
                  <a href='https://instagram.com/'>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
                      <FaInstagram />
                    </div>
                  </a>
                  <a href='https://wa.me/2348166846226/' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300 text-blue-600'>
                      <FaWhatsapp />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-blue-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form action='https://getform.io/f/4bbb45ae-757d-4c8f-93fa-322bfeb7d00f' method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppertext py-2 text-sm'>Name:</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-600' type='text' name='name' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppertext py-2 text-sm'>Phone Number:</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-600' type='text' name='phone' />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppertext py-2 text-sm'>Email:</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-600' type='email' name='email' />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppertext py-2 text-sm'>Subject:</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-600' type='text' name='subject' />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppertext py-2 text-sm'>Message:</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-600' rows='10' name='message'></textarea>
                </div>
                <button type='submit' className='w-full p-4 text-white bg-blue-600 mt-4 font-bold border rounded-lg'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <a href='#nav'>
            <div className='rounded-full shadow-lg shadow-blue-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-blue-500' size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact