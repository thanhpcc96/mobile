/*eslint-disable */
import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
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
      ketquaScanMoiNhat: null,
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
                height: Dimensions.get("window").height * 0.3,
                width: Dimensions.get("window").width * 0.6
              }}
            />
          )}
        </View>
        <View style={styles.resultContainer}>
          <Text> Result</Text>
        </View>
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
  }
};
export default ScanQRCode;
