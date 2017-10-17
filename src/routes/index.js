import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import Screen
import HomeTab from './HomeTab';
import TrackingTabs from './TrackingTab';
import { LoginScreen, RegisterScreen } from '../screens'

const NavbarDefaultStyle = {
    backgroundColor: '#4E94E5',
};

const Tabs = TabNavigator({
    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            headerStyle: NavbarDefaultStyle,
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-home" size={30} color={tintColor} />
            ),
        },
    },
    TrackingTab: {
        screen: TrackingTabs,
        navigationOptions: () => ({
            headerStyle: NavbarDefaultStyle,
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-send" size={30} color={tintColor} />
            ),
          }),
    }
}, {
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
    }
);

export default (Navigator = StackNavigator({
    Tabs: {
        screen: Tabs
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
}, {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'Tabs'
    },
));