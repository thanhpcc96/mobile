import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";

import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles/ForgotScreen.style";

const BackButton = styled(Touchable)`marginLeft: 10;`;

class ForgotScreen extends Component {
  static navigationOptions = () => ({
    headerBackTitle: null
  });
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isVisibleButtonForgot: false
    };
  }
  _validateEmail = value => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };
  _setStateEmail = value => {
    this.setState({
      email: value
    });
    this._checkVisible();
  };
  _checkVisible() {
    if (this.state.email.length > 1) {
      this.setState({
        isVisibleButtonForgot: true
      });
    } else {
      this.setState({
        isVisibleButtonForgot: false
      });
    }
  }
  _handlerSubmit() {
    if (this._validateEmail()) {
      Alert.alert("Xử lý thành công!", "Vui lòng kiểm tra email của bạn");
    } else {
      Alert.alert("Lỗi!", "Hã đảm bảo bạn nhập đúng email");
    }
  }
  render() {
    console.log("==================Forgot==================");
    console.log(this.props);
    console.log("====================================");
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
            <Image source={require("../../../assets/logo.png")} />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <TextInput
                placeholderTextColor="#FFF"
                style={[styles.textinput, { marginTop: 20 }]}
                placeholder="Vui lòng nhập email của bạn"
                onChangeText={value => this._setStateEmail(value)}
              />
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={
                  this.state.isVisibleButtonForgot
                    ? [styles.buttonForm, { backgroundColor: "#4E94E5" }]
                    : [styles.buttonForm, { backgroundColor: "#6A8CB3" }]
                }
                disabled={!this.state.isVisibleButtonLogin}
              >
                <Text
                  style={
                    this.state.isVisibleButtonForgot
                      ? styles.textButton
                      : [styles.textButton, { color: "#B2B0B0" }]
                  }
                >
                  {" "}
                  Khôi phục ngay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

export default ForgotScreen;
