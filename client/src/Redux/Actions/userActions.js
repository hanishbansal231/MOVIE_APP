import toast from "react-hot-toast";
import { loginService, logoutService, registerService } from "../APIS/userServices";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_RESET, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS } from "../Constants/userConstansts"


export const loginAction = (data) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const response = await loginService(data);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response });

    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error });
    }
}


export const registerAction = (data,navigate) => async (dispatch) => {
    try {
        console.log("Starting...");
        dispatch({ type: USER_REGISTER_REQUEST });
        const response = await registerService(data);

        if(!response.success){
            toast.error(response.message);
            throw new Error(response.message);
        }

        toast.success('User Register Successfully...');
        navigate('/login');

        dispatch({ type: USER_REGISTER_SUCCESS, payload: response });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
        console.log("End...");

    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error });
    }
}

export const logoutAction = () => async (dispatch) => {
    console.log('Starting...');
    logoutService();
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_LOGIN_RESET });
    dispatch({ type: USER_REGISTER_RESET });
};
