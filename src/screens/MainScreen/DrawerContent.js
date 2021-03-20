import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, tatusBar, SafeAreaView, Share, Alert } from 'react-native';

import {
    Avatar,
    Caption,
    Drawer, Paragraph,
    ToggleButton,
    Switch, Text, Title,
    TouchableRipple, useTheme
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api, { requestGetUser } from '_bloggerapi/api';
import { logout } from '_actions/UserActions';
import { AuthContext } from './context';
import MMKVStorage from "react-native-mmkv-storage";
import { useDispatch } from 'react-redux';
import { rattingLink,rattingUs } from '_utils/bloggerUtils';

export function DrawerContent(props) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const MMKV = new MMKVStorage.Loader().initialize();
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(logout());
    };
    const onShare = async () => {
        try {

            const userInfo = await MMKV.getStringAsync("userInfo");
            console.log(userInfo);
            if (userInfo == 'undefined' || userInfo == "" || userInfo === null) {
                console.log("inside");
                requestGetUser()
                    .then((json) => setData(json))
                    .catch((error) => console.error(error))
                    .finally(() => setLoading(false));
                if (data.length > 0) {
                    console.log(data);
                    await MMKV.setStringAsync("userInfo", data);
                }

            } else {

            }

            const result = await Share.share({
                message:
                    'React Native Blogger API By Kumawat Team - ' + 'https://play.google.com/store/apps/details?id=com.way2love',
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
    const ratting = () => {
        rattingLink();
        rattingUs();
    }

    // useEffect(() => {
    //     requestTitle()
    //         .then((json) => setData(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));



    // useEffect(() => {
    //     requestPages(5)
    //         .then((json) => setData(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));

    // useEffect(() => {
    //     requestPostBodyFalse(5)
    //         .then((json) => setData(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));

    // useEffect(() => {
    //     requestPostSeach("Codeigniter")
    //         .then((json) => setData(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));


    //         useEffect(() => {
    //             requestPageById("9160487002978749815")
    //                 .then((json) => setData(json))
    //                 .catch((error) => console.error(error))
    //                 .finally(() => setLoading(false));


    // }, []);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>{data.length > 0 ? data : "Kns"}</Title>
                                <Caption style={styles.caption}>@{data.length > 0 ? data : "Kns"}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        /> */}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                        />
                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('SettingsScreen') }}
                        /> */}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="google-maps"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Contact Us"
                            onPress={() => { props.navigation.navigate('ContactUsScreen') }}
                        />
                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="message-alert-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Feedback"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        /> */}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="share-variant"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Share Us"
                            onPress={() => { onShare() }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="star"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Ratting us"
                            onPress={ratting}
                        />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: '#718093',
    },
    caption: {
        fontSize: 15,
        lineHeight: 14,
        color: '#718093',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
