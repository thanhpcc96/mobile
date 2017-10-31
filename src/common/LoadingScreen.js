import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const LoadingScreen = ({ color }) => (
  <View style={styles.root}>
    <ActivityIndicator size="large" color={color || 'gray'} />
  </View>
);
export default LoadingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
