import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

import NavBarButton from "../../common/NavBarButton";
class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Thông tin tài khoản",
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
      <View style={styles.root}>
        <View style={styles.avatarContainer}>
          <TouchableHighlight style={styles.imageConatiner}>
            <Image
              source={require("../../../assets/avatar.jpg")}
              style={styles.image}
            />
          </TouchableHighlight>
          <View style={styles.fullname}>
            <Text>Hao Nguyen</Text>
          </View>
        </View>
        <View style={styles.infoConatiner} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  avatarContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  imageConatiner: {
    width: 160,
    height: 160,
    borderRadius: 80
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80
  },
  fullname: {
    backgroundColor: "red",
    position: "absolute",
    bottom: 10,
    alignSelf: "center"
  },

  infoConatiner: {
    flex: 0.6
  }
});
export default ProfileScreen;
