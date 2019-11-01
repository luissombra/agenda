import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';

export const HomeScreen = () => (
  <View style={styles.container}>
    <Header />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
});