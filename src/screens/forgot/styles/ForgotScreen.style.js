import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundContainer: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center"
  },
  header: {
    flex: 0.1,
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  logoContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    width: 100,
    height: 50
  },
  formContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: "red"
  },
  formGroup: {
    flex: 0.4,
    justifyContent: "flex-start",
    alignItems: "stretch"
    //backgroundColor:'green'
  },
  textinput: {
    height: 63,
    width: Dimensions.get("window").width * 80 / 100,
    backgroundColor: "rgba(253,255,255,0.2)",
    color: "#fff",
    borderRadius: 5,
    paddingLeft: 10
  },
  buttonGroup: {
    flex: 0.6,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  buttonForm: {
    width: Dimensions.get("window").width * 80 / 100,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    borderRadius: 5
  },
  textButton: {
    color: "#fff",
    fontSize: 20
  },
  forgot: {
    width: Dimensions.get("window").width * 80 / 100,
    height: 60,
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  textForgot: {
    color: "#fff",
    fontSize: 16
  }
});
export default styles;
