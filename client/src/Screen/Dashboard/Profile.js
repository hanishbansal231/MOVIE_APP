import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Uploader from '../../Components/Single/Uploader'
import { Input } from '../../Components/UsedInputs'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { deleteAction, updateProfileAction } from '../../Redux/Actions/userActions';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo, token } = useSelector((state) => state.userLogin);
    console.log(token);

    const { isLoading, isError, isSuccess } = useSelector((state) => state.userUpdateProfile)
    const { isLoading: deleteLoading, isError: deleteError } = useSelector((state) => state.userDeleteProfile)

    const [imagePreview, setImagePreview] = useState('');
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(updateProfileAction(data, token))
    }

    const deleteProfile = () => {
        window.confirm('Are you sure you want to delete your profile?') &&
            dispatch(deleteAction(token));
            navigate('/login');
    }

    useEffect(() => {
        if (userInfo) {
            setValue('fullName', userInfo?.fullName);
            setValue('email', userInfo?.email);
        }
        if (isSuccess) {
            dispatch({ type: 'USER_UPDATE_PROFILE_RESET' })
        }
        if (isError || deleteError) {
            toast.error(isError || deleteError);
        }

    }, [userInfo, setValue]);

    return (
        <SideBar>
            <form noValidate onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>
                    Profile
                </h2>
                <div className='w-full grid lg:grid-cols-12 gap-6'>
                    <div className='col-span-10'>
                        <Uploader setImagePreview={setImagePreview} />
                    </div>
                    <div className='col-span-2 p-1 w-32 h-32 border border-border rounded mt-2 bg-main'>
                        {
                            imagePreview ?
                                (<div>
                                    <img
                                        className='w-full h-full object-cover rounded'
                                        alt={userInfo?.fullName}
                                        src={imagePreview}
                                    />
                                </div>)
                                :
                                (<div>
                                    <img
                                        className='w-full h-full object-cover rounded'
                                        alt={userInfo?.fullName}
                                        src={userInfo?.image?.secure_url}
                                    />
                                </div>)
                        }
                    </div>
                </div>
                <Input name={'fullName'} register={register('fullName')} label={'FullName'} placeholder={'Enter Your Fullname'} type={'text'} bg={true} />
                <Input name={'email'} register={register('email')} label={'Email'} placeholder={'Enter Your Email'} type={'text'} bg={true} />
                <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center mb-4'>
                    <button disabled={deleteLoading || isLoading} onClick={deleteProfile} className='bg-subMain sm:flex-row w-full sm:w-auto border border-subMain flex items-center justify-center gap-3 hover:bg-transparent transitions text-white rounded px-8 font-medium py-3'>Delete Account</button>
                    <button disabled={deleteLoading || isLoading} type='submit' className='border border-subMain w-full sm:flex-row sm:w-auto flex items-center justify-center gap-3 hover:bg-subMain transitions text-white rounded px-8 font-medium py-3'>Update Profile</button>
                </div>
            </form>
        </SideBar>
    )
}

export default Profile