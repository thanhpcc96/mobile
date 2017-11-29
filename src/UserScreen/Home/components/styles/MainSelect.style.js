// @flow
/* eslint-disable */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  selectItem: {
    marginTop: 10,
    marginBottom: 5,
    //flex:1,
    width: '96%',
    marginLeft: '2%',
    marginRight: '2%',
    height: 60,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  iconFirt: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection:'row'
  },
  textContanier: {
    flex: 2.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeLabelContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconArow: {
    flex: 0.4,
    //paddingLeft: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyleCenter: {
    color: '#3E3E3E',
    fontSize: 20,
  },
  textStyleIconFirst: {
    color: '#3E3E3E',
    fontSize: 35,
  },
  textStyleIconArrow: {
    color: '#3E3E3E',
    fontSize: 20,
  },
  badgeLabel: {
    width: 30,
    height: 30,
    borderRadius: 50 / 2,
    backgroundColor: '#4E94E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeLabelText: {
    color: '#fff',
  },
});

export default styles;
