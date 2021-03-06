/*eslint-disable */
import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  H3,
  Item as FormItem
} from "native-base";
import ViewPager from "react-native-viewpager";
import * as Progress from "react-native-progress";
import { connect } from "react-redux";
import io from "socket.io-client";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager";
import StepIndicator from "react-native-step-indicator";
import { MapView } from "expo";
import NavBarButton from "../../../common/NavBarButton";

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: "#4aae4f",
  separatorUnFinishedColor: "#a4d4a5",
  stepIndicatorFinishedColor: "#4aae4f",
  stepIndicatorUnFinishedColor: "#a4d4a5",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#666666",
  labelSize: 12,
  currentStepLabelColor: "#4aae4f"
};
import { WWS_Client } from "../../../../constants/socket";

import { handlePickChuyenResult, pickChuyenXe } from "../action";

const socket = io(WWS_Client, { transports: ["websocket"] });
let chuyenDi = [];
let diemxuong = [];
let Gia = [];
const Item = Picker.Item;
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "PickScreen" })]
});

@connect(
  state => ({
    chuyenchitiet: state.pick.chuyenDetail,
    pick: state.pick,
    clientID: state.user.info._id
  }),
  {
    pickChuyenXe,
    handlePickChuyenResult
  }
)
class Steps extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Đăng kí chuyến",
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
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      diemlen: 0,
      diemxuong: 0,
      isCaculator: false,
      listXuong: [],
      price: 0,
      isPressXacNhan: false,
      tendiemlen: "",
      tendiemxuong: ""
    };
    socket.on("pickResult",res=>{
      this.props.handlePickChuyenResult(res);
    })
  }
  onValueChange(value) {
    this.setState({
      diemlen: value
    });
  }
  onValueChange1(value) {
    this.setState({
      diemxuong: value
    });
  }
  _nextToTwo() {
    const list = [];
    for (let i = 0; i < chuyenDi.length; i++) {
      if (i > this.state.diemlen) {
        list.push(chuyenDi[i]);
      }
    }
    this.setState({
      listXuong: list,
      currentPage: 1
    });
  }
  _gotoThree() {
    const tendiemxuong = this.state.listXuong[this.state.diemxuong];
    const indexOfXuong = chuyenDi.indexOf(tendiemxuong);
    const tendiemlen = chuyenDi[this.state.diemlen];
    let tien = 0;
    for (let i = this.state.diemlen; i < indexOfXuong; i++) {
      tien += Gia[i];
    }
    this.setState({
      price: tien,
      currentPage: 2,
      tendiemlen: tendiemlen,
      tendiemxuong: tendiemxuong
    });
  }
  _pickChuyen = () => {
    const userid = this.props.clientID;
    const idchuyen = this.props.chuyenchitiet._id;
    const tu = this.state.tendiemlen;
    const den = this.state.tendiemxuong;
    const price= this.state.price;

    const data = { userid, idchuyen, price, tu, den };
    this.props.pickChuyenXe(data, socket);
    this.setState({
      isPressXacNhan: true
    });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.pick.ticket !== null) {
      this.setState({
        currentPage: 3
      });
    }
  }
  render() {
    chuyenDi = [];
    diemxuong = [];
    Gia = [];
    const loai = this.props.chuyenchitiet.loai;
    if (loai === "VE") {
      chuyenDi.push(
        ...this.props.chuyenchitiet.routeOfTrip.routeOfTrip.lotrinh.reverse()
      );
      // diemxuong.push(...chuyenDi);
      Gia.push(
        ...this.props.chuyenchitiet.routeOfTrip.routeOfTrip.giacuoc.reverse()
      );
    }
    if (loai == "DI") {
      chuyenDi.push(
        ...this.props.chuyenchitiet.routeOfTrip.routeOfTrip.lotrinh
      );
      diemxuong.push(
        ...this.props.chuyenchitiet.routeOfTrip.routeOfTrip.lotrinh
      );
      Gia.push(...this.props.chuyenchitiet.routeOfTrip.routeOfTrip.giacuoc);
    }
    console.log("===============chuyenDi=====================");
    console.log(this.props.chuyenchitiet.loai);
    console.log(chuyenDi);
    console.log("====================================");
    // chuyenDi.splice(chuyenDi.length - 1, 1);
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={4}
            customStyles={firstIndicatorStyles}
            currentPosition={this.state.currentPage}
            labels={["Điểm lên", "Điểm xuống", "Xác nhận", "Xong"]}
          />
        </View>
        {/*
        <ViewPager
          dataSource={this.state.dataSource}
          renderPage={this.renderViewPagerPage}
          onChangePage={page => {
            console.log("=================page===================");
            console.log(page);
            console.log("====================================");
            this.setState({ currentPage: page });
          }}
        /> */}
        <IndicatorViewPager
          style={{ height: 280 }}
          scrollEnabled={false}
          initialPage={this.state.currentPage}
        >
          <View style={{ backgroundColor: "cadetblue" }}>
            <View
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
                Vui Lòng chọn điểm lên
              </Text>
            </View>
            <Form
              style={{
                backgroundColor: "#FFF",
                width: "60%",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20%"
              }}
            >
              <Picker
                renderHeader={backAction => (
                  <Header style={{ backgroundColor: "#1565C0" }}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{ color: "#fff" }} />
                      </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                      <Title style={{ color: "#fff" }}>Chọn điểm lên xe</Title>
                    </Body>
                    <Right />
                  </Header>
                )}
                mode="dropdown"
                style={{ width: Platform.OS === "ios" ? undefined : 200 }}
                selectedValue={this.state.diemlen}
                onValueChange={this.onValueChange.bind(this)}
              >
                {chuyenDi.map((item, i) => {
                  return <Item label={item} value={i} key={i} />;
                })}
              </Picker>
            </Form>
            <View>
              <Text
                note
                style={{ marginLeft: "15%", color: "#FFF", marginTop: "3%" }}
              >
                Hãy chọn vị trí lên xe của bạn, những điểm này đại diện cho
                những chặng chúng tôi sẽ đi qua.Dựa vào đó hệ thống sẽ tự động
                tính toán giá cước cho bạn, nhân viên sẽ dựa vào đó thông báo
                cho bạn lên xe!
              </Text>
            </View>

            <View
              style={{
                height: 40,
                width: "40%",
                position: "absolute",
                bottom: "3%",
                right: "5%",
                backgroundColor: "#FFF",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity onPress={() => this._nextToTwo()}>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Tiếp theo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ backgroundColor: "cornflowerblue" }}>
            <View
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
                Vui Lòng chọn điểm xuống
              </Text>
            </View>
            <Form
              style={{
                backgroundColor: "#FFF",
                width: "60%",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20%"
              }}
            >
              <Picker
                renderHeader={backAction => (
                  <Header style={{ backgroundColor: "#1565C0" }}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{ color: "#fff" }} />
                      </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                      <Title style={{ color: "#fff" }}>Chọn điểm xuống</Title>
                    </Body>
                    <Right />
                  </Header>
                )}
                mode="dropdown"
                style={{ width: Platform.OS === "ios" ? undefined : 200 }}
                selectedValue={this.state.diemxuong}
                onValueChange={this.onValueChange1.bind(this)}
              >
                {this.state.listXuong.map((item, i) => {
                  return <Item label={item} value={i} key={i} />;
                })}
              </Picker>
            </Form>
            <View>
              <Text
                note
                style={{ marginLeft: "15%", color: "#FFF", marginTop: "3%" }}
              >
                Hãy chọn vị trí xuống xe của bạn, những điểm này đại diện cho
                những chặng chúng tôi sẽ đi qua.Dựa vào đó hệ thống sẽ tự động
                tính toán giá cước cho bạn!
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: "40%",
                position: "absolute",
                bottom: "3%",
                left: "5%",
                backgroundColor: "#FFF",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ currentPage: 0 })}
              >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Quay lại
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 40,
                width: "40%",
                position: "absolute",
                bottom: "3%",
                right: "5%",
                backgroundColor: "#FFF",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity onPress={() => this._gotoThree()}>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Tiếp theo
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ backgroundColor: "#42A5F5" }}>
            {this._renderSuccessCalculator()}
          </View>
          <View
            style={{
              backgroundColor: "#00E676",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 25 }}>
              {" "}
              Bạn đã đăng ký thành công!
            </Text>
            <TouchableOpacity
              style={{
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E0F7FA",
                paddingHorizontal: "1%"
              }}
              onPress={() => this._goToTicket()}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#616161" }}
              >
                Xem danh sách vé
              </Text>
            </TouchableOpacity>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }
  _goToTicket() {
    this.props.navigation.dispatch(resetAction);
    this.props.navigation.navigate("SVG");
  }

  _renderSuccessCalculator() {
    if (this.state.isCaculator === true) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
              {" "}
              Giá cước
            </Text>
          </View>
          <View
            style={{
              height: 180,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Progress.CircleSnail
              thickness={6}
              size={60}
              color={["red", "#B9F6CA", "blue"]}
            />
          </View>
          <View
            style={{
              height: 40,
              width: "80%",
              position: "absolute",
              bottom: "3%",
              right: "10%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 14 }}>
              {" "}
              Đang tính toán giá cước.....
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
            {" "}
            Giá cước
          </Text>
        </View>
        <View
          style={{
            height: 180,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../../../assets/icons/success.png")}
            style={{ width: 100, height: 100, tintColor: "#FFF" }}
          />
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 18 }}>
            {this.state.price + " VNĐ"}
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: "40%",
            position: "absolute",
            bottom: "3%",
            left: "5%",
            backgroundColor: "#FFF",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => this.setState({ currentPage: 1 })}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Quay lại</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 40,
            width: "40%",
            position: "absolute",
            bottom: "3%",
            right: "5%",
            backgroundColor: "#FFF",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => this._pickChuyen()}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Steps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  stepIndicator: {
    marginVertical: 50
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
