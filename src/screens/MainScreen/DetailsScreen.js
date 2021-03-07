import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
const DetailsScreen = ({ navigation }) => {
  return (

    <Content>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=976&q=80' }} />
          </Left>
          <Body>
            <Text>Kamlesh You Have new Notification</Text>
            <Text note numberOfLines={1}>Please checked</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    </Content>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
