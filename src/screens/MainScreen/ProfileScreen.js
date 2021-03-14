import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, ScrollView, SafeAreaView } from 'react-native';
import { Header, Item, Input, Icon, Button, Container, Subtitle } from 'native-base';
import { Left, Body, Right, Title } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
const ProfileScreen = () => {
  const [datas, setDatas] = useState();
  const [isEndLoading, setIsEndLoading] = useState(false);
  const navigation = useNavigation();
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
  const handleLoadMore = () => {
    console.log("handleLoadMore {} called");
    console.log("current pages ");
    // Toast.show({
    //   text: 'Please take breath...',
    //   buttonText: 'Okay'
    // })
    // setPages(pages + 10);
    // console.log("current new pages " + pages);
    // setIsEndLoading(true);
    // listOfPost(pages)

  }
  return (
    // <Container>
    //   <SafeAreaView style={styles.container}>
    //     <View style={styles.container}>

    //       <FlatList
    //         data={datas}
    //         renderItem={listss}
    //         keyExtractor={(item, index) => index.toString()}
    //         onEndReachedThreshold={0.01}
    //         ListFooterComponent={renderFooter}
    //         onEndReached={handleLoadMore}
    //         onEndReachedThreshold={0.1}
    //       />

    //     </View>
    //   </SafeAreaView >
    // </Container>
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
