import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";
import NavBar from "../common/NavBar";
import NavButton from "../common/NavBarButton";

// Import Screen
import { TrackingUser } from "../UserScreen";

const TrackingTab = StackNavigator(
  {
    TrackingUser: {
      screen: TrackingUser,
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
