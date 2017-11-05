/*eslint-disable */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";

import Itemchuyen from './Item'

// import styles from "./styles/ListChuyen.style";
// import ProgressBar from "./progress";

class ListChuyenXeFake extends Component {
  componentDidMount() {
    // load state tu socket len day vao progress bar
  }
  render() {
    return (
      <View style={styles.root}>
        <ScrollView>
          <Itemchuyen />
          <Itemchuyen />
          <Itemchuyen />
          <Itemchuyen />
          <Itemchuyen />
          <Itemchuyen />
          <Itemchuyen />
          <Itemchuyen />
        </ScrollView>
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
  },
});
export default ListChuyenXeFake;
