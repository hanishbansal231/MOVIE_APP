import React from 'react'
import SideBar from './SideBar'
import { Input } from '../../Components/UsedInputs'

function Password() {
    return (
        <SideBar>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold '>Change Password</h2>
                <Input label={'Previous Password'} placeholder={'Enter Your Old Password'} type={'password'} bg={true} />
                <Input label={'New Password'} placeholder={'Enter Your New Password'} type={'password'} bg={true} />
                <Input label={'Confirm Password'} placeholder={'Enter Your Comfirm Password'} type={'password'} bg={true} />
                <div className='flex justify-end items-center mb-4'>
                    <button className='border border-subMain flex items-center justify-center gap-3 hover:bg-subMain transitions text-white rounded px-3 sm:px-8 sm:py-3 text-sm font-medium py-2'>Change Password</button>
                </div>
            </div>
        </SideBar>
    )
}

export default Password