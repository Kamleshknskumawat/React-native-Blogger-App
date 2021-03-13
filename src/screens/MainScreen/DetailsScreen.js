import React from 'react';
import { StyleSheet, RefreshControl, SafeAreaView, ScrollView, } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const DetailsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
       contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=976&q=80' }} />
              </Left>
              <Body>
                <Text note>Kamlesh You Have new Notification</Text>
                <Text note numberOfLines={1}>Please checked</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=976&q=80' }} />
              </Left>
              <Body>
                <Text note>Kamlesh You Have new Notification</Text>
                <Text note numberOfLines={1}>Please checked</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=976&q=80' }} />
              </Left>
              <Body>
                <Text note>Kamlesh You Have new Notification</Text>
                <Text note numberOfLines={1}>Please checked</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=976&q=80' }} />
              </Left>
              <Body>
                <Text note>Kamlesh You Have new Notification</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  textColor: {
    color: '#718093',
    fontSize: 15,
    marginTop: 3,
    paddingLeft: 10
  },
  scrollView: {
    flex: 1,
  },
});
