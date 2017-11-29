import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";
import NavBar from "../common/NavBar";
import NavButton from "../common/NavBarButton";

// Import Screen
import { CheckScreen } from "../UserScreen";

const Scanner = StackNavigator(
  {
    UserScanner: {
      screen: CheckScreen,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <NavBar
            middle={
              <Text style={{ fontWeight: "500", fontSize: 20, color: "#fff" }}>
                {" "}
                Quét vé{" "}
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
export default Scanner;
