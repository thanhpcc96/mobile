// @flow
/*eslint-disable */
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { getInfoProfileAction } from "../profile/action";

// import Component
import { TimerNotification, MainSelect } from "./components";

import styles from "./styles/HomeScreen.style";

@connect(
  state => ({
    profile: state.profile
  }),
  {
    getInfoProfileAction
  }
)
class HomeScreen extends Component {
  componentDidMount() {
    this.props.getInfoProfileAction("client");
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.timerNotification}>
          <TimerNotification />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainImageAvatar}>
            <ImageBackground
              source={{
                uri:
                  "http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16123158-500-313.jpg"
              }}
              style={styles.avata}
            />
          </View>
          <View />
          <View style={styles.statusClient}>
            <View style={styles.textItemStatus}>
              <Text style={styles.textItem}>Thanh Pham</Text>
            </View>
            <View style={styles.textItemStatus}>
              <Text style={styles.textItem}>100</Text>
            </View>
          </View>
          <View style={styles.mainMenuPrimary}>
            <MainSelect navigation={this.props.navigation} />
          </View>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
