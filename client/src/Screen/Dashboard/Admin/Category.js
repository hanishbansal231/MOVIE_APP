import React, { useState } from 'react'
import SideBar from '../SideBar'
import { HiPlus } from 'react-icons/hi'
import Tabel from '../../../Components/Tabel'
import { movies } from '../../../Data/movie'
import CategoryModal from '../../../Components/Modals/CategoryModal'

function Category() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <SideBar>
            <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>Categories</h2>
                    <button onClick={() => setModalOpen(true)} className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded'>
                        <HiPlus /> Create
                    </button>
                </div>
                <Tabel data={movies.slice(0, 10)} admin={true} />
            </div>
        </SideBar>
    )
}

export default Category