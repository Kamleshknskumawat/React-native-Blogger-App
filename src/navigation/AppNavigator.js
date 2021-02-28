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
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MainTabScreen from '_screens/MainScreen/MainTabScreen';
import { DrawerContent } from '_screens/MainScreen/DrawerContent';
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
function AppNavigator() {
  const { colors } = useTheme();
  console.log("AppNavigator");

  return (


      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      </Drawer.Navigator>
  

    // <Tab.Navigator>
    //   {/* <Tab.Screen name={NAVIGATION.home} component={HomeNavigator} options={{
    //     tabBarLabel: 'Home',
    //     tabBarIcon: ({ color }) => (
    //       <FontAwesome5 name={'home'} size={20} />
    //     ),
    //   }} /> */}
    //   <Tab.Screen name={NAVIGATION.home} component={HomeStackScreen}
    //     options={{

    //       tabBarColor: '#009387',
    //       tabBarIcon: ({ color }) => (
    //         <Icon name="ios-home" color={color} size={26} />
    //       ),
    //     }}

    //   />


    //   <Tab.Screen name={NAVIGATION.myCart} component={MyCartNavigator} options={{
    //     tabBarLabel: 'Cart',
    //     tabBarIcon: ({ color }) => (
    //       <FontAwesome5 name={'shopping-bag'} size={20} />
    //     ),
    //   }} />
    //   <Tab.Screen name={NAVIGATION.profile} component={ProfileNavigator} options={{
    //     tabBarLabel: 'Profile',
    //     tabBarIcon: ({ color }) => (
    //       <FontAwesome5 name={'user'} size={20} />
    //     ),
    //   }} />
    // </Tab.Navigator>
  );
}

export default AppNavigator;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeNavigator} options={{
      title: 'Home',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);
