import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles/PaymentScreen.style";

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
                  <Ionicons
                    name="ios-close-circle-outline"
                    size={35}
                    color={"#FC9A7D"}
                  />
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
                  color={"#80B9FB"}
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
