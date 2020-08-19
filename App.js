import React, { Component } from 'react';
import {ImageBackground} from 'react-native'
import Feed from './src/components/Feed'
//allows for nav in any component

import styles from './src/components/styles'

export default function App() {
  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.bgImage}>
      <Feed />
    </ImageBackground>
  );
}

