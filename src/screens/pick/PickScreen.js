import React, { Component } from "react";
import { View, TextInput, TouchableHighlight } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import ListChuyen from "./components/ListChuyen";
import styles from "./styles/PickScreen.style";

class PickScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSearchBox: true
    };
  }
  render() {
    return (
      <View>
      </View>
    );
  }
}
export default PickScreen;
