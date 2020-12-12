import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import homeIcon from '_assets/ic_home/ic_home.png';
import settingsIcon from '_assets/ic_settings/ic_settings.png';
import { NAVIGATION } from '_constants';
import { Icon } from 'react-native-elements';
import { Block, Text, Button, Card,Input, NavBar } from 'galio-framework';
const tabIcon = {
  [NAVIGATION.home]: homeIcon,
  // [NAVIGATION.profile]: settingsIcon,
};

function TabBarIcon({ name, color }) {

  return <Text><Image source={tabIcon[name]} style={{ tintColor: color }} /></Text>;

}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TabBarIcon;
