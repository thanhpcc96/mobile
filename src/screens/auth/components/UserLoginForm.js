/*eslint-disable */
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
  //CheckBox
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { postLogin } from "../actions";
import styles from "./styles/LoginForm.style";

@connect(
  state => ({
    isLoading: state.user.isLoading,
    error: state.user.error
  }),
  { postLogin }
)
class UserForm extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
    //handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isDisableButtonLogin: false,
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
        isDisableButtonLogin: true
      });
    } else {
      this.setState({
        isDisableButtonLogin: false
      });
    }
  }
  _handlerSubmit( e ) {
    if (this._validateEmail(this.state.email) && this.state.password > 5) {
      //Alert.alert("Sẽ xử lý sau", "Tốt rồi không lỗi");
      //   this.props.handleSubmit({
      //     email: this.state.email,
      //     password: this.state.password

      //   });
      console.log("====================================");
      console.log("Vao day roi");
      console.log("====================================");
      this.props.postLogin(this.state.email, this.state.password,'user');
      //this.props.navigation.navigate("Tabs");
    } else {
      Alert.alert(
        "Dữ liệu nhập quá tồi",
        "Email không đúng hoặc mật khẩu ngắn"
      );
    }
    e.preventDefault();
  }
  
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.formGroup}>
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            placeholder="Email Nhân viên"
            onChangeText={value => this._setStateEmail(value)}
            placeholderTextColor={"#fff"}
            autoCapitalize='none'
            autoCorrect={false} 
            autoFocus={true} 
            keyboardType='email-address'
            value={this.state.email}
          />
          <TextInput
            style={[styles.textinput, { marginTop: 30 }]}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value => this._setStatePassword(value)}
            placeholderTextColor={"#fff"}
            value={this.state.password}
          />
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={
              this.state.isDisableButtonLogin
                ? [styles.buttonForm, { backgroundColor: "#4E94E5" }]
                : [styles.buttonForm, { backgroundColor: "#6A8CB3" }]
            }
            disabled={!this.state.isDisableButtonLogin && !this.props.isLoading }
            onPress={(e) => this._handlerSubmit(e)}
          >
            <Text
              style={
                this.state.isDisableButtonLogin
                  ? styles.textButton
                  : [styles.textButton, { color: "#B2B0B0" }]
              }
            >
              {" "}
              Đăng nhập NV
            </Text>
          </TouchableOpacity>
          <View style={styles.forgot}>
            <Text style={styles.textForgot}>Bạn là khách hàng? </Text>
            <Text
              style={[styles.textForgot, { textDecorationLine: "underline" }]}
              onPress={this.props.goBack}
            >
             Đăng nhập!
            </Text>
          </View>
        </View>
      </View>
    );
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.error){
      alert('email hoac password sai!')
    }
  }
}
export default UserForm;
