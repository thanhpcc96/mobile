import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";

import Listchuyen from "./components/FlatlistChuyen";

const { width } = Dimensions.get("window");

export default class ReportScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.litsContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitleText}>Danh sach chuyen</Text>
          </View>

          <View style={styles.listContentContainer}>
            <Listchuyen />
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  litsContainer: {
    flex: 3,
    width: width * 96 / 100,
    marginTop: 10,
    backgroundColor: "#4E94E5"
  },
  listTitleContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: "3%"
  },
  listTitleText: {
    color: "#fff",
    fontSize: 27
  },
  listContentContainer: {
    marginHorizontal: 3,
    flex: 8
  },
  itemList: {
    height: 50,
    paddingVertical: "3%",
    paddingLeft: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 0.5
  },
  itemText: {
    color: "#fff",
    fontSize: 18
  }
});
