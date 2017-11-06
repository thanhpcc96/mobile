import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";

import NavBar from "../common/NavBar";
import NavButton from "../common/NavBarButton";

// Import Screen
import {
  HomeScreen,
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
                icon="ios-menu"
                iconSize={33}
                onPress={() => navigation.navigate("Login")}
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
