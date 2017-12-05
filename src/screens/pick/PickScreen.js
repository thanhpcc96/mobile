/*eslint-disable */
import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

import {
  Header,
  Title,
  Button,
  Icon,
  Right,
  Body,
  Left,
  Picker,
  Form,
  H3,
  Item as FormItem
} from "native-base";

import DateTimePicker from "react-native-modal-datetime-picker";
import ModalDropdown from "react-native-modal-dropdown";
import io from "socket.io-client";

import ListChuyen from "./components/ListChuyenTest";
import styles from "./styles/PickScreen.style";
import NavBar from "../../common/NavBar";
import NavButton from "../../common/NavBarButton";
import { WWS_Client } from "../../../constants/socket";
import {
  loadDataChuyenFromSocket,
  resultLoadingChuyen,
  reloadDatachuyenChanged,
  handleCancelPickResult
} from "./action";

const Item = Picker.Item;
let socket;

@connect(
  state => ({
    pick: state.pick,
    clientID: state.user.info._id,
    chuyens: state.pick.chuyens,
    isLoading: state.pick.isLoading
  }),
  {
    loadDataChuyenFromSocket,
    resultLoadingChuyen,
    reloadDatachuyenChanged,
    handleCancelPickResult
  }
)
class PickScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: ({ state }) => (
      <NavBar
        middle={
          <Text style={{ fontWeight: "500", fontSize: 20, color: "#fff" }}>
            {" "}
            Đặt vé{" "}
          </Text>
        }
      />
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      isConnectSuccessfuly: false,
      isShowSearch: false,
      isDateTimePickerVisible: false,
      chieudichuyen: "DI",
      datachuyen: [],
      tuyen:'5a026062ec105c0e4ed4983a',
      date:null
    };
    socket = io.connect(WWS_Client, { transports: ["websocket"] });
    // socket.on("connection", () => {
    //   this.setState({
    //     isConnectSuccessfuly: true
    //   });
    // });
    // socket.on("connect_failed", () => {
    //   this.setState({ isConnectSuccessfuly: false });
    // });
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.pick.ticket !== null) {
  //     this.props.getListVeAvaiable();
  //     this.props.navigation.navigate("SVG");
  //   }
  // }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _filter=() => {
    const dataNew=[]
    if(this.state.date===null){
      this.props.chuyens.forEach(item=>{
        if(item.routeOfTrip._id === this.state.tuyen && item.loai===this.state.chieudichuyen){
          dataNew.push(item)
        }
      })
    }else{
      console.log('===================this.state.date=================');
      console.log(this.state.date);
      console.log('====================================');
      const datetoSearch= new Date(this.state.date);
      this.props.chuyens.forEach(item=>{
        const dateItem= new Date(item.timeStart);
        if(item.routeOfTrip._id === this.state.tuyen && item.loai===this.state.chieudichuyen && dateItem>=datetoSearch){
          dataNew.push(item)
        }
      })
    }
   
    this.setState({
      datachuyen: dataNew
    })
  }
  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.setState({
      date: date
    });
    this._hideDateTimePicker();
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.chuyens) {
      this.setState({
        datachuyen: nextProps.chuyens
      });
    }
  }
  componentDidMount() {
    console.log("=================componentDidMount===================");
    console.log("componentDidMount");
    console.log("====================================");
    this.props.loadDataChuyenFromSocket(socket, this.props.clientID);

    /** reload phan tu cua chuyen thay doi */
    socket.on("listChuyenChanged", res => {
      this.props.loadDataChuyenFromSocket(socket,this.props.clientID)
    });
    /** load chuyen xe kha dung tu socket */
    socket.on("updateListChuyenxe", res => {
      console.log(res);
      this.props.resultLoadingChuyen(res);
    });
    socket.on("cancelResult",res=>{
        this.props.handleCancelPickResult(res);
    })
  }
  componentWillUnmount() {
    socket.disconnect();
  }
  onValueChange(value) {
    this.setState({
      tuyen: value
    });
  }
  onValueChange1(value) {
    this.setState({
      chieudichuyen: value
    });
  }
  _cancelSearch(){
    const dataOld= this.props.chuyens;
    this.setState({
      isShowSearch: false,
      datachuyen: dataOld
    })
  }
  _renderSearchBox() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 70
        }}
      >
        <View style={{ flex: 0.7 }}>
          <Form
            style={{
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
              backgroundColor: "#EEFF41"
            }}
          >
            <Picker
              renderHeader={backAction => (
                <Header style={{ backgroundColor: "#1976D2" }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}>Chọn tuyến</Title>
                  </Body>
                  <Right />
                </Header>
              )}
              mode="dropdown"
              style={{ width: Platform.OS === "ios" ? undefined : 200 }}
              selectedValue={this.state.tuyen}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Hải Phòng - Hà Nội" value="5a026062ec105c0e4ed4983a" />
              <Item label="Thái Bình - Hà Nội" value="5a0293b3bd1e8c0a338f8965" />
            </Picker>
          </Form>
          <TouchableOpacity
            style={{
              backgroundColor: "#6A1B9A",
              height: 30,
              marginTop: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this._showDateTimePicker()}
          >
            <Text style={{ color: "#FFF", fontSize: 15 }}>
              {" "}
              Chon thoi gian{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.3 }}>
          <View>
            <Form
              style={{
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                backgroundColor: "#80CBC4"
              }}
            >
              <Picker
                renderHeader={backAction => (
                  <Header style={{ backgroundColor: "#009688" }}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{ color: "#fff" }} />
                      </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                      <Title style={{ color: "#fff" }}>
                        Chọn chiều vận tải
                      </Title>
                    </Body>
                    <Right />
                  </Header>
                )}
                mode="dropdown"
                style={{ width: Platform.OS === "ios" ? undefined : 200 }}
                selectedValue={this.state.chieudichuyen}
                onValueChange={this.onValueChange1.bind(this)}
              >
                <Item label="Đi" value="DI" />
                <Item label="Về" value="VE" />
              </Picker>
            </Form>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 5,
              paddingLeft: 10
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4CAF50",
                height: 30,
                marginRight: 3,
                flex: 0.5,
                paddingLeft: 5,
                paddingRight: 5
              }}
              onPress={()=> this._filter()}
            >
              <MaterialIcons name="sort" size={18} color={"#FFF"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f44336",
                height: 30,
                marginRight: 3,
                flex: 0.5,
                paddingLeft: 5,
                paddingRight: 5
              }}
              onPress={() => this._cancelSearch()}
            >
              <Ionicons name="md-close" size={18} color={"#FFF"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Đang kết nối socket</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        {this.state.isShowSearch ? (
          this._renderSearchBox()
        ) : (
          <View
            style={{
              height: 30,
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4CAF50",
                width: "30%",
                height: 30
              }}
              onPress={() => this.setState({ isShowSearch: true })}
            >
              <Ionicons name="md-search" size={20} color={"#FFF"} />
            </TouchableOpacity>
          </View>
        )}

        <ListChuyen
          navigation={this.props.navigation}
          data={this.state.datachuyen}
        />

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={"time"}
          titleIOS={"Chọn thời gian xe chạy"}
          is24Hour
          confirmTextIOS={"Xác nhận"}
          cancelTextIOS={"Hủy bỏ"}
          minimumDate={new Date()}
        />
      </View>
    );
  }
}
export default PickScreen;
