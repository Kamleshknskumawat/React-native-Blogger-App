import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Badge } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";
import { Platform } from 'react-native';
import Share from 'react-native-share';
export default function PostBodyWithoutBody(props) {
    const contentWidth = useWindowDimensions().width;
    const navigation = useNavigation();
    const tagSearch = (arg) => {
        //console.log("tagSearch : " + arg);
    }
    share = () => {
        console.log("Whatapp Share");
        const shareOptions = {
            title: 'Share via',
            message: props.data.title,
            url: props.data.url,
            social: Share.Social.WHATSAPP,
            whatsAppNumber: "9199999999",  // country code + phone number
            filename: 'test', // only for base64 file in Android
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
        console.log("onPresss");
    }
    shareSC = () => {
        console.log("Snapchat Share");
        const shareOptions = {
            title: 'Share via',
            message: props.data.title,
            url: props.data.url,
            social: Share.Social.SNAPCHAT,
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
        console.log("onPresss");
    }
    shareIG = () => {
        console.log("IG Share");
        const shareOptions = {
            title: 'Share via',
            message: props.data.title,
            url: props.data.url,
            social: Share.Social.INSTAGRAM_STORIES,
            backgroundBottomColor: '#fefefe',
            backgroundTopColor: '#906df4',
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
        console.log("onPresss");
    }
    shareFB = () => {
        console.log("Facebook Share");
        const shareOptions = {
            message: props.data.title,
            url: props.data.url,
            backgroundBottomColor: '#fefefe',
            backgroundTopColor: '#906df4',
            appId: '219376304', //facebook appId
            social: Share.Social.FACEBOOK
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
        console.log("onPresss");
    }
    shareTwitter = () => {
        console.log("ShareTwitter Share");
        const shareOptions = {
            message: props.data.title,
            url: props.data.url,
            method: Share.Social.TWITTER,
            social: Share.Social.TWITTER
        };
        Share.shareSingle(shareOptions)
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
        console.log("onPresss");
    }
    onPresss = () => {
        console.log("onPress");
        var arg = "Title kamlesh"
        navigation.navigate('PostWithId', { screenName: "Title kamlesh" })
    }
    // const items = props.data.label.map(function (item) {
    //     return <li> {item} </li>;
    // });
    const getLabals = () => {
        if (props.data.labels) {
            return props.data.labels.map((number) => {
                return (<Badge style={{ margin: 5, padding: 5 }} onPress={tagSearch(number)} >
                    <Text >{number}</Text>
                </Badge>
                )
            }
            )
        }
    }


    // const listItems = () => {

    //     return props.labels.map((data) => {
    //         return (

    //             // <ScrollView style={{ flex: 1 }}>
    //             //   <HTML source={{ html: data }} contentWidth={contentWidth} />
    //             // </ScrollView>
    //             //  <View><Text>{data.title}</Text></View>
    //             // <PostBodyWithoutBody></PostBodyWithoutBody>
    //             <Text>{data}</Text>
    //         )
    //     })
    // return todos.map((data) => {
    //   <View><Text>{data.title}</Text></View>

    //   console.log(data.title);
    //   // <PostBodyWithoutBody></PostBodyWithoutBody>
    // });
    // }
    return (

            <Content style={{ margin: 5, padding: 5 }}>
                <Card >
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: "https:"+props.data.author.image.url }} />
                            <Body>
                                <Text>{props.data.author.displayName}</Text>
                                <Text note>{props.data.published}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>

                        <Body>
                            <CardItem  >
                                <TouchableOpacity
                                    onPress={onPresss}
                                >
                                    <Text onPress={() => navigation.navigate('PostWithId', { screenName: props.data.title, id: props.data.id })} >{props.data.title} </Text>

                                </TouchableOpacity>

                            </CardItem>
                            <Image source={{ uri: 'Image URL' }} style={{ height: 20, width: 10}} />

                            <ScrollView >
                                <HTML  source={{ html: props.data.content !== undefined ? `~${props.data.content}` : props.data.title }} contentWidth={contentWidth} />
                            </ScrollView>
                            {/*   <Text note>{props.data.content !== undefined ? props.data.content : props.data.title}</Text> */}
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            {getLabals()}
                            {/* <Badge>
                                <Text onPress={tagSearch}>{getLabals()}</Text>
                            </Badge> */}
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Button transparent onPress={shareFB} textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-facebook" />

                            </Button>
                            <Button transparent onPress={shareIG} textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-instagram" />

                            </Button>
                            <Button transparent onPress={shareTwitter} textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-twitter" />
                            </Button>
                            <Button transparent onPress={shareSC} textStyle={{ color: '#87838B' }} >
                                <Icon name="logo-snapchat" />
                            </Button>
                            <Button transparent onPress={share} textStyle={{ color: '#87838B' }} >
                                <Icon name="logo-whatsapp" />
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
      
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});