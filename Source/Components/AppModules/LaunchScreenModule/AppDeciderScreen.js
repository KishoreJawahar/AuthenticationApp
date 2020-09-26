import React, {Component} from "react";
import {ImageBackground, Text} from "react-native";
import styles from "./Styles/LaunchScreenStyle";
import {connect} from "react-redux";
import * as Constants from "./Utils/Costants";

class AppDeciderScreen extends Component {
    componentDidMount() {
        this.appDeciderScreen();
    }

    appDeciderScreen() {
        setTimeout(() => {
            this.props.navigation.navigate("Login");
        }, 3000);
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require("../../../Images/bgImage.jpg")}
            >
                <Text style={styles.textStyle}>
                    {Constants.LAUNCHSCREEN_CONSTANTS.TODO_APP_TEXT}
                </Text>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppDeciderScreen);
