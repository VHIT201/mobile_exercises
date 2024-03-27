import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Login from '../Views/Login';
import Search from '../Views/Search';

import TabOne from '../Views/BottomTabItem/TabOne';
import TabTwo from '../Views/BottomTabItem/TabTwo';
import TabThree from '../Views/BottomTabItem/TabThree';
import TabFour from '../Views/BottomTabItem/TabFour';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
    const BottomTabNavigator = () => {
        return (
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'TabOne') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'TabTwo') {
                iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'TabThree') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'TabFour') {
                iconName = focused ? 'star' : 'star-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="TabOne" component={TabOne} options={{ tabBarLabel: 'Home',headerShown:false }} />
            <Tab.Screen name="TabTwo" component={TabTwo} options={{ tabBarLabel: 'List',headerShown:false }} />
            <Tab.Screen name="TabThree" component={TabThree} options={{ tabBarLabel: 'Profile',headerShown:false }} />
            <Tab.Screen name="TabFour" component={TabFour} options={{ tabBarLabel: 'Favorites',headerShown:false }} />
          </Tab.Navigator>
        );
      }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen 
  name="BottomTabNavigator" 
  component={BottomTabNavigator} 
  options={{ headerShown: false }} // Thêm dòng này để loại bỏ header
/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})
