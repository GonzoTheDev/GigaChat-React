import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone')
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`)

        // send message to the backend

        setMessage('');
    }

    const onPress = () => {
        if(!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Entypo name="emoji-happy" size={26} color="grey" style={styles.icon}></Entypo>
                <TextInput 
                    placeholder={"Type a message"}
                    style={styles.textInput} 
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={26} color="grey" style={styles.icon}></Entypo>
                {!message && <Entypo name="camera" size={26} color="grey" style={styles.icon}></Entypo>}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message 
                    ? <MaterialCommunityIcons name="microphone" size={36} color="white"></MaterialCommunityIcons>
                    : <MaterialCommunityIcons name="send" size={32} color="white"></MaterialCommunityIcons>
                }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;
