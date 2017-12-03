/*eslint-disable */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import io from "socket.io-client";

import Itemchuyen from "./ItemTest";
import {
  loadDataChuyenFromSocket,
  resultLoadingChuyen,
  reloadDatachuyenChanged
} from "../action";
import { getListVeAvaiable } from "../../ticketSVG/actions";
// import styles from "./styles/ListChuyen.style";
// import ProgressBar from "./progress";

import { WWS_Client } from "../../../../constants/socket";
let socket;

@connect(
  state => ({
    chuyens: state.pick.chuyens,
    isLoading: state.pick.isLoading,
    clientID: state.user.info._id
    // data={this.props.pick.chuyens}
  }),
  {
    getListVeAvaiable,
    loadDataChuyenFromSocket,
    resultLoadingChuyen,
    reloadDatachuyenChanged
  }
)
class ListChuyenXeFake extends React.PureComponent {
  constructor(props) {
    super(props);
    socket = io.connect(WWS_Client, { transports: ["websocket"] });
  }
  componentDidMount() {
    console.log("=================componentDidMount===================");
    console.log("componentDidMount");
    console.log("====================================");
    this.props.loadDataChuyenFromSocket(socket, this.props.clientID);

    /** reload phan tu cua chuyen thay doi */
    socket.on("listChuyenChanged", res => {
      this.props.reloadDatachuyenChanged(res);
    });
    /** load chuyen xe kha dung tu socket */
    socket.on("updateListChuyenxe", res => {
      console.log(res);
      this.props.resultLoadingChuyen(res);
    });
  }

  componentWillUnmount() {
    socket.disconnect();
  }
  renderItem = ({ item, index }) => (
    <Itemchuyen data={item} index={index} navigation={this.props.navigation} />
  );
  render() {
    console.log("=================props flatlist===================");
    console.log(this.props);
    console.log("====================================");
    if (this.props.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Đang kết nối socket</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <FlatList
          initialNumToRender={5}
          removeClippedSubviews={true}
          data={this.props.chuyens}
          extraData={this.props.chuyens}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}          
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 100 * index,
            index
          })}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "stretch",
    justifyContent: "flex-start"
  }
});
export default ListChuyenXeFake;

// const Data=[
//     {
//         titleChuyen: "Ha Noi- Hai Phong: 6:00",
//         timeStart: "2017-11-22 12:43:44",
//         dadat: 20,
//         chongoi: 45
//     },
//     {
//         titleChuyen: "Ha Noi- Thai Binh: 10:00",
//         timeStart: "2017-11-17T23:00:00.671Z",
//         dadat: 40,
//         chongoi: 45
//     },
//     {
//         titleChuyen: "Ha Noi- THai Nguyen: 9:00",
//         timeStart: "2017-11-22 09:00:44",
//         dadat: 45,
//         chongoi: 45
//     },
//     {
//         titleChuyen: "Ha Noi- Hai Duong: 7:00",
//         timeStart: "2017-11-22 07:00:44",
//         dadat: 30,
//         chongoi: 45
//     },
//     {
//         titleChuyen: "Ha Noi- Hai Phong: 16:00",
//         timeStart: "2017-11-22 16:00:44",
//         dadat: 40,
//         chongoi: 45
//     },
//     {
//         titleChuyen: "Ha Noi- Hai Phong: 15:00",
//         timeStart: "2017-11-22 15:00:44",
//         dadat: 40,
//         chongoi: 45
//     },

// ]
