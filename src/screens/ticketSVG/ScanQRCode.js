/*eslint-disable */
import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { BarCodeScanner, Permissions } from "expo";
import NavBarButton from "../../common/NavBarButton";

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
      ketquaScanMoiNhat: null
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
    }
  };

  _resetScan = () => {
    this.setState({
      ketquaScanMoiNhat: null
    });
  };
  _showresult = () => {
    if (!this.state.ketquaScanMoiNhat) {
      return (
        <Text style={{ fontSize: 17, fontWeight: "500" }}>
          {" "}
          Su dung camera cua ban de quet ma ve QRCode
        </Text>
      );
    }
    return (
      <View>
        <View style={styles.resultHeader}>
          <Text style={styles.HeaderText}>Ket qua</Text>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => this._resetScan()}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultContent}>
          <Text style={styles.text}>Ma ve</Text>
          <Text style={styles.textPrimary}>
            {" "}
            {this.state.ketquaScanMoiNhat}{" "}
          </Text>
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
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10
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
