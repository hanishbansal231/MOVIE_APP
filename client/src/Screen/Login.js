import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import logo from '../assets/logo.png';
import { Input } from '../Components/UsedInputs';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginAction } from '../Redux/Actions/userActions';
import toast from 'react-hot-toast';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isError, userInfo, isSuccess } = useSelector((state) => state.userLogin);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(loginAction(data));
    }

    useEffect(() => {
        if (userInfo?.isAdmin) {
            navigate('/dashboard');
        } else if (userInfo) {
            navigate('/updateprofile');
        }

        if (isSuccess) {
            toast.success(`Welcome Back ${userInfo?.user?.fullName}`)
        }

        if (isError) {
            toast.error(isError);
            dispatch({ type: 'USER_LOGIN_RESET' });
        }
    }, [userInfo, isSuccess, isError, navigate, dispatch]);

    return (
        <Layout>
            <div className='container mx-auto px-2 my-24 flex-colo'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full 2xl:w-2/5 md:w-3/5 flex-colo p-7 bg-dry rounded-lg border border-border'>
                    <img
                        src={logo}
                        className='w-full h-12 object-contain mb-4'
                        alt='logo'
                    />
                    <div className='w-full'>
                        <Input
                            label={'Email'}
                            name={'email'}
                            register={register('email')}
                            placeholder={'Enter Your Email'}
                            type={'text'}
                            bg={true}
                        />
                    </div>
                    <Input
                        label={'Password'}
                        name={'passwore'}
                        register={register('password')}
                        placeholder={'Enter Your Password'}
                        type={'password'}
                        bg={true}
                    />
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'
                    >
                        {
                            isLoading ? ('Loading...') : (<><FiLogIn /> Sign In</>)
                        }
                    </button>
                    <p className='text-center text-border mt-3'>
                        Don't have an account? {" "}
                        <Link className='text-dryGray font-semibold ml-2' to={'/register'}>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </Layout>
    )
}

export default Login