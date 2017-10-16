import React from 'react';
import { AsyncStorage, UIManager, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import HomeScreen from './src/screens/home/HomeScreen';
import Root from './src/Root'

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
// `EStyleSheet.build(Colors)`

export default class App extends React.Component {
  render() {
    return <Root />;
  }
}
