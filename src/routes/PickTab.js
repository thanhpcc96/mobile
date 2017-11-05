import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";

// Import Screen
import { PickScreen } from "../screens";
import NavBar from "../common/NavBar";
import NavButton from "../common/NavBarButton";

const PickTab = StackNavigator(
  {
    PickScreen: {
      screen: PickScreen,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <NavBar
            right={
              <NavButton
                icon="md-search"
                iconSize={28}
                onPress={() => navigation.navigate("Login")}
                style={{ paddingLeft: 10 }}
              />
            }
            middle={
              <Text style={{ fontWeight: "500", fontSize: 20, color: "#fff" }}>
                {" "}
                Pick vé ngay{" "}
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
export default PickTab;
