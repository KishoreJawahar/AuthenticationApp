import React, {Component} from "react";
import {
    ActivityIndicator,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./Styles/RegisterStyle";
import {connect} from "react-redux";
import {
    loadingAction,
    registerUserAction,
    resetAction
} from "../../../Redux/Actions";
import {
    checkRegexPatternTest,
    isValidElement,
    isValidString
} from "../../../Utils/helpers";
import {AUTH_CONSTANTS, REGEX_PATTERN} from "./Utils/AuthConstants";
import TextInput from "../../../CommonModule/TextInput";

class Register extends Component {
    state = {
        userName: "",
        email: "",
        phone: "",
        city: "",
        password: "",
        userNameError: false,
        emailError: false,
        phoneError: false,
        cityError: false,
        passwordError: false
    };

    handleBackPressed() {
        Keyboard.dismiss();
        this.setState({
            userName: "",
            email: "",
            phone: "",
            city: "",
            password: ""
        });
        this.props.resetAction();
        this.props.navigation.navigate("Login");
    }

    handleEmail(text) {
        this.setState({
            email: text,
            emailError:
                !isValidString(text) ||
                !checkRegexPatternTest(REGEX_PATTERN.EMAIL_PATTERN, text)
        });
    }

    handlePassword(text) {
        this.setState({
            password: text,
            passwordError:
                !isValidString(text) ||
                !checkRegexPatternTest(REGEX_PATTERN.PASSWORD_PATTERN, text)
        });
    }

    handlePhone(text) {
        this.setState({
            phone: text,
            phoneError:
                !isValidString(text) ||
                !checkRegexPatternTest(REGEX_PATTERN.PHONE_PATTERN, text)
        });
    }

    handleRegisterButton() {
        Keyboard.dismiss();
        const {userName, email, phone, city, password} = this.state;
        if (!isValidString(userName)) {
            this.setState({userNameError: true});
        } else if (
            !isValidString(email) ||
            !checkRegexPatternTest(REGEX_PATTERN.EMAIL_PATTERN, email)
        ) {
            this.setState({emailError: true});
        } else if (
            !isValidString(phone) ||
            !checkRegexPatternTest(REGEX_PATTERN.PHONE_PATTERN, phone)
        ) {
            this.setState({phoneError: true});
        } else if (!isValidString(city)) {
            this.setState({cityError: true});
        } else if (
            !isValidString(password) ||
            !checkRegexPatternTest(REGEX_PATTERN.PASSWORD_PATTERN, password)
        ) {
            this.setState({passwordError: true});
        } else {
            this.props.loadingAction();
            this.props.registerUserAction(userName, email, phone, city, password);
        }
    }

    renderLoading() {
        if (this.props.isLoading) {
            return <ActivityIndicator size={"small"} style={styles.loaderStyle}/>;
        }
    }

    renderRegisterAPIComplete() {
        const {registerUserResponse} = this.props;
        if (
            isValidElement(registerUserResponse) &&
            isValidElement(registerUserResponse.data)
        ) {
            this.props.resetAction();
            this.props.navigation.navigate("Login");
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
                <View style={styles.headerViewStyle}>
                    <TouchableOpacity onPress={() => this.handleBackPressed()}>
                        <Image
                            source={require("../../../Images/arrow.png")}
                            style={styles.backArrowStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.registerHeaderTextStyle}>
                        {AUTH_CONSTANTS.REGISTER}
                    </Text>
                </View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.atTextStyle}>@</Text>
                    <Text style={styles.registerTextStyle}>Register</Text>
                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            placeholder={AUTH_CONSTANTS.USER_NAME}
                            autoFocus
                            value={this.state.userName}
                            onChangeText={text => {
                                this.setState({
                                    userName: text,
                                    userNameError: !isValidString(text)
                                });
                            }}
                            error={this.state.userNameError}
                            errorText={AUTH_CONSTANTS.USER_NAME_ERROR_TEXT}
                        />
                        <TextInput
                            placeholder={AUTH_CONSTANTS.EMAIL}
                            keyboardType={"email-address"}
                            autoCapitalize={"none"}
                            value={this.state.email}
                            onChangeText={text => this.handleEmail(text)}
                            error={this.state.emailError}
                            errorText={AUTH_CONSTANTS.EMAIL_ERROR_TEXT}
                        />
                        <TextInput
                            placeholder={AUTH_CONSTANTS.PHONE}
                            value={this.state.phone}
                            onChangeText={text => this.handlePhone(text)}
                            maxLength={10}
                            keyboardType={"number-pad"}
                            error={this.state.phoneError}
                            errorText={AUTH_CONSTANTS.PHONE_ERROR_TEXT}
                        />
                        <TextInput
                            placeholder={AUTH_CONSTANTS.CITY}
                            value={this.state.city}
                            onChangeText={text => {
                                this.setState({city: text, cityError: !isValidString(text)});
                            }}
                            error={this.state.cityError}
                            errorText={AUTH_CONSTANTS.CITY_ERROR_TEXT}
                        />
                        <TextInput
                            placeholder={AUTH_CONSTANTS.PASSWORD}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={text => this.handlePassword(text)}
                            error={this.state.passwordError}
                            errorText={AUTH_CONSTANTS.PASSWORD_ERROR_TEXT}
                        />
                        {this.renderLoading()}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                this.handleRegisterButton();
                            }}
                            style={styles.registerButtonStyle}
                        >
                            <Text style={styles.registerButtonTextStyle}>
                                {AUTH_CONSTANTS.REGISTER}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.alreadyHaveAnAccountViewStyle}>
                            <Text style={styles.alreadyHaveAnAccountTextStyle}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => this.handleBackPressed()}
                            >
                                <Text style={styles.loginTextStyle}>
                                    {AUTH_CONSTANTS.LOGIN}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                {this.renderRegisterAPIComplete()}
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.AuthState.isLoading,
    registerUserResponse: state.AuthState.registerUserResponse,
    registerUserFailedResponse: state.AuthState.registerUserFailedResponse
});

const mapDispatchToProps = {
    registerUserAction,
    loadingAction,
    resetAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
