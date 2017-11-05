import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class NavButton extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    onPress: React.PropTypes.func.isRequired
  };

  handlePress() {
    this.props.onPress();
  }

  render() {
    const { style, title, icon, iconSize } = this.props;
    return (
      <TouchableHighlight
        onPress={() => {
          this.handlePress();
        }}
        underlayColor="transparent"
        activeOpacity={0.4}
        style={StyleSheet.container}
      >
        {icon ? (
          typeof icon === "string" ? (
            <Ionicons
              name={icon}
              size={iconSize || 40}
              color={"#fff"}
              style={[styles.icon, style]}
            />
          ) : (
            icon
          )
        ) : (
          <Text styles={[styles.title, style]}>{title}</Text>
        )}
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    color: "#fff",
    fontSize: 15
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: "center",
    color: "#fff"
  }
});
