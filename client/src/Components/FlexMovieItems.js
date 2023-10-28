import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';

function FlexMovieItems({ movies }) {
    
    return (
        <>
            <div className='flex items-center gap-2'>
                <span className='text-sm font-medium'>
                    {movies.languages}
                </span>
            </div>
            <div className='flex items-center gap-2'>
                <FaRegCalendarAlt className='text-subMain w-3 h-3' />
                <span className='text-sm font-medium'>
                    {movies.released}
                </span>
            </div>
        </>
    )
}

export default FlexMovieItems