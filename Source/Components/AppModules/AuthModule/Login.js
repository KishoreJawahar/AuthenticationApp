import React, {Component} from "react";
import {
    ActivityIndicator,
    Keyboard,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./Styles/LoginStyles";
import {connect} from "react-redux";
import {
    loadingAction,
    loginUserAction,
    resetAction
} from "../../../Redux/Actions";
import {
    checkRegexPatternTest,
    isValidElement,
    isValidString
} from "../../../Utils/helpers";
import {AUTH_CONSTANTS, REGEX_PATTERN} from "./Utils/AuthConstants";
import TextInput from "../../../CommonModule/TextInput";

class Login extends Component {
    state = {
        email: "",
        password: "",
        userNameError: false,
        passwordError: false,
        APIFailureError: false
    };

    handlePassword(text) {
        this.setState({
            password: text,
            passwordError:
                !isValidString(text) ||
                !checkRegexPatternTest(REGEX_PATTERN.PASSWORD_PATTERN, text)
        });
    }

    handleEmail(text) {
        this.setState({
            email: text,
            userNameError:
                !isValidString(text) ||
                !checkRegexPatternTest(REGEX_PATTERN.EMAIL_PATTERN, text)
        });
    }

    handleLoginButton() {
        Keyboard.dismiss();
        const {email, password} = this.state;
        if (
            !isValidString(email) ||
            !checkRegexPatternTest(REGEX_PATTERN.EMAIL_PATTERN, email)
        ) {
            this.setState({
                userNameError: true
            });
        } else if (!isValidString(password)) {
            this.setState({passwordError: true});
        } else {
            this.props.loadingAction();
            this.props.loginUserAction(email, password);
        }
    }

    renderSpinnerOrLoginButton() {
        if (this.props.isLoading) {
            return <ActivityIndicator size={"small"} style={styles.loaderStyle}/>;
        } else {
            return (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        this.handleLoginButton();
                    }}
                    style={styles.loginButtonStyle}
                >
                    <Text style={styles.loginTextStyle}>{AUTH_CONSTANTS.LOGIN}</Text>
                </TouchableOpacity>
            );
        }
    }

    renderLoginAPIComplete() {
        const {userResponse} = this.props;
        if (isValidElement(userResponse) && isValidElement(userResponse.data)) {
            this.props.navigation.navigate("Dashboard");
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={{flexGrow: 1}}
                    keyboardShouldPersistTaps="handled"
                    style={styles.container}
                >
                    <View style={styles.userLoginTextViewStyle}>
                        <Text style={styles.atTextStyle}>{AUTH_CONSTANTS.AT}</Text>
                        <Text style={styles.userLoginTextStyle}>
                            {AUTH_CONSTANTS.USER_LOGIN}
                        </Text>
                    </View>
                    <View style={styles.textViewStyle}>
                        <View>
                            <TextInput
                                placeholder={AUTH_CONSTANTS.EMAIL}
                                keyboardType={"email-address"}
                                autoFocus
                                value={this.state.email}
                                onChangeText={text => this.handleEmail(text)}
                                error={this.state.userNameError}
                                errorText={AUTH_CONSTANTS.EMAIL_ERROR_TEXT}
                            />
                            <TextInput
                                placeholder={AUTH_CONSTANTS.PASSWORD}
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={text => this.handlePassword(text)}
                                error={this.state.passwordError}
                                errorText={AUTH_CONSTANTS.PASSWORD_ERROR_TEXT}
                            />
                        </View>
                        {this.renderSpinnerOrLoginButton()}
                        <View style={styles.registeredTextViewStyle}>
                            <Text style={styles.registeredTextStyle}>
                                {AUTH_CONSTANTS.NOT_YET_REGISTERED}
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => this.props.navigation.navigate("Register")}
                            >
                                <Text style={styles.registerTextStyle}>
                                    {AUTH_CONSTANTS.REGISTER}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {this.renderLoginAPIComplete()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.AuthState.isLoading,
    userResponse: state.AuthState.userResponse,
    userFailedResponse: state.AuthState.userFailedResponse
});

const mapDispatchToProps = {
    loginUserAction,
    loadingAction,
    resetAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
