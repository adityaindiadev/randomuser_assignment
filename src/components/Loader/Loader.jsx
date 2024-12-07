import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import { dimensions } from '../../utils/helpers';
import LoaderStyles from './Loader.styles';


const Loader = ({ isLoader = false }) => {

    if (!isLoader) {
        return (<></>)
    }

    return (
        <View style={LoaderStyles.container}>
            <ActivityIndicator size="large" color='#FFF' />
        </View>
    );
};

export default Loader;