import React from 'react'
import Titles from '../Titles'
import { FaUserFriends } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { movies } from '../../Data/movie';


function MovieCasts() {
  return (
    <div>
      <Titles title={'Casts'} Icon={FaUserFriends} />
      <div className='mt-10'>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          speed={1000}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {
            movies.map((movie, idx) => (
              <SwiperSlide key={idx}>
                <div className='w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800'>
                  <img 
                  src={movie.poster}
                  alt={movie.title}
                  className='w-full h-64 object-cover rounded mb-2'
                  />
                  <p>{movie.title}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div >
  )
}

export default MovieCasts