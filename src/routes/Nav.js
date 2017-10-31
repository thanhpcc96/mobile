/*eslint-disable */
import React from "react";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from "react-navigation";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";

// import Screen
import HomeTab from "./HomeTab";
import TrackingTabs from "./TrackingTab";
import PickTab from "./PickTab";
import PaymentTab from "./PaymentTab";
import ReportTab from "./ReportTab";
import { LoginScreen, RegisterScreen, TrackingScreen } from "../screens";

// const addPickButton = styled(Touchable)`marginbottom: 10;`;

const NavbarDefaultStyle = {
  backgroundColor: "#4E94E5"
};

const Tabs = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      navigationOptions: {
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={35} color={tintColor} />
        )
      }
    },
    TrackingTab: {
      screen: TrackingTabs,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-send" size={35} color={tintColor} />
        )
      })
    },
    PickTab: {
      screen: PickTab,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name="md-add-circle"
            size={60}
            color={"#4E94E5"}
            style={{ marginBottom: 10 }}
          />
        )
      })
    },
    PaymentTab: {
      screen: PaymentTab,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-card" size={35} color={tintColor} />
        )
      })
    },
    ReportTab: {
      screen: ReportTab,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-paper-outline" size={30} color={tintColor} />
        )
      })
    }
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: "#7A7474",
      activeTintColor: "#4E94E5",
      pressColor: "#4E94E5",
      indicatorStyle: { backgroundColor: "#4E94E5" },
      style: {
        backgroundColor: "#FDF8F8"
      }
    }
  }
);
export default StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Login: {
      screen: LoginScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: "Tabs"
  }
);

// export default (Nav = DrawerNavigator(
//   {
//     Na: {
//       screen: MyStackNavigator
//     },
//     Setting: {
//       screen: LoginScreen
//     }
//   },
//   {
//     drawerWidth: 200,
//     drawerPosition: "right"
//   }
// ));
