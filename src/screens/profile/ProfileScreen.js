import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import NavBarButton from "../../common/NavBarButton";
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
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.avatarContainer}>
          <TouchableHighlight style={styles.imageConatiner}>
            <Image
              source={require("../../../assets/avatar.jpg")}
              style={styles.image}
            />
          </TouchableHighlight>
          <View style={styles.fullname}>
            <Text style={styles.fullnameText}>Hao Nguyen</Text>
          </View>
        </View>
        <View style={styles.infoConatiner}>
          <View style={styles.infoHeaderContainer}>
            <Text style={styles.infoHederText}> Thong tin ca nhan</Text>
            <TouchableHighlight style={styles.buttonEdit} underlayColor={"#B3E5FC"}>
              <Ionicons name="md-create" color={'#FFF'} size={20} />
            </TouchableHighlight>
          </View>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor:'#FFF'
  }
});
export default ProfileScreen;
