/*eslint-disable */
import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  ScrollView,
  TouchableOpacity,
  NetInfo
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import DateTimePicker from "react-native-modal-datetime-picker";
import ModalDropdown from "react-native-modal-dropdown";


import ListChuyen from "./components/ListChuyenTest";
import styles from "./styles/PickScreen.style";
import NavBar from "../../common/NavBar";
import NavButton from "../../common/NavBarButton";



@connect(
  state => ({
    pick: state.pick,
    clientID: state.user.info._id
  })
  
)
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

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
  };
  componentDidMount() {
    
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.searchConatiner}>
          <View style={styles.contentSearch}>
            <ScrollView
              horizontal
              ref={ref => (this.scrollView = ref)}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.scrollView.scrollToEnd({ animated: false });
              }}
            >
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
            </ScrollView>
          </View>
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity style={styles.btnSearch}>
              <Ionicons name="ios-search" size={15} color={"#FFF"} />
            </TouchableOpacity>
          </View>
        </View>

        <ListChuyen
          navigation={this.props.navigation}
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
        />
      </View>
    );
  }
}
export default PickScreen;
