import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import RegisterPage from '../RegisterPage/RegisterPage.js'

class Views extends Component {
  componentDidMount() {
    this.getInfo()
  }
  getInfo = () => {
    // this.props.dispatch({ type: 'FETCH_USER' })
    // this.props.dispatch({ type: 'GET_CHARACTERS' })
    // this.props.dispatch({ type: 'GET_SIMPLES' })
    // this.props.dispatch({ type: 'GET_MARTIALS' })
    // this.props.dispatch({ type: 'GET_ARMORS' })
    // this.props.dispatch({ type: 'GET_SHIELDS' })
    // this.props.dispatch({ type: 'GET_PACKS' })
    // this.props.dispatch({ type: 'GET_RACES' })
    // this.props.dispatch({ type: 'GET_CLASSES' })
    console.log('hello')
  }

  render() {
    return (
         <RegisterPage />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  
  }
})

export default connect()(Views);
