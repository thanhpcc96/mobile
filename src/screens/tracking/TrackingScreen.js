import React, { Component } from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";

import styles from "./styles/Tracking.style";
import ModalStatus from "./components/BottomHeader";
import io from "socket.io-client";

const socketURL = "http://192.168.1.3:4000";

export default class Tracking extends React.Component {
  constructor(props) {
    super(props);

    this.socket = io(socketURL);

    this.state = {
      markerCoordinates: [],
      region: {
        latitude: 20.858446,
        longitude: 106.331177,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  componentDidMount() {
    const socket = this.socket;
    if (!socket) return;

    socket.on("disconnect", () => alert("You have been disconnected."));

    socket.on("locationUpdated", locationState => {
      const newMarkerCoordinates = Object.values(locationState).map(item => ({
        latitude: item.lat,
        longitude: item.lng
      }));

      this.setState({ markerCoordinates: newMarkerCoordinates });
    });
  }
  renderMarkers = markerCoordinates => {
    return markerCoordinates.map((coord, index) => (
      <MapView.Marker
        key={index}
        image={require("../../../assets/icons/car.png")}
        centerOffset={{ x: 25, y: 25 }}
        anchor={{ x: 0.5, y: 0.5 }}
        coordinate={coord}
        title={`Chuyến xe ${index}`}
      />
    ));
  };
  render() {
    return (
      <View style={styles.root}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          provider={MapView.PROVIDER_GOOGLE}
        >
          {this.renderMarkers(this.state.markerCoordinates)}
        </MapView>
      </View>
    );
  }
}
