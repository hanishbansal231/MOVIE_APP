import React from 'react'
import { BsFillGridFill } from 'react-icons/bs';
import { FaHeart, FaListAlt, FaUser } from 'react-icons/fa';
import { RiLockPasswordLine, RiMovie2Fill } from 'react-icons/ri';
import { HiViewGridAdd } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import Layout from '../../Layout/Layout';
import { NavLink } from 'react-router-dom';

function SideBar({ children }) {

    const SlideLinks = [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: BsFillGridFill
        },
        {
            name: 'Movie List',
            link: '/movielist',
            icon: FaListAlt
        },
        {
            name: 'Add Movie',
            link: '/addmovie',
            icon: RiMovie2Fill
        },
        {
            name: 'Categories',
            link: '/categories',
            icon: HiViewGridAdd
        },
        {
            name: 'User',
            link: '/user',
            icon: FaUser
        },
        {
            name: 'Update Profile',
            link: '/updateprofile',
            icon: FiSettings
        },
        {
            name: 'Favorites Movies',
            link: '/favoritesmovies',
            icon: FaHeart
        },
        {
            name: 'Change Password',
            link: '/changepassword',
            icon: RiLockPasswordLine
        },
    ]

    const active = 'bg-dryGray text-subMain';
    const hover = 'hover:text-white hover:bg-main';
    const inActive = 'rounded font-medium text-sm transitions flex gap-3 items-center p-4'

    const Hover = ({ isActive }) => (
        isActive ? `${active} ${inActive}` : `${inActive} ${hover}`
    );

    return (
        <Layout>
            <div className='min-h-screen container mx-auto px-2'>
                <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
                    <div className='col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5'>
                        {
                            SlideLinks.map((item, idx) => (
                                <NavLink to={item.link} key={idx} className={Hover}>
                                    <item.icon />
                                    <p>{item.name}</p>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay='10'
                    data-aos-offset='200'
                    className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SideBar