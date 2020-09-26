import {
    LOGIN_USER_ACTION, LOGOUT, RESET,
    USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS
} from "../Actions/Types";

const INITIAL_STATE = {
    userResponse: null,
    userFailedResponse: null,
    isLoading: false,
    registerUserResponse: null,
    registerUserFailedResponse: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER_ACTION:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                userResponse: action.payload,
                userFailedResponse: null,
                isLoading: false
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                userFailedResponse: action.payload,
                userResponse: null,
                isLoading: false
            };
        case USER_REGISTER_FAIL:
            return {
                ...state,
                registerUserFailedResponse: action.payload,
                registerUserResponse: null,
                isLoading: false
            };
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                registerUserFailedResponse: null,
                registerUserResponse: action.payload,
                isLoading: false
            };
        case LOGOUT:
            return INITIAL_STATE;
        case RESET:
            return {
                ...state,
                userResponse: null,
                registerUserResponse: null
            };
        default:
            return state;
    }
}
