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
import { CheckBox } from "react-native-elements";
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
class Form extends React.Component {
  static propTypes = {
    gotoRegister: PropTypes.func.isRequired,
    navigation: PropTypes.object
    //handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isDisableButtonLogin: false,
      isClient: true, // true la client
      typeUser: 'client'
    };
    this._setTypeUser.bind(this)
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
      this.props.postLogin(this.state.email, this.state.password, this.state.typeUser);
      //this.props.navigation.navigate("Tabs");
    } else {
      Alert.alert(
        "Dữ liệu nhập quá tồi",
        "Email không đúng hoặc mật khẩu ngắn"
      );
    }
    e.preventDefault();
  }
  _setTypeUser() {
    
    this.setState({
      isClient: ! this.state.isClient 
    });
    this.setState({
      typeUser: this.state.isClient === false ? 'user' : 'client'
    });
    
  
    
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.formGroup}>
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            placeholder="Email"
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
              Đăng nhập
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonForm,
              { backgroundColor: "rgba(253,255,255,0.3)" }
            ]}
            onPress={()=>this.props.gotoRegister()}
          >
            <Text style={styles.textButton}> Đăng ký</Text>
          </TouchableOpacity>
          <View style={styles.forgot}>
            <Text style={styles.textForgot}>Quên tài khoản? </Text>
            <Text
              style={[styles.textForgot, { textDecorationLine: "underline" }]}
              onPress={this.props.gotoForgot}
            >
              Khôi phục ngay!
            </Text>
          </View>
          <View style={styles.forgot}>
            <Text
              style={[styles.textForgot, { textDecorationLine: "underline" }]}
              onPress={this.props.gotoUser}
            >
             Đăng nhập nhân viên!
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
export default Form;
