import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";
import NavBar from "../common/NavBar";
import NavButton from "../common/NavBarButton";

// Import Screen
import { ProfileScreen, UpdateProfileScreen } from "../UserScreen";

const Profile = StackNavigator(
  {
    UserProfile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <NavBar
            middle={
              <Text style={{ fontWeight: "500", fontSize: 20, color: "#fff" }}>
                {" "}
                Thông ti cá nhân{" "}
              </Text>
            }
          />
        )
      })
    },
    UserUpdateProfile: {
      screen: UpdateProfileScreen
    }
  },
  {
    headerMode: "screen",
    headerBackTitle: null
  }
);
export default Profile;
