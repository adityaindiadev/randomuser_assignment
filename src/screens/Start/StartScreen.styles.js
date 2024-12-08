import { StyleSheet } from "react-native";

const startScreenStyles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startBtn:{
        width: 100,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50
    },
    textColor:{
        color: "#333",
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default startScreenStyles