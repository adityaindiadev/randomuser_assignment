import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const dimensions = {
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height
};

export const AStorage = {
    setData: async (key = '', data = '') => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.error(error);
        }
    },
    getData: async (key = '') => {
        try {
            return JSON.parse(await AsyncStorage.getItem(key))
        } catch (error) {
            console.error(error);
            return null
        }
    },
    removeData: async (key = '') => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error(error);
        }
    }
}