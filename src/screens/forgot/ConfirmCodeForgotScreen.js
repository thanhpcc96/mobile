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
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles/ForgotScreen.style";

const BackButton = styled(Touchable)`marginleft: 10;`;

class ConfirmCode extends Component {
  static navigationOptions = () => ({
    headerBackTitle: null
  });
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      isVisibleButtonAccept: false
    };
  }

  _setStateCode = value => {
    this.setState({
      code: value
    });
    this._checkVisible();
  };
  _checkVisible() {
    if (this.state.code.length > 1) {
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
    Alert.alert("Xử Tốt rồi", "Đợi nhé");
  }
  render() {
    console.log("==================Confirm code==================");
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
                placeholder="Nhập mã xác nhận"
                onChangeText={value => this._setStateCode(value)}
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
              >
                <Text
                  style={
                    this.state.isVisibleButtonAccept
                      ? styles.textButton
                      : [styles.textButton, { color: "#B2B0B0" }]
                  }
                >
                  {" "}
                  Xác nhận
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

export default ConfirmCode;
