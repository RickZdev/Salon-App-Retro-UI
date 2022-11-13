import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen';
import SalonScreen from '../screens/SalonScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={HomeScreen}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ presentation: 'card' }} />
      <Stack.Screen name="SalonScreen" component={SalonScreen} options={{ presentation: 'card' }} />
    </Stack.Navigator>
  )
}

export { HomeStack }