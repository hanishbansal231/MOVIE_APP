import React from 'react'
import SideBar from '../SideBar'
import Tabel from '../../../Components/Tabel'
import { movies } from '../../../Data/movie'

function User() {

    return (
        <SideBar>
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>User</h2>
                </div>
                <Tabel data={movies.slice(0, 10)} admin={true} />
            </div>
        </SideBar>
    )
}

export default User