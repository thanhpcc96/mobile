import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropsType from "prop-types";
import moment from "moment";

class Clock extends Component {
  //   static propsTypes = {
  //     styles: PropsType.object.isRequired
  //   };

  static defaultProps = {
    styles: {
      root: {
        flex: 1,
        flexDirection: "row"
      },
      item: {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
      },
      text: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold"
      }
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isHetgio: false
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    if (this.state.isHetgio === false) {
      setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
  }

  getTimeUntil(deadline) {
    const time = moment(deadline) - moment();
    if (time < 0) {
      this.setState({
        isHetgio: true
      });
      return;
    }
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    this.setState({ hours, minutes, seconds });
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  render() {
    if (this.state.isHetgio) {
      return (
        <View style={this.props.styles.root}>
          <View style={this.props.styles.item}>
            <Text style={this.props.styles.text}>Hết giờ</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={this.props.styles.root}>
        <View style={this.props.styles.item}>
          <Text style={this.props.styles.text}>
            {this.leading0(this.state.hours)}:
          </Text>
        </View>
        <View style={this.props.styles.item}>
          <Text style={this.props.styles.text}>
            {this.leading0(this.state.minutes)}:
          </Text>
        </View>
        <View style={this.props.styles.item}>
          <Text style={this.props.styles.text}>
            {this.leading0(this.state.seconds)}
          </Text>
        </View>
      </View>
    );
  }
}

export default Clock;
