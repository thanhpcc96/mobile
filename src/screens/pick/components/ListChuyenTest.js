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

import Itemchuyen from './ItemTest'

// import styles from "./styles/ListChuyen.style";
// import ProgressBar from "./progress";

class ListChuyenXeFake extends Component {
  componentDidMount() {
    // load state tu socket len day vao progress bar
  }
  render() {
    return (
      <View style={styles.root}>
        <FlatList data={Data} renderItem={({item, index})=>{
            return ( <Itemchuyen data={item} index={index}/>);
        }} />
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

const Data=[
    {
        titleChuyen: "Ha Noi- Hai Phong: 6:00",
        timeStart: "2017-11-22 12:43:44",
        dadat: 20,
        chongoi: 45
    },
    {
        titleChuyen: "Ha Noi- Thai Binh: 10:00",
        timeStart: "2017-11-17T23:00:00.671Z",
        dadat: 40,
        chongoi: 45
    },
    {
        titleChuyen: "Ha Noi- THai Nguyen: 9:00",
        timeStart: "2017-11-22 09:00:44",
        dadat: 45,
        chongoi: 45
    },
    {
        titleChuyen: "Ha Noi- Hai Duong: 7:00",
        timeStart: "2017-11-22 07:00:44",
        dadat: 30,
        chongoi: 45
    },
    {
        titleChuyen: "Ha Noi- Hai Phong: 16:00",
        timeStart: "2017-11-22 16:00:44",
        dadat: 40,
        chongoi: 45
    },
    {
        titleChuyen: "Ha Noi- Hai Phong: 15:00",
        timeStart: "2017-11-22 15:00:44",
        dadat: 40,
        chongoi: 45
    },


]
