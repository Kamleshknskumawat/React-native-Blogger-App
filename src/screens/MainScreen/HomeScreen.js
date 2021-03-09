import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";
import { Image } from 'react-native';
import api, { requestPages, requestPostBodyFalse, requestPostById, requestPostSeach, requestTitle, requestPageById, requestPostBodyTrue } from '_bloggerapi/api';
import PostBodyWithoutBody from './PostBodyWithoutBody';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import OneSignal from 'react-native-onesignal';
import Rate, { AndroidMarket } from 'react-native-rate'
import PushNotification from "react-native-push-notification";
import MMKVStorage from "react-native-mmkv-storage";
const MMKV = new MMKVStorage.Loader().initialize();
const HomeScreen = ({ navigation }) => {
  const contentWidth = useWindowDimensions().width;
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [subscribed, setSubscribed] = useState();
  const [isSubscribed, setTodos] = useState([
    {
      id: 1,
      title: 'This is first list'
    },
    {
      id: 2,
      title: 'This is second list'
    },
    {
      id: 3,
      title: 'This is third list'
    },
  ]);
  const [todoss, setTodoss] = useState(
    {
      id: 1,
      title: 'This is first list'
    }
  );
  let mydatta = [];
  const theme = useTheme();
  useEffect(() => {

    console.log("received");
    console.log(data);
    if (data == undefined || data == '') {

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

  const getPost = () => {


    /* O N E S I G N A L   S E T U P */
    console.log("isempty");
    console.log("Hello world");
    requestPostBodyFalse(10)
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false),
        data.map((data) => {
          console.log(data.title);
        }),
        mydatta = data);
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

      setData({ isSubscribed: event.to.isSubscribed });
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
    setSubscribed(deviceState.isSubscribed);

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
  const customTheme = {
    SIZES: { BASE: 18, },
    // this will overwrite the Galio SIZES BASE value 16
    COLORS: { PRIMARY: 'red', }
    // this will overwrite the Galio COLORS PRIMARY color #B23AFC
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>


          <Button success onPress={getPost}><Text> Go to details screen </Text></Button>
          <Button success onPress={getNotification}><Text> Notification </Text></Button>
          <Button success onPress={schedule}><Text> schedule </Text></Button>
          <Button onPress={() => {
            const options = {
              AppleAppID: "2193813192",
              GooglePackageName: "com.way2love",
              AmazonPackageName: "com.way2love",
              OtherAndroidURL: "https://play.google.com/store/apps/details?id=com.way2love",
              preferredAndroidMarket: AndroidMarket.Google,
              preferInApp: false,
              openAppStoreIfInAppFails: true,
              fallbackPlatformURL: "https://way2love-15416.web.app/",
            }
            Rate.rate(options, success => {
              if (success) {
                Alert.alert("Thank You for Giving Me Your Valuable Time");
              }
            })
          }} ><Text>Goto</Text></Button>


        </View>
        {lapsList()}
      </ScrollView>
    </SafeAreaView>
    // <PostBodyWithoutBody data={todoss}></PostBodyWithoutBody>

    // <Container>
    //   <Header />
    //   <Content>
    //     <Card style={{ flex: 0 }}>
    //       <CardItem>
    //         <Left>
    //           <Thumbnail source={{ uri: 'Image URL' }} />
    //           <Body>
    //             <Text>NativeBase</Text>
    //             <Text note>April 15, 2016</Text>
    //           </Body>
    //         </Left>
    //       </CardItem>
    //       <CardItem>
    //         <Body>
    //           <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
    //           <Text>
    //             //Your text here
    //             </Text>
    //         </Body>
    //       </CardItem>
    //       <CardItem>
    //         <Left>
    //           <Button transparent textStyle={{ color: '#87838B' }}>
    //             <Icon name="logo-github" />
    //             <Text>1,926 stars</Text>
    //           </Button>
    //         </Left>
    //       </CardItem>
    //     </Card>
    //   </Content>
    //   {/* <Button
    //     title="Go to details screen"
    //     onPress={getPost}
    //   /> */}
    //   <Button success  onPress={getPost}><Text> Go to details screen </Text></Button>
    // </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b2bec3"
  },
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