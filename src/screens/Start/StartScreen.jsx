import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import StartScreenStyles from './StartScreen.styles'
import { useNavigation } from '@react-navigation/native'

const StartScreen = () => {
    const navigation = useNavigation()

    const navigateToUserListScreen = () => {
        navigation.navigate("UserListScreen")
    }
    return (
        <View style={StartScreenStyles.container}>
            <TouchableOpacity onPress={navigateToUserListScreen} style={StartScreenStyles.startBtn}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartScreen