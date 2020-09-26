import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    flex: 1
  },
  userLoginTextViewStyle: {
    marginTop: 50
  },
  atTextStyle: {
    fontSize: 35,
    color: "green",
    alignSelf: "center",
    fontWeight: "bold"
  },
  userLoginTextStyle: {
    fontSize: 30,
    color: "green",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 7
  },
  textViewStyle: {
    paddingHorizontal: 25,
    paddingTop: 50
  },
  errorTextStyle: {
    color: "#D12F2F",
    marginTop: -12
  },
  registeredTextViewStyle: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center"
  },
  registeredTextStyle: {
    color: "#333333",
    fontSize: 15
  },
  registerTextStyle: {
    color: "#198ebc",
    fontSize: 15
  },
  loaderStyle: {
    marginVertical: 10,
    alignSelf: "center",
    color: 'black'
  },
  loginButtonStyle: {
    padding: 18,
    backgroundColor: "#63C156",
    marginTop: 40,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  loginTextStyle: {
    color: "white",
    fontSize: 20
  }
});
