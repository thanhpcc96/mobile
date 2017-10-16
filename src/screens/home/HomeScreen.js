// @flow
/*eslint-disable */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import Component
import { TimerNotification, MainSelect } from './components';

import styles from './styles/HomeScreen.style';

class HomeScreen extends Component {
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
                  'http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16123158-500-313.jpg',
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
            <MainSelect />
          </View>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
