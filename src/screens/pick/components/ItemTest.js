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

import Clock from "../../../common/Clock";
import moment from "../../../../i18n/TimeZoneVietNam";

import styles from "./styles/ListChuyen.style";

const width = Dimensions.get("window").width * 70 / 100;

const Itemchuyen = ({ data, index, navigation }) => {
  const isOutStock = data.dadat === data.choNgoi ? true : false;
  const isHetgio = moment(data.timeStart) - moment() <= 0 ? true : false;
  let dslotrinh = "";
  data.routeOfTrip.routeOfTrip.lotrinh.forEach(
    lotrinh => (dslotrinh += `${lotrinh} ,`)
  );
  return (
    <View style={styles.root}>
      <View style={styles.chuyenxeItem}>
        <View style={styles.chuyenxeItemTitle}>
          <Text style={styles.itemTitleText}>
            {data.tenchuyen || "Khong xac dinh"}
          </Text>
          <View style={styles.itemTitleTimer}>
            {isHetgio ? (
              <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 15 }}>
                Hết giờ
              </Text>
            ) : (
              <Clock deadline={data.timeStart} />
            )}
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={styles.lotrinh}>
              <Text style={styles.primaryText}>Lộ trình:</Text>
              <Text style={styles.text}>{dslotrinh}</Text>
            </View>
            <View style={styles.timeXuathanh}>
              <Text style={styles.primaryText}>Thời gian khởi hành</Text>
              <Text style={styles.text}>
                {moment(data.timeStart).format("L, LT") || "Khong xax dinh"}
              </Text>
            </View>
          </View>
          <View style={styles.progressContainer}>
            <Progress.Bar
              progress={data.dadat / data.choNgoi}
              width={width}
              height={20}
              borderRadius={8}
              borderColor={"#FFF"}
              color={
                isOutStock ? "rgba(255, 101, 36, 0.88)" : "rgba(0, 122, 255, 1)"
              }
              unfilledColor={"#B3E5FC"}
            >
              <Text style={styles.textProgress}>
                {" "}
                {data.dadat === data.chongoi
                  ? "Đã hết chỗ"
                  : "Đã đặt " + data.dadat + "/" + data.choNgoi}{" "}
              </Text>
            </Progress.Bar>
          </View>
        </View>
        <View style={styles.buttonPick}>
          <TouchableOpacity
            style={
              isOutStock === true || isHetgio === true
                ? [
                    styles.button,
                    { backgroundColor: "rgba(185, 183, 182, 0.81)" }
                  ]
                : styles.button
            }

            onPress={()=>navigation.navigate('DetailChuyen',{
              idchuyen: data._id
          })}
          >
            <Text style={styles.buttonText}>Đặt vé</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Itemchuyen;
// <Text style={styles.timerText}>6:00:03</Text>
