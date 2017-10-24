import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

class PaymentScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.balaceContainer}>
          <View style={styles.balaceTextTitleContainer}>
            <Text style={styles.balaceTextTitle}>SỐ DƯ</Text>
          </View>

          <View style={styles.balaceContentContainner}>
            <View style={styles.balaceContentLeft}>
              <View style={styles.balaceAmount}>
                <Text style={styles.amountText}>100.000 VND</Text>
              </View>

              <View style={styles.balaceContentInfo}>
                <View style={styles.buttonRechange}>
                  <Ionicons name="md-git-compare" size={40} color={"#24EB8B"} />
                </View>
                <View style={styles.infoLastHistory}>
                  <Text style={{ color: "#BFBDC3" }}>
                    Nạp tài khoản lần cuối
                  </Text>
                  <Text style={{ color: "#929096" }}>22/09/2017 9:00 am</Text>
                </View>
              </View>
            </View>

            <View style={styles.contentRight}>
              <TouchableOpacity style={styles.buttonHistory}>
                <Text style={styles.textButton}> Lịch sử </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.historyTranferPayment}>
          <View style={styles.historyTitleContainer}>
            <Text style={styles.historyTextTitle}>Lịch sử giao dịch</Text>
          </View>
          <View style={styles.historyContentContainner}>
            <View style={styles.historyContentLeft}>
              <ScrollView>
                <View style={styles.scrollviewItem}>
                  <Text style={styles.scrollviewItemText}> fake 1</Text>
                </View>
                <View style={styles.scrollviewItem}>
                  <Text style={styles.scrollviewItemText}> fake 1</Text>
                </View>
                <View style={styles.scrollviewItem}>
                  <Text style={styles.scrollviewItemText}> fake 1</Text>
                </View>
                <View style={styles.scrollviewItem}>
                  <Text style={styles.scrollviewItemText}> fake 1</Text>
                </View>
                <View style={styles.scrollviewItem}>
                  <Text style={styles.scrollviewItemText}> fake 1</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.historyContentRight}>
              <TouchableOpacity style={styles.historyButton}>
                <Text style={styles.historyButtonText}> Xem thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.MenuPaymentContainer}>
          <View style={styles.MenuTitleContainer}>
            <Text style={styles.menuTextTitle}> Danh mục thanh toán</Text>
          </View>
          <View style={styles.menuContentContainer}>
            <View style={styles.menuContentItem}>
              <TouchableOpacity>
                <View style={styles.menuItemInItem}>
                  <Ionicons name="ios-close-circle-outline" size={35} color={'#FC9A7D'} />
                </View>
                <View style={styles.menuItemInItem}>
                  <Text>Lịch sử hủy vé</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContentItemWithBorder}>
              <TouchableOpacity>
                <Ionicons
                  name="ios-checkmark-circle-outline"
                  size={35}
                  color={'#80B9FB'}
                />
                <Text>Lịch sử giữ chỗ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContentItem} />
          </View>
        </View>
      </View>
    );
  }
}
export default PaymentScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFCFE"
  },
  /** Phần thông tin số dư */
  balaceContainer: {
    width: width * 96 / 100,
    flex: 1,
    borderColor: "#D0CCCC",
    borderWidth: 0.5,
    backgroundColor: "#FCFCFE",
    marginTop: 10
  },
  balaceTextTitleContainer: {
    height: 40,
    justifyContent: "center",
    paddingLeft: "3%"
  },
  balaceTextTitle: {
    color: "#52685F",
    fontSize: 27
  },
  balaceContentContainner: {
    margin: "1%",
    flexDirection: "row"
  },
  balaceContentLeft: {
    flex: 2,
    borderRightColor: "#D0CCCC",
    borderRightWidth: 1
  },
  balaceAmount: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 40,
    marginVertical: "2%",
    paddingVertical: "2.5%"
  },
  amountText: {
    color: "#52685F",
    fontSize: 25,
    fontWeight: "bold"
  },
  balaceContentInfo: {
    flexDirection: "row",
    paddingVertical: "1.5%",
    marginTop: 10
    //backgroundColor:'red'
  },
  buttonRechange: {
    paddingLeft: 5
  },
  infoLastHistory: {
    paddingHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  contentRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonHistory: {
    backgroundColor: "#24EB8B",
    width: 90,
    height: 80,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

  /*** Phần thông tin lịch sử giao dịch*/
  historyTranferPayment: {
    flex: 1,
    width: width * 96 / 100,
    backgroundColor: "#24EB8B",
    marginTop: 15
  },
  historyTitleContainer: {
    height: 40,
    justifyContent: "center",
    paddingLeft: "3%"
  },
  historyTextTitle: {
    color: "#fff",
    fontSize: 27
  },
  historyContentContainner: {
    margin: "1%",
    flexDirection: "row"
  },
  historyContentLeft: {
    flex: 2,
    borderRightColor: "#FFF",
    borderRightWidth: 1
  },
  scrollviewItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#FFF"
  },
  scrollviewItemText: {
    color: "#fff",
    fontSize: 17
  },
  historyContentRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  historyButton: {
    backgroundColor: "#FFF",
    width: 90,
    height: 80,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  historyButtonText: {
    color: "#24EB8B",
    fontSize: 20,
    fontWeight: "bold"
  },
  /** Phan danh muc thanh toan */
  MenuPaymentContainer: {
    flex: 1,
    width: width * 96 / 100,
    marginTop: 15
  },
  MenuTitleContainer: {
    height: 40,
    justifyContent: "center",
    paddingLeft: "3%"
  },
  menuTextTitle: {
    color: "#52685F",
    fontSize: 27
  },
  menuContentContainer: {
    flexDirection: "row",
    marginTop:10,
    marginLeft:5
  },
  menuContentItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  menuContentItemWithBorder: {
    flex: 1,
    borderRightColor: "#D0CCCC",
    borderLeftColor: "#D0CCCC",
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  menuContentItemText: {
    color: "#52685F",
    fontSize: 15
  }
});
