import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import headerStyles from "./Header.styles";

const Header = ({ screenName = '', isLoading = false }) => {
    const navigation = useNavigation();
    const canGoBack = navigation.canGoBack();
    return (
        <View style={headerStyles.headerContainer}>
            <TouchableOpacity disabled={!canGoBack} onPress={() => navigation.goBack()} style={headerStyles.backButton}>
                {canGoBack ? <Image style={headerStyles.backButtonImg} source={require('../../assets/images/arrow_right_black.png')} /> :
                    <View style={headerStyles.backButtonPlaceholder} />}
            </TouchableOpacity>
            <Text style={headerStyles.screenName}>{screenName}</Text>
            <View style={headerStyles.loaderContainer}>
                {isLoading && (
                    <ActivityIndicator size="small" color="#007bff" style={headerStyles.loader} />
                )}
            </View>
        </View>
    );
};



export default Header;
