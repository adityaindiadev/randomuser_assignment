import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderStyles from "./Header.styles";

const Header = ({ screenName = '', isLoading = false }) => {
    const navigation = useNavigation();

    return (
        <View style={HeaderStyles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={HeaderStyles.backButton}>
                {/* <Text style={HeaderStyles.backText}>←</Text> */}
                <Image style={{ height: 25, width: 25,tintColor: 'black' }} source={require('../../assets/images/arrow_right_black.png')}></Image>
            </TouchableOpacity>
            <Text style={HeaderStyles.screenName}>{screenName}</Text>
            <View style={HeaderStyles.loaderContainer}>
            {isLoading && (
                <ActivityIndicator size="small" color="#007bff" style={HeaderStyles.loader} />
            )}
            </View>
        </View>
    );
};



export default Header;
