import React from "react";
import { StackNavigator } from "react-navigation";

// Import Screen
import { ReportScreen } from "../screens";
const ReportTab = StackNavigator(
  {
    ReportScreen: {
      screen: ReportScreen
    }
  },
  {
    headerMode: "screen",
    headerBackTitle: null
  }
);
export default ReportTab;
