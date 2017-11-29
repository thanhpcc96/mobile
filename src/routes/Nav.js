/*eslint-disable */
import React from "react";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from "react-navigation";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";

// import Screen
import HomeTab from "./HomeTab";
import TrackingTabs from "./TrackingTab";
import PickTab from "./PickTab";
import PaymentTab from "./PaymentTab";
import ReportTab from "./ReportTab";
import {
  AuthScreen,
  RegisterScreen,
  ForgotScreen,
  ConfirmCodeForgotScreen,
  ChangePassScreen
} from "../screens";

import { CheckScreen, HomeScreenUser, PhanCongScreen } from "../UserScreen";

// import components
import NavBar from "../common/NavBar";
import NavButton from "../common/NavBarButton";

// const addPickButton = styled(Touchable)`marginbottom: 10;`;

const NavbarDefaultStyle = {
  backgroundColor: "#4E94E5"
};

const Tabs = TabNavigator(
  // cho client danh cho client
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

const UserTab = TabNavigator(
  {
    UserHomeTab: {
      screen: HomeScreenUser,
      navigationOptions: {
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={35} color={tintColor} />
        )
      }
    },
    UserTrackingTab: {
      screen: CheckScreen,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-send" size={35} color={tintColor} />
        )
      })
    },
    UserTimelineTab: {
      screen: PhanCongScreen,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="table-edit"
            size={30}
            color={tintColor}
          />
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
export const NavClient= StackNavigator(
  {
    Tabs: {
      screen: Tabs
    }
  },
  {headerMode: "none",
  mode: "modal",
  initialRouteName:'Tabs'}
);

export const NavUser= StackNavigator(
  {
    UserTabs: {
      screen: UserTab
    }
  },
  {headerMode: "none",
  mode: "modal",
  initialRouteName:'UserTabs'}
)

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
