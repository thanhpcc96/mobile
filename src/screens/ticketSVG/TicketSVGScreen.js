import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import QRCode from "../../common/QRcodehelper";
import NavBarButton from "../../common/NavBarButton";
import { getListVeAvaiable } from "./actions";
import moment from "../../../i18n/TimeZoneVietNam";

moment.locale("vi");

@connect(
  state => ({
    ticket: state.ticket
  }),
  {
    getListVeAvaiable
  }
)
class TicketSVGScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Vé khả dụng",
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
    this.svg = null;
    this.props.getListVeAvaiable();
  }
  _renderItem = ({ data, i }) => {
    console.log("=================iiiii===================");
    console.log(i);
    console.log("====================================");
    return (
      <View key={i}>
        <View style={styles.scrollviewItem}>
          <View style={styles.thumb}>
            <Ionicons name="md-cash" color={"rgba(36,235,139,0.8)"} size={60} />
          </View>
          <View style={styles.scrollviewItemInfo}>
            <View style={styles.Title}>
              <Text style={styles.TitleText}>{data.inChuyenXe.tenchuyen}</Text>
            </View>
            <View style={styles.TimeStart}>
              <Text style={styles.text}>
                Xuất phát: {moment(data.inChuyenXe.timeStart).format("LT,L")}
              </Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.text}> Giá cước: {data.price}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              disabled={data.inChuyenXe ? false : true}
              onPress={() =>
                this.props.navigation.navigate("Ticketdetail", {
                  tenve: data.inChuyenXe ? data.inChuyenXe.tenchuyen : "",
                  idVe: data._id
                })
              }
            >
              <Text style={styles.textButton}> Chi tiết </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    console.log("====================================");
    console.log(this.props.navigation);
    console.log("====================================");
    // const logofromfile = require("../../../assets/logo.png");
    if (!this.props.ticket.isLoaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Đang loading danh sách vé</Text>
        </View>
      );
    }
    if (this.props.ticket.error) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Loading Lỗi..............</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <ScrollView>
          {this.props.ticket.listticket.result.map((data, i) =>
            this._renderItem({ data, i })
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    // paddingTop: Constants.statusBarHeight,
    paddingTop: 5,
    marginLeft: "1.5%"
  },
  scrollviewItem: {
    flexDirection: "row",
    height: 80,
    width: "98%",
    backgroundColor: "#FFF",
    marginBottom: 10
  },
  thumb: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollviewItemInfo: {
    width: "60%",
    paddingLeft: "3%"
  },
  Title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  TitleText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3E3E3E"
  },
  TimeStart: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  price: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  text: {
    color: "#3E3E3E",
    fontSize: 14
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1%"
  },
  button: {
    backgroundColor: "#19ECDE",
    height: 35,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: { color: "#FFF" }
});
export default TicketSVGScreen;
