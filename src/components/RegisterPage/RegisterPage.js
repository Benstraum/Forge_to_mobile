import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';


import * as RootNavigation from '../RootNavigation.js';

import styles from '../styles.js'

class RegisterPage extends Component {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    state={
        username:'',
        password:''
    }
     registerUser = () => {
        if (this.state.username && this.state.password) {
            this.props.dispatch({
                type: 'REGISTER',
                payload: {
                    username: username,
                    password: password,
                },
            });
        } else {
            this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
        }
    } // end registerUser
     switchToLogin = () => {
        this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' })
        RootNavigation.navigate('Login')
    }
    handleInputChange = (inputName, inputValue) => {
        this.setState(state => ({ 
          ...state,
          [inputName]: inputValue // <-- Put square brackets
        }))
      }
    render(){
    return (
        <View style={styles.container}>
            <Text>Register Your Account!</Text>
            <TextInput
                type='text'
                style={styles.register}
                placeholder="Username"
                placeholderTextColor="black"
                onChangeText={value => this.handleInputChange('userName', value)}
            />
            <TextInput
                style={styles.register}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                onChangeText={value => this.handleInputChange('placeName', value)}
            />
            <Button
                color='grey'
                title='Login'
                onPress={() => this.switchToLogin() }
            >
                Login
          </Button>
            <Button
                title='Register'
                onPress={() => this.registerUser()}
            >Register</Button>
        </View>
    );
}
}
const mapStateToProps = state => ({
    errors: state.errors,
});


export default connect(mapStateToProps)(RegisterPage);
