import { View, Text, TouchableOpacity, Alert, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserListScreenStyles from './UserListScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { getAPI } from '../../webAPI/api'
import Loader from '../components/Loader/Loader'
import { AStorage } from '../../utils/helpers'

const renderItem = ({ item }) => (
    <TouchableOpacity style={UserListScreenStyles.row}>
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

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const data = await getAPI({ endPoint: "?results=20" });
            // console.log(data);
            const newUsers = data?.results;

            // Retrieve existing data from AsyncStorage
            const existingData = await AStorage.getData("users");
            const parsedData = existingData ? JSON.parse(existingData) : []

            // Prevent duplicates by filtering new users based on unique ID (login.uuid)
            const uniqueNewUsers = newUsers.filter(
                (newUser) => !parsedData.some((existingUser) => existingUser.login.uuid === newUser.login.uuid)
            );

            if (uniqueNewUsers.length > 0) {
                // Combine and store unique users in AsyncStorage
                const updatedData = [...parsedData, ...uniqueNewUsers];
                await AStorage.setData("users", JSON.stringify(updatedData));

                // Update state with new data
                setUsers(updatedData);
                setFilteredUsers(updatedData);
            }

        } catch (err) {
            Alert.alert("Oops !", "Something Went Wrong!")
        }
        finally {
            setLoading(false)
        }
    };

    const handleSearch = (text) => {
        setSearchText(text);
        if (text === "") {
            setFilteredUsers(users); // Reset filter when text is empty
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

    const loadDataFromStorage = async () => {
        try {
            const storedUsers = await AStorage.getData("users");
            if (storedUsers) {
                const parsedUsers = JSON.parse(storedUsers);
                setUsers(parsedUsers);
                setFilteredUsers(parsedUsers);
            }
        } catch (error) {
            console.error("Error loading data from storage:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadDataFromStorage()

        const interval = setInterval(() => {
            fetchUsers()
        }, 10000);

        return () => {
            AStorage.removeData("users")
            clearInterval(interval)
        };
    }, [])


    return (
        <View style={UserListScreenStyles.container}>
            <TextInput
                style={UserListScreenStyles.searchInput}
                placeholder="Search by name or email"
                value={searchText}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredUsers}
                keyExtractor={(item, index) => item?.login?.uuid || index?.toString()}
                renderItem={renderItem}
                contentContainerStyle={UserListScreenStyles.listContainer}
                ListEmptyComponent={<Text style={UserListScreenStyles.noResults}>No results found</Text>}
            />
            <Loader isLoader={loading} />
        </View>
    )
}

export default UserListScreen