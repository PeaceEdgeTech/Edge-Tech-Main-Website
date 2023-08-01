import React from 'react'
import audi from "../img/Audi.jpg"

const About = () => {
  return (
    <div id="about" className='m-12 p-4 mb-20'>
      <div className='items-center justify-center flex p-6 mb-6'>
        <h1 className='text-4xl text-blue-600 uppercase font-bold'>About Us</h1>
      </div>
      <div className='flex'>
      <div className='flex flex-col items-center justify-center text-gray-800'>
        <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique labore harum molestiae, doloremque sed aut cupiditate unde et error esse facere dolorem eum repellendus autem dolores vitae repellat. Quas reiciendis incidunt, molestiae odio ipsum architecto enim dolorem laborum est possimus asperiores aperiam voluptatem, tempore eveniet, expedita error tempora velit illum laudantium esse? Asperiores ad sequi eum, pariatur accusamus perferendis omnis, quas natus quisquam veritatis deleniti, vitae ipsum aspernatur tempore?</p>
        <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique labore harum molestiae, doloremque sed aut cupiditate unde et error esse facere dolorem eum repellendus autem dolores vitae repellat. Quas reiciendis incidunt, molestiae odio ipsum architecto enim dolorem laborum est possimus asperiores aperiam voluptatem, tempore eveniet, expedita error tempora velit illum laudantium esse? Asperiores ad sequi eum, pariatur accusamus perferendis omnis, quas natus quisquam veritatis deleniti, vitae ipsum aspernatur tempore?</p>
      </div>
      <div>
        <img src={audi} alt="" className='rounded-lg h-full w-full'/>
      </div>
      </div>
    </div>
  )
}

export default About
