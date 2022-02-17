import React from 'react'
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Stories from './Stories';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
    // animationEnabled: true
};

const Navigation = () => (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='Stories' component={Stories} />
            </Stack.Navigator>
        </NavigationContainer>
    );

export default Navigation;
  