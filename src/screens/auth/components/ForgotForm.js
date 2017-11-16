import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';

import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { Ionicons } from '@expo/vector-icons';

const BackButton = styled(Touchable)`marginLeft: 10;`;

class ForgotScreen extends Component {
  static navigationOptions = () => ({
    headerBackTitle: null,
  });
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isVisibleButtonForgot: false,
    };
  }
  _validateEmail = value => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };
  _setStateEmail = value => {
    this.setState({
      email: value,
    });
    this._checkVisible();
  };
  _checkVisible() {
    if (this.state.email.length > 1) {
      this.setState({
        isVisibleButtonForgot: true,
      });
    } else {
      this.setState({
        isVisibleButtonForgot: false,
      });
    }
  }
  _handlerSubmit() {
    if (this._validateEmail()) {
      Alert.alert('Xử lý thành công!', 'Vui lòng kiểm tra email của bạn');
    } else {
      Alert.alert('Lỗi!', 'Hã đảm bảo bạn nhập đúng email');
    }
  }
  render() {
    console.log('==================Forgot==================');
    console.log(this.props);
    console.log('====================================');
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <BackButton
            feedback="opacity"
            onPress={this.props.goBack}
            style={{ marginTop: '5%' }}
          >
            <Ionicons name="md-arrow-back" color={'#fff'} size={30} />
          </BackButton>
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
                  ? [styles.buttonForm, { backgroundColor: '#4E94E5' }]
                  : [styles.buttonForm, { backgroundColor: '#6A8CB3' }]
              }
              disabled={!this.state.isVisibleButtonLogin}
            >
              <Text
                style={
                  this.state.isVisibleButtonForgot
                    ? styles.textButton
                    : [styles.textButton, { color: '#B2B0B0' }]
                }
              >
                {' '}
                Khôi phục ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 0.1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 100,
    height: 50,
  },
  formContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red"
  },
  formGroup: {
    flex: 0.4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    // backgroundColor:'green'
  },
  textinput: {
    height: 63,
    width: Dimensions.get('window').width * 80 / 100,
    backgroundColor: 'rgba(253,255,255,0.2)',
    color: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
  },
  buttonGroup: {
    flex: 0.6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  buttonForm: {
    width: Dimensions.get('window').width * 80 / 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    borderRadius: 5,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  forgot: {
    width: Dimensions.get('window').width * 80 / 100,
    height: 60,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  textForgot: {
    color: '#fff',
    fontSize: 16,
  },
});
export default ForgotScreen;
