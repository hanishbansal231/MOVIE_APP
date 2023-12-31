import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { movies } from '../../Data/movie.js';
import FlexMovieItems from '../FlexMovieItems.js';
import {Link} from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function Banner() {
    return (
        <div className='relative w-full'>
            <Swiper
                 direction='vertical'
                 spaceBetween={0}
                 slidesPerView={1}
                 loop={true}
                 speed={1000}
                 modules={[Autoplay]}
                 autoplay={{ delay: 4000, disableOnInteraction: false }}
                 className='w-full xl:h-96 bg-dry lg:h-64 h-48'
            >
                {
                    movies.slice(0, 6).map((movie, idx) => (
                        <SwiperSlide 
                        key={idx}
                        className='relative rounded overflow-hidden '
                        >
                            <img 
                            src={movie.poster} 
                            alt={movie.title} 
                            className='w-full h-full object-cover'
                            />
                            <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                                <h2 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                                    {movie.title}
                                </h2>
                                <div className='flex gap-5 items-center text-dryGray'>
                                    <FlexMovieItems movies={movie} />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <Link 
                                    to={`/movie/${movie.title.split(" ").join('-')}`} 
                                    className='bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs'
                                    >
                                        Watch
                                    </Link>
                                    <button className='bg-white hover:text-subMain transitions text-white rounded px-4 py-3 text-sm bg-opacity-30'>
                                        <FaHeart />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Banner