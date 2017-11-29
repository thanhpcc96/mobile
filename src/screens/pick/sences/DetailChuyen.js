import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { ListItem, Left, Body, Right } from "native-base";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import io from "socket.io-client";

import NavBarButton from "../../../common/NavBarButton";
import moment from "../../../../i18n/TimeZoneVietNam";
import Modal from "./Modal";
import {
  pickChuyenXe,
  handlePickChuyenResult,
  getChuyenDetailAction,
  handleResultGetChuyenDeTail
} from "../action";
import { WWS_Client } from "../../../../constants/socket";

const socket = io(WWS_Client, { transports: ["websocket"] });

@connect(
  state => ({
    pick: state.pick,
    clientID: state.user.info._id
  }),
  {
    pickChuyenXe,
    handlePickChuyenResult,
    getChuyenDetailAction,
    handleResultGetChuyenDeTail
  }
)
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
  constructor(props) {
    super(props);
    //socket = io.connect(WWS_Client);
    this.state = {
      isConnectSuccessfuly: false,
      isShowModal: false,
      isLoadingChuyenDetail: true
    };
    socket.on("connection", () => {
      this.setState({
        isConnectSuccessfuly: true
      });
    });
    socket.on("connect_failed", () => {
      this.setState({ isConnectSuccessfuly: false });
    });
    socket.on("chuyenDetailResult", res => {
      this.props.handleResultGetChuyenDeTail(res);
    });
    socket.on("pickResult", result => {
      this.props.handlePickChuyenResult(result);
    });
  }
  componentDidMount() {
    this.props.getChuyenDetailAction(
      socket,
      this.props.navigation.state.params.idchuyen
    );
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.pick.isLoadingChuyenDetail === false) {
      this.setState({
        isLoadingChuyenDetail: false
      });
    }
    if (nextProp.pick.ticket !== null) {
      Alert.alert("Dang ky chuyen thanh cong");
      this.props.navigation.goBack();
      // this.props.navigation.navigate("SVG");
    }
    if (nextProp.pick.errorpick !== null) {
      // Alert.alert("Pick ve khong thanh cong");
      // this.props.navigation.navigate("PickScreen");
    }
  }
  componentWillUnmount() {
    socket.disconnect();
  }
  _handleShowModal = () => {
    this.setState({
      isShowModal: true
    });
  };
  _handleHideModal = () => {
    this.setState({
      isShowModal: false
    });
  };
  _pickChuyen = () => {
    const userid = this.props.clientID;
    const idchuyen = this.props.navigation.state.params.idchuyen;
    const tu = this.props.pick.chuyenDetail.from;
    const den = this.props.pick.chuyenDetail.to;
    const data = { userid, idchuyen, price: 0, tu, den };
    this.props.pickChuyenXe(data, socket);
  };

  render() {
    console.log("================isLoadingChuyenDetail====================");
    console.log(this.props.pick.isLoadingChuyenDetail);
    console.log("====================================");
    if (this.state.isLoadingChuyenDetail === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Đang load dữ liệu chuyến</Text>
        </View>
      );
    }
    const chuyen = this.props.pick.chuyenDetail;
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
            {chuyen ? chuyen.tenchuyen : "Network error"}
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
                <Text>Tình trạng chỗ ngồi</Text>
              </Left>
              <Right style={{ width: "35%" }}>
                <Text>{`${chuyen.dadat}/${chuyen.choNgoi}`}</Text>
              </Right>
            </ListItem>
            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Điểm khởi hành</Text>
              </Left>
              <Right>
                <Text> {chuyen.routeOfTrip.routeOfTrip.from} </Text>
              </Right>
            </ListItem>
            <ListItem style={{ marginLeft: 0 }}>
              <Left style={{ marginLeft: 10 }}>
                <Text>Điểm dừng</Text>
              </Left>

              <Right>
                <Text> {chuyen.routeOfTrip.routeOfTrip.to} </Text>
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
                <Text> {moment(chuyen.timeStart).format("L, LT")} </Text>
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
          <TouchableOpacity onPress={() => this._pickChuyen()}>
            <Feather name="pocket" size={25} color={"#fff"} />
          </TouchableOpacity>
        </View>
        {/*<Modal
          isShowModal={this.state.isShowModal}
          onBackdropPress={() => this.setState({ isShowModal: false })}
          socket={socket}
          data={data}
          hideModal={this._handleHideModal}
          pickChuyenXe={this.props.pickChuyenXe}
          disablePick={this.props.pick.isbooking}
        />*/}
      </View>
    );
  }
}
export default DetailChuyen;
