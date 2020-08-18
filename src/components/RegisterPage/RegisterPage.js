import { connect } from 'react-redux';
import React, { useState } from 'react';

import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';


function RegisterPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text>{username}</Text>
            <TextInput
                style={styles.inputs}
                placeholder="Username"
                onChangeText={username => setUsername(username)}
                value={username}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    inputs: {
    backgroundColor:'white'
    }
});
const mapStateToProps = state => ({
    errors: state.errors,
});


export default connect(mapStateToProps)(RegisterPage);
