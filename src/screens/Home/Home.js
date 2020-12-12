import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import strings from '_localization';
import styles from '_screens/Home/Home.styles';
import { getUser } from '_selectors/UserSelectors';
import { TextStyles } from '_theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  return (
    <View style={styles.container}>
      <FontAwesome5 name={'lock'} solid />
      <Text style={[TextStyles.lightTitle, { color: colors.text }]}>
        {strings.home.message} {user?.username}
      </Text>
    </View>
  );
}

export default Home;
