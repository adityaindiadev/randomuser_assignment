import { StyleSheet } from "react-native";

const userListScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    nameText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    ageText: {
        fontSize: 14,
        color: "#666",
    },
    searchInput: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        // borderRadius: 8,
        paddingHorizontal: 10,
        color: "#666"
        // marginBottom: 0,
    },
    noResults: {
        textAlign: "center",
        fontSize: 16,
        color: "#999",
        marginTop: 20,
    }
})

export default userListScreenStyles