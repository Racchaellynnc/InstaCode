import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import MessagesScreen from './MessagesScreen';
import DrawerContent from './DrawerContent';
import {
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

Icon.loadFont();

interface Props {
  val: string;
  iconStyles: any;
  textHeader?: StyleProp<TextStyle>;
  textFooter?: StyleProp<TextStyle>;
  action?: StyleProp<ViewStyle>;
  footer?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  header?: StyleProp<TextStyle>;
  textInput?: StyleProp<TextStyle>;
}

const MainTabScreen: React.FC<Props> = (props, navigation): JSX.Element => {
    return (
      <Tab.Navigator
        initialRouteName="home"
        activeColor="#4a4a4a"
        style={{ backgroundColor: '#4a4a4a' }}
      >
      <Tab.Screen
        name="home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={'#03B898'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="map-outline" color={'#03B898'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="mail-outline" color={'#03B898'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={'#03B898'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );
}

export default MainTabScreen;

const HomeStackScreen: React.FC<Props> = ({navigation}): JSX.Element => (
  
    <HomeStack.Navigator screenOptions = {
      {
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: "#03B898",
        headerTitleStyle: {
         fontWeight: "bold", 
        }
      }
    }>
         <HomeStack.Screen 
           name="home" 
           component={HomeScreen} 
           options = {{
           title: "Overview",
           headerLeft: () =>(
             <Icon.Button 
                 name="ios-menu" 
                 size={20} 
                 backgroundColor="#fff" 
                 color="#03B898" 
                 onPress={()=>{navigation.openDrawer();}}>
               </Icon.Button>
             )
        }}/>
     </HomeStack.Navigator>
 )
 
 const ProfileStackScreen: React.FC<Props> = (props, navigation): JSX.Element => (
   <ProfileStack.Navigator screenOptions = {
     {
       headerStyle: {
         backgroundColor: '#FAD7DB',
       },
       headerTintColor: "#03B898",
       headerTitleStyle: {
         fontWeight: "bold", 
        }
     }}>
        <ProfileStack.Screen 
         name="profile" 
         component={ProfileScreen} 
         options = {{
         title: "Your Profile",
           headerLeft: () =>(
             <Icon.Button 
                 name="ios-menu" 
                 size={20} 
                 backgroundColor="#FAD7DB" 
                 color="#03B898" 
                 onPress={()=>{navigation.openDrawer();}}>
               </Icon.Button>
             )
        }}/>
    </ProfileStack.Navigator>
 )
