import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#EEEEEE",
        flex: 1
    },
    headerViewStyle: {
        height: 65,
        backgroundColor: "#EEEEEE",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.3,
        borderBottomColor: "#999999"
    },
    backArrowStyle: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    registerHeaderTextStyle: {
        left: 25,
        fontSize: 23,
        color: "#333333"
    },
    atTextStyle: {
        fontSize: 35,
        color: "green",
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 40
    },
    registerTextStyle: {
        fontSize: 30,
        color: "green",
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 7
    },
    textInputViewStyle: {
        paddingHorizontal: 25,
        paddingTop: 25
    },
    registerButtonStyle: {
        padding: 18,
        backgroundColor: "#63C156",
        marginTop: 40,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center"
    },
    alreadyHaveAnAccountViewStyle: {
        flexDirection: "row",
        top: -5,
        marginVertical: 30,
        justifyContent: "center"
    },
    alreadyHaveAnAccountTextStyle: {
        color: "#333333",
        fontSize: 15
    },
    loginTextStyle: {
        color: "#198ebc",
        fontSize: 15
    },
    registerButtonTextStyle: {
        color: "white",
        fontSize: 20
    },
    loaderStyle: {
        alignSelf: "center",
        color: "black",
        marginVertical: 10
    }
});
