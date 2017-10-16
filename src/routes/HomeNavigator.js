// @flow
/*eslint-disable */
import React from 'react';
import { TabNavigator } from 'react-navigation';
import Touchable from '@appandflow/touchable';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Import screen
 */
import {HomeScreen, TrackingScreen} from '../screens';

const AvatarButton = styled(Touchable)`
marginLeft: 20;
`;
const DraweMenu = styled(Touchable)`
marginRight: 20;
`;

const NavbarDefaultStyle = {
  backgroundColor: '#4E94E5',
};

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      title: 'Trang chủ',
      navigationOptions: ({ navigation }) => ({
        headerStyle: NavbarDefaultStyle,
        headerLeft: (
          <AvatarButton feedback="opacity">
            <Ionicons name="md-contact" size={35} color={'#fff'} />
          </AvatarButton>
        ),
        headerRight: (
          <DraweMenu feedback="opacity">
            <Ionicons name="ios-menu" size={30} color={'#fff'} />
          </DraweMenu>
        ),
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={30} color={tintColor} />
        ),
      }),
    },
    Track: {
      screen: TrackingScreen,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-send" size={30} color={tintColor} />
        ),
      }),
    },
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: '#7A7474',
      activeTintColor: '#4E94E5',
      pressColor: '#4E94E5',
      indicatorStyle: { backgroundColor: '#4E94E5' },
      style: {
        backgroundColor: '#FDF8F8',
      },
    },
  },
);
