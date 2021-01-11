import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Platform
} from 'react-native';

Icon.loadFont();

const SignInScreen = () => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    
    return (
     <View style={styles.container} >
        <View style={styles.header} >
            <Text style={styles.text_header} > Help save the world by planting trees <Icon name="earth-outline" size={30} /></Text>
        </View>
        <View style={styles.footer} >
            <Text style={styles.text_footer} >Email</Text>
            <View style={styles.action}>
                <Icon
                    name="mail-outline"
                    size={20}
                />
                <TextInput
                    placeholder="Your email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                { data.check_textInputChange ? 
                <Icon
                    name="checkmark-circle-outline"
                    style={styles.icon}
                    color="#009387"
                    size={25}
                />
                : null }
            </View>
            <Text style={[styles.text_footer, {marginTop: 35}]} > Password </Text>
            <View style={styles.action}>
                <Icon
                    name="lock-closed-outline"
                    size={20}
                />
                <TextInput
                    placeholder="Your password"
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <Icon
                    name="eye-off-outline"
                    style={styles.icon}
                    color="#009387"
                    size={25}
                />
            </View>
        </View>
     </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

  export default SignInScreen;