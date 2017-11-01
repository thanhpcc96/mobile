import React, { Component } from "react";
import { View } from "react-native";
import { Constants } from "expo";

import QRCode from "../../common/QRcodehelper";
import NavBarButton from "../../common/NavBarButton";

class TicketSVGScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Vé khả dụng",
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: Constants.statusBarHeight
        }}
      >
        <QRCode value="http://awesome.link.qr" size={300} />
      </View>
    );
  }
}
export default TicketSVGScreen;
