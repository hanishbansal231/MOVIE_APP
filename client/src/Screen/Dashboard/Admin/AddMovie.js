import React from 'react'
import SideBar from '../SideBar'
import { Input, Message, Select } from '../../../Components/UsedInputs'
import Uploader from '../../../Components/Single/Uploader'
import logo from '../../../assets/logo.png'
import { movies } from '../../../Data/movie'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import {ImUpload} from 'react-icons/im';

function AddMovie() {
    return (
        <SideBar>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold '>Create Movie</h2>
                <div className='w-full grid md:grid-cols-2 gap-6'>
                    <Input label={'Movie Title'} placeholder={'Game of Thrones'} type={'text'} bg={true} />
                    <Input label={'Hours'} placeholder={'2hr'} type={'text'} bg={true} />
                </div>
                <div className='w-full grid md:grid-cols-2 gap-6'>
                    <Input label={'Language Used'} placeholder={'English'} type={'text'} bg={true} />
                    <Input label={'Year of Release'} placeholder={'2022'} type={'number'} bg={true} />
                </div>
                <div className='w-full grid md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-border font-semibold text-sm'>Image without Title</p>
                        <Uploader />
                        <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                            <img
                                src={logo}
                                alt='Logo'
                                className='w-full h-full object-cover rounded'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-border font-semibold text-sm'>Image with Title</p>
                        <Uploader />
                        <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                            <img
                                src={logo}
                                alt='Logo'
                                className='w-full h-full object-cover rounded'
                            />
                        </div>
                    </div>
                </div>
                <Message label={'Movie Description'} placeholder={'Make it short and sweet'} />
                {/* <div className='text-sm w-full'>
                    <Select label={'Movie Category'} options={} />
                </div> */}

                <div className='flex flex-col gap-2 w-full'>
                    <p className='text-border font-semibold text-sm'>Movie Video</p>
                    <Uploader />
                </div>

                <div className='grid items-start lg:grid-cols-2 gap-6 w-full'>
                    <button className='border border-subMain border-dashed py-3 bg-main rounded'>Add Cast</button>
                    <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4'>
                        {
                            movies.map((item,idx) => (
                                <div 
                                key={idx}
                                className='p-2 italic text-xs text-text rounded flex-colo bg-main border border-border'
                                >
                                    <img 
                                    src={item.poster}
                                    alt={item.title}
                                    className='w-full h-24 rounded mb-2'
                                    />
                                    <p>{item.title}</p>
                                    <div className='flex-rows mt-2 w-full gap-2'>
                                        <button className='w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded'>
                                            <MdDelete />
                                        </button>
                                        <button className='w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded'>
                                            <FaEdit />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='flex justify-end items-center mb-4'>
                    <button className='border border-subMain flex justify-center items-center gap-6 w-full bg-subMain transitions text-white rounded px-3 sm:px-8 sm:py-4 text-lg font-medium py-3'>
                       <ImUpload /> Publish Movie
                        </button>
                </div>
            </div>
        </SideBar>
    )
}

export default AddMovie