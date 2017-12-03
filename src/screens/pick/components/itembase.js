import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import * as Progress from "react-native-progress";

import Clock from "../../../common/Clock";
import moment from "../../../../i18n/TimeZoneVietNam";

import styles from "./styles/ListChuyen.style";

const width = Dimensions.get("window").width * 70 / 100;
const Itemchuyen = ({ data, index, navigation }) => {
  const isOutStock = data.dadat === data.choNgoi ? true : false;
  const isHetgio = moment(data.timeStart) - moment() <= 0 ? true : false;
  let dslotrinh = "";
  data.routeOfTrip.routeOfTrip.lotrinh.forEach(
    lotrinh => (dslotrinh += `${lotrinh} ,`)
  );
  return (
    <Card key={index}>
      <CardItem style={{backgroundColor: "#29B6F6"}} header>
        <Left>
          <Body>
            <Text>{data.tenchuyen || "Khong xac dinh"}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <View style={{ height: 200, width: null, flex: 1 }}>
          <Text>Lộ trình : {dslotrinh}</Text>
          <Text>
            Thời gian khởi hành:{" "}
            {moment(data.timeStart).format("L, LT") || "Khong xax dinh"}
          </Text>
        </View>
      </CardItem>
      <CardItem footer style={{backgroundColor:"#29B6F6"}}>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>Còn lại 20 chỗ</Text>
          </Button>
        </Body>
        <Right>
          <Clock deadline={data.timeStart} />
        </Right>
      </CardItem>
    </Card>
  );
};
export default Itemchuyen;
