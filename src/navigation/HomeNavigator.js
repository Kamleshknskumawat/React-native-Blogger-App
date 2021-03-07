import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NAVIGATION } from '_constants';
import { ForgotPassword, Home } from '_screens'
import BookmarkScreen from '_screens/MainScreen/BookmarkScreen';
import PostWithId from '_screens/MainScreen/PostWithId';

const Stack = createStackNavigator();
function HomeNavigator() {
  return (

    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} component={Home} />
      <Stack.Screen name={NAVIGATION.postWithId} component={PostWithId} />
      <Stack.Screen name={NAVIGATION.bookmarkScreen} component={BookmarkScreen} />
      <Stack.Screen name={NAVIGATION.bookmarkScreen} component={BookmarkScreen} />
      {/* <Stack.Screen name={NAVIGATION.forgotPassword} component={ForgotPassword} /> */}
    </Stack.Navigator>

  );
}

export default HomeNavigator;
