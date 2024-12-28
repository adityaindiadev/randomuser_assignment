import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/Start/StartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserList/UserListScreen';
import UserDetailsScreen from '../screens/UserDetails/UserDetailsScreen';
import First from '../RNPractice/First';
import Flipkart from '../screens/Flipkart/Flipkart';
import FirstClass from '../RNPractice/FirstClass';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

  const linking = {
    prefixes: ["randomuser://"],
    config: {
      screens: {
        UserListScreen: "user-list"
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
       screenOptions={{ headerShown: false, }} initialRouteName="StartScreen"
       >
        <Stack.Screen name="StartScreen"  component={StartScreen} />
        <Stack.Screen name="UserListScreen" component={UserListScreen} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Flipkart" component={Flipkart} />
        <Stack.Screen name="FirstClass" component={FirstClass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator