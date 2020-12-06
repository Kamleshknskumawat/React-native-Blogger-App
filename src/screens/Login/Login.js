import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '_actions/UserActions';
import { ErrorView, TextField } from '_components';
import { Block, Button, Card, Icon, Input, NavBar } from 'galio-framework';
import strings from '_localization';
import styles from '_screens/Login/Login.styles';
import errorsSelector from '_selectors/ErrorSelectors';
import { isLoadingSelector } from '_selectors/StatusSelectors';
import { ShadowStyles, TextStyles } from '_theme';
import { theme, withGalio, GalioProvider } from 'galio-framework'
import { Image } from 'react-native-elements';
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

  return (

    <View>
      <View style={styles.blocks}>
        <Card
          borderless
          image="https://assets-ouch.icons8.com/free-download/435/44bd29b6-dec5-4fbb-84a4-83f2cf625cf2.png?filename=clip-1061.png"
          imageStyle={styles.cardImageRadius}
          imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
        />
        <Image
          source={{ uri: "https://assets-ouch.icons8.com/free-download/435/44bd29b6-dec5-4fbb-84a4-83f2cf625cf2.png?filename=clip-1061.png" }}
        /> 
      </View>
      <View style={styles.container}>

        <Input
          placeholder="Email Address"
          placeholderTextColor="#dbdbdc"
          borderless
          type="email-address"
          style={styles.input}
        />
        <Input

          password viewPass
          placeholder="sssss"
          placeholderTextColor="#dbdbdc"
          borderless
          iconSize={25}
          style={styles.input}
        />

        <Button radius={70} size="large" color="success" style={styles.submitButton}>Login</Button>
      </View>
    </View>
  );
}

export default Login;
