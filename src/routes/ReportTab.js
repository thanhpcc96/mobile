import React from "react";
import { Text } from 'react-native';
import { StackNavigator } from "react-navigation";

// Import Screen
import { ReportScreen } from "../screens";
import { PickScreen } from "../screens";
import NavBar from "../common/NavBar";
// import NavButton from "../common/NavBarButton";

const ReportTab = StackNavigator(
  {
    ReportScreen: {
      screen: ReportScreen,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <NavBar
            middle={
              <Text style={{ fontWeight: "500", fontSize: 20, color: "#fff" }}>
                {" "}
                Đánh giá, phản hồi{" "}
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
export default ReportTab;
