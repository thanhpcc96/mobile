import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFCFE"
  },
  /** Phần thông tin số dư */
  balaceContainer: {
    width: "96%",
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
    // backgroundColor:'red'
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

  /** * Phần thông tin lịch sử giao dịch*/
  historyTranferPayment: {
    flex: 2,
    width: "96%",
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
    flex: 1,
    borderRightColor: "#FFF",
    borderRightWidth: 1
  },
  scrollviewItem: {
    justifyContent: "space-between",
    flexDirection:'row',
    alignItems: "center",
    borderBottomWidth: 0.5,
    height: 40,
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
    width: "96%",
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
    marginTop: 10,
    marginLeft: 5
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

export default styles;
