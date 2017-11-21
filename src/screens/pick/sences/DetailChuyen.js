import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ListItem, Left, Body, Right } from "native-base";
import { Feather } from "@expo/vector-icons";

import NavBarButton from "../../../common/NavBarButton";

class DetailChuyen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Chi tiết chuyến xe",
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
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.3,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 28, color: "#FFF", fontWeight: "bold" }}>
            {""}
            HẢI PHÒNG-HÀ NỘI 6:00
          </Text>
        </View>
        <View style={{ flex: 0.7 }}>
          <ScrollView>
            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Biển số xe</Text>
              </Left>
              <Right style={{ width: "35%" }}>
                <Text>16K8-1737</Text>
              </Right>
            </ListItem>
            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Điểm khởi hành</Text>
              </Left>
              <Right>
                <Text> Hải Phòng </Text>
              </Right>
            </ListItem>
            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Điểm dừng</Text>
              </Left>

              <Right>
                <Text> Hà Nội </Text>
              </Right>
            </ListItem>
            <ListItem style={{ marginLeft: 0 }} on>
              <Left style={{ marginLeft: 10 }}>
                <Text>Lộ trình</Text>
              </Left>
              <Body>
                <Text> Hai Phong, Hai Duong, Hung Yen, Ha Noi </Text>
              </Body>
            </ListItem>
            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Thời gian khởi hành</Text>
              </Left>

              <Body>
                <Text> 22/11/2017, 6:00 </Text>
              </Body>
            </ListItem>

            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Lái xe</Text>
              </Left>
              <Right>
                <Text>Bùi Đức Chiều</Text>
              </Right>
            </ListItem>
            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Phụ xe</Text>
              </Left>

              <Right>
                <Text> Bùi Đình Nghĩa </Text>
              </Right>
            </ListItem>
            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Giá vé toàn tuyến</Text>
              </Left>

              <Right>
                <Text>95.000 VND</Text>
              </Right>
            </ListItem>
          </ScrollView>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 30,
            right: 15,
            backgroundColor: "green",
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity>
            <Feather name="pocket" size={25} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default DetailChuyen;
