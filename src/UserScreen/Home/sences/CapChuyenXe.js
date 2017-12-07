import React, { Component } from "react";

import { Text, View } from "react-native";
import NavBarButton from '../../../common/NavBarButton'

class Chuyenxe extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Giám sát chuyến xe hiện tại",
    headerTitleStyle: {
      color: "#FFF"
    },
    headerBackTitleStyle: {
      color: "#FFF"
    },
    headerLeft: (
      <NavBarButton
        icon="ios-arrow-back"
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 10 }}
      />
    )
  });
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Chuyenxe cua minh</Text>
      </View>
    );
  }
}
export default Chuyenxe;
