/*eslint-disable */
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  //CheckBox
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles/LoginForm.style";
class Form extends React.Component {
  static propTypes = {
    gotoRegister: PropTypes.func.isRequired,
    gotoForgot: PropTypes.func.isRequired
    // handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isVisibleButtonLogin: false
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
  _setStatePassword = value => {
    this.setState({
      password: value
    });
    this._checkVisible();
  };
  _checkVisible() {
    if (this.state.email.length > 1 && this.state.password.length > 1) {
      this.setState({
        isVisibleButtonLogin: true
      });
    } else {
      this.setState({
        isVisibleButtonLogin: false
      });
    }
  }
  _handlerSubmit() {
    if (this._validateEmail && this.state.password > 5) {
      Alert.alert('Se xu ly login sau',"Neu vey thanh con kha kha roi");
      //   this.props.handleSubmit({
      //     email: this.state.email,
      //     password: this.state.password
      //   });
    } else {
      Alert.alert("khogn phu hop em oi", "Mat khau ko fu dai, email ko chuan");
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.formGroup}>
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            placeholder="Email"
            onChangeText={value => this._setStateEmail(value)}
          />
          <TextInput
            style={[styles.textinput, { marginTop: 30 }]}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value => this._setStatePassword(value)}
          />
          
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={
              this.state.isVisibleButtonLogin
                ? [styles.buttonForm, { backgroundColor: "#4E94E5" }]
                : [styles.buttonForm, { backgroundColor: "#6A8CB3" }]
            }
            disabled={!this.state.isVisibleButtonLogin}
            onPress={() => this._handlerSubmit()}
          >
            <Text
              style={
                this.state.isVisibleButtonLogin
                  ? styles.textButton
                  : [styles.textButton, { color: "#B2B0B0" }]
              }
            >
              {" "}
              Dang nhap
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonForm,
              { backgroundColor: "rgba(253,255,255,0.3)" }
            ]}
            onPress={this.props.gotoRegister}
          >
            <Text style={styles.textButton}> Dang ky</Text>
          </TouchableOpacity>
          <View style={styles.forgot}>
            <Text style={styles.textForgot}>Khoi phuc mat khau? </Text>
            <Text
              style={[styles.textForgot, { textDecorationLine: "underline" }]}
              onPress={this.props.gotoForgot}
            >
              Khoi phuc ngay
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Form;
