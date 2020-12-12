import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NAVIGATION } from '_constants';
import { Home } from '_screens';
import ForgotPassword from '_screens/ForgotPassword';

const Stack = createStackNavigator();

function MyCartNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.myCart} component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default MyCartNavigator;
