import { connect } from 'react-redux';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';

import * as RootNavigation from '../RootNavigation.js';


import styles from '../styles.js'

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const  login = () => {
        if (username && password) {
            props.dispatch({
            type: 'LOGIN',
            payload: {
              username: username,
              password: password,
            },
          })
        } else {
          props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
      } // end login

      const switchToRegister = () => {
        props.dispatch({ type: 'SET_TO_REGISTER_MODE' })
        RootNavigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
              <Text>Login To Your Account!</Text>
            <TextInput
            type='text'
                style={styles.register}
                placeholder="Username"
                placeholderTextColor="black"
                onChangeText={username => setUsername(username)}
                value={username}
            />
            <TextInput
                style={styles.register}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <Button
                title='Login'
                onPress={() => login() }
              >
                Login
          </Button>
              <Button
              color='grey'
                className="register"
                title='Register'
                value="Register"
                onPress={()=> switchToRegister() }
              >Register</Button>
        </View>
    );
}

const mapStateToProps = state => ({
    errors: state.errors,
});


export default connect(mapStateToProps)(LoginPage);
