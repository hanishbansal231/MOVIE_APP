import React from 'react'
import SideBar from '../SideBar'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import Tabel from '../../../Components/Tabel'
import { movies } from '../../../Data/movie'

function Dashboard() {

    const DashboardData = [
        {
            bg: 'bg-orange-600',
            icon: FaRegListAlt,
            title: 'Total Movies',
            total: '90',
        },
        {
            bg: 'bg-blue-700',
            icon: HiViewGridAdd,
            title: 'Total Categories',
            total: '8',
        }, {
            bg: 'bg-green-600',
            icon: FaUser,
            title: 'Total Users',
            total: '134',
        },
    ]

    return (
        <SideBar>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Dashboard</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-4'>
                    {
                        DashboardData.map((item, idx) => (
                            <div key={idx} className='p-4 rounded bg-main border-border grid grid-cols-4 gap-2'>
                                <div className={`col-span-1 rounded-full flex-colo h-12 w-12 ${item.bg}`}>
                                    <item.icon />
                                </div>
                                <div className='col-span-3'>
                                    <h2>{item.title}</h2>
                                    <p className='text-text mt-2 font-bold'>{item.total}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <h3 className='text-md text-border font-bold my-6'>Recent Movies</h3>
                <Tabel data={movies.slice(0, 10)} admin={true} />
            </div>
        </SideBar>
    )
}

export default Dashboard