import React from 'react';
import Layout from '../Layout/Layout';
import logo from '../assets/logo.png';
import { Input } from '../Components/UsedInputs';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

function Login() {
    return (
        <Layout>
            <div className='container mx-auto px-2 my-24 flex-colo'>
                <div className='w-full 2xl:w-2/5 md:w-3/5 flex-colo p-7 bg-dry rounded-lg border border-border'>
                    <img
                        src={logo}
                        className='w-full h-12 object-contain mb-4'
                        alt='logo'
                    />
                    <Input label={'Email'} placeholder={'Enter Your Email'} type={'text'} bg={true} />
                    <Input label={'Password'} placeholder={'Enter Your Password'} type={'password'} bg={true} />
                    <Link
                        to={'/dashboard'}
                        className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'
                    >
                        <FiLogIn /> Sign In
                    </Link>
                    <p className='text-center text-border mt-3'>
                        Don't have an account? {" "}
                        <Link className='text-dryGray font-semibold ml-2' to={'/register'}>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Login