import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";
import NavBar from "../common/NavBar";
import NavButton from "../common/NavBarButton";

// Import Screen
import { TrackingScreen } from "../screens";

const TrackingTab = StackNavigator(
  {
    Tracking: {
      screen: TrackingScreen,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <NavBar
            middle={
              <Text style={{ fontWeight: "500", fontSize: 20, color: "#fff" }}>
                {" "}
                Giám sát lộ trình{" "}
              </Text>
            }
          />
        )
      })
    }
  },
  {
    headerMode: "screen",
    headerBackTitle: null
  }
);
export default TrackingTab;
