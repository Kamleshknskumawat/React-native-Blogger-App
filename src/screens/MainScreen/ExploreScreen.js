import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
const ExploreScreen = () => {
  return (

    <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
