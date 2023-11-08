import Axios from "./axios";

const registerService = async (user) => {
    const { data } = await Axios.post('/user/register', user);
    if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data?.user));
        localStorage.setItem('token', JSON.stringify(data?.user?.token));
    }
    return data;
}

const logoutService = async () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    return null;
}

const loginService = async (user) => {
    const { data } = await Axios.post('/user/login', user);
    if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data?.user));
        localStorage.setItem('token', JSON.stringify(data?.user?.token));
    }
    return data;
}

const profileImageUpdate = async (data, token) => {

    const res = await Axios.put('/user', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (res) {
        localStorage.setItem('userInfo', JSON.stringify(res?.data?.user));
    }
    return res;
}

const deleteProfile = async (token) => {
    console.log(token);
    const { data } = await Axios.delete('/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(data);
    if(data){
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
    }
    return data;
}

export {
    registerService,
    logoutService,
    loginService,
    profileImageUpdate,
    deleteProfile
}
