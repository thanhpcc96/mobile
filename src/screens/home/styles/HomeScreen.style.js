// @flow
/* eslint-disable */
// import EStyleSheet from 'react-native-extended-stylesheet';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5F3EE',
    width: '100%',
  },
  timerNotification: {
    flex: 0.1,
    backgroundColor: '#4E94E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 0.9,
    backgroundColor: '#466',
  },
  mainImageAvatar: {
    flex: 3,
  },
  avata: {
    width: 375,
    height: 205,
  },
  statusClient: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(38,17, 56, 0.5)',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
  textItemStatus:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textItem: {
    fontSize: 17,
    color: '#fff',
    fontWeight:'bold'
  },
  mainMenuPrimary: {
    flex: 6,
    backgroundColor: '#EDECE7',
  },
});
export default styles;
