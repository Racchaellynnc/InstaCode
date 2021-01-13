import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import MessagesScreen from './MessagesScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

Icon.loadFont();

const MainTabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName="home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
      <Tab.Screen
        name="home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FAD7DB',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={'#15A290'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#FAD7DB',
          tabBarIcon: ({ color }) => (
            <Icon name="map-outline" color={'#15A290'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarColor: '#FAD7DB',
          tabBarIcon: ({ color }) => (
            <Icon name="mail-outline" color={'#15A290'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#FAD7DB',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={'#15A290'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );
}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions = {
      {
        headerStyle: {
          backgroundColor: '#FAD7DB',
        },
        headerTintColor: "#15A290",
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
                 backgroundColor="#FAD7DB" 
                 color="#15A290" 
                 onPress={()=>{navigation.openDrawer();}}>
               </Icon.Button>
             )
        }}/>
     </HomeStack.Navigator>
 )
 
 const ProfileStackScreen = ({navigation}) => (
   <ProfileStack.Navigator screenOptions = {
     {
       headerStyle: {
         backgroundColor: '#FAD7DB',
       },
       headerTintColor: "#15A290",
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
                 color="#15A290" 
                 onPress={()=>{navigation.openDrawer();}}>
               </Icon.Button>
             )
        }}/>
    </ProfileStack.Navigator>
 )
