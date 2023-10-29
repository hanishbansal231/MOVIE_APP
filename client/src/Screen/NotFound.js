import React from 'react';
import notFound from '../assets/404.svg';
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6 '>
      <img
        src={notFound}
        alt='PageNotFound'
        className='w-full h-96 object-contain'
      />
      <h2 className='lg:text-4xl font-bold'>
        Page Not Found
      </h2>
      <p className='font-medium leading-6 text-border'>
        The page you are looking for does not exist. You may have mistyped the URL
      </p>
      <button className='bg-subMain text-white flex-rows gap-3 hover:text-main transitions px-6 py-2 font-medium text-md rounded' onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft /> Go To Back
      </button>
    </div>
  )
}

export default NotFound