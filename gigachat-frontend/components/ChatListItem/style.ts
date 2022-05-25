import { StyleSheet, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "92%",
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
       justifyContent: 'space-around',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        width: 180,
    },
    time: {
        fontSize: 16,
        color: 'grey',
    }
});

export default styles;