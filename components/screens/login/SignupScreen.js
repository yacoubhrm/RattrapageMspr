import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';


export default function SignupScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function handleSignup() {
        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email
        };
      
        axios.post('http://127.0.0.1:3001', data)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
      

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={(text) => setLastName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});