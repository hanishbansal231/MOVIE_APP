import React from 'react';
import Layout from '../Layout/Layout';
import logo from '../assets/logo.png';
import { Input } from '../Components/UsedInputs';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerAction } from '../Redux/Actions/userActions';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(registerAction(data,navigate));
    }

    return (
        <Layout>
            <div className='container mx-auto px-2 my-24 flex-colo'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full 2xl:w-2/5 md:w3/5 flex-colo p-7 bg-dry rounded-lg border border-border'>
                    <img
                        src={logo}
                        className='w-full h-12 object-contain mb-4'
                        alt='logo'
                    />
                    <Input name={'fullName'} register={register('fullName')} label={'FullName'} placeholder={'Enter Your FullName'} type={'text'} bg={true} />
                    <Input name={'email'} register={register('email')} label={'Email'} placeholder={'Enter Your Email'} type={'text'} bg={true} />
                    <Input name={'password'} register={register('password')} label={'Password'} placeholder={'Enter Your Password'} type={'password'} bg={true} />
                    <button type='submit'
                        className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'
                    >
                        <FiLogIn /> Sign In
                    </button>
                    <p className='text-center text-border mt-3'>
                        Already have an account?  {" "}
                        <Link className='text-dryGray font-semibold ml-2' to={'/login'}>
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </Layout>
    )
}

export default Register