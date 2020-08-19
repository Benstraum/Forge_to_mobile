import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import { Text, View, ImageBackground, TextInput, Button } from 'react-native';


import styles from '../styles.js'
import HomeMapItem from '../HomeMapItem/HomeMapItem.js'
import * as RootNavigation from '../RootNavigation.js';

class Home extends Component {
    //gets all characters for specific user
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    sendToSheet = (char) => {
        this.props.dispatch({ type: 'SET_CHAR_SHEET', payload: char })
        // RootNavigation.navigate('cSheet')
    }
    render(){

        const Data = this.props.characters.map(char => char) 
        console.log(Data)
        return(
            <View>
                        {this.props.characters.length ?
                         this.props.characters.map(char => (<HomeMapItem key={char.id} char={char} sendToSheet={this.sendToSheet} />))
                        :
                        <Text style={{ textAlign: 'center', marginTop: '30vh' }}>Your Characters will go here!</Text>
                        }
                <Button
                title="Create New Character!"
                style={{ position: 'relative', background: '#641212', color: 'white', border: '3px solid black', width:'100%' }}
                onPress={() => this.changePage()}>Click Here To Create Character!</Button>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    characters: state.characterReducer,
});
export default connect(mapStateToProps)(Home);