/*eslint-disable */
import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";
import { Ionicons } from "@expo/vector-icons";

// import styles from "./styles/ForgotScreen.style";

const BackButton = styled(Touchable)`marginLeft: 10;`;


class Register extends Component {
  static navigationOptions = () => ({
    headerBackTitle: null
  });
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
      isVisibleButtonRegister: false
    };
  }
  _validateEmail = value => {
    const chuan = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return chuan.test(value);
  };
  _validatePhone = value => {
    const chuan = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    return chuan.test(value);
  };
  _setStateEmail = value => {
    this.setState({
      email: value
    });
    this._checkVisible();
  };
  _setStateFullName = value => {
    this.setState({
      fullname: value
    });
    this._checkVisible();
  };
  _setStatePhone = value => {
    this.setState({
      phone: value
    });
    this._checkVisible();
  };
  _setStatePassword = value => {
    this.setState({
      password: value
    });
    this._checkVisible();
  };
  _setStateConfirmPassword = value => {
    this.setState({
      confirmpassword: value
    });
    this._checkVisible();
  };
  _checkVisible() {
    if (
      this.state.fullname.length > 1 &&
      this.state.email.length > 1 &&
      this.state.phone.length > 1 &&
      this.state.password.length > 1 &&
      this.state.confirmpassword.length > 1
    ) {
      this.setState({
        isVisibleButtonRegister: true
      });
    } else {
      this.setState({
        isVisibleButtonRegister: false
      });
    }
  }
  _handlerSubmit() {
    if (
      this._validateEmail(this.state.email) &&
      this._validatePhone(this.state.phone)
    ) {
      if (this.state.password === this.state.confirmpassword) {
        Alert.alert("Xử lý thành công!", "Vui lòng kiểm tra email của bạn");
      } else {
        Alert.alert("Lỗi!", "Password xác nhận không khớp");
      }
    } else {
      Alert.alert("Lỗi!", "Hãy đảm bảo bạn nhập đúng email");
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../../../assets/background.png")}
          style={styles.backgroundContainer}
        >
          <View style={styles.header}>
            <BackButton
              feedback="opacity"
              onPress={() => this.props.navigation.goBack()}
              style={{ marginTop: "5%" }}
            >
              <Ionicons name="md-arrow-back" color={"#fff"} size={30} />
            </BackButton>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logoImg}
              resizeMode={"contain"}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <ScrollView>
                <View style={styles.inputContainer}>
                  <Ionicons name="ios-person" color={"#FFF"} size={35} />
                  <TextInput
                    placeholderTextColor="#FFF"
                    style={styles.textinput}
                    placeholder="Họ và tên"
                    onChangeText={value => this._setStateFullName(value)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Ionicons name="ios-mail" color={"#FFF"} size={35} />
                  <TextInput
                    placeholderTextColor="#FFF"
                    style={styles.textinput}
                    placeholder="Email"
                    onChangeText={value => this._setStateEmail(value)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Ionicons name="ios-call" color={"#FFF"} size={35} />
                  <TextInput
                    placeholderTextColor="#FFF"
                    style={styles.textinput}
                    placeholder="Số điện thoại"
                    onChangeText={value => this._setStatePhone(value)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Ionicons name="ios-lock" color={"#FFF"} size={35} />
                  <TextInput
                    placeholderTextColor="#FFF"
                    style={styles.textinput}
                    placeholder="Password"
                    onChangeText={value => this._setStatePassword(value)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Ionicons name="ios-lock" color={"#FFF"} size={35} />
                  <TextInput
                    placeholderTextColor="#FFF"
                    style={styles.textinput}
                    placeholder="Xác nhận password"
                    onChangeText={value => this._setStateConfirmPassword(value)}
                  />
                </View>
              </ScrollView>
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={
                  this.state.isVisibleButtonRegister
                    ? [styles.buttonForm, { backgroundColor: "#4E94E5" }]
                    : [styles.buttonForm, { backgroundColor: "#6A8CB3" }]
                }
                disabled={this.state.isVisibleButtonLogin}
                onPress={() => this._handlerSubmit()}
              >
                <Text
                  style={
                    this.state.isVisibleButtonRegister
                      ? styles.textButton
                      : [styles.textButton, { color: "#B2B0B0" }]
                  }
                >
                  {" "}
                  Đăng ký ngay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

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
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    width: 140,
    height: 70
  },
  formContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: "red"
  },
  formGroup: {
    flex: 0.8,
    justifyContent: "flex-start",
    alignItems: "stretch"
    //backgroundColor:'green'
  },
  inputContainer: {
    height: 60,
    width: Dimensions.get("window").width * 80 / 100,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "rgba(253,255,255,0.2)",
    paddingLeft: "4%",
    borderRadius: 5
  },
  textinput: {
    height: 60,
    paddingLeft: 20,
    width: "90%",
    marginLeft: 5,
    color: "#FFF"
  },
  buttonGroup: {
    flex: 0.2,
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

export default Register;
