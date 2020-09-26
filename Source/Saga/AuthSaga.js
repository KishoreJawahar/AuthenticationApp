import {call, put, takeLatest} from "redux-saga/effects";
import {api} from "../Network";
import {
    LOGIN_USER_ACTION,
    REGISTER_USER_ACTION,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS
} from "../Redux/Actions/Types";
import {isValidElement} from "../Utils/helpers";
import {CONSTANTS as Constants} from "../Utils/Constants";

function* makePostUserLogin(action) {
    const {userName, password} = action;
    try {
        const userLogin = yield call(api.makeUserLoginAPICall, userName, password);
        if (isValidElement(userLogin) && isValidElement(userLogin.data)) {
            // api success
            yield put({type: USER_LOGIN_SUCCESS, payload: userLogin});
        } else {
            // api failed
            alert(Constants.USER_NAME_OR_PASSWORD_INVALID);
            yield put({type: USER_LOGIN_FAIL, payload: userLogin.data.message});
        }
    } catch (e) {
        // generic error message
        alert(Constants.USER_NAME_OR_PASSWORD_INVALID);
        yield put({
            type: USER_LOGIN_FAIL,
            payload: Constants.USER_NAME_OR_PASSWORD_INVALID
        });
    }
}

function* makePostUserRegisterLogin(action) {
    const {userName, email, phone, city, password} = action;
    try {
        const userRegisterLogin = yield call(
            api.makeUserRegisterAPICall,
            userName,
            email,
            phone,
            city,
            password
        );
        if (
            isValidElement(userRegisterLogin) &&
            isValidElement(userRegisterLogin.data)
        ) {
            // api success
            yield put({
                type: USER_REGISTER_SUCCESS,
                payload: userRegisterLogin
            });
        } else {
            // api failed
            alert(Constants.EMAIL_ALREADY_EXISTS);
            yield put({
                type: USER_REGISTER_FAIL,
                payload: userRegisterLogin.message
            });
        }
    } catch (e) {
        // generic error message
        alert(Constants.EMAIL_ALREADY_EXISTS);
        yield put({
            type: USER_REGISTER_FAIL,
            payload: Constants.SOMETHING_WENT_WRONG
        });
    }
}

function* AuthSaga() {
    yield takeLatest(LOGIN_USER_ACTION, makePostUserLogin);
    yield takeLatest(REGISTER_USER_ACTION, makePostUserRegisterLogin);
}

export default AuthSaga;
