import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  CameraRoll
} from "react-native";
import { takeSnapshotAsync } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";

import QRcode from "../../common/QRcodehelper";
class TicketDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraRollUri: null
    };
  }
  _saveToCameraRollAsync = async () => {
    let result = await takeSnapshotAsync(this._containerCapture, {
      format: "png",
      result: "file"
    });

    let saveResult = await CameraRoll.saveToCameraRoll(result, "photo");
    this.setState({ cameraRollUri: saveResult });
  };

  render() {
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
            <QRcode value="anhyeuem" size={200} />
          </View>
          <View style={styles.infoTextSave}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Mã vé</Text>
              <Text style={styles.textPrimary}> HN-HP1234</Text>
              <Text style={styles.text}>Hành khách</Text>
              <Text style={styles.textPrimary}>Pham Van Thanh</Text>
              <Text style={styles.text}>Chuyến xe</Text>
              <Text style={styles.textPrimary}>HN-HP:14:00</Text>
              <Text style={styles.text}>Thời gian</Text>
              <Text style={styles.textPrimary}>14:00 22/11/2017</Text>
              <Text style={styles.text}>Giá vé</Text>
              <Text style={styles.textPrimary}>40.000 VND</Text>
            </View>

            <TouchableOpacity style={styles.buttonSave} onPress={this._saveToCameraRollAsync}>
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

        <View style={{ flex: 1.5, backgroundColor: "green" }}>
          <Text>Phan 2</Text>
        </View>
        <View style={{ flex: 1.5, backgroundColor: "blue" }}>
          <Text>Phan 3</Text>
        </View>
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
    right: 0
  },
  iconDownload: {
    marginLeft: 5
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
    color: "#fff"
  }
});
export default TicketDetail;
