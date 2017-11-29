import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  Entypo
} from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

import NavBarButton from "../../common/NavBarButton";

class UpdateProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Cập nhật tài khoản",
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
        <View style={styles.listInfo}>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons
              name="account-circle"
              color={"#FFF"}
              size={25}
            />
            <TextInput value="Hảo" style={styles.textInfo} />
          </View>
          <View style={styles.infoItem}>
            <Ionicons
              name="ios-arrow-dropright"
              color={"#FFF"}
              size={25}
              style={{ marginLeft: 10 }}
            />
            <TextInput value="Nguyễn" style={styles.textInfo} />
          </View>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons
              name="email-outline"
              color={"#FFF"}
              size={25}
            />
            <TextInput value="thanhpcc1996@gmail.com" style={styles.textInfo} />
          </View>
          <View style={styles.infoItem}>
            <SimpleLineIcons name="phone" color={"#FFF"} size={25} />
            <TextInput value="01672454407" style={styles.textInfo} />
          </View>
          <View style={styles.infoItem}>
            <Entypo name="address" color={"#FFF"} size={25} />
            <TextInput
              value="Xóm 1, Quốc Oai, Hà Nội"
              style={styles.textInfo}
            />
          </View>
          <CheckBox
            checked={true}
            title="Tôi thay đổi mật khẩu!"
            style={styles.checkBox}
            textStyle={{ color: "#FFF" }}
            checkedColor="#FFF"
          />

          <View style={styles.infoItem}>
            <Ionicons name="ios-lock-outline" color={"#FFF"} size={25} />
            <TextInput
              placeholder={"password cũ"}
              style={styles.textInfo}
              secureTextEntry={true}
              placeholderTextColor={"#FFF"}
            />
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="ios-lock-outline" color={"#FFF"} size={25} />
            <TextInput
              placeholder={"password mới"}
              style={styles.textInfo}
              secureTextEntry={true}
              placeholderTextColor={"#FFF"}
            />
          </View>
          <View style={styles.buttonConatiner}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Luu lai</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#80DEEA"
  },
  listInfo: {
    position: "absolute",
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    backgroundColor: "#80DEEA"
  },
  infoItem: {
    height: 50,
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    borderColor: "#FFF",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5
  },
  textInfo: {
    color: "#FFF",
    fontSize: 20,
    marginLeft: 10,
    //backgroundColor:'#0288D1',
    width: "80%",
    height: 48,
    fontSize: 20
  },
  checkBox: {
    backgroundColor: "transparent",
    marginTop: "5%",
    marginLeft: 10
  },
  buttonConatiner: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8
  },
  button: {
    backgroundColor: "#4CAF50",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "2.5%"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default UpdateProfileScreen;
