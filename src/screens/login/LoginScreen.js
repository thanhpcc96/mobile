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

import LoginForm from "./components/LoginForm";

import { postLogin } from "./actions";
import LoadingScreen from "../../common/LoadingScreen";

// @connect(
//   state => ({
//     navigation: state.nav,
//     isLoading: state.user.isLoading
//   }),
//   { postLogin }
// )
class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerBackTitle: null
  });
  state = {};

  _postLogin = async value => {
    await this.props.postLogin(value);
  };

  render() {
    if (this.props.isLoading) {
      return <LoadingScreen color={"#4E94E5"} />;
    }
    return (
      <View style={styles.root}>
        <Image
          source={require("../../../assets/background.png")}
          style={styles.backgroundContainer}
        >
          <View style={styles.logoContainer}>
            <Image source={require("../../../assets/logo.png")} />
          </View>
          <View style={styles.formContainer}>
            <LoginForm
              gotoRegister={() => this.props.navigation.navigate("Register")}
              gotoForgot={() => this.props.navigation.navigate("Forgot")}
              
            />
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
)(LoginScreen);

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
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    width: 100,
    height: 50
  },
  formContainer: {
    flex: 0.7,
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
