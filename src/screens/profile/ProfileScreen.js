import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  Entypo
} from "@expo/vector-icons";
import { connect } from "react-redux";
import LoadingScreen from "../../common/LoadingScreen";
import ListInfo from "./components/ListInfo";
import NavBarButton from "../../common/NavBarButton";
import { getInfoProfileAction } from "./action";

@connect(
  state => ({
    isLoading: state.profile.isLoading,
    profile: state.profile
  }),
  {
    getInfoProfileAction
  }
)
class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Thông tin tài khoản",
    headerTitleStyle: {
      color: "#FFF"
    },
    headerBackTitleStyle: {
      color: "#FFF"
    },
    headerLeft: (
      <NavBarButton
        icon="ios-arrow-back"
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 10 }}
      />
    )
  });
  state = {};

  componentDidMount() {
    // this.props.getInfoProfileAction("client");
  }

  render() {
    console.log('====================================');
    console.log(this.props.isLoading);
    console.log('====================================');
    if (this.props.isLoading===true || this.props.profile.error) {
      return <LoadingScreen color={"#4E94E5"} />;
    }
    return (
      <View style={styles.root}>
        <ListInfo info={this.props.profile.info.result} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },
  avatarContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  imageConatiner: {
    width: 160,
    height: 160,
    borderRadius: 80,
    position: "relative"
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80
  },
  fullname: {
    //backgroundColor: "red",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    paddingTop: 3
  },
  fullnameText: {
    color: "#1E88E5",
    fontSize: 20,
    fontWeight: "bold"
  },
  infoConatiner: {
    flex: 0.6
  },
  infoHeaderContainer: {
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#29B6F6"
  },
  infoHederText: {
    marginLeft: 10,
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonEdit: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#29B6F6",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#FFF"
  },
  listInfo: {
    position: "absolute",
    top: 65,
    left: 5,
    right: 5,
    bottom: 5
    //backgroundColor: "green"
  },
  infoItem: {
    height: 50,
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    borderColor: "#B3E5FC",
    borderWidth: 1,
    marginTop: 10
  },
  textInfo: {
    color: "#0288D1",
    fontSize: 20,
    marginLeft: 10
  }
});
export default ProfileScreen;
