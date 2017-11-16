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
import SleekLoad from 'react-native-sleek-loading-indicator';
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { getInfoProfileAction } from "../profile/action";

// import Component
import { TimerNotification, MainSelect } from "./components";

import styles from "./styles/HomeScreen.style";

@connect(
  state => ({
    profile: state.profile.info,
    typeUser: state.user.typeUser
  }),
  {
    getInfoProfileAction
  }
)
class HomeScreen extends Component {
  state={
    isLoadingData: true
  }
  componentDidMount() {
    this.props.getInfoProfileAction(this.props.typeUser);
  }
  render() {
    if(this.state.isLoadingData){
      return <SleekLoad loading={this.state.isLoadingData} text={"dang tai du lieu"}/>;
    }
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
              <Text style={styles.textItem}>{this.props.profile.result.info.fullname || "Khong xac dinh"}</Text>
            </View>
            <View style={styles.textItemStatus}>
              <Text style={styles.textItem}>{this.props.profile.result.scoreFriendly || '10'}</Text>
            </View>
          </View>
          <View style={styles.mainMenuPrimary}>
            <MainSelect navigation={this.props.navigation} />
          </View>
        </View>
      </View>
    );
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.profile){
      this.setState({
          isLoadingData: false
      })
    }
  }
}
export default HomeScreen;
