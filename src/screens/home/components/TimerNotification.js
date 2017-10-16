// @flow
/* eslint-disable */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles/TimerNotification.style';

class TimerNotification extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.containerTimerText}>
          <Text style={styles.timeTitle}> Ha noi hai phong</Text>
          <Text style={styles.timeCountDown}> Con lai 10h</Text>
        </View>
        <View style={styles.containerIconBell}>
          <Ionicons name="ios-notifications" color={'#fff'} size={30} />
        </View>
      </View>
    );
  }
}
export default TimerNotification;
