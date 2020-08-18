import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React, { Component } from 'react';

import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import { connect } from 'react-redux';

const AboutPage = ({ navigation }) => (
    <View className="About">

        <Text style={styles.text}>
            Welcome to Forge!
      </Text>
        <Text style={styles.text}>
            Forge is a passion project of mine to help D&D become a more accessible hobby. My app will walk you through the character
            creation process and provide explinations for most of the tricky parts of creating a character. Good luck in your adventures!
      </Text>
        <Text style={styles.text}>Games give you a chance to excel, and if you're playing in good company you don't
        even mind if you lose because you had the enjoyment of the company
        during the course of the game. -- Gary Gygax</Text>

        <Button title='Start'
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover'
    },
    button: {
      width: '150',
      height: '50',
      borderRadius: 4
    },
    text: {
      fontSize: 12,
      color: 'black'
    }
  });

export default AboutPage;