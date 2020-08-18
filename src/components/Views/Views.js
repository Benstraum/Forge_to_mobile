import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';

class Views extends Component {
  componentDidMount () {
   this.getInfo()
  }
  getInfo = () => {
    this.props.dispatch({type: 'FETCH_USER'})
    this.props.dispatch({ type: 'GET_CHARACTERS' })
    this.props.dispatch({ type: 'GET_SIMPLES' })
    this.props.dispatch({ type: 'GET_MARTIALS' })
    this.props.dispatch({ type: 'GET_ARMORS' })
    this.props.dispatch({ type: 'GET_SHIELDS' })
    this.props.dispatch({ type: 'GET_PACKS' })
    this.props.dispatch({ type: 'GET_RACES' })
    this.props.dispatch({type:'GET_CLASSES'})
}

  render() {
    return (      
        <View>
          <Text>Views component</Text>
        </View>
  )}
}

export default connect()(Views);
