import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";

import NavBar from "../common/NavBar";
import NavButton from "../common/NavBarButton";
import { logOutAction } from "../screens/auth/actions";

// Import Screen
import {
  HomeScreen,
  LinkScreen,
  Notification,
  TicketSVGScreen,
  TicketDetail,
  ScannerQRCode,
  ProfileScreen,
  UpdateProfileScreen
} from "../screens";

const HomeTab = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <NavBar
            right={
              <NavButton
                icon="ios-log-in"
                iconSize={33}
                onPress={() => navigation.navigate("Notification")}
                style={{ paddingLeft: 10 }}
              />
            }
            middle={
              <Text style={{ fontWeight: "500", fontSize: 20, color: "#fff" }}>
                {" "}
                Trang Chủ{" "}
              </Text>
            }
            left={
              <NavButton
                icon="md-contact"
                style={{ width: 33, height: 33, marginLeft: -5 }}
                iconSize={33}
                onPress={() => navigation.navigate("Profile")}
              />
            }
          />
        )
      })
    },
    SVG: {
      screen: TicketSVGScreen
    },
    LinkScreen: {
      screen: LinkScreen
    },
    Notification: {
      screen: Notification
    },
    Ticketdetail: {
      screen: TicketDetail
    },
    Scanner: {
      screen: ScannerQRCode
    },
    Profile: {
      screen: ProfileScreen
    },
    UpdateProfile: {
      screen: UpdateProfileScreen
    }
  },
  {
    headerMode: "screen",
    headerBackTitle: null
  }
);
export default HomeTab;
