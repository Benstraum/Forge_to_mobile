import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React, { Component } from 'react';

import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'

import AboutPage from './src/components/AboutPage/AboutPage'

import RegisterPage from './src/components/RegisterPage/RegisterPage.js'

import Feed from './src/Feed'

interface RoutesProps {

}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
 <NavigationContainer>
   <Drawer.Navigator initialRouteName='Home'>
     <Drawer.Screen name="Home" component={AboutPage}/>
     <Drawer.Screen name="Login" component={RegisterPage}/>
   </Drawer.Navigator>
 </NavigationContainer>
  
  );
}

