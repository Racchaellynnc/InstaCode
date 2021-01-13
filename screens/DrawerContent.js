import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Avatar,
    Title,
    Caption, 
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

Icon.loadFont();

export function DrawerContent(props) {

    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
    }

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', alignSelf:'center', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://i.postimg.cc/cJ7MFgpX/IMG-2410.png'
                                }}
                                size={125}
                            />
                        </View>
                        <View style={{alignItems:'center', alignSelf:'center', flexDirection: 'column'}}>
                            <Title style={styles.title}>Damian C</Title>
                            <Caption style={styles.caption}>@damiancodes</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.section]}>999</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.section]}>23.7k</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('home')}}
                         />
                        <DrawerItem
                            icon={({color, size}) => (
                            <Icon
                                name="mail-outline"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Messages"
                            onPress={() => {props.navigation.navigate('messages')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                            <Icon
                                name="map-outline"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Explore"
                            onPress={() => {props.navigation.navigate('explore')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="person-circle-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="ios-settings"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('settings')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={{justifyContent: "flex-end", display: "flex" }} title="Preferences">
                        <TouchableRipple onPress={() =>{toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Mode</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkMode}/>
                                </View>
                               
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
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
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});


