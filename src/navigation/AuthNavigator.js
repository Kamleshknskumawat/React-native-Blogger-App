import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION } from '_constants';
import { ForgotPassword, Login } from '_screens';
import { getUser } from '_selectors/UserSelectors';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function AuthNavigator() {
  const user = useSelector(getUser);
  console.log("Stack.Navigator");
  console.log(user);
  
function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <h1>kamelsh</h1>
    </View>
  );
}

  return (

      <Stack.Navigator>

        <Stack.Screen
          component={Login}
          name={NAVIGATION.login}
          options={{
            headerShown: false,
            animationTypeForReplace: user ? 'push' : 'pop',
          }}
        />
        <Stack.Screen
          component={ForgotPassword}
          name={NAVIGATION.forgotPassword}

        />
      </Stack.Navigator>

  );
}

export default AuthNavigator;
