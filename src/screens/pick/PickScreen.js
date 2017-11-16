import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import {
  loadDataChuyenFromSocket,
  pickChuyenXe,
  initialChuyen,
  updateList,
} from './action';
import ListChuyen from './components/ListChuyen';
import styles from './styles/PickScreen.style';

let socket;

@connect(state => ({
  pick: state.pick,
}))
class PickScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnectSuccessfuly: false,
      isShowSearchBox: true,
    };
    const { dispatch } = this.props;
    socket = io.connect('http://localhost:3000/client');
    socket.on('connect_failed', () => {
      console.log('====================================');
      console.log('Ket noi that bai');
      console.log('====================================');
      this.setState({ isConnectSuccessfuly: true });
    });
    console.log(socket);
    dispatch(loadDataChuyenFromSocket(socket));
    socket.on('updateListChuyenxe', res => {
      console.log(res);
    });
  }
  componentDidMount() {
    // const { dispatch } = this.props;
    // socket.on("updateListChuyenxe", res => {
    //   console.log("updateListChuyenxe" + res);
    //   dispatch(updateList(res));
    // });
  }
  componentWillUnmount() {
    socket.disconnect();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListChuyen />
      </View>
    );
  }
}
export default PickScreen;
