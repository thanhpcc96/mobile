import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  style: Object,
  left: Object,
  middle: Object,
  right: Object
};

const NavBar = ({ style, left, right, middle }: Props) => (
  <View style={[styles.navBar, style]}>
    <View style={styles.left}>{left}</View>
    <View style={styles.middle}>{middle}</View>
    <View style={styles.right}>{right}</View>
  </View>
);

const styles = StyleSheet.create({
  navBar: {
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: "#0B6EE0",
    paddingTop: 20,
    flexDirection: "row"
  },
  left: {
    minWidth: 60
  },
  middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    minWidth: 60
  }
});

export default NavBar;
