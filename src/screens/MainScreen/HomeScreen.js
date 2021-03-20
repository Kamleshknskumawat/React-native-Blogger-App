import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Alert, FlatList, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";
import { Image } from 'react-native';
import api, { requestPages, requestPostBodyFalse, requestPostById, requestPostSeach, requestTitle, requestPageById, requestPostBodyTrue, requestPostBodyFalseNextPage } from '_bloggerapi/api';
import PostBodyWithoutBody from './PostBodyWithoutBody';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Toast } from 'native-base';

import OneSignal from 'react-native-onesignal';
import Rate, { AndroidMarket } from 'react-native-rate'
import PushNotification from "react-native-push-notification";
import MMKVStorage from "react-native-mmkv-storage";
import InAppReview from 'react-native-in-app-review';
const MMKV = new MMKVStorage.Loader().initialize();
InAppReview.isAvailable();
const HomeScreen = ({ navigation }) => {
  const contentWidth = useWindowDimensions().width;
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [isEndLoading, setIsEndLoading] = useState(false);
  const [isShow, setShow] = useState(false);
  const [datas, setDatas] = useState();
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [subscribed, setSubscribed] = useState();
  const [pages, setPages] = useState(10);
  let mydatta = [];
  const theme = useTheme();
  useEffect(() => {
    setIsEndLoading(true)
    console.log("received");
    console.log(data);
    if (data == undefined || data == '') {
      getPost();


    } else {
      console.log("not emptyu");
    }

    setIsEndLoading(true)
    console.log("received");
    console.log(datas);
    if (datas == undefined || datas == '') {
      getData();


    } else {
      console.log("not emptyu");
    }

  });

  const budgetCount = async () => {
    console.log("budgetCount");
    var budgeCount = await MMKV.getStringAsync("budgeCount");
    console.log(budgeCount);
    var budgeCounts;
    if (budgeCount == 'undefined' || budgeCount == "" || budgeCount === null) {
      var budgeCounts = 1;
      await MMKV.setStringAsync("budgeCount", "1");
    } else {
      // var a = new Number(budgeCount)+1; 
      // console.log(a instanceof Number);
      // console.log(a);
      await MMKV.setStringAsync("budgeCount", '1', (err, result) => {
        console.log('I am logged In');
      });
    }

    PushNotification.setApplicationIconBadgeNumber(parseInt(budgeCounts));
  }

  const getNotification = () => {

    console.log("getNotification");


    PushNotification.localNotification({
      /* Android Only Properties */

      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
    });
    budgetCount();

  }
  const ratting = () => {
    console.log("Hello world");
    InAppReview.RequestInAppReview()
      .then((hasFlowFinishedSuccessfully) => {
        // when return true in android it means user finished or close review flow
        console.log('InAppReview in android', hasFlowFinishedSuccessfully);

        // when return true in ios it means review flow lanuched to user.
        console.log(
          'InAppReview in ios has lanuched successfully',
          hasFlowFinishedSuccessfully,
        );

        // 1- you have option to do something ex: (navigate Home page) (in android).
        // 2- you have option to do something,
        // ex: (save date today to lanuch InAppReview after 15 days) (in android and ios).

        // 3- another option:
        if (hasFlowFinishedSuccessfully) {
          // do something for ios
          // do something for android
        }

        // for android:
        // The flow has finished. The API does not indicate whether the user
        // reviewed or not, or even whether the review dialog was shown. Thus, no
        // matter the result, we continue our app flow.

        // for ios
        // the flow lanuched successfully, The API does not indicate whether the user
        // reviewed or not, or he/she closed flow yet as android, Thus, no
        // matter the result, we continue our app flow.
      })
      .catch((error) => {
        //we continue our app flow.
        // we have some error could happen while lanuching InAppReview,
        // Check table for errors and code number that can return in catch.
        console.log(error);
      });



  }
  const schedule = () => {
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      title: "My Notification Title",
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + 10 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    });
    // PushNotification.setApplicationIconBadgeNumber(1);

    PushNotification.getApplicationIconBadgeNumber(function (count) {
      console.log('get badge : ' + count);
      count++;

      push.setApplicationIconBadgeNumber(function () {
        console.log('set badge : ' + count);
      }, function () {
        console.log('set badge error');
      }, count);

    }, function () {
      console.log('get badge error');
    });
  }


  const listOfPost = (val, nextPage) => {
    requestPostBodyFalseNextPage(val, nextPage)
      .then((json) => { setData(data.concat(json.items)); setNextPage(json.nextPageToken) })
      .catch((error) => console.error(error))
      .finally(() => setIsEndLoading(false),
        data.map((data) => {
          console.log(data.title);
        }),
        mydatta = data);
  }

  const getPost = () => {

    requestPostBodyFalse(pages)
      .then((json) => { setData(json.items); setNextPage(json.nextPageToken) })
      .catch((error) => console.error(error))
      .finally(() => setIsEndLoading(false),
        data.map((data) => {
          console.log(data);
        }),
        mydatta = data);



    /* O N E S I G N A L   S E T U P */
    console.log("isempty");
    console.log("Hello world");

    OneSignal.setAppId("9d6dd9ea-79f5-4353-b090-02429b4d1f82");
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(false);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log("Prompt response:", response);
    });

    /* O N E S I G N A L  H A N D L E R S */
    OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
      console.log("OneSignal: notification will show in foreground:", notifReceivedEvent);
      let notif = notifReceivedEvent.getNotification();

      const button1 = {
        text: "Cancel",
        onPress: () => { notifReceivedEvent.complete(); },
        style: "cancel"
      };

      const button2 = { text: "Complete", onPress: () => { notifReceivedEvent.complete(notif); } };

      Alert.alert("Complete notification?", "Test", [button1, button2], { cancelable: true });
    });
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log("OneSignal: notification opened:", notification);
    });
    OneSignal.setInAppMessageClickHandler(event => {
      console.log("OneSignal IAM clicked:", event);
    });
    OneSignal.addEmailSubscriptionObserver((event) => {
      console.log("OneSignal: email subscription changed: ", event);
    });
    OneSignal.addSubscriptionObserver(event => {
      console.log("OneSignal: subscription changed:", event);
      //  this.setState({ isSubscribed: event.to.isSubscribed })

      setSubscribed(event.to.isSubscribed);
    });
    OneSignal.addPermissionObserver(event => {
      console.log("OneSignal: permission changed:", event);
    });

    const deviceState = OneSignal.getDeviceState();

    console.log("device token");
    console.log(deviceState);
    //  this.setState({
    //      isSubscribed : deviceState.isSubscribed
    //  });
    setSubscribed(deviceState.subscribed);

  }
  getData = async () => {
    const apiURL = "https://jsonplaceholder.typicode.com/photos?limit=10&_page=1";

    fetch(apiURL).then((res) => res.json()).then((resJson) => {
      setDatas(resJson);
    })
  }
  const lapsList = () => {

    return data.map((data) => {
      return (

        // <ScrollView style={{ flex: 1 }}>
        //   <HTML source={{ html: data }} contentWidth={contentWidth} />
        // </ScrollView>
        //  <View><Text>{data.title}</Text></View>
        // <PostBodyWithoutBody></PostBodyWithoutBody>
        <PostBodyWithoutBody data={data}></PostBodyWithoutBody>
      )
    })
    // return todos.map((data) => {
    //   <View><Text>{data.title}</Text></View>

    //   console.log(data.title);
    //   // <PostBodyWithoutBody></PostBodyWithoutBody>
    // });
  }

  const listss = (data) => {
    return (

      // <ScrollView style={{ flex: 1 }}>
      //   <HTML source={{ html: data }} contentWidth={contentWidth} />
      // </ScrollView>
      //  <View><Text>{data.title}</Text></View>
      // <PostBodyWithoutBody></PostBodyWithoutBody>
      <PostBodyWithoutBody data={data.item}></PostBodyWithoutBody>
    )

    // return todos.map((data) => {
    //   <View><Text>{data.title}</Text></View>

    //   console.log(data.title);
    //   // <PostBodyWithoutBody></PostBodyWithoutBody>
    // });
  }
  const mylistss = ({ item }) => {
    return (
      <View style={styles.itemRow}>
        <Image source={{ uri: item.url }} style={styles.itemImage} />
        <Text Style={styles.itemText}>{item.title}</Text>
      </View>
    )
  }
  const customTheme = {
    SIZES: { BASE: 18, },
    // this will overwrite the Galio SIZES BASE value 16
    COLORS: { PRIMARY: 'red', }
    // this will overwrite the Galio COLORS PRIMARY color #B23AFC
  };
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const handleLoadMore = () => {
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    console.log(nextPage);
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    console.log("handleLoadMore {} called");
    console.log("current pages " + pages);

    if (nextPage == undefined || nextPage == '') {
      Toast.show({
        text: 'No more post...'
      })
    } else {
      Toast.show({
        text: 'Please take breath...'
      })
      console.log("current new pages " + pages);
      setIsEndLoading(true);
      listOfPost(pages, nextPage)
    }
    // setPages(pages + 10);

  }
  const renderFooter = () => {
    return (
      isEndLoading ?
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View> : null
    );
  }
  return (

    <SafeAreaView style={styles.container}>

      <FlatList
        data={data}
        renderItem={listss}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.01}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b2bec3"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
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



// <View style={styles.container}>
// <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
// <Text style={{ color: colors.text }}>Home Screen</Text>
// {/* <Button
//   title="Go to details screen"
//   onPress={() => navigation.navigate("Details")}
// /> */}

// <Button
//   title="Go to details screen"
//   onPress={getPost}
// />

// {/* { data.items.map(post => {
//   return (
//     <li>{post.title}</li>
//     //   <ScrollView style={{ flex: 1 }}>
//     //   <HTML source={{ html:  }} contentWidth={contentWidth} />
//     // </ScrollView>
//   )
// })} */}

// {/* {mydatta.map(data => (
//   {

//   }
// ))} */}
// {lapsList()}

// </View >