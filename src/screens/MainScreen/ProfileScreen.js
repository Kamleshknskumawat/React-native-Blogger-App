import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Image, ScrollView, SafeAreaView } from 'react-native';
import { Header, Item, Input, Icon, Button, Container, Subtitle } from 'native-base';
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Textarea, Form } from 'native-base';
import { Title } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';
import { sendEmail } from './send-email';
import Modal from 'react-native-modal';
const ProfileScreen = () => {
  const [datas, setDatas] = useState();
  const [isEndLoading, setIsEndLoading] = useState(false);
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [emailBody, setEmailBody] = useState('');
  const [time, setTime] = useState('');
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  getData = async () => {
    const apiURL = "https://jsonplaceholder.typicode.com/photos?limit=10&_page=1";

    fetch(apiURL).then((res) => res.json()).then((resJson) => {
      setDatas(resJson);
    })
  }
  useEffect(() => {
    setIsEndLoading(true)
    console.log("received");
    console.log(datas);
    if (datas == undefined || datas == '') {
      getData();


    } else {
      console.log("not emptyu");
    }


  });

  const listss = ({ item }) => {
    return (
      <View style={styles.itemRow}>
        <Image source={{ uri: item.url }} style={styles.itemImage} />
        <Text Style={styles.itemText}>{item.title}</Text>
      </View>
    )
  }
  const renderFooter = () => {
    return (
      isEndLoading ?
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View> : null
    );
  }
  const sendEmailUs = () => {
    sendEmail(
      'kamleshknskumawat@gmail.com',
      'Bug and Report!',
      emailBody
    ).then(() => {
      console.log('Our email successful provided to device mail ');
    });
    toggleModal();
  }

  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
      let secTimer = setInterval( () => {
        setDt(new Date().toLocaleString())
      },1000)
  
      return () => clearInterval(secTimer);
  }, []);
 

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Feedback</Title>
          <Subtitle>Bug report</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>

        <View style={{ flex: 1 }}>
          <Modal isVisible={isModalVisible}>
            <View style={{ flex: 1, marginTop: 150 }}>

              <Form>
                <Textarea style={{ backgroundColor: 'white' }} rowSpan={5} bordered placeholder="Please write your bug for help us." onChangeText={setEmailBody} />
              </Form>

              <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 120 }}>
                <Button onPress={toggleModal} ><Text>Hide modal</Text></Button>
                <Button onPress={sendEmailUs} ><Text>Send Email</Text></Button>
              </View>
            </View>
          </Modal>
        </View>
        <List>

          <ListItem avatar onPress={toggleModal}>
            <Left>
              <Thumbnail source={{ uri: 'https://avatars.githubusercontent.com/u/11689830?s=460&u=05d5ec08b7df42ee9f7d45973e560c23da309830&v=4' }} />
            </Left>
            <Body>
              <Text>Kamlesh Kumawat : Developer</Text>
              <Text note>{dt}</Text>
              <Text>Tap & Write</Text>
              
            </Body>
            <Right >
             
              <Text note>Online</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  itemText: {
    fontSize: 16,
    padding: 5
  }

});
