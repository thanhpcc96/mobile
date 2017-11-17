import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import io from "socket.io-client";
import DateTimePicker from "react-native-modal-datetime-picker";
import ModalDropdown from "react-native-modal-dropdown";

import {
  loadDataChuyenFromSocket,
  pickChuyenXe,
  initialChuyen,
  updateList
} from "./action";
import ListChuyen from "./components/ListChuyen";
import styles from "./styles/PickScreen.style";
import NavBar from "../../common/NavBar";
import NavButton from "../../common/NavBarButton";

let socket;

@connect(state => ({
  pick: state.pick
}))
class PickScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: ({ state }) => (
      <NavBar
        right={
          <NavButton
            icon="md-search"
            iconSize={28}
            onPress={() => navigation.navigate("Login")}
            style={{ paddingLeft: 10 }}
          />
        }
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
      isDateTimePickerVisible: false
    };
    const { dispatch } = this.props;
    socket = io.connect("http://localhost:3000/client");
    socket.on("connect_failed", () => {
      console.log("====================================");
      console.log("Ket noi that bai");
      console.log("====================================");
      this.setState({ isConnectSuccessfuly: true });
    });
    console.log(socket);
    dispatch(loadDataChuyenFromSocket(socket));
    socket.on("updateListChuyenxe", res => {
      console.log(res);
    });
  }
  componentWillUnmount() {
    socket.disconnect();
  }

  isShowSearchBox() {
    this.setState({
      isShowSearch: !this.state.isShowSearch
    });
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.searchConatiner}>
          <ScrollView horizontal>
            <TextInput
              style={styles.textInput}
              placeholder={"Lo trinh bat ky"}
            />
            <TouchableOpacity
              style={styles.pickTime}
              onPress={() => this._showDateTimePicker()}
            >
              <Text style={{ color: "#FFF", fontSize: 15 }}>
                {" "}
                Chon thoi gian{" "}
              </Text>
            </TouchableOpacity>
            <ModalDropdown
              defaultValue={"Chieu di chuyen...."}
              style={styles.dropChuyen}
              options={["Di", "Ve"]}
              dropdownStyle={{ width: "30%" }}
              defaultIndex={0}
              textStyle={{ color: "#FFF", fontSize: 15 }}
            />
            <TouchableOpacity style={styles.btnSearch}>
              <Ionicons name="ios-search" size={15} color={"#FFF"}/>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <ListChuyen />

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={"time"}
          titleIOS={"Chon gio khoi hanh"}
          is24Hour
          confirmTextIOS={"Xac nhan"}
          cancelTextIOS={"Huy bo"}
        />
      </View>
    );
  }
}
export default PickScreen;
