import React from 'react'
import {Outlet,Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function ProtectedRoute() {
    const { token } = useSelector((state) => state.userLogin);
    return token && token ? <Outlet /> : <Navigate to='/login' />
}

function AdminProtectedRoute() {
    const { userInfo,token } = useSelector((state) => state.userLogin);
    console.log(token);
    return token && token ? userInfo?.isAdmin ? <Outlet /> : <Navigate to='/*' /> : <Navigate to='/login' />
}



export {
    ProtectedRoute,
    AdminProtectedRoute
}