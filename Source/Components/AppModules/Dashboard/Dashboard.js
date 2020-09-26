import React, { Component } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./Styles/DashboardStyle";
import {
  onLogoutAction,
  loadingAction,
  resetAction
} from "../../../Redux/Actions";
import { connect } from "react-redux";
import { isValidElement } from "../../../Utils/helpers";
import { AUTH_CONSTANTS } from "../AuthModule/Utils/AuthConstants";

class Dashboard extends Component {
  handleLogoutButtonPressed() {
    this.props.resetAction();
    this.props.loadingAction();
    this.props.onLogoutAction();
    this.props.navigation.navigate("Login");
  }

  renderLoading() {
    if (this.props.isLoading) {
      return <ActivityIndicator size={"small"} style={styles.loaderStyle} />;
    }
  }

  renderLogout() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          this.handleLogoutButtonPressed();
        }}
        style={styles.logoutViewStyle}
      >
        <Text style={styles.logoutTextStyle}>{AUTH_CONSTANTS.LOGOUT}</Text>
      </TouchableOpacity>
    );
  }

  renderContent() {
    const { userResponse } = this.props;
    if (
      isValidElement(userResponse) &&
      isValidElement(userResponse.data) &&
      isValidElement(userResponse.data.data)
    ) {
      return (
        <View style={styles.renderContentViewStyle}>
          <Text style={styles.userDetailsTextStyle}>
            {AUTH_CONSTANTS.USER_DETAILS}
          </Text>
          <View style={styles.userNameViewStyle}>
            <Text style={styles.userNameTextStyle}>
              {AUTH_CONSTANTS.USER_NAME + "-"}
            </Text>
            <Text style={styles.userNameResponseTextStyle}>
              {userResponse.data.data.userName}
            </Text>
          </View>

          <View style={styles.userDetailsViewStyle}>
            <Text style={styles.userNameTextStyle}>
              {AUTH_CONSTANTS.EMAIL + "-"} -
            </Text>
            <Text style={styles.userDataTextStyle}>
              {userResponse.data.data.email}
            </Text>
          </View>

          <View style={styles.userDetailsViewStyle}>
            <Text style={styles.userNameTextStyle}>
              {AUTH_CONSTANTS.PHONE + "-"}
            </Text>
            <Text style={styles.userDataTextStyle}>
              {userResponse.data.data.phone}
            </Text>
          </View>

          <View style={styles.userDetailsViewStyle}>
            <Text style={styles.userNameTextStyle}>
              {AUTH_CONSTANTS.CITY + "-"}
            </Text>
            <Text style={styles.userDataTextStyle}>
              {userResponse.data.data.city}
            </Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
        {this.renderLogout()}
        {this.renderLoading()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userResponse: state.AuthState.userResponse,
  isLoading: state.AuthState.isLoading
});

const mapDispatchToProps = {
  onLogoutAction,
  loadingAction,
  resetAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
