import toast from "react-hot-toast";
import { deleteProfile, loginService, logoutService, profileImageUpdate, registerService } from "../APIS/userServices";
import { USER_DELETE_PROFILE_REQUEST, USER_DELETE_PROFILE_RESET, USER_DELETE_PROFILE_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_RESET, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../Constants/userConstansts"


export const loginAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const response = await loginService(data);
        console.log(response);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response?.user, token: data?.user?.token });

    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error });
    }
}


export const registerAction = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const response = await registerService(data);
        console.log(response);
        toast.success('User Register Successfully...');
        navigate('/login');

        dispatch({ type: USER_REGISTER_SUCCESS, payload: response?.user });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response?.user });
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error });
    }
}

export const updateProfileAction = (data, token) => async (dispatch) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
        const response = await profileImageUpdate(data, token);
        console.log(response)
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: response?.data?.user });
        toast.success('Update Profile...');
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response?.data?.user });
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error });
    }
}

export const logoutAction = () => async (dispatch) => {
    logoutService();
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_LOGIN_RESET });
    dispatch({ type: USER_REGISTER_RESET });
};

export const deleteAction = (token) => async (dispatch) => {
    try{
        dispatch({type:USER_DELETE_PROFILE_REQUEST});
        await deleteProfile(token);
        dispatch({type:USER_DELETE_PROFILE_SUCCESS});
        toast.success('Profile Deleted...');
    }catch(e){
        console.log(e);
        dispatch({type:USER_DELETE_PROFILE_RESET});
    }
}
