import axios from "axios";

export const api = {
    makeUserLoginAPICall(userName, password) {
        return axios
            .post("https://electricvechicle.herokuapp.com/users/login", {
                email: userName,
                password: password
            })
            .then(responseJson => {
                return responseJson;
            })
            .catch(error => {
                return error;
            });
    },

    makeUserRegisterAPICall(userName, email, phone, city, password) {
        return axios
            .post("https://electricvechicle.herokuapp.com/users/adduser", {
                userName: userName,
                email: email,
                phone: phone,
                city: city,
                password: password
            })
            .then(responseJson => {
                return responseJson.data;
            })
            .catch(error => {
                return error;
            });
    }
};
