// @flow
import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles/MainSelect.style";

const MainSelect = ({ navigation }) => (
  <View style={styles.root}>
    <ScrollView>
      <TouchableOpacity
        style={styles.selectItem}
        onPress={() => navigation.navigate("UserScanner")}
      >
        <View style={styles.iconFirt}>
          <MaterialCommunityIcons
            color={"#3E3E3E"}
            name="barcode-scan"
            size={35}
          />
        </View>
        <View style={styles.textContanier}>
          <Text style={styles.textStyleCenter}>Quét mã Vé</Text>
        </View>
        <View style={styles.badgeLabelContainer}>
          <View style={styles.badgeLabel}>
            <Text style={styles.badgeLabelText}>3</Text>
          </View>
        </View>
        <View style={styles.iconArow}>
          <Ionicons color={"#3E3E3E"} name="ios-arrow-forward" size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectItem}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <View style={styles.iconFirt}>
          <Ionicons color={"#3E3E3E"} name="md-person" size={35} />
        </View>
        <View style={styles.textContanier}>
          <Text style={styles.textStyleCenter}> Thông tin cá nhân</Text>
        </View>
        <View style={styles.badgeLabelContainer} />
        <View style={styles.iconArow}>
          <Ionicons color={"#3E3E3E"} name="ios-arrow-forward" size={20} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.selectItem}
        onPress={() => navigation.navigate("Naptien")}
      >
        <View style={styles.iconFirt}>
          <MaterialCommunityIcons color={"#3E3E3E"} name="chart-bubble" size={35} />
        </View>
        <View style={styles.textContanier}>
          <Text style={styles.textStyleCenter}> Nạp tiền tài khoản </Text>
        </View>
        <View style={styles.badgeLabelContainer}>
          <View style={styles.badgeLabel}>
            <Text style={styles.badgeLabelText}>9</Text>
          </View>
        </View>
        <View style={styles.iconArow}>
          <Ionicons color={"#3E3E3E"} name="ios-arrow-forward" size={20} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
);
export default MainSelect;
