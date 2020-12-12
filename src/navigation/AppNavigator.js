import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TabBarIcon } from '_components';
import { NAVIGATION } from '_constants';
import HomeNavigator from '_navigation/HomeNavigator';
import ProfileNavigator from '_navigation/ProfileNavigator';
import MyCartNavigator from './MyCartNavigator';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { colors } = useTheme();

  return (
    
    <Tab.Navigator>
      <Tab.Screen name={NAVIGATION.home} component={HomeNavigator}   options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'home'} size={20}/>
          ),
        }}/>
        <Tab.Screen name={NAVIGATION.myCart} component={MyCartNavigator}   options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'shopping-bag'} size={20}/>
          ),
        }}/>
      <Tab.Screen name={NAVIGATION.profile} component={ProfileNavigator} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'user'} size={20}/>
          ),
        }} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
