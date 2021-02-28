import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView,View } from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Badge } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";
export default function PostBodyWithoutBodyId(props) {
    const contentWidth = useWindowDimensions().width;

    const navigation = useNavigation();
    function getPost(arg) {
        console.log("Hello world" + arg);
    }
    const tagSearch = (arg) => {
        console.log("tagSearch : " + arg);
    }
    const share = () => {
        console.log("Share");
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
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>

                    <ScrollView >
                        <HTML source={{ html: props.data.content !== undefined ? `${props.data.content}` : props.data.title }} contentWidth={contentWidth} />
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});