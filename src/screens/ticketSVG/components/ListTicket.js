import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles/ListTicket.style";

const ListTicket = ({ navigation, listTickets }) => (
  <View>
    <ScrollView>
      {listTickets.forEach(ticket => (
        <View style={styles.scrollviewItem}>
          <View style={styles.thumb}>
            <Ionicons name="md-cash" color={"rgba(36,235,139,0.8)"} size={60} />
          </View>
          <View style={styles.scrollviewItemInfo}>
            <View style={styles.Title}>
              <Text style={styles.TitleText}> Ha Noi Hai phong</Text>
            </View>
            <View style={styles.TimeStart}>
              <Text style={styles.text}>Xuất phát: 2h40 22/11/2017</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.text}> Giá cước: 70.000đ</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}> Chi tiết </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default ListTicket;
