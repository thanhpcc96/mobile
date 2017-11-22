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
import * as Progress from "react-native-progress";

import Clock from '../../../common/Clock';

import styles from "./styles/ListChuyen.style";

const width = Dimensions.get("window").width * 70 / 100;

const Itemchuyen = ({ navigation }) => (
  <View style={styles.root}>
    <View style={styles.chuyenxeItem}>
      <View style={styles.chuyenxeItemTitle}>
        <Text style={styles.itemTitleText}>Hải Phòng- Hà Nội</Text>
        <View style={styles.itemTitleTimer}>
            <Clock deadline={"2017-11-09 12:43:44"} />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.lotrinh}>
            <Text style={styles.primaryText}>Lộ trình:</Text>
            <Text style={styles.text}>
              {" "}
              Hải Phòng -> Hải Dương -> Hưng Yên -> Hà Nội{" "}
            </Text>
          </View>
          <View style={styles.timeXuathanh}>
            <Text style={styles.primaryText}>Thời gian khởi hành</Text>
            <Text style={styles.text}> 2:00 22/11/2017</Text>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <Progress.Bar
            progress={0.3}
            width={width}
            height={20}
            borderRadius={8}
            borderColor={"#FFF"}
            unfilledColor={"#B3E5FC"}
          >
            <Text style={styles.textProgress}> Đã đặt 30/100 </Text>
          </Progress.Bar>
        </View>
      </View>
      <View style={styles.buttonPick}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('DetailChuyen',{
            idchuyen:"aaaaaaaaaa"
        })}>
          <Text style={styles.buttonText}>Đặt vé</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
export default Itemchuyen;
// <Text style={styles.timerText}>6:00:03</Text>