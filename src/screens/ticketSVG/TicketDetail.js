import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  CameraRoll,
  Alert,
  ScrollView
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { takeSnapshotAsync } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import io from "socket.io-client";
import NavBarButton from "../../common/NavBarButton";
import QRcode from "../../common/QRcodehelper";
import { getTicketInfo, getListVeAvaiable } from "./actions";
import moment from "../../../i18n/TimeZoneVietNam";

import { WWS_Client } from "../../../constants/socket";
import { emitCancelChuyen } from "../pick/action";

let socket;

@connect(
  state => ({
    ticketinfo: state.ticket.ticketinfo,
    isLoadedVe: state.ticket.isLoadedVe,
    errorticket: state.ticket.errorticket
  }),
  { getTicketInfo, emitCancelChuyen, getListVeAvaiable }
)
class TicketDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: navigation.state.params.tenve,
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
    this.state = {
      enableDelete: false
    };
    socket = io.connect(WWS_Client, { transports: ["websocket"] });
  }
  _saveToCameraRollAsync = async () => {
    let result = await takeSnapshotAsync(this._containerCapture, {
      format: "png",
      result: "file"
    });

    let saveResult = await CameraRoll.saveToCameraRoll(result, "photo");
    if (result) {
      Alert.alert("Lưu thành công", "Đã lưu vào cuộn camera của bạn");
    } else {
      Alert.alert("Thất bại", "Thiếu quyền truy cập");
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.ticketinfo !== null) {
      const newDate = moment(nextProps.ticketinfo.inChuyenXe.timeStart);
      if (Date.now() <= newDate) {
        this.setState({
          enableDelete: true
        });
      }
    }
  }
  componentWillMount(){
    socket.on("cancelResult",res=>{
      console.log('==================cancelResult==================');
      console.log(res);
      console.log(socket);
      console.log('====================================');
      if(res.type==="CANCEL_CHUYEN_SUCCESS"){
          this.props.getListVeAvaiable();
          this.props.navigation.goBack();
      }
    })
  }
  componentWillUnmount() {
    socket.disconnect();
  }
  _handleCancel() {
    this.props.emitCancelChuyen(
      socket,
      this.props.ticketinfo.inChuyenXe._id,
      this.props.ticketinfo.Customer,
      this.props.ticketinfo._id
    );
  }
  componentDidMount() {
    const idVe = this.props.navigation.state.params.idVe;
    this.props.getTicketInfo(idVe);
    
  }
  render() {
    console.log("=============navigation=======================");
    console.log(this.props.navigation);
    console.log("====================================");
    if (!this.props.isLoadedVe) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Đang tải thông tin vé</Text>
        </View>
      );
    }
    if (this.props.errorticket) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Tải thông tin vé Lỗi</Text>
        </View>
      );
    }
    const ticketinfo = this.props.ticketinfo;
    return (
      <View style={styles.root}>
        <View
          style={styles.infoTickketForSave}
          collapsable={false}
          ref={view => {
            this._containerCapture = view;
          }}
        >
          <View style={styles.QrcodeShow}>
            <QRcode value={ticketinfo._id} size={200} />
          </View>
          <View style={styles.infoTextSave}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Hành khách</Text>
              <Text style={styles.textPrimary}>
                {ticketinfo ? ticketinfo.Customer.info.fullname : ""}
              </Text>
              <Text style={styles.text}>Chuyến xe</Text>
              <Text style={styles.textPrimary}>
                {ticketinfo ? ticketinfo.inChuyenXe.tenchuyen : ""}
              </Text>
              <Text style={styles.text}>Thời gian</Text>
              <Text style={styles.textPrimary}>
                {ticketinfo
                  ? moment(ticketinfo.inChuyenXe.timeStart).format("L,LT")
                  : ""}
              </Text>
              <Text style={styles.text}>Giá vé</Text>
              <Text style={styles.textPrimary}>
                {ticketinfo ? ticketinfo.price + " VNĐ" : ""}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonSave}
              onPress={this._saveToCameraRollAsync}
            >
              <Ionicons
                name="md-download"
                size={30}
                color={"#fff"}
                style={styles.iconDownload}
              />
              <Text style={styles.textButton}>Lưu vé</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.thongTin}>
          <View style={styles.thongTinTitleContainer}>
            <Text style={styles.thongTinTitleText}>Chi tiết</Text>
          </View>
          <View style={styles.thongTinContentContainer}>
            <ScrollView>
              <Text style={styles.text}>Mã vé</Text>
              <Text
                style={[
                  styles.textPrimary,
                  { marginLeft: "5%", marginVertical: "1%" }
                ]}
              >
                {ticketinfo ? ticketinfo._id : ""}
              </Text>
              <Text style={styles.text}>Lộ trình</Text>
              <Text
                style={[
                  styles.textPrimary,
                  { marginLeft: "5%", marginVertical: "1%" }
                ]}
              >
                {ticketinfo.routeOfTicket.from +
                  " ===> " +
                  ticketinfo.routeOfTicket.to}
              </Text>
              <Text style={styles.text}>Chiều di chuyển</Text>
              <Text
                style={[
                  styles.textPrimary,
                  { marginLeft: "5%", marginVertical: "1%" }
                ]}
              >
                {ticketinfo.inChuyenXe.loai === "DI" ? "Đi" : "Về"}
              </Text>
              <Text style={styles.text}>Thời gian đặt vé</Text>
              <Text
                style={[
                  styles.textPrimary,
                  { marginLeft: "5%", marginVertical: "1%" }
                ]}
              >
                {moment(ticketinfo.createdAt).format("LT, L")}
              </Text>
              <Text style={styles.text}>Loại vé</Text>
              <Text
                style={[
                  styles.textPrimary,
                  { marginLeft: "5%", marginVertical: "1%" }
                ]}
              >
                {ticketinfo.typeTicket === "DATVE" ? "Đặt vé" : "Vé giữ chỗ"}
              </Text>
              <Text style={styles.text}>Trạng thái</Text>
              <Text
                style={[
                  styles.textPrimary,
                  { marginLeft: "5%", marginVertical: "1%" }
                ]}
              >
                {ticketinfo.isPayed === true
                  ? "Đã thanh toán tiền"
                  : "Chưa thanh toán"}
              </Text>
              <Text style={styles.text}>Chuyến xe</Text>
              <Text
                style={[
                  styles.textPrimary,
                  { marginLeft: "5%", marginVertical: "1%" }
                ]}
              >
                {ticketinfo.inChuyenXe.tenchuyen}
              </Text>
              <Text style={styles.text}>Biển số</Text>
              <Text
                style={[
                  styles.textPrimary,
                  { marginLeft: "5%", marginVertical: "1%" }
                ]}
              >
                {ticketinfo.inChuyenXe.coach
                  ? ticketinfo.inChuyenXe.coach.numberplate
                  : "Đang cập nhât......"}
              </Text>
            </ScrollView>
          </View>
        </View>
        {this.state.enableDelete === true ? (
          <View
            style={{
              position: "absolute",
              bottom: 30,
              right: 15,
              backgroundColor: "#e53935",
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={() => this._handleCancel()}>
              <MaterialCommunityIcons
                name="delete-empty"
                size={25}
                color={"#fff"}
              />
            </TouchableOpacity>
          </View>
        ) : (
          undefined
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  infoTickketForSave: {
    flex: 2,

    flexDirection: "row"
  },
  QrcodeShow: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center"
  },
  infoTextSave: { flex: 0.4 },
  textContainer: {
    position: "relative",
    top: 5
  },
  text: {
    color: "#3E3E3E"
  },
  textPrimary: {
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#3E3E3E"
  },
  buttonSave: {
    backgroundColor: "#24EB8B",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 5,
    borderRadius: 5
  },
  iconDownload: {
    marginLeft: 5
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
    color: "#fff"
  },
  thongTin: {
    flex: 3,
    backgroundColor: "#FFF"
  },
  thongTinTitleContainer: {
    height: 20,
    paddingLeft: 10,
    position: "relative"
    //
  },
  thongTinTitleText: {
    color: "#3E3E3E",
    fontSize: 17,
    fontWeight: "bold"
  },
  thongTinContentContainer: {
    position: "relative",
    //top: 0,
    marginTop: 10,
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: "10%",
    alignSelf: "stretch"
  }
});
export default TicketDetail;
