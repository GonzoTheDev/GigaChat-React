import React from 'react';
import { FlatList, Text, ImageBackground } from 'react-native'; 

import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import BG from '../assets/images/background.jpg';

const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <ImageBackground source={BG}>
            <FlatList
                data={chatRoomData.messages}
                initialScrollIndex={chatRoomData.messages.length - 1}
                renderItem={({ item }) => <ChatMessage message={item} /> }
            />
        </ImageBackground>
    )
}

export default ChatRoomScreen;