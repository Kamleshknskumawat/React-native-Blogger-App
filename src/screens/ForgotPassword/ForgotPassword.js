import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Block, Button, Text, Card, Input, NavBar } from 'galio-framework';
import { useSelector } from 'react-redux';
import strings from '_localization';
import styles from '_screens/Home/Home.styles';
import { getUser } from '_selectors/UserSelectors';
import { TextStyles } from '_theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function ForgotPassword() {
  const { colors } = useTheme();
  // const user = useSelector(getUser);
  return (
    <View style={styles.container}>
      <Text h3>kamlesh</Text>
    </View>
  );
}

export default ForgotPassword;
