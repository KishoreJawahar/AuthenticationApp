import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  renderContentViewStyle: {
    paddingTop: 60,
    padding: 20
  },
  userDetailsTextStyle: {
    alignSelf: "center",
    fontSize: 30
  },
  userNameViewStyle: {
    flexDirection: "row",
    marginTop: 25
  },
  userNameTextStyle: {
    fontSize: 25,
    marginVertical: 20
  },
  userNameResponseTextStyle: {
    fontSize: 25,
    marginVertical: 20,
    marginLeft: 5
  },
  userDetailsViewStyle: {
    flexDirection: "row"
  },
  userDataTextStyle: {
    fontSize: 25,
    marginVertical: 20,
    marginLeft: 5
  },
  logoutTextStyle: {
    color: "#198ebc",
    fontSize: 25,
    alignSelf: "center"
  },
  logoutViewStyle: {
    padding: 18,
    backgroundColor: "#EEEEEE",
    marginTop: 15,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25
  },
  loaderStyle: {
    alignSelf: "center",
    color: "black"
  }
});
