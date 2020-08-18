import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default class Feed extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Navigation</Text>
                <Button 
                title='go to feed item'
                onPress={()=>{ }}
                />
            </View>
        )
    }
}
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