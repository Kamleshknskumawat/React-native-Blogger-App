
import { View, StyleSheet, ImageBackground, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Container, Button, Header, Left, Body, Right, Title, Subtitle, Content, Thumbnail, Text, Card, CardItem, Icon,List, ListItem  } from 'native-base';
import { openInBrowser } from '_utils/bloggerUtils';
import { requestGithubUser } from '_bloggerapi/api';
const URL = require('../../constants/blogger');

const ContactUsScreen = ({ navigation }) => {
    const [data, setData] = useState();
    const [isEndLoading, setIsEndLoading] = useState(false);
    useEffect(() => {

        if (data == undefined) {
            setIsEndLoading(true)

            requestGithubUser()
                .then((json) => setData(json))
                .catch((error) => console.error(error))
                .finally(() => setIsEndLoading(false));

        }

        if (data != undefined) {
            navigation.setOptions({
                title: data.login
            })
        }
    });

    const loading = () => {
        return (
            isEndLoading ?
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View> : null
        );
    }
   
    const githubData = () => {
        return (
            data ?
                <Container>
                    <ImageBackground
                        source={{ uri: data.avatar_url }}
                        style={styles.container} blurRadius={2}>
                        <View style={styles.overlay}></View>

                        <Image source={{ uri: data.avatar_url }}
                            style={styles.avatarStyle} />

                    </ImageBackground>
                    <CardItem>
                        <Left>
                            <Button transparent onPress={() => openInBrowser(data.html_url)} >
                                <Icon active name="thumbs-up" />
                                <Text> {data.followers} followers </Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent onPress={() => openInBrowser(data.html_url)} >
                                <Icon active name="skull-outline" />
                                <Text>{data.following}   following</Text>
                            </Button>
                        </Body>

                    </CardItem>
                    {/* <Icon active name="person-outline" onPress={() => openInBrowser(data.html_url)} style={styles.textRowTitle}>
                        <Text>  {data.followers} followers .  {data.following} following . {data.public_repos} Repo</Text>
                    </Icon> */}
                    <Icon active name="person-outline" onPress={() => openInBrowser(data.html_url)} style={styles.textRow}>
                        <Text>  {data.login} </Text>
                    </Icon>
                    <Icon active name="egg-outline" style={styles.textRow}>
                        <Text>  {data.bio} </Text>
                    </Icon>
                    <Icon active name="business-sharp" style={styles.textRow}>
                        <Text>  {data.company} </Text>
                    </Icon>
                    <Icon active name="location-outline" style={styles.textRow}>
                        <Text> {data.location} </Text>
                    </Icon>

                    <Icon active name="link" onPress={() => openInBrowser(data.blog)} style={styles.textRow}>
                        <Text>  {data.blog} </Text>
                    </Icon>

                    <Icon active name="mail-outline" style={styles.textRow} >
                        <Text>  {data.email} </Text>
                    </Icon>
                    <Icon active name="logo-twitter" onPress={() => openInBrowser(URL.BASE_URL_TWITTER + data.twitter_username)} style={styles.textRow}>
                        <Text>  {data.twitter_username}</Text>
                    </Icon>


                    {/* <Card>
                <CardItem>
                    <Icon active name="logo-twitter" />
                    <Text>Twitter</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="mail-outline" />
                    <Text>E-Mail</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="logo-github" />
                    <Text>Github</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="location-outline" />
                    <Text>Location</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="globe-outline" />
                    <Text>Website</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
            </Card> */}
                </Container> : null
        );
    }
    return (
        <Container>
            {loading()}
            { githubData()}
        </Container>
    );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 5,
        height: 40,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'transparent'
    },
    text: {
        alignItems: "center",
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'transparent',
        opacity: 0.6
    },
    avatarStyle: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textStyle: {
        marginTop: 10,
        fontSize: 18,
        color: "#2d3436",
        fontWeight: 'bold',
        paddingLeft: 10
    },
    textRow: {
        paddingLeft: 10,
        marginTop: 5,
    },
    textRowTitle: {

        color: "#2d3436",
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },
    balanceContainer: {
        padding: 10,
    },
    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
