/*eslint-disable */
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import {
  LoginForm,
  RegisterForm,
  ForgotForm,
  UserLoginForm
} from "./components";

import { postLogin } from "./actions";
import LoadingScreen from "../../common/LoadingScreen";

// @connect(
//   state => ({
//     navigation: state.nav,
//     isLoading: state.user.isLoading
//   }),
//   { postLogin }
// )

initState = {
  isShowRegister: false,
  isShowForgot: false,
  isShowLogin: true,
  isNhanvien: false
};
class AuthScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerBackTitle: null
  });
  state = initState;

  _goBack = () => this.setState({ ...initState });

  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../../../assets/background.png")}
          style={styles.backgroundContainer}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/logo.png")}
              resizeMode={"contain"}
              style={styles.logoImg}
            />
          </View>
          <View style={styles.formContainer}>
            {this.state.isShowRegister ? (
              <RegisterForm goBack={() => this._goBack()} />
            ) : this.state.isShowForgot ? (
              <ForgotForm goBack={() => this._goBack()} />
            ) : this.state.isNhanvien ? (
              <UserLoginForm goBack={() => this._goBack()} />
            ) : (
              <LoginForm
                gotoRegister={() =>
                  this.setState({ isShowRegister: true, isShowForgot: false })}
                gotoForgot={() =>
                  this.setState({ isShowForgot: true, isShowRegister: false })}
                gotoUser={() =>
                  this.setState({
                    isNhanvien: true,
                    isShowRegister: false,
                    isShowForgot: false
                  })}
                // toi ve sua
              />
            )}
          </View>
        </Image>
      </View>
    );
  }
}
export default connect(
  state => ({
    isLoading: state.user.isLoading
  }),
  {
    postLogin
  }
)(AuthScreen);

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
  logoContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    width: 160,
    height: 80
  },
  formContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: "red"
  },
  formGroup: {
    flex: 0.3,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "green"
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
    flex: 0.7,
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
