import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

// import {
//   View,
//   Text,
//   Button,
// } from 'react-native';

interface screenProps {
  screenOptions: any,
}
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
   <HomeStack.Navigator screenOptions = {
     {
       headerStyle: {
         backgroundColor: '#FAD7DB',
       },
       headerTintColor: "#15A290",
     }
   }>
        <HomeStack.Screen name="home" component={HomeScreen} options = {{
          title: "Overview",
          headerLeft: () =>(
            <Icon.Button name="ios-menu" size={20} backgroundColor="#FAD7DB" color="#15A290" onPress={()=>{navigation.openDrawer();}}></Icon.Button>
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
    }}>
       <ProfileStack.Screen name="profile" component={ProfileScreen} />
   </ProfileStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="home" component={HomeStackScreen} />
        <Drawer.Screen name="profile" component={ProfileStackScreen} />
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
};


export default App;
