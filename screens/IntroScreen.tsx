import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface Props {
    val: string;
    iconStyles: any;
    navigation: any;
    text?: StyleProp<TextStyle>;
    action?: StyleProp<ViewStyle>;
    footer?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    header?: StyleProp<TextStyle>;
    textInput?: StyleProp<TextStyle>;
  }

import LinearGradient from 'react-native-linear-gradient';
Icon.loadFont();

const IntroScreen: React.FC<Props> = (props, navigation): JSX.Element =>{
    return (
     <View style={styles.container} >
         <LinearGradient
            colors={['#3DCC8E', '#00C68E', '#03B898']}
            style={{flex: 1}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
       <View style={styles.header}>
            <Animatable.Image 
                animation="fadeInUp"
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
       </View>
       <Animatable.View style={styles.footer} animation="fadeInUpBig" blurRadius={1}>
            <Text style={styles.title} > Fight Climate Change With Us</Text>
            <Text style={styles.text} >Keep track of your trees with a Customizable Map, See where other people plant trees, earn donations and/or donate to others. </Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={() => {props.navigation.navigate('SignInScreen')}}>
                <LinearGradient 
                    colors={['#fff', '#eee']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>
                        START NOW
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
       </Animatable.View>
       </LinearGradient>
     </View>
    );
  };

export default IntroScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.22;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#3dcc8e'
    },
    header: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        alignItems: 'center',
        paddingVertical: 40,
        // backgroundColor: '#d6d6d6a9',
        // borderRadius: 14,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        alignItems: 'center',
        color: '#4a4a4a',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'HelveticaNeue-Light',
        fontWeight: '400',
        marginBottom: 10
    },
    text: {
        alignItems: 'center',
        color: 'white',
        width: '80%',
        marginTop: 30,
        textAlign: 'center',
        fontSize: 19
    },
    button: {
        alignItems: 'center',
        marginTop: 97,
        shadowColor: '#4a4a4a',
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowOpacity: 1,
    },
    signIn: {
        width: 333,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    textSign: {
        color: '#03b898',
        fontWeight: '500',
        fontSize: 17
    }
  });
