import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import AppNavigator from '_navigation/AppNavigator';
import AuthNavigator from '_navigation/AuthNavigator';
import { getUser } from '_selectors/UserSelectors';
import { theme } from '_theme';
import { Root } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
function RootNavigator() {
  const user = useSelector(getUser);
  const scheme = useColorScheme();
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer theme={theme[scheme]}>
      <Root>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </Root>
    </NavigationContainer>
  );
}

export default RootNavigator;
