import React from 'react'
import SideBar from './SideBar'
import Uploader from '../../Components/Single/Uploader'
import { Input } from '../../Components/UsedInputs'

function Profile() {
    return (
        <SideBar>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>
                    Profile
                </h2>
                <Uploader />
                <Input label={'FullName'} placeholder={'Enter Your Fullname'} type={'text'} bg={true} />
                <Input label={'Email'} placeholder={'Enter Your Email'} type={'text'} bg={true} />
                <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center mb-4'>
                    <button className='bg-subMain sm:flex-row w-full sm:w-auto border border-subMain flex items-center justify-center gap-3 hover:bg-transparent transitions text-white rounded px-8 font-medium py-3'>Delete Account</button>
                    <button className='border border-subMain w-full sm:flex-row sm:w-auto flex items-center justify-center gap-3 hover:bg-subMain transitions text-white rounded px-8 font-medium py-3'>Update Profile</button>
                </div>
            </div>
        </SideBar>
    )
}

export default Profile