import React from 'react'
import FlexMovieItems from '../FlexMovieItems';
import { FaPlay, FaShareAlt } from 'react-icons/fa';
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function MovieInfo({ movie }) {

    console.log(movie);
    return (
        <div className='w-full xl:h-screen relative text-white'>
            <img
                src={movie.poster_image}
                alt={movie.title}
                className='w-full hidden xl:inline-block h-full object-cover'
            />
            <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
                <div className='container mx-auto px-3 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8'>
                    <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
                        <img
                            src={movie.poster_image}
                            alt={movie.title}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
                        <div className='col-span-3 flex flex-col gap-10'>
                            <h2 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>{movie.title}</h2>
                            <div className='flex items-center gap-4 font-medium text-dryGray'>
                                <div className='flex-colo bg-subMain text-xs px-2 py-1'>
                                    HD 4K
                                </div>
                                <FlexMovieItems movies={movie && movie} />
                            </div>
                            <p className='text-dryGray text-sm leading-7'>
                                {movie.tagline}
                            </p>
                            <div className='grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg'>
                                <div className='col-span-1 flex-colo border-r border-border'>
                                    <button className='w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
                                        <FaShareAlt />
                                    </button>
                                </div>
                                <div className='col-span-2 flex-colo font-medium text-sm'>
                                    <p>Language : <span className='ml-2 truncate'>{movie.languages[0]}</span></p>
                                </div>
                                <div className='sm:col-span-2 col-span-3 flex-colo justify-end font-medium text-sm'>
                                    <Link
                                     to={`/watch/${movie.title.split(' ').join('-')}`}
                                     className='bg-dry hover:bg-subMain border-2 border-subMain transitions rounded-full flex-rows gap-4 w-full py-3 sm:py-3 '
                                     >
                                        <FaPlay className='w-3 h-3' />
                                        <span>Watch</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 md:mt-0 mt-2 flex justify-end'>
                            <button className='md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium '>
                                <div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                                    Download <FiLogIn className='w-6 h-6' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo