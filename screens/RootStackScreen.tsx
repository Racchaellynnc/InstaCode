import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from './IntroScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

interface Props {
    navigation: any;
    RootStackScreen: any;
  }

const RootStackScreen: React.FC<Props> = (props) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="IntroScreen" component={IntroScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;