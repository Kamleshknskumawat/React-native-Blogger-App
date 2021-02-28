import React, { useEffect, useState } from 'react';
const url = require('../../constants/blogger');
import { View, StyleSheet, StatusBar, SafeAreaView, Share } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView, useWindowDimensions, Linking } from "react-native";
import HTML from "react-native-render-html";
import { Image } from 'react-native';
import api, { requestPages, requestPostBodyFalse, requestPostById, requestPostSeach, requestTitle, requestPageById, requestPostBodyTrue } from '_bloggerapi/api';
import PostBodyWithoutBody from './PostBodyWithoutBody';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { useRoute } from '@react-navigation/native';
import PostBodyWithoutBodyId from './PostBodyWithoutBodyId';
import { FAB, Portal, Provider } from 'react-native-paper';
const PostWithId = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  let mydatta = [];
  // const contentWidth = useWindowDimensions().width;
  const { colors } = useTheme();
  const route = useRoute();
  const { screenName, id } = route.params;
  navigation.setOptions({
    title: screenName
  })
  const customTheme = {
    SIZES: { BASE: 18, },
    // this will overwrite the Galio SIZES BASE value 16
    COLORS: { PRIMARY: 'red', }
    // this will overwrite the Galio COLORS PRIMARY color #B23AFC
  };
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  useEffect(() => {
    // Update the document title using the browser API
    if (data == undefined) {
      let postUrl = url.POST_BY_GET + "/" + id + '?' + url.KEY_VALUE;

      fetch(postUrl)
        .then(res => res.json())
        .then(json => setData(json));
      console.log(data);
      console.log("useEffect SEnd");
    }
  });

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native Blogger API By Kumawat Team :- :::' + data.title + "::: " + data.url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }


  };

  const openInBrowser = () => {
    Linking.openURL(data.url)
      .catch(err => {
        console.error("Failed opening page because: ", err)
        alert('Failed to open page')
      })
  }
  const getNo = () => {
    console.log("getNo");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {data !== undefined ? <PostBodyWithoutBodyId data={data}></PostBodyWithoutBodyId> : getNo()}
        </View>
      </ScrollView>

      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              { icon: 'plus', onPress: () => console.log('Pressed add') },
              {
                icon: 'cellphone-link',
                label: 'Open in Browser',
                onPress: () => openInBrowser(),
              },
              {
                icon: 'share-variant',
                label: 'Share',
                onPress: () => onShare(),
              },
              {
                icon: 'arrow-left',
                label: 'Back',
                onPress: () => navigation.goBack(),

              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </SafeAreaView>
  );
};

export default PostWithId;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

