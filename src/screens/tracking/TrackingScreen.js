import React, { Component } from "react";
import { View, Text } from 'react-native';
import { MapView } from 'expo';

import styles from './styles/Tracking.style';
import ModalStatus from './components/BottomHeader'

export default class Tracking extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 20.982846,
            longitude: 105.819089,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={MapView.PROVIDER_GOOGLE}
        >
          <MapView.Marker coordinate={{
            latitude: 20.982846,
            longitude: 105.819089,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
            pinColor="red" />
        </MapView>
        <ModalStatus />
      </View>
    );
  }
}
