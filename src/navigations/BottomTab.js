import { Dimensions, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';

import { HomeStack } from './AppStack';
import LocationScreen from '../screens/LocationScreen'
import MessageScreen from '../screens/MessageScreen'
import NoteScreen from '../screens/NoteScreen'
import ProfileScreen from '../screens/ProfileScreen'
import COLORS from '../constants/COLORS'

const Tab = createBottomTabNavigator();

const BottomTab = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  return (
    <Tab.Navigator
      initialRouteName={HomeStack}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.secondary[0],
          height: 65,
          width: width - 50,
          borderRadius: 30,
          display: 'flex', 
          alignSelf: 'center',
          marginBottom: 10,
          paddingHorizontal: 20,
          elevation: 0
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.white,
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ?
            <>
              <View className='bg-white rounded-full border-black border-2 py-2 w-[60px] justify-center items-center'>
                <Foundation name='home' color={color} size={size} /> 
              </View>
              <View className='bg-secondary-2 absolute top-[15px] -z-10 rounded-full border-black border-2 py-2 px-5'>
                <Foundation name='home' color={color} size={size} /> 
              </View>
            </> :
            <Foundation name='home' color={color} size={size} /> 
          ),
        }}
      />

      <Tab.Screen name="LocationScreen" component={LocationScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ?
            <>
              <View className='bg-white rounded-full border-black border-2 py-2 w-[60px] justify-center items-center'>
                <Fontisto name='map-marker-alt' color={color} size={size} />
              </View>
              <View className='bg-secondary-2 absolute top-[15px] -z-10 rounded-full border-black border-2 py-2 px-5'>
                <Fontisto name='map-marker-alt' color={color} size={size} />
              </View>
            </> :
            <Fontisto name='map-marker-alt' color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="NoteScreen" component={NoteScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ?
            <>
              <View className='bg-white rounded-full border-black border-2 py-2 w-[60px] justify-center items-center'>
            <MaterialCommunityIcons name='note-text' color={color} size={size} />
              </View>
              <View className='bg-secondary-2 absolute top-[15px] -z-10 rounded-full border-black border-2 py-2 px-5'>
              <MaterialCommunityIcons name='note-text' color={color} size={size} />
              </View>
            </> :
            <MaterialCommunityIcons name='note-text' color={color} size={size} />
            ),
        }}
      />

      <Tab.Screen name="MessageScreen" component={MessageScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ?
            <>
              <View className='bg-white rounded-full border-black border-2 py-2 w-[60px] justify-center items-center'>
                <MaterialCommunityIcons name='message-minus' color={color} size={size} />
              </View>
              <View className='bg-secondary-2 absolute top-[15px] -z-10 rounded-full border-black border-2 py-2 px-5'>
                <MaterialCommunityIcons name='message-minus' color={color} size={size} />
              </View>
            </> :
            <MaterialCommunityIcons name='message-minus' color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ?
            <>
              <View className='bg-white rounded-full border-black border-2 py-2 w-[60px] justify-center items-center'>
                <FontAwesome5 name='user-alt' color={color} size={size} /> 
              </View>
              <View className='bg-secondary-2 absolute top-[15px] -z-10 rounded-full border-black border-2 py-2 px-5'>
                <FontAwesome5 name='user-alt' color={color} size={size} /> 
              </View>
            </> :
            <FontAwesome5 name='user-alt' color={color} size={size} /> 
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab