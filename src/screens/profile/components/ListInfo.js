import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  Entypo
} from "@expo/vector-icons";

const ListInfo = ({ info }) => {
  console.log("====================================");
  console.log(info);
  console.log("====================================");
  return (
    <View style={styles.root}>
      <View style={styles.avatarContainer}>
        <TouchableHighlight style={styles.imageConatiner}>
          <Image
            source={require("../../../../assets/avatar.jpg")}
            style={styles.image}
          />
        </TouchableHighlight>
        <View style={styles.fullname}>
          <Text style={styles.fullnameText}>{info.info.fullname}</Text>
        </View>
      </View>
      <View style={styles.infoConatiner}>
        <View style={styles.infoHeaderContainer}>
          <Text style={styles.infoHederText}>Thông tin tài khoản</Text>
          <TouchableHighlight
            style={styles.buttonEdit}
            underlayColor={"#B3E5FC"}
            onPress={() => this.props.navigation.navigate("UpdateProfile")}
          >
            <Ionicons name="md-create" color={"#FFF"} size={20} />
          </TouchableHighlight>
        </View>
        <View style={styles.listInfo}>
          <ScrollView>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="email-outline"
                color={"#0288D1"}
                size={25}
              />
              <Text style={styles.textInfo}>{info.local.email}</Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="gender-male-female"
                color={"#0288D1"}
                size={25}
              />
              <Text style={styles.textInfo}> Nữ</Text>
            </View>
            <View style={styles.infoItem}>
              <Entypo name="address" color={"#0288D1"} size={25} />
              <Text style={styles.textInfo}>{info.info.address || 'khong co thong tin'}</Text>
            </View>
            <View style={styles.infoItem}>
              <SimpleLineIcons name="phone" color={"#0288D1"} size={25} />
              <Text style={styles.textInfo}>info.phone</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1
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

export default ListInfo;
