import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './screens/ProfileScreen';
import RootStackScreen from './screens/RootStackScreen';
const Drawer = createDrawerNavigator();

interface Props {
  navigation: any;
  RootStackScreen: any;
}

const App: React.FC<Props> = (props) => {
  return (
    <NavigationContainer>
      <RootStackScreen navigation={props.RootStackScreen}/>
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent { ...props } />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="profile" component={ProfileScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};


export default App;
