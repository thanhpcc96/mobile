/*eslint-disable */
import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Toast } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { BarCodeScanner, Permissions } from "expo";
import { connect } from "react-redux";
import NavBarButton from "../../common/NavBarButton";

import { getInfoVe, xeVe } from "./action";

@connect(
  state => ({
    managerticket: state.managerticket
  }),
  {
    getInfoVe,
    xeVe
  }
)
class ScanQRCode extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Scanner ma QRCode",
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
      hasCameraPermission: null,
      ketquaScanMoiNhat: null,
      isXeVeSuccess: false,
      token: null
    };
  }

  componentDidMount() {
    this._yeucauQuyenCamera();
  }

  _yeucauQuyenCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.ketquaScanMoiNhat) {
      this.setState({ ketquaScanMoiNhat: result.data });
      this.props.getInfoVe(result.data);
    }
  };

  _resetScan = () => {
    this.setState({
      ketquaScanMoiNhat: null,
      isXeVeSuccess: false
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.managerticket.vedaxe !== null) {
      this.setState({
        isXeVeSuccess: true
      });
      if (this.state.token) {
        const token = this.state.token;
        fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            to: token,
            title: "Hải Âu! Trạng thái vé",
            body: `Xé vé thành công! Bạn hoàn tất kiểm tra vé chuyến xe ${nextProps.managerticket.vedaxe.inChuyenXe.tenchuyen}!
            chúc bạn thượng lộ bình an!`,
            sound: "default"
          })
        });
      }
    }
  }

  _xeVe(token) {
    this.props.xeVe(this.state.ketquaScanMoiNhat);
    if (token) {
      this.setState({
        token: token
      });
    }
  }
  _showresult = () => {
    if (!this.state.ketquaScanMoiNhat) {
      return (
        <Text style={{ fontSize: 17, fontWeight: "500" }}>
          {" "}
          Su dung camera cua ban de quet ma ve QRCode
        </Text>
      );
    }
    if (!this.props.managerticket.isLoaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Đang load</Text>
        </View>
      );
    }
    if (this.props.managerticket.error) {
      return (
        <View>
          <View style={styles.resultHeader}>
            <Text style={styles.HeaderText}>Kết quả</Text>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => this._resetScan()}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resultContent}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>Lỗi</Text>
            </View>
          </View>
        </View>
      );
    }

    console.log("================xem ket qua====================");
    console.log(this.props.managerticket);
    console.log("====================================");
    const kq = this.props.managerticket.ticketinfo;
    return (
      <View>
        <View style={styles.resultHeader}>
          <Text style={styles.HeaderText}>Kết quả</Text>
          <View style={{ flexDirection: "row" }}>
            {kq.isDoneCheck ? (
              <View
                style={{
                  backgroundColor: "#FF3D00",
                  marginRight: 8,
                  padding: 3
                }}
              >
                <Text style={{ color: "#FFF" }}> Vé đã được xé </Text>
              </View>
            ) : this.state.isXeVeSuccess ? (
              <View
                style={{
                  backgroundColor: "#00E676",
                  marginRight: 8,
                  padding: 3
                }}
              >
                <Text style={{ color: "#FFF" }}>Xé Thành công</Text>
              </View>
            ) : (
              <TouchableOpacity
                disabled={kq.isDoneCheck}
                style={[
                  styles.headerButton,
                  {
                    backgroundColor: "#EF6C00",
                    paddingTop: 7,
                    paddingBottom: 7,
                    marginRight: 10,
                    borderRadius: 5
                  }
                ]}
                onPress={() => this._xeVe(kq.Customer.tokenPush)}
              >
                <Entypo name="flat-brush" size={25} color={"#FFF"} />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => this._resetScan()}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.resultContent}>
          <ScrollView>
            <Text style={styles.text}>Mã vé</Text>
            <Text style={styles.textPrimary}> {kq._id} </Text>
            <Text style={styles.text}>Tên khách hàng</Text>
            <Text style={styles.textPrimary}>
              {" "}
              {kq.Customer.info.fullname}{" "}
            </Text>
            <Text style={styles.text}>Trong chuyến</Text>
            <Text style={styles.textPrimary}> {kq.inChuyenXe.tenchuyen} </Text>
            <Text style={styles.text}>Trạng thái thanh toán</Text>
            <Text style={styles.textPrimary}>
              {" "}
              {kq.isPayed === true ? "Đã thanh toán" : "chưa thanh toán"}{" "}
            </Text>
            <Text style={styles.text}>Loại vé</Text>
            <Text style={styles.textPrimary}>
              {" "}
              {kq.typeTicket === "DATVE" ? "Đặt vé" : "giữ chỗ"}{" "}
            </Text>
            <Text style={styles.text}>Tình trạng hủy</Text>
            <Text style={styles.textPrimary}>
              {" "}
              {kq.isAvaiable === true ? "Đã hủy" : "Chưa"}{" "}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.qrcodeContainer}>
          {this.state.hasCameraPermission === null ? (
            <Text>Đang yêu cầu sử dụng Camera</Text>
          ) : this.state.hasCameraPermission === false ? (
            <Text style={styles.TextCapQuyen}>
              Vui lòng cấp quyền sử dụng camera
            </Text>
          ) : (
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{
                height: Dimensions.get("window").height * 0.35,
                width: Dimensions.get("window").width * 0.95
              }}
            />
          )}
        </View>
        <View style={styles.resultContainer}>{this._showresult()}</View>
      </View>
    );
  }
}
const styles = {
  root: {
    flex: 1
  },
  qrcodeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  TextCapQuyen: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e53935"
  },
  resultContainer: {
    flex: 1
  },
  resultHeader: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#29B6F6",
    justifyContent: "space-between",
    alignItems: "center"
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10
  },
  headerButton: {
    backgroundColor: "#FFF",
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#283593",
    fontWeight: "bold",
    fontSize: 15
  },
  resultContent: {
    paddingLeft: 10,
    backgroundColor: "#E3F2FD",
    minHeight: Dimensions.get("window").height * 0.25,
    paddingTop: 10
  },
  text: {
    color: "#3E3E3E"
  },
  textPrimary: {
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#3E3E3E"
  }
};
export default ScanQRCode;
