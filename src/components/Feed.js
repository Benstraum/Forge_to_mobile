import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React, { Component } from 'react';

import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import AboutPage from './AboutPage/AboutPage'
import RegisterPage from './RegisterPage/RegisterPage.js'
import LoginPage from './LoginPage/LoginPage'
import Home from './Home/Home'

import { navigationRef } from './RootNavigation';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class Feed extends Component {
    render() {
        return (
            this.props.user.id ?
            <NavigationContainer ref={navigationRef}>
                <Drawer.Navigator initialRouteName='Home'>
                   < Drawer.Screen name="Home" component={Home}/>
                </Drawer.Navigator>
            </NavigationContainer>
            :
            <NavigationContainer ref={navigationRef}>
                <Drawer.Navigator initialRouteName={'Home' || '/'}>
                    <Drawer.Screen name="Home" component={AboutPage} />
                    <Drawer.Screen name="Register" component={RegisterPage} />
                    <Drawer.Screen name="Login" component={LoginPage} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      user: state.user,
      loginMode: state.loginMode,
    }
  }

export default connect(mapStateToProps)(Feed)

