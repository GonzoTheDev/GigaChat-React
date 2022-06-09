import React from 'react';
import { 
    View, 
    Text, 
    Image,
    TouchableWithoutFeedback 
} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate('ChatRoom', { id: chatRoom.id, name: user.name });
    }


    // Function to display last message time in an aesthetic way
    const displayDate = (givenTime: String | moment.MomentInput) => {

        var given = moment(givenTime);
        var current = moment().startOf('day');
        var yesterday = moment(current).subtract(1, 'days');
        var day2 = moment(current).subtract(2, 'days');
        var day3 = moment(current).subtract(3, 'days');
        var day4 = moment(current).subtract(4, 'days');
        var day5 = moment(current).subtract(5, 'days');
        var day6 = moment(current).subtract(6, 'days');

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var displayDate;

        if(given > current) {
            displayDate = moment(givenTime).format("H:m");
        }
        else if(given < current && given > yesterday){
            displayDate = "Yesterday";
        }
        else if (given < current && given > day6) {
            if( given > day6){
                displayDate = days[day6.day()];
            }
            if( given > day5){
                displayDate = days[day5.day()];
            }
            if( given > day4){
                displayDate = days[day4.day()];
            }
            if( given > day3){
                displayDate = days[day3.day()];
            }
            if( given > day2){
                displayDate = days[day2.day()];
            }
        }
        else {
            displayDate = moment(givenTime).format("DD/MM/YYYY");
        }
        
        return displayDate;
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>

            <Text style={styles.time}>
                {displayDate(chatRoom.lastMessage.createdAt)}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;