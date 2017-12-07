/*eslint-disable */
import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from "react-native";
import { Item, Input, Icon } from "native-base";
import ViewPager from "react-native-viewpager";
import { connect } from "react-redux";
import io from "socket.io-client";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager";
import StepIndicator from "react-native-step-indicator";
import { Ionicons } from "@expo/vector-icons";
import { MapView } from "expo";
import NavBarButton from "../../../common/NavBarButton";
import { getInfo, postNaptien} from "../action";

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

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "PickScreen" })]
});

@connect(
  state => ({
    userhome: state.userhome
  }),
  {
    getInfo,
    postNaptien
  }
)
class NapTien extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Nạp tiền cho khách hàng",
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
      email: "",
      notIsEmail: false,
      getError: false,
      clientinfo: null,
      price: 0,
      isNapTien: true,
      errorNap :false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userhome.clientinfo !== null) {
      this.setState({
        getError: false,
        clientinfo: nextProps.userhome.clientinfo
      });
    }
    if (nextProps.userhome.clientinfo === null) {
      this.setState({
        getError: false,
        clientinfo: null
      });
    }
    if (nextProps.userhome.error !== null) {
      this.setState({
        getError: true,
        clientinfo: null
      });
    }
    if (nextProps.userhome.isNapTien ===true ) {
      this.setState({
        currentPage: 2,
        errorNap: false
      });
      if(this.state.clientinfo.tokenPush){
        const token= this.state.clientinfo.tokenPush
        const tien = this.state.price
        fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            to: token,
            title: "Hải Âu! Nạp tiền thành công",
            body: `Bạn vừa nạp thành công ${tien} vnd vào tài khoản
                   Cảm ơn bạn đã sử dụng dịch vụ`,
            sound: "default"      
            
          })
        });
      }
    }
    if (nextProps.userhome.errorNap !=null ) {
      this.setState({
        errorNap: true,
      });
    }
  }
  _inputEmail(value) {
    this.setState({
      email: value
    });
  }
  _inpuSoTien(value){
    this.setState({
      price: value
    })
  }
  __handleSearch() {
    console.log("=================log email===================");
    console.log(this.state.email);
    console.log("====================================");
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(this.state.email)) {
      this.props.getInfo(this.state.email);
    } else {
      this.setState({
        notIsEmail: true
      });
    }
  }
  _gotoTwo() {
    this.setState({
      currentPage: 1
    });
  }
  _gotoThree(){
    if(this.state.price == 0){
      alert("không bỏ trống hoặc tiền = 0")
      return;
    }
    const idclient= this.state.clientinfo._id
    const amount= this.state.price
    this.props.postNaptien({idclient, amount})
    
  }
  _renderKetQua() {
    if (!this.props.userhome.isLoaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Đang load dữ liệu của khách hàng!</Text>
        </View>
      );
    }
    if (this.state.getError === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Không tìm thấy khách hàng hoặc lỗi</Text>
        </View>
      );
    }
    if(this.state.clientinfo===null){
      return (
        <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Không tìm thấy khách hàng hoặc lỗi</Text>
      </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#B2EBF2"
          }}
        >
          <Text style={{ color: "#FFF" }}>Kết quả</Text>
        </View>
        <View>
          <Text
            style={{
              color: "#FFf",
              marginLeft: 5,
              fontWeight: "bold",
              fontSize: 15
            }}
          >
            Họ tên
          </Text>
          <Text style={{ color: "#FFF", marginLeft: 10 }}>
            {this.state.clientinfo.info.fullname}
          </Text>
          <Text
            style={{
              color: "#FFf",
              marginLeft: 5,
              fontWeight: "bold",
              fontSize: 15
            }}
          >
            email:
          </Text>
          <Text style={{ color: "#FFF", marginLeft: 10 }}>
            {this.state.clientinfo.local.email}
          </Text>
          <Text
            style={{
              color: "#FFf",
              marginLeft: 5,
              fontWeight: "bold",
              fontSize: 15
            }}
          >
            Số điện thoại:
          </Text>
          <Text style={{ color: "#FFF", marginLeft: 10 }}>
            {this.state.clientinfo.phone}
          </Text>
          <Text
            style={{
              color: "#FFf",
              marginLeft: 5,
              fontWeight: "bold",
              fontSize: 15
            }}
          >
            Số dư tài khoản
          </Text>
          <Text style={{ color: "#FFF", marginLeft: 10 }}>
            {this.state.clientinfo.acount_payment.balance} Vnd
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 30,
            right: 15,
            backgroundColor: "#E0F7FA",
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => this._gotoTwo()}>
            <Ionicons name="md-arrow-round-forward" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  render() {
    // chuyenDi.splice(chuyenDi.length - 1, 1);
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={3}
            customStyles={firstIndicatorStyles}
            currentPosition={this.state.currentPage}
            labels={["Tra cứu", "Nhập tiền", "Xong"]}
          />
        </View>
        <IndicatorViewPager
          style={{ height: 350 }}
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
                Tra cứu khách hàng
              </Text>
            </View>
            <Item
              rounded
              style={{ width: "70%", marginLeft: "15%" }}
              error={this.state.notIsEmail}
            >
              <Input
                placeholder={"Nhập mail khách hàng"}
                style={{ color: "#FFF" }}
                onChangeText={this._inputEmail.bind(this)}
              />
              <Icon
                active
                name="ios-search"
                color={"#FFF"}
                onPress={this.__handleSearch.bind(this)}
              />
            </Item>
            <View>
              <Text
                note
                style={{ marginLeft: "15%", color: "#FFF", marginTop: "3%" }}
              >
                Dựa vào email của hành khách có thể tra cứu thông tin hành khách
                và nạp tiền cho khách!
              </Text>
            </View>
            {this._renderKetQua()}
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
                Nhập số tiền muốn nạp
              </Text>
            </View>
            <Item
              rounded
              style={{ width: "70%", marginLeft: "15%" }}
             
            >
              <Input
                placeholder={"Nhập số tiền nạp"}
                style={{ color: "#FFF" }}
                keyboardType={"numeric"}
                onChangeText={this._inpuSoTien.bind(this)}
              />
            </Item>
            {this.state.errorNap===true? <Text > Nạp tiền thất bại </Text>: undefined}
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
              <TouchableOpacity onPress={()=> this.setState({ currentPage: 0})}>
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
                 Nạp tiền
                </Text>
              </TouchableOpacity>
            </View>
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
              Nạp tiền thành công!
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
    this.props.navigation.goBack();
  }
}
export default NapTien;

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
