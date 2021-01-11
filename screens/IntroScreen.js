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
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
Icon.loadFont();

const IntroScreen = ({navigation}) => {
    return (
     <View style={styles.container} >
       <View style={styles.header}>
            <Animatable.Image 
                animation="fadeInUp"
                source={require('../assets/my-logo.png')}
                style={styles.logo}
            />
       </View>
       <Animatable.View style={styles.footer} animation="fadeInUpBig" delay="7000">
            <Text style={styles.title} > Plant Trees With Us </Text>
            <Text style={styles.text} >Sign In to your account </Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                <LinearGradient 
                    colors={['white', '#fbdbf3']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>
                        Get Started
                    </Text>
                    <Icon
                        name="arrow-forward-outline"
                        color="#00696A"
                        size={22}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
       </Animatable.View>
     </View>
    );
  };

export default IntroScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FBDBF3'
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 73,
        margin: 20,
        shadowColor: '#d1c2cd',
        shadowRadius: 9,
        shadowOpacity: 1,
        borderRadius: 10,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        alignItems: 'center',
        letterSpacing: 1,
        color: '#333',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'HelveticaNeue-Light',
        fontWeight: '300',
        marginBottom: 10
    },
    text: {
        alignItems: 'center',
        color: 'grey',
        marginTop: 5,
        fontSize: 17
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: '#00696A',
        fontWeight: 'bold'
    }
  });
