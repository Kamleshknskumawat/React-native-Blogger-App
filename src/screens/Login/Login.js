import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES,forgotPassword } from '_actions/UserActions';
import { ErrorView, TextField } from '_components';
import { Block, Text, Button, Card, Icon, Input, NavBar } from 'galio-framework';
import { SafeAreaView, ScrollView } from 'react-native';
import strings from '_localization';
import styles from '_screens/Login/Login.styles';
import errorsSelector from '_selectors/ErrorSelectors';
import { isLoadingSelector } from '_selectors/StatusSelectors';
import { ShadowStyles, TextStyles } from '_theme';
import { theme, withGalio, GalioProvider } from 'galio-framework'
import { Image } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );
 

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {
    dispatch(login(username, password));
  };
  const forgotScreen = () => {
    alert("hello world");

   // dispatch(forgotPassword())
 //  navigation.dispatch()
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.blocks}>
          <Text h2 style={styles.text}>MyKiranaBook</Text>
          <Image
            source={{ uri: "https://assets-ouch.icons8.com/free-download/435/44bd29b6-dec5-4fbb-84a4-83f2cf625cf2.png?filename=clip-1061.png" }}
            style={{ width: 400, height: 300 }}
          />
        </View>
        <View style={styles.container}>

          <Input
            placeholder="Email Address"
            placeholderTextColor="#dbdbdc"
            borderless
            onChangeText={setUsername}
            type="email-address"
            style={styles.input}
            value={username}
          />
          <Input

            password viewPass
            placeholder="sssss"
            placeholderTextColor="#dbdbdc"
            borderless
            iconSize={25}
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />
          {/* <Text h5 onPress={() => navigation.navigate('forgotPassword', { screenName: "ForgotPassword" })} >Forgot Passwrd</Text> */}
     
         
          <Text h5 onPress={() => navigation.navigate('ForgotPassword')} >Forgot Password</Text>
          <Button radius={70} onPress={handleSubmit} size="large" color="success" style={styles.submitButton}>Login</Button>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

export default Login;
