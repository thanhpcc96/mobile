import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import SleekLoad from "react-native-sleek-loading-indicator";

import moment from "../../../i18n/TimeZoneVietNam";

import styles from "./styles/PaymentScreen.style";
import { loadHistoryPayMent } from "./actions";

const { width, height } = Dimensions.get("window");

@connect(
  state => ({
    paymentlist: state.payment.paymentlist,
    isLoaded: state.payment.isLoaded,
    error: state.payment.error
  }),
  {
    loadHistoryPayMent
  }
)
class PaymentScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#4A90E2"
    },
    headerTitle: "Thanh toán",
    headerTitleStyle: {
      color: "#FFF"
    },
    headerBackTitleStyle: {
      color: "#FFF"
    }
  });
  componentDidMount() {
    this.props.loadHistoryPayMent();
  }
  renderItem() {
    const data = this.props.paymentlist.acount_payment;
    const newData = [];
    data.history_recharge.forEach(n => {
      const nap = {
        name: "Nạp tiền",
        time: moment(n.rechargeTime).format("LT, L"),
        giatri: "+" + n.amountSend + " đ"
      };
      newData.push(nap);
    });
    data.history_transaction.forEach(n => {
      const datve = {
        name: "Đặt vé",
        time: moment(n.createdAt).format("LT,L"),
        giatri: "-" + n.price + " đ"
      };
      newData.push(datve);
    });
    data.history_pick_keep_seat.forEach(n => {
      const giucho = {
        name: "Giữ chỗ",
        time: moment(n.createdAt).format("LT,L"),
        giatri: "-" + 0 + " đ"
      };
      newData.push(giucho);
    });
    data.history_cancel_ticket.forEach(n => {
      const huyve = {
        name: "Hủy vé",
        time: moment(n.updatedAt).format("LT,L"),
        giatri: "+" + (n.price * 0.8) + " đ"
      };
      newData.push(huyve);
    });
    return (
      <ScrollView>
        {newData.map((item, i) => (
          <View key={i} style={styles.scrollviewItem}>
            <Text style={styles.scrollviewItemText}> {item.name}</Text>
            <Text style={styles.scrollviewItemText}> {item.time}</Text>
            <Text style={styles.scrollviewItemText}> {item.giatri}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  render() {
    if (!this.props.isLoaded) {
      return (
        <SleekLoad loading={!this.props.isLoaded} text={"Đang load dữ liệu!"} />
      );
    }
    if (this.props.error) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Lỗi! Không load được dữ liệu</Text>
        </View>
      );
    }
    const giaodich = this.props.paymentlist;
    return (
      <View style={styles.root}>
        <View style={styles.balaceContainer}>
          <View style={styles.balaceTextTitleContainer}>
            <Text style={styles.balaceTextTitle}>SỐ DƯ</Text>
          </View>

          <View style={styles.balaceContentContainner}>
            <View style={styles.balaceContentLeft}>
              <View style={styles.balaceAmount}>
                <Text style={styles.amountText}>
                  {giaodich.acount_payment.balance} VND
                </Text>
              </View>

              <View style={styles.balaceContentInfo}>
                <View style={styles.buttonRechange}>
                  <Ionicons name="md-git-compare" size={40} color={"#24EB8B"} />
                </View>
                <View style={styles.infoLastHistory}>
                  <Text style={{ color: "#BFBDC3" }}>
                    Nạp tài khoản lần cuối
                  </Text>
                  <Text style={{ color: "#929096" }}>
                    {giaodich.acount_payment.history_recharge.length > 0
                      ? moment(
                          giaodich.acount_payment.history_recharge[
                            giaodich.acount_payment.history_recharge.length - 1
                          ].rechargeTime
                        ).format("L,LT")
                      : "Không có"}
                  </Text>
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
            <View style={styles.historyContentLeft}>{this.renderItem()}</View>
          </View>
        </View>
      </View>
    );
  }
}
export default PaymentScreen;

/**
 * <View style={styles.MenuPaymentContainer}>
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
 */
