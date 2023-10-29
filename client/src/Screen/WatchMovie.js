import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa';
import nature from '../assets/nature.mp4';
import head from '../assets/head.png';

function WatchMovie() {
    const navigate = useNavigate();
    const [play, setPlay] = useState(false);
    return (
        <Layout>
            <div className='container mx-auto bg-dry p-6 mb-12'>
                <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
                    <Link
                        // to={navigate(-1)}
                        onClick={() => navigate(-1)}
                        className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'
                    >
                        <BiArrowBack /> {'Movie Name'}
                    </Link>
                    <div className='flex-btn sm:w-auto w-full gap-5'>
                        <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3'>
                            <FaHeart />
                        </button>
                        <button className='bg-subMain flex items-center gap-3 hover:text-main transitions text-white rounded px-8 font-medium py-3'>
                            <FaCloudDownloadAlt /> Download
                        </button>
                    </div>
                </div>
                {
                    play 
                    ? (
                        <video controls autoPlay={play} className='w-full h-full rounded'>
                            <source src={nature} type='video/mp4' title='Movie' />
                        </video>
                    ) 
                    : (<div className='w-full h-screen rounded-lg overflow-hidden relative'>
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-50 flex-colo'>
                            <button 
                            onClick={() => setPlay(true)}
                            className='bg-white text-subMain flex-colo rounded-full w-20 h-20 font-medium text-xl'
                            >
                                <FaPlay />
                            </button>
                            </div>
                            <img 
                            src={head}
                            alt='images'
                            className='w-full h-full object-cover'
                            />
                    </div>)
                }
            </div>
        </Layout>
    )
}

export default WatchMovie