import React, { Component } from "react";
import { View, Text } from "react-native";
class HomeScreenUser extends Component {
  render() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Phan cong</Text>
      </View>
    );
  }
}
export default HomeScreenUser;
