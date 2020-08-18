import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';

import {StyleSheet, Text, View, ImageBackground } from 'react-native';
import Views from './src/components/Views/Views'

class App extends Component {
  render() {
  return (
<ImageBackground source={require('./src/components/Views/background.jpg')} style={styles.container}>
      <Views  />
      <StatusBar style="auto" />
</ImageBackground>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
      }
});

export default (App);
