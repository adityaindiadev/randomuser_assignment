import { View, Text, TouchableOpacity, Alert, FlatList, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserListScreenStyles from './UserListScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { getAPI } from '../../webAPI/api'
import Loader from '../../components/Loader/Loader'
import { AStorage } from '../../utils/helpers'
import Header from '../../components/Header/Header'

const renderItem = ({ item, onPress }) => (
    <TouchableOpacity onPress={() => onPress(item)} style={UserListScreenStyles.row}>
        <Text style={UserListScreenStyles.nameText}>
            {item?.name.first} {item?.name?.last}
        </Text>
        <Text style={UserListScreenStyles.ageText}>Age: {item?.dob?.age}</Text>
    </TouchableOpacity>
);

const UserListScreen = () => {
    const navigation = useNavigation()
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    const fetchUsers = async (runLoader = false) => {
        try {
            runLoader && setLoading(true)
            const data = await getAPI({ endPoint: "?results=20" });
            // console.log(data);
            const newUsers = data?.results;

            const existingData = await AStorage.getData("users");
            const parsedData = existingData ? JSON.parse(existingData) : []

            // Prevent duplicates by filtering new users based on unique ID (login.uuid)
            const uniqueNewUsers = newUsers.filter(
                (newUser) => !parsedData.some((existingUser) => existingUser.login.uuid === newUser.login.uuid)
            );

            if (uniqueNewUsers.length > 0) {
                const updatedData = [...parsedData, ...uniqueNewUsers];
                await AStorage.setData("users", JSON.stringify(updatedData));
                setUsers(updatedData);
                // setFilteredUsers(updatedData);
            }

        } catch (err) {
            Alert.alert("Oops !", "Something Went Wrong!")
        }
        finally {
            runLoader && setLoading(false)
        }
    };

    const handleSearch = (text) => {
        setSearchText(text);
        if (text === "") {
            setFilteredUsers(users);
        } else {
            const lowercasedText = text.toLowerCase();
            const filtered = users.filter(
                (user) =>
                    user?.name?.first?.toLowerCase()?.includes(lowercasedText) ||
                    user?.name?.last?.toLowerCase()?.includes(lowercasedText) ||
                    user?.email?.toLowerCase()?.includes(lowercasedText)
            );
            setFilteredUsers(filtered);
        }
    };

    const listOnPress = (listData) => navigation.navigate("UserDetailsScreen", { user: listData })

    const loadDataFromStorage = async () => {
        try {
            setLoading(true);
            const storedUsers = await AStorage.getData("users");
            if (storedUsers) {
                const parsedUsers = JSON.parse(storedUsers);
                setUsers(parsedUsers);
                setLoading(false);
                // setFilteredUsers(parsedUsers);
            } else
                fetchUsers(true)
        } catch (error) {
            console.error("Error loading data from storage:", error);
            setLoading(false);
        }
    };

    useEffect(() => {

        handleSearch(searchText)

    }, [users])


    useEffect(() => {
        loadDataFromStorage()

        const interval = setInterval(() => {
            fetchUsers(true)
        }, 20000);

        return () => {
            // AStorage.removeData("users")
            clearInterval(interval)
        };
    }, [])


    return (
        <SafeAreaView style={UserListScreenStyles.container}>
            <Header screenName='User List' isLoading={loading} />
            <TextInput
                style={UserListScreenStyles.searchInput}
                placeholder="Search by name or email"
                value={searchText}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredUsers}
                keyExtractor={(item, index) => item?.login?.uuid || index?.toString()}
                renderItem={({ item, _ }) => renderItem({ item, onPress: listOnPress })}
                contentContainerStyle={UserListScreenStyles.listContainer}
                ListEmptyComponent={<Text style={UserListScreenStyles.noResults}>No results found</Text>}
            />
            <Loader isLoader={loading && (users.length === 0)} />
        </SafeAreaView>
    )
}

export default UserListScreen