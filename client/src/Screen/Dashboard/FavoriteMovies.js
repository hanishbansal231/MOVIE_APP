import React from 'react'
import SideBar from './SideBar'
import Tabel from '../../Components/Tabel'
import { movies } from '../../Data/movie'

function FavoriteMovies() {
    return (
        <SideBar>
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>Favorites Movies</h2>
                    <button className='border border-subMain flex items-center justify-center gap-3 hover:bg-subMain transitions text-white rounded px-4 py-2 sm:px-8 font-medium sm:py-3'>Delete All</button>
                </div>
                <Tabel data={movies} admin={false} />
            </div>
        </SideBar>
    )
}

export default FavoriteMovies