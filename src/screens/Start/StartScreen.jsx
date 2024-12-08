import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import startScreenStyles from './StartScreen.styles'
import { useNavigation } from '@react-navigation/native'

const StartScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
      
        Alert.alert("Hi User", `The deep link URL scheme is 'randomuser://user-list', and it will lead you directly to the 'User List' screen.`)
      
    }, [])
    

    const navigateToUserListScreen = () => {
        navigation.navigate("UserListScreen")
    }
    return (
        <View style={startScreenStyles.container}>
            <TouchableOpacity onPress={navigateToUserListScreen} style={startScreenStyles.startBtn}>
                <Text style={startScreenStyles.textColor}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartScreen