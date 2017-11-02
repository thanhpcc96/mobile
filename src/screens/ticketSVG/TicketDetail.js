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
import { takeSnapshotAsync } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";

import NavBarButton from "../../common/NavBarButton";
import QRcode from "../../common/QRcodehelper";
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
            <Text style={styles.text}>Lộ trình</Text>
            <Text style={[styles.textPrimary,{marginLeft:'5%',marginVertical:'1%'}]}>Từ Hưng Yên đến Hà Nội</Text>
            <Text style={styles.text}>Thời gian đặt vé</Text>
            <Text style={[styles.textPrimary,{marginLeft:'5%',marginVertical:'1%'}]}>6:39:50 22/11/2017</Text>
            <Text style={styles.text}>Loại vé</Text>
            <Text style={[styles.textPrimary,{marginLeft:'5%',marginVertical:'1%'}]}>Vé giữ chỗ</Text>
            <Text style={styles.text}>Trạng thái</Text>
            <Text style={[styles.textPrimary,{marginLeft:'5%',marginVertical:'1%'}]}>Chưa thanh toán</Text>
            <Text style={styles.text}>Chuyến xe</Text>
            <Text style={[styles.textPrimary,{marginLeft:'5%',marginVertical:'1%'}]}>HN-HP1234</Text>
            <Text style={styles.text}>Biển số</Text>
            <Text style={[styles.textPrimary,{marginLeft:'5%',marginVertical:'1%'}]}>16 K8-1737 </Text>
            <Text style={styles.text}>Tài xé </Text>
            <Text style={[styles.textPrimary,{marginLeft:'5%',marginVertical:'1%'}]}>Bùi Đức Chiều</Text>
            <Text style={styles.text}>Phụ xe </Text>
            <Text style={[styles.textPrimary,{marginLeft:'5%',marginVertical:'1%'}]}>Bùi Đình Nghĩa</Text>
            </ScrollView>
            
          </View>
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
    right:5,
    borderRadius:5
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
    position: "relative",
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
    paddingLeft: '10%',
    alignSelf: "stretch"
  }
});
export default TicketDetail;
