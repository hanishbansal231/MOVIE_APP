import * as userConstants from '../Constants/userConstansts';

const initialState = {
  isLoading: false,
  userInfo: null,
  isSuccess: false,
  isError: null,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: null,
      };
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        isSuccess: true,
        isError: null,
      };
    case userConstants.USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: action.payload,
      };
    case userConstants.USER_LOGIN_RESET:
      return {};
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: null,
      };
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        isSuccess: true,
        isError: null,
      };
    case userConstants.USER_REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: action.payload,
      };
    case userConstants.USER_REGISTER_RESET:
      return {};
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};