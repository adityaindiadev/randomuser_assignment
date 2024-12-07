import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/Start/StartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserList/UserListScreen';
import UserDetailsScreen from '../screens/UserDetails/UserDetailsScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{ headerShown: false, }} initialRouteName="StartScreen"
       >
        <Stack.Screen name="StartScreen"  component={StartScreen} />
        <Stack.Screen name="UserListScreen" component={UserListScreen} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator