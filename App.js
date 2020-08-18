import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { connect } from 'react-redux'

import { StyleSheet, Text, View } from 'react-native';

import Views from './src/components/Views/Views'

class App extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Views  />
      <StatusBar style="auto" />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default (App);
