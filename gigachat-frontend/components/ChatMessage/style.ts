import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    messageBoxIn: {
        backgroundColor: '#fff',
        marginRight: 50,
        borderRadius: 10,
        padding: 10,
    },
    messageBoxOut: {
        backgroundColor: '#a2f2e2',
        marginLeft: 50,
        borderRadius: 10,
        padding: 10,
    },
    name: {
        color: '#000000',
        fontWeight: "bold",
        marginBottom: 2,
    },
    message: {
    },
    time: {
        textAlign: "right",
        color: 'grey',
    },

});

export default styles;