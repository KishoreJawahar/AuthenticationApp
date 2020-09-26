import {LOADING, LOGIN_USER_ACTION, LOGOUT, REGISTER_USER_ACTION, RESET} from "./Types";

export const loginUserAction = (userName, password) => {
    return {
        type: LOGIN_USER_ACTION,
        userName, password
    }
};

export const registerUserAction = (userName, email, phone, city, password) => {
    return {
        type: REGISTER_USER_ACTION ,
        userName, email, phone, city, password
    }
};

export const loadingAction = () => {
    return {
        type: LOADING
    }
};

export const onLogoutAction = () => {
    return {
        type: LOGOUT
    }
};

export const resetAction = () => {
    return {
        type: RESET
    }
}
