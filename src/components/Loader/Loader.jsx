import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import loaderStyles from './Loader.styles';


const Loader = ({ isLoader = false }) => {

    if (!isLoader) {
        return (<></>)
    }

    return (
        <View style={loaderStyles.container}>
            <ActivityIndicator size="large" color='#FFF' />
        </View>
    );
};

export default Loader;