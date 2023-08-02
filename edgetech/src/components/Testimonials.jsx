import React from 'react'
import IMG1 from '../img/ppp.jpg'
import IMG2 from '../img/ppp2.png'
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        pic: IMG1,
        name: 'Prof Prince Peace',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem nam asperiores doloremque laborum ut numquam minima nisi quam tenetur? Odit libero necessitatibus veritatis ad, et qui quas maiores, perferendis tenetur laudantium eos eum earum vel labore natus dignissimos aliquam nulla! Ipsam ab error quis, incidunt unde consequuntur molestiae sint."
    },
    {
        pic: IMG2,
        name: 'Peace Prof Prince',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem nam asperiores doloremque laborum ut numquam minima nisi quam tenetur? Odit libero necessitatibus veritatis ad, et qui quas maiores, perferendis tenetur laudantium eos eum earum vel labore natus dignissimos aliquam nulla! Ipsam ab error quis, incidunt unde consequuntur molestiae sint."
    },
    {
        pic: IMG1,
        name: 'Prof Peace Prince',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem nam asperiores doloremque laborum ut numquam minima nisi quam tenetur? Odit libero necessitatibus veritatis ad, et qui quas maiores, perferendis tenetur laudantium eos eum earum vel labore natus dignissimos aliquam nulla! Ipsam ab error quis, incidunt unde consequuntur molestiae sint."
    },
    {
        pic: IMG2,
        name: 'Prince Peace',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem nam asperiores doloremque laborum ut numquam minima nisi quam tenetur? Odit libero necessitatibus veritatis ad, et qui quas maiores, perferendis tenetur laudantium eos eum earum vel labore natus dignissimos aliquam nulla! Ipsam ab error quis, incidunt unde consequuntur molestiae sint."
    },
    {
        pic: IMG1,
        name: 'Prof Prince',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem nam asperiores doloremque laborum ut numquam minima nisi quam tenetur? Odit libero necessitatibus veritatis ad, et qui quas maiores, perferendis tenetur laudantium eos eum earum vel labore natus dignissimos aliquam nulla! Ipsam ab error quis, incidunt unde consequuntur molestiae sint."
    },

]
function Testimonials() {
  return (
    <div id='section' className='mt-12 user-select-none'>
        <header className='flex justify-center'>
            <h1 className='text-4xl font-semibold text-blue-600'>TESTIMONIALS</h1>
        </header>


        <Swiper modules={[Pagination]} spaceBetween={60} slidesPerView={1} pagination={{ clickable: true }} className='w-2/3 pb-20 lg:w-[50rem]'>
        { data.map(({pic, name, review}, index) =>{    
            return(
                <SwiperSlide key={index} className='flex flex-col items-center mt-6 bg-gray-200 rounded-xl'> 
                    <div className='flex flex-col items-center p-4'>
                        <img src={pic} alt="Prof Prince Peace" className='h-12 '/>
                    </div>
                    
                    <div className='flex flex-col mb-4'>
                        <h1 className='font-bold text-gray-800 self-center'>{name}</h1>
                        <p className='p-4 '>{review}</p>
                    </div>
                </SwiperSlide>
            )
        })
        }
        </Swiper>


    </div>
  )
}

export default Testimonials;
