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

class ChangePassScreen extends Component {
  static navigationOptions = () => ({
    headerBackTitle: null
  });
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      consfirmPassword: "",
      isVisibleButtonAccept: false
    };
  }

  _setStatePassword = value => {
    this.setState({
      password: value
    });
    this._checkVisible();
  };
  _setStateConfirmPassword = value => {
    this.setState({
      consfirmPassword: value
    });
  };
  _checkVisible() {
    if (this.state.password.length > 1) {
      this.setState({
        isVisibleButtonAccept: true
      });
    } else {
      this.setState({
        isVisibleButtonAccept: false
      });
    }
  }
  _handlerSubmit() {
    if (this.state.password !== this.state.consfirmPassword) {
      Alert.alert("Lỗi rồi", "2 Mật khẩu không khớp nhau");
    }
    Alert.alert("Xử Tốt rồi", "Đợi nhé");
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
            <Image source={require("../../../assets/logo.png")} />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <TextInput
                placeholderTextColor="#FFF"
                style={[styles.textinput, { marginTop: 20 }]}
                placeholder="Mật khẩu mới"
                onChangeText={value => this._setStatePassword(value)}
                secureTextEntry={true}
              />
              <TextInput
                placeholderTextColor="#FFF"
                style={[styles.textinput, { marginTop: 20 }]}
                placeholder="Xác nhận mật khẩu"
                secureTextEntry={true}
                onChangeText={value => this._setStateConfirmPassword(value)}
              />
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={
                  this.state.isVisibleButtonAccept
                    ? [styles.buttonForm, { backgroundColor: "#4E94E5" }]
                    : [styles.buttonForm, { backgroundColor: "#6A8CB3" }]
                }
                disabled={!this.state.isVisibleButtonLogin}
                onPress={() => this._handlerSubmit()}
              >
                <Text
                  style={
                    this.state.isVisibleButtonAccept
                      ? styles.textButton
                      : [styles.textButton, { color: "#B2B0B0" }]
                  }
                >
                  {" "}
                  Xác nhận thay đổi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

export default ChangePassScreen;
