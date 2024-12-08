import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 1,
        backgroundColor: "#f8f9fa",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    backButton: {
        padding: 10,
    },
    backButtonImg: {
        height: 25,
        width: 25,
        tintColor: 'black'
    },
    backButtonPlaceholder: {
        height: 25,
        width: 25,
    },
    backText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#007bff",
    },
    screenName: {
        fontSize: 18,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
        color: "#333",
    },
    loaderContainer: {
        width: 50,
        // backgroundColor: 'red'
    },
    loader: {
        // marginLeft: 20,
    },
    loaderPlaceholder: {
        width: 30,
    },
});

export default headerStyles
